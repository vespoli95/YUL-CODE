import './Main.css'

export default function Main() {
  return (
    <div className="App">
      <div className="container container-global">
        <div className="row text-center divTimer align-items-center">
          <div className="col">
            {/* {hoursToDday} heures */}
          </div>
          <div className="col">
            {/* {minutesToDday} minutes */}
          </div> 
          <div className="col">
            {/* {secondsToDday} secondes */}
          </div>
        </div>

        <div className="row" style={{ height: "500px" }}>
          <div className="col-4 background d-flex">
            <div className="m-auto col-9 encart">
              <p className="surtitre">Le thème</p>
              <h2>Villes et bâtiments intelligents</h2>
            </div>
          </div>
          <div className="col-8">
            <div className="row participant">
              <div className="col">
                <h4>ESPACE PARTICIPANTS</h4>
              </div>
            </div>
            <div className="row liens">
              <div className="col">
                <a href="https://teams.microsoft.com/l/team/19%3a3544723d9c6e447093d535d55a696a8e%40thread.tacv2/conversations?groupId=171b5c5e-feb1-499f-9192-ab3b1d4e2e0f&tenantId=e8b88f3d-222b-4ce5-b9d1-46b0ff9466a0" target="_blank" className="link">Accéder au teams</a><br/>
                <p style={{marginTop: "5px"}}>Canal principal du YUL.code pour communiquer avec vos équipiers et membres
                  onepoint</p>
              </div>
              <div className="col">
                <a href="https://www.groupeonepoint.com/ca" target="_blank" className="link">Découvrir onepoint</a><br/>
                <p style={{marginTop: "5px"}}>Parcourez le site web de onepoint, ses expertises, projets phares, actualités et
                  point de vues sur le monde du
                  digital</p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <b>L'équipe onepoint</b><br/>
                Venez suivre l'actualité de onepoint Canada grâce aux comptes Linkedin des équipes
              </div>
            </div>
            <div className="row team">
              <div className="col">
                <div className="row ">
                  <div className="col-4">
                    <img src="assets/images/mark-andre.jpeg" className="imgLinkedin" />
                  </div>
                  <div className="col-8">
                    <a href="https://www.linkedin.com/in/ma-tremblay/" className="nameLinkedin" target="_blank"><b>Mark-Andre TREMBLAY</b></a><br/>
                    <p className="job">Recruteur de Talents TI<br/>
                      Chef de projet YUL.code</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="row ">
                  <div className="col-4">
                    <img src="assets/images/lucas.jpeg" className="imgLinkedin" />
                  </div>
                  <div className="col-8">
                    <a href="https://www.linkedin.com/in/lucasdaull/" className="nameLinkedin" target="_blank"><b>Lucas DAULL</b></a><br/>
                    <p className="job">Développeur d'affaires</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="row ">
                  <div className="col-4">
                    <img src="assets/images/maeliss.jpg" className="imgLinkedin" />
                  </div>
                  <div className="col-8">
                    <a href="https://www.linkedin.com/in/maeliss-huwart-14746812b/" className="nameLinkedin" target="_blank"><b>Maeliss HUWART</b></a><br/>
                    <p className="job">Chargé marketing digital et communication</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row background-sponsor">
              <div className="col center text-center align-items-center">
                <b>LES PARTENAIRES</b>
              </div>
              <div className="col">
                <img src="assets/images/MCV.png" style={{ height: "65px" }} />
              </div>
              <div className="col">
                <img src="assets/images/ie.png" style={{width: "150px"}} />
              </div>
              <div className="col center text-center align-items-center">
                <div className="row">
                  <div className="col">
                    <i className="fab fa-linkedin" style={{fontSize: "30px"}}></i>
                  </div>
                  <div className="col">
                    <i className="fab fa-facebook-square" style={{ fontSize: "30px" }}></i>
                  </div>
                  <div className="col">
                    <i className="fab fa-instagram" style={{fontSize: "30px"}}></i>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}