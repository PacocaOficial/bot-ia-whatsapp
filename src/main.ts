import { Client, LocalAuth, Message } from 'whatsapp-web.js';
import qrcode from 'qrcode-terminal';
import 'dotenv/config';
import fetch from 'node-fetch';
import { AI_API_URL } from './vars';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Inicializa o cliente do WhatsApp
const client = new Client({
    authStrategy: new LocalAuth()
});

// Gera o QRCode no terminal
client.on('qr', (qr: string) => {
    qrcode.generate(qr, { small: true });
});

// Loga quando estiver pronto
client.on('ready', () => {
    console.log('Bot está pronto!');
});

// Quando receber uma mensagem
client.on('message', async (msg: Message) => {
    try {
        const chat = await msg.getChat();
        const contact = await msg.getContact();
        const name = contact.pushname || 'Usuário';
        const firstName = name.split(" ")[0];

        await chat.sendStateTyping();

        if (isMensagemOla(msg.body) && msg.from.endsWith('@c.us')) {
            await client.sendMessage(msg.from, `Olá! ${firstName}! \nSou o Paçoca AI, como posso te ajudar hoje?`);
        } else {
            const response = await processarComIA(msg.body, firstName);
            await msg.reply(response);
        }
    } catch (err) {
        console.error("Erro ao processar mensagem:", err);
        await msg.reply("⚠️ Ocorreu um erro ao processar sua mensagem.");
    }
});

function isMensagemOla(text: string): boolean {
    const mensagens = ["ola", "olá", "oi", "bom dia", "boa tarde", "boa noite"];
    return mensagens.includes(text.toLowerCase());
}

// Função para processar a IA
async function processarComIA(text: string, name: string): Promise<string> {
    const controller = new AbortController();

    const response: any = await fetch(`${AI_API_URL}/chat`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "text/plain"
        },
        signal: controller.signal,
        body: JSON.stringify({ content: text, user: { name } })
    });

    if (!response.ok || !response.body) {
        let errorText = `Erro ${response.status}`;
        
        try {
            const errorJson: any = await response.json();
            if (errorJson && typeof errorJson === 'object') {
                errorText += `: ${errorJson['detail'] || "Erro desconhecido"}`;
            } else {
                errorText += ": Erro ao processar a resposta";
            }
        } catch (error) {
            errorText += ": Erro ao tentar processar a resposta JSON";
        }

        throw new Error(errorText);
    }

    const finalText = await response.text();
    return finalText;
}


client.initialize();
