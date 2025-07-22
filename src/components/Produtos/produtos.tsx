import { v4 as uuidv4 } from 'uuid';

import capotaMaritima from "../../assets/produtos/lp1.png"
import santoAntonio from "../../assets/produtos/lp2.png"
import barraTeto from "../../assets/produtos/lp3.png"
import estriboLateral from "../../assets/produtos/lp4.png"
import engate from "../../assets/produtos/lp5.png"
import protetorDeCarter from "../../assets/produtos/lp6.png"
import bolaKitInox from "../../assets/produtos/lp7.png"
import protetorDeCacamba from "../../assets/produtos/lp8.png"

import radioMP3 from "../../assets/produtos/ls1.png"
import altoFalante from "../../assets/produtos/ls2.png"
import subwooferSLim from "../../assets/produtos/ls3.png"
import mp5 from "../../assets/produtos/ls4.png"
import centralMultimidia from "../../assets/produtos/ls5.png"
import monitorAcoplavel from "../../assets/produtos/ls6.png"
import chicoteDeLigacao from "../../assets/produtos/ls7.png"

import cameraDeRe from "../../assets/produtos/lm1.png"
import alarmes from "../../assets/produtos/lm2.png"
import frisos from "../../assets/produtos/lm3.png"
import aeroduto from "../../assets/produtos/lm4.png"
import peliculasCortadas from "../../assets/produtos/lm5.png"
import molduras from "../../assets/produtos/lm6.png"
import streamingPlay from "../../assets/produtos/lm7.png"
import farolAuxDeMilha from "../../assets/produtos/lm8.png"
import carregadorPorInducao from "../../assets/produtos/lm9.png"
import caboRCAeCaboY from "../../assets/produtos/lm10.png"
import bandejaDeMala from "../../assets/produtos/lm11.png"
import palhetaDeVidro from "../../assets/produtos/lm12.png"
import receptorDeTV from "../../assets/produtos/lm13.png"
import vidrosEletricos from "../../assets/produtos/lm14.png"
import travaEletrica from "../../assets/produtos/lm15.png"
import acionadorDeFarois from "../../assets/produtos/lm16.png"
import molduraAplique from "../../assets/produtos/lm17.png"
import sensorDeEstacionamento from "../../assets/produtos/lm18.png"
import moduloDeVidro from "../../assets/produtos/lm19.png"
import moduloDeEngate from "../../assets/produtos/lm20.png"
import moduloDeDesbloqueio from "../../assets/produtos/lm21.png"
import lampadaLedSuperLed from "../../assets/produtos/lm22.png"
import antenas from "../../assets/produtos/lm23.png"
import miudezas from "../../assets/produtos/lm24.png"
import apoioDeBraço from "../../assets/produtos/lm25.png"
import tapeteUniversal from "../../assets/produtos/lm26.png"
import calotaUniversal from "../../assets/produtos/lm27.png"
import soleira from "../../assets/produtos/lm28.png"
import retrovisorComCamera from "../../assets/produtos/lm29.png"

export interface Produto {
    id: string;
    nome: string;
    descricao: string;
    compatibilidade: string;
    imagemUrl: string;
    linha: 'Linha Pesada' | 'Linha Sonora' | 'Linha Múltiplos'; 
}

const produtos: Produto[] = [
    /* LINHA PESADA */
    {
        id: uuidv4(),
        nome: "Capota Marítima",
        descricao:"Linha Force Flash Cover",
        compatibilidade: "Para todos os modelos de Picape",
        imagemUrl: capotaMaritima,
        linha: "Linha Pesada",
    },
    {
        id: uuidv4(),
        nome: "Santo Antônio",
        descricao:"Linha Bepo, Keko, Cek",
        compatibilidade: "Para Picape",
        imagemUrl: santoAntonio,
        linha: "Linha Pesada",
    },
    {
        id: uuidv4(),
        nome: "Barra Teto",
        descricao:"Multimarcas",
        compatibilidade: "Para Picape e Suvs",
        imagemUrl: barraTeto,
        linha: "Linha Pesada",
    },
    {
        id: uuidv4(),
        nome: "Estribo Lateral",
        descricao:"Multimarcas",
        compatibilidade: "Para Picape e Suvs",
        imagemUrl: estriboLateral,
        linha: "Linha Pesada",
    },
    {
        id: uuidv4(),
        nome: "Engate",
        descricao:"Multimarcas, Atos, Bruck. Modelos para 400kg / 700kg / 1000kg / 1500kg",
        compatibilidade: "Todos modelos de carros - Hatch, Sedan, Picape e Suvs",
        imagemUrl: engate,
        linha: "Linha Pesada",
    },
    {
        id: uuidv4(),
        nome: "Protetor de Carter",
        descricao:"Multimarcas",
        compatibilidade: "Todos modelos de carros - Hatch, Sedan, Picape e Suvs",
        imagemUrl: protetorDeCarter,
        linha: "Linha Pesada",
    },
    {
        id: uuidv4(),
        nome: "Bola e Kit Inox",
        descricao:"Multimarcas",
        compatibilidade: "Para todos os modelos de engate",
        imagemUrl: bolaKitInox,
        linha: "Linha Pesada",
    },
    {
        id: uuidv4(),
        nome: "Protetor de Caçamba",
        descricao:"Multimarcas",
        compatibilidade: "Para Picape",
        imagemUrl: protetorDeCacamba,
        linha: "Linha Pesada",
    },
    
    /* LINHA SONORA */
    {
        id: uuidv4(),
        nome: "Rádio MP3",
        descricao:"USB, Sux, Bluetooth, Saída 25W e 50W",
        compatibilidade: "1Din - ISO - 16 VIAS",
        imagemUrl: radioMP3,
        linha: "Linha Sonora",
    },
    {
        id: uuidv4(),
        nome: "Alto Falante",
        descricao:'5"; 6", 6x9" ',
        compatibilidade: "Multimarcas. 2 Vias, Triaxial, Quadriaxial",
        imagemUrl: altoFalante,
        linha: "Linha Sonora",
    },
    {
        id: uuidv4(),
        nome: "Subwoofer Slim Amplificado",
        descricao:"120W e 200W",
        compatibilidade: "Amplificado, fio ou RCA",
        imagemUrl: subwooferSLim,
        linha: "Linha Sonora",
    },
    {
        id: uuidv4(),
        nome: "MP5 e MP8 Player",
        descricao:"Sistema independente, com e sem espelhamento",
        compatibilidade: "4 saídas de som; USB; Aux; Bluetooth",
        imagemUrl: mp5,
        linha: "Linha Sonora",
    },
    {
        id: uuidv4(),
        nome: "Central Multimídia",
        descricao:'7" e 9" 2DIN. Quad Core e Octa Core. 2/32GB - 4/64GB - 6/128GB',
        compatibilidade: "IOS (Car play), Android Auto sem fio, Android 12. Saída Evolution com entrada para chip 4g pré-pago",
        imagemUrl: centralMultimidia,
        linha: "Linha Sonora",
    },
    {
        id: uuidv4(),
        nome: "Monitor Acoplável ANndroid",
        descricao:"Tela Led Android independente",
        compatibilidade: "USB / HDMI / AUX / BT",
        imagemUrl: monitorAcoplavel,
        linha: "Linha Sonora",
    },
    {
        id: uuidv4(),
        nome: "Chicote de Ligação",
        descricao:"Com e sem canbus",
        compatibilidade: "Multimarcas, Fiamon, Movie, Permak",
        imagemUrl: chicoteDeLigacao,
        linha: "Linha Sonora",
    },

    /* LINHA MÚLTIPLOS */
    {
        id: uuidv4(),
        nome: "Câmera de Ré",
        descricao:"Câmera simplificada / AMD / Full HD e 4K",
        compatibilidade: "Todos modelos de veíuclos (consultar disponibilidade)",
        imagemUrl: cameraDeRe,
        linha: "Linha Múltiplos",
    },
    {
        id: uuidv4(),
        nome: "Alarmes",
        descricao:"RÉKeyless / Chave canivete/ Controle Universal",
        compatibilidade: "Sistec, Positron, Outlock",
        imagemUrl: alarmes,
        linha: "Linha Múltiplos",
    },
    {
        id: uuidv4(),
        nome: "Frisos",
        descricao:"Multimarcas com nome cromado e silk",
        compatibilidade: "Tiger / Grid",
        imagemUrl: frisos,
        linha: "Linha Múltiplos",
    },
    {
        id: uuidv4(),
        nome: "Aeroduto",
        descricao:"Para sistema de som",
        compatibilidade: "",
        imagemUrl: aeroduto,
        linha: "Linha Múltiplos",
    },
    {
        id: uuidv4(),
        nome: "Películas Cortadas",
        descricao:"Profissional, nano cerâmica, carbono",
        compatibilidade: "Todos os modelos",
        imagemUrl: peliculasCortadas,
        linha: "Linha Múltiplos",
    },
    {
        id: uuidv4(),
        nome: "Molduras",
        descricao:"Fiamon / Autoplast / Park / UPPERTECH",
        compatibilidade: "",
        imagemUrl: molduras,
        linha: "Linha Múltiplos",
    },
    {
        id: uuidv4(),
        nome: "Streaming Play",
        descricao:"UPPERTECH e WinTech",
        compatibilidade: "Com e sem chip 4g / Processador Snapdragon",
        imagemUrl: streamingPlay,
        linha: "Linha Múltiplos",
    },
    {
        id: uuidv4(),
        nome: "Farol Auxiliar de Milha",
        descricao:"Suits, New Way",
        compatibilidade: "Shocklight Orgus",
        imagemUrl: farolAuxDeMilha,
        linha: "Linha Múltiplos",
    },
    {
        id: uuidv4(),
        nome: "Carregador por Indução",
        descricao:"Naftech",
        compatibilidade: "Todos os modelos",
        imagemUrl: carregadorPorInducao,
        linha: "Linha Múltiplos",
    },
    {
        id: uuidv4(),
        nome: "Cabo RCA e Cabo Y",
        descricao:"Blindados",
        compatibilidade: "TechOne",
        imagemUrl: caboRCAeCaboY,
        linha: "Linha Múltiplos",
    },
    {
        id: uuidv4(),
        nome: "Bandeja de Mala",
        descricao:"Material Resistente",
        compatibilidade: "Todos os modelos",
        imagemUrl: bandejaDeMala,
        linha: "Linha Múltiplos",
    },
    {
        id: uuidv4(),
        nome: "Palheta de Vidro",
        descricao:"Code e TechOne",
        compatibilidade: "10” a 27”",
        imagemUrl: palhetaDeVidro,
        linha: "Linha Múltiplos",
    },
    {
        id: uuidv4(),
        nome: "Receptor de TV para Multimidia",
        descricao:"Digital",
        compatibilidade: "",
        imagemUrl: receptorDeTV,
        linha: "Linha Múltiplos",
    },
    {
        id: uuidv4(),
        nome: "Vidros Elétricos",
        descricao:"Targial e Vários Modelos",
        compatibilidade: "",
        imagemUrl: vidrosEletricos,
        linha: "Linha Múltiplos",
    },
    {
        id: uuidv4(),
        nome: "Trava Elétrica",
        descricao:"Específica e Universal",
        compatibilidade: "",
        imagemUrl: travaEletrica,
        linha: "Linha Múltiplos",
    },
    {
        id: uuidv4(),
        nome: "Acionador de Faróis",
        descricao:"Automatizar Faróis",
        compatibilidade: "",
        imagemUrl: acionadorDeFarois,
        linha: "Linha Múltiplos",
    },
    {
        id: uuidv4(),
        nome: "Moldura Aplique",
        descricao:"Maçaneta; Retrovisor; Faróis e Internos",
        compatibilidade: "",
        imagemUrl: molduraAplique,
        linha: "Linha Múltiplos",
    },
    {
        id: uuidv4(),
        nome: "Sensor de Estacionamento",
        descricao:"Tech / kx3 / Firstoption / UPPERTECH",
        compatibilidade: "",
        imagemUrl: sensorDeEstacionamento,
        linha: "Linha Múltiplos",
    },
    {
        id: uuidv4(),
        nome: "Módulo de Vidro",
        descricao:"Soft / Flexitron / Tury",
        compatibilidade: "",
        imagemUrl: moduloDeVidro,
        linha: "Linha Múltiplos",
    },
    {
        id: uuidv4(),
        nome: "Módulo de Engate",
        descricao:"Zendel / Tury",
        compatibilidade: "",
        imagemUrl: moduloDeEngate,
        linha: "Linha Múltiplos",
    },
    {
        id: uuidv4(),
        nome: "Módulo de Desbloqueio",
        descricao:"Câmera, Vídeo e Acessórios",
        compatibilidade: "",
        imagemUrl: moduloDeDesbloqueio,
        linha: "Linha Múltiplos",
    },
    {
        id: uuidv4(),
        nome: "Lâmpada Led e Super Led",
        descricao:"Todos os encaixes",
        compatibilidade: "",
        imagemUrl: lampadaLedSuperLed,
        linha: "Linha Múltiplos",
    },
    {
        id: uuidv4(),
        nome: "Antenas",
        descricao:"Adaptadores, Antenas Internas e Antenas Tubarão",
        compatibilidade: "",
        imagemUrl: antenas,
        linha: "Linha Múltiplos",
    },
    {
        id: uuidv4(),
        nome: "Miudezas",
        descricao:"Fusíveis e Fita Isolante",
        compatibilidade: "",
        imagemUrl: miudezas,
        linha: "Linha Múltiplos",
    },
    {
        id: uuidv4(),
        nome: "Apoio de Braço",
        descricao:"",
        compatibilidade: "",
        imagemUrl: apoioDeBraço,
        linha: "Linha Múltiplos",
    },
    {
        id: uuidv4(),
        nome: "Tapete Universal",
        descricao:"",
        compatibilidade: "",
        imagemUrl: tapeteUniversal,
        linha: "Linha Múltiplos",
    },
    {
        id: uuidv4(),
        nome: "Calota Universal",
        descricao:"",
        compatibilidade: "",
        imagemUrl: calotaUniversal,
        linha: "Linha Múltiplos",
    },
    {
        id: uuidv4(),
        nome: "Soleira",
        descricao:"",
        compatibilidade: "",
        imagemUrl: soleira,
        linha: "Linha Múltiplos",
    },
    {
        id: uuidv4(),
        nome: "Retrovisor com Câmera Code",
        descricao:"",
        compatibilidade: "",
        imagemUrl: retrovisorComCamera,
        linha: "Linha Múltiplos",
    },
];

export default produtos;