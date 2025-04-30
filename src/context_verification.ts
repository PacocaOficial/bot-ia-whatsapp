import { LINKS, OFFICIAL_PROFILES } from "./vars";

function isAboutPacoca(text: string){
    return text.toLowerCase().includes("paçoca") || text.toLowerCase().includes("pacoca") || text.toLowerCase().includes("você") || text.toLowerCase().includes("voce")
    || text.toLowerCase().includes("te")
}

export function isHelloMessgae(text: string): boolean {
    const mensagens = ["ola", "olá", "oi", "bom dia", "boa tarde", "boa noite"];
    return mensagens.includes(text.toLowerCase());
}

export function isAboutCreator(msg: any): boolean{
    return isAboutPacoca(msg.body) &&
    (msg.body.toLowerCase().includes("quem criou") || msg.body.toLowerCase().includes("criador") || msg.body.toLowerCase().includes("te criou"))
}

export function isAboutTecnologies(msg: any): boolean{
    return isAboutPacoca(msg.body) &&
    (msg.body.toLowerCase().includes("tecnologias"))
}

export function isAboutLinks(msg: any): boolean{
    return isAboutPacoca(msg.body) &&
    (msg.body.toLowerCase().includes("links") || msg.body.toLowerCase().includes("link"))
}

export function isAboutOneLink(msg: any): boolean{
    return Object.keys(LINKS).some(key => msg.body.toLowerCase().includes(key.toLowerCase()));
}

export function isAboutprofiles(msg: any): boolean{
    return Object.keys(OFFICIAL_PROFILES).some(key => msg.body.toLowerCase().includes(key.toLowerCase()));
}