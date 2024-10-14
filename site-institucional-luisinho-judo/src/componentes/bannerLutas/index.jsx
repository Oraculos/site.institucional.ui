import { Container } from '@mui/material';
import lutasHeroImage from './assets/lutas.svg';
import './styles.css';

export default function LutasHero() {
    return (
        <div className="container_lutasHero">
            <div className="imagem_hero_content">
                <h1>LUTA PELO PONTO PERFEITO</h1>
                <p>
                    Nas palavras de seu criador: "Arte em que se usa ao máximo a força física e espiritual".
                </p>
                <p>
                    Jigoro Kano reuniu alguns elementos de outras artes marciais e, pouco depois de ser criado, o judô foi oficializado no Japão. Essa arte marcial foi aliada com a filosofia ippon-shobu (luta pelo ponto perfeito).
                </p>
                <p>
                    Dessa forma, ele desenvolveu 8 princípios básicos relacionados com boas ações dos indivíduos:
                </p>
                <div className="principles">
                    <div className="principle"><span>1.</span></div>
                    <div className="principle"><span>2.</span> Coragem<br/><small>Para enfrentar as dificuldades com bravura</small></div>
                    <div className="principle"><span>3.</span> Honestidade<br/><small>Para ser verdadeiro em seus pensamentos e ações</small></div>
                    <div className="principle"><span>4.</span> Honra<br/><small>Para fazer o certo e se manter com seus princípios</small></div>
                    <div className="principle"><span>5.</span> Modéstia<br/><small>Para não agir e pensar de maneira egoísta</small></div>
                    <div className="principle"><span>6.</span> Respeito<br/><small>Para viver em harmonia com os outros</small></div>
                    <div className="principle"><span>7.</span> Autocontrole<br/><small>Para estar no comando das suas emoções</small></div>
                    <div className="principle"><span>8.</span> Amizade<br/><small>Para ser um bom companheiro e amigo</small></div>
                </div>
                <h2>PONTUAÇÃO NO JUDÔ</h2>
                <p>
                    O principal objetivo do judô é derrubar o adversário para o chão. Os combates entre os judocas acontecem no tatame, que normalmente mede 8x8 metros. Para vencer a luta, o judoca precisa derrubar o adversário com as costas e ombros no tatame ou imobilizar o adversário durante um período que pode ir até 20 segundos.
                </p>
                <p>
                    Atualmente, há dois tipos de golpes que pontuam no judô. Só o atleta completar dois pontos, ele vence a luta.
                </p>
                <div className="points">
                    <p>Wazari: quando o judoca cai de costas no tatame, porém com pouca velocidade. Cada 1 wazari ganha um ponto, ou seja, se o judoca ficar 2 wazari, ele vence a luta.</p>
                    <p>Ippon: quando o judoca cai perfeitamente de costas no tatame. Este golpe é considerado o "nocaute" do judô, pois o judoca ganha 2 pontos, vencendo a luta.</p>
                </div>
                <p>
                    As lutas têm duração de 5 minutos. Durante esse período, o combate entre dois judocas deverá apresentar um vencedor. Entretanto, se isso não acontecer, há uma prorrogação, chamada de Golden Score (pontuação de ouro), ou seja, ganha o judoca que conseguir aplicar um golpe (pontuar) ou se o adversário é punido.
                </p>
                <div className="icons">
                    <div className="icon">
                        <img src="jigoro-kano.png" alt="Jigoro Kano" />
                        <p>Jigoro Kano</p>
                        <p>Criador do Judô.</p>
                    </div>
                    <div className="icon">
                        <img src="takao-kawaguchi.png" alt="Takao Kawaguchi" />
                        <p>Takao Kawaguchi</p>
                        <p>Medalhista de Judô em 1972</p>
                    </div>
                    <div className="icon">
                        <img src="paralimpiadas.png" alt="Paralimpiadas" />
                        <p>Paralimpiadas</p>
                        <p>Disputada em Tóquio, 2020.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
