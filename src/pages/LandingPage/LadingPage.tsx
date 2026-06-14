import {
  IoBookOutline,
  IoCheckmarkCircle,
  IoPeopleOutline,
  IoSearchOutline,
  IoShieldCheckmarkOutline,
  IoStatsChartOutline,
  IoTimeOutline,
} from "react-icons/io5";
import logo from "../../assets/logo.png";
import { ButtonCta } from "./components/ButtonCta";
import style from "./style.module.css";
import { Link } from "react-router-dom";
import stacks from "../../assets/stacks.png";

const features = [
  {
    icon: <IoSearchOutline />,
    title: "Busca inteligente",
    description:
      "Encontre livros por titulo, autor, categoria ou status sem perder tempo em listas baguncadas.",
  },
  {
    icon: <IoPeopleOutline />,
    title: "Leitores organizados",
    description:
      "Acompanhe quem pegou cada livro, prazos de devolucao e historico de emprestimos.",
  },
  {
    icon: <IoStatsChartOutline />,
    title: "Visao do acervo",
    description:
      "Veja rapidamente quantidade de livros, itens atrasados e categorias mais procuradas.",
  },
];

const stats = [
  { value: "1.2k", label: "livros catalogados" },
  { value: "98%", label: "emprestimos rastreados" },
  { value: "4 min", label: "para organizar um novo livro" },
];

const steps = [
  "Cadastre seus livros com dados essenciais.",
  "Controle emprestimos, devolucoes e atrasos.",
  "Acompanhe o acervo por dashboards simples.",
];

export default function LadingPage() {
  return (
    <main className={style.page}>
      <header className={style.header}>
        <a className={style.brand} href="#home" aria-label="Libary home">
          <img src={logo} alt="Libary logo" />
          <span>Libary</span>
        </a>

        <nav className={style.nav} aria-label="Main navigation">
          <a href="#features">Recursos</a>
          <a href="#solution">Solucao</a>
          <a href="#workflow">Como funciona</a>
          <a href="#pricing">Plano</a>
        </nav>

        <Link to="/login" className={style.headerAction}>
          <ButtonCta title="Entrar" />
        </Link>
      </header>

      <section className={style.hero} id="home">
        <div className={style.heroContent}>
          <span className={style.eyebrow}>
            <IoShieldCheckmarkOutline />
            Biblioteca organizada, sem planilhas soltas
          </span>

          <h1>Gerencie sua biblioteca com clareza do cadastro ao emprestimo.</h1>

          <p className={style.heroDescription}>
            Uma plataforma simples para catalogar livros, acompanhar leitores,
            controlar devolucoes e entender seu acervo em uma unica tela.
          </p>

          <div className={style.heroActions}>
            <Link to="/register" className={style.primaryAction}>
              Começar agora
            </Link>
            <a href="#features" className={style.secondaryAction}>
              Ver recursos
            </a>
          </div>

          <div className={style.trustBar} aria-label="Product highlights">
            <span>
              <IoCheckmarkCircle />
              Sem instalacao
            </span>
            <span>
              <IoCheckmarkCircle />
              Controle visual
            </span>
            <span>
              <IoCheckmarkCircle />
              Feito para rotina real
            </span>
          </div>
        </div>

        <div className={style.heroVisual} aria-label="Dashboard preview">
          <div className={style.previewCard}>
            <div className={style.previewHeader}>
              <div>
                <span>Acervo ativo</span>
                <strong>328 livros</strong>
              </div>
              <IoBookOutline />
            </div>

            <div className={style.searchMock}>Buscar por autor, titulo ou ISBN</div>

            <div className={style.bookRows}>
              <div>
                <span>Clean Code</span>
                <strong>Disponivel</strong>
              </div>
              <div>
                <span>Domain-Driven Design</span>
                <strong>Emprestado</strong>
              </div>
              <div>
                <span>Refactoring</span>
                <strong>Atrasado</strong>
              </div>
            </div>

            <div className={style.previewFooter}>
              <span>Devolucoes hoje</span>
              <strong>12</strong>
            </div>
          </div>
        </div>
      </section>

      <section className={style.stats} aria-label="Libary numbers">
        {stats.map((item) => (
          <div key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </section>

      <section className={style.features} id="features">
        <div className={style.sectionIntro}>
          <span>Recursos</span>
          <h2>O essencial para cuidar do seu acervo sem complicar.</h2>
          <p>
            A ideia e deixar as tarefas repetitivas mais leves, mantendo as
            informacoes importantes sempre visiveis.
          </p>
        </div>

        <div className={style.featureGrid}>
          {features.map((feature) => (
            <article className={style.featureCard} key={feature.title}>
              <span className={style.featureIcon}>{feature.icon}</span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={style.solution} id="solution">
        <div className={style.solutionContent}>
          <span>Solucao</span>
          <h2>Troque controle manual por uma experiencia feita para livros.</h2>
          <p>
            Libary concentra cadastro, disponibilidade e emprestimos em um fluxo
            visual. Assim voce sabe o que existe, onde esta e qual acao precisa
            acontecer em seguida.
          </p>

          <ul className={style.checkList}>
            <li>
              <IoCheckmarkCircle />
              Cadastro rapido com categorias e status.
            </li>
            <li>
              <IoCheckmarkCircle />
              Alertas visuais para livros atrasados.
            </li>
            <li>
              <IoCheckmarkCircle />
              Painel simples para acompanhar crescimento do acervo.
            </li>
          </ul>
        </div>

        <div className={style.imagePanel}>
          <img src={stacks} alt="Pilha de livros representando o acervo" />
        </div>
      </section>

      <section className={style.workflow} id="workflow">
        <div className={style.sectionIntro}>
          <span>Como funciona</span>
          <h2>Organizacao em tres movimentos.</h2>
        </div>

        <div className={style.stepGrid}>
          {steps.map((step, index) => (
            <article className={style.stepCard} key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{step}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={style.cta} id="pricing">
        <div>
          <span>
            <IoTimeOutline />
            Plano inicial gratuito para testar o fluxo
          </span>
          <h2>Comece pequeno, organize melhor e evolua seu acervo com calma.</h2>
        </div>

        <Link to="/register" className={style.primaryAction}>
          Criar minha conta
        </Link>
      </section>
    </main>
  );
}
