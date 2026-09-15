import { estadoPratica } from "@/PraticaCards";
import { estadoAtividades } from "@/AtividadesCards";

export const materias = [...new Set(estadoAtividades.lista.map(item => item.materia))]

export const conteudos = [...new Set(estadoAtividades.lista.map(item => item.conteudo))]

export const datas = [...new Set(estadoPratica.lista.map(item => item.data))]