import { LINKS, OFFICIAL_PROFILES } from "./vars";

function isAboutPacoca(text: string){
    return text.toLowerCase().includes("paçoca") || text.toLowerCase().includes("pacoca") || text.toLowerCase().includes("você") || text.toLowerCase().includes("voce")
    || text.toLowerCase().includes("te")
}

export function isHelloMessgae(text: string): boolean {
    const mensagens = ["ola", "olá", "oi", "bom dia", "boa tarde", "boa noite"];
    const textoLower = text.toLowerCase();
    return mensagens.some(m => {
        const regex = new RegExp(`\\b${m}\\b`, "i"); // \b = limite de palavra
        return regex.test(textoLower);
    });
}

export function isAboutCreator(text: string): boolean{
    return isAboutPacoca(text) &&
    (text.toLowerCase().includes("quem criou") || text.toLowerCase().includes("criador") || text.toLowerCase().includes("te criou"))
}

export function isAboutTecnologies(text: string): boolean{
    return isAboutPacoca(text) &&
    (text.toLowerCase().includes("tecnologias"))
}

export function isAboutLinks(text: string): boolean{
    return isAboutPacoca(text) &&
    (text.toLowerCase().includes("links") || text.toLowerCase().includes("link"))
}

export function isAboutOneLink(text: string): boolean{
    return Object.keys(LINKS).some(key => text.toLowerCase().includes(key.toLowerCase()));
}

export function isAboutprofiles(text: string): boolean{
    return Object.keys(OFFICIAL_PROFILES).some(key => text.toLowerCase().includes(key.toLowerCase()));
}