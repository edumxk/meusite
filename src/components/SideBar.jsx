class SideBar{
    return(
        <> 
            <section className="sideBar">
                <header className="head">
                    <div className="head__logo">
                        <img src="/Recursos/src/Logo-Kokar5.png" alt="Logo da Kokar Tintas" />
                    </div>
                    <div className="head__navegacao">
                        <ul className="head__navegaca__lista">
                            <li className="head__navegaca__lista-itens"><a href="#">Home</a></li>
                            <li className="head__navegaca__lista-itens"><a href="#">Politicas</a></li>
                            <li className="head__navegaca__lista-itens"><a href="#">Clientes</a></li>
                        </ul>
                    </div>
                </header>
                <section className="menu">
                        <div className="logo-conteudo">
                            <div className="logo">
                                <div className="logo-nome"><p>Políticas Comerciais</p> </div>
                            </div>
                            <i className='bx bx-menu' id="btn"></i>
                        </div>
                        <ul className="navegacao">
                            <li>
                                <a href="index.php">
                                    <i className='bx bx-home'></i>
                                    <span className="link-nome">Página Inicial</span>
                                </a>
                                <span className="tooltip">Página Inicial</span>
                            </li>
                            <li>
                                <a href="#">
                                    <i className='bx bx-message-rounded-edit'></i>
                                    <span className="link-nome">Copiar Política</span>
                                </a>
                                <span className="tooltip">Copiar Política</span>
                            </li>
                            <li>
                                <a href="#">
                                    <i className='bx bx-copy-alt'></i>
                                    <span className="link-nome">Histórico</span>
                                </a>
                                <span className="tooltip">Histórico</span>
                            </li>
                            <li>
                                <a href="index.php">
                                    <i className='bx bx-merge'></i>
                                    <span className="link-nome">Perfil Política</span>
                                </a>
                                <span className="tooltip">Perfil Política</span>
                            </li>
                        </ul>
                        <div className="perfil-conteudo">
                            <div className="perfil">
                                <div className="perfil-detalhes">
                                    <img src="/Recursos/src/imgfun/curr.jpg" alt="imagem de perfil" />
                                    <div className="nome-setor">
                                        <div className="nome">Eduardo Patrick</div>
                                        <div className="cargo">Desenvolvedor</div>
                                        <div className="setor">T.I.</div>
                                    </div>
                                </div>
                                <a href="/homelab.php"><i className='bx bxs-log-out' id="sair"></i></a>
                            </div>
                        </div>
                    </section><section className="principal">
                        <div className="principal__filtros">
                            <div className="principal__filtros-caixa">
                                <label for="rca">Rca</label>
                                <select name="rca" id="">
                                    <option value="0">Todos</option>
                                </select>
                            </div>
                            <div className="principal__filtros-caixa">
                                <label for="uf">UF</label>
                                <select name="uf" id="">
                                    <option value="0">Todos</option>
                                </select>
                            </div>
                            <div className="principal__filtros-caixa">
                                <label for="status">Status</label>
                                <select name="status" id="">
                                    <option value="0">Todos</option>
                                </select>
                            </div>
                            <div className="principal__filtros-caixa">
                                <label for="politica">Política</label>
                                <select name="politica" id="">
                                    <option value="0">Todos</option>
                                </select>
                            </div>
                            <div className="principal__filtros-caixa pesquisa">
                                <input id="busca" type="text" placeholder="Pesquisar..." />
                            </div>
                        </div>
                        <div className="pagina__loader">
                            <div className="loader"></div>
                        </div>
                    </section><div className="principal__conteudo">
                        <h1>Página Contato</h1>
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </div>
            </section>
        </>

    )
}