import { CampoGenerico } from './campo-generico';

export interface Configparams {
    pagina?: number;
    limite?: number;
    pesquisa?: string;
    campo?: CampoGenerico;
}
