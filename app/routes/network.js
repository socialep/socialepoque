import { html } from '../lib/htm-preact.js'
import { Page } from '../components/layout/page.js'
import prefixUriIfNeeded from '../utils/prefixUriIfNeeded.js'
import { avoidReload } from '../utils/avoidReload.js'

export const Network = () => html`

    <style>
        .about-content {
            display: block;
        }

        .about-content img.image {
            width: 150px;
            border: 0;
            max-width: 100%;
            vertical-align: middle;
            float: left;
            margin-right: 2rem;
        }

        .info-title {
            margin: 30px 0 20px;
            font-size: 3.8rem;
            font-weight: 700;
            line-height: 1.1;
            font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
        }

        .info p {
            font-size: 2rem;
            margin: 0 0 30px;
        }

        footer {
            padding: 10px 0;
            font-size: 1.4rem;
            letter-spacing: 1px;
            font-weight: 700;
            font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
            text-transform: uppercase;
        }

        footer a.contact {
            text-decoration: none;
            background-color: transparent;
            color: #999;
            border-bottom: none;
            font-size: 1.4rem;
        }

        footer a.contact:hover {
            text-decoration: none;
            background-color: transparent;
            color: #333;
            outline: 0;
            transition: all 0.4s;
            border-bottom: none;
        }
        termsofuse {
            margin-left: 20px;
        }
        .card {
            /* Add shadows to create the "card" effect */
            box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
            transition: 0.3s;
            width: 200px;
            border-radius: 5px;
            margin-top: 10px;
            margin-left: 10px;
          }
          
          /* On mouse-over, add a deeper shadow */
        .card:hover {
            box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
          }
          
          /* Add some padding inside the card container */
        .boarder {
            padding: 2px 16px;
          }
          .card-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start; /* Adjust as needed */
            gap: 10px; /* Add spacing between cards */
        }
    </style>
    <${Page}
        title="Team"
        subtitle="Social Époque"
        description="Get to know the ones who helped this initiative to start"
        sidebarImage=${prefixUriIfNeeded('/assets/network.jpg')}
        showLinks=${true}
    >
        <div class="about-content">
            <div class="info">
            <footer>
            <a
            href="${prefixUriIfNeeded('/network')}"
            class="termsofuse"
            onClick=${avoidReload}
        >
        Team Social Époque
        </a>
                </footer>
                <footer>
            <a
            href="${prefixUriIfNeeded('/professors')}"
            class="termsofuse"
            onClick=${avoidReload}
        >
            Professors
        </a>             
                    </footer>
                    <footer>
                    <a
                    href="${prefixUriIfNeeded('/students')}"
                    class="termsofuse"
                    onClick=${avoidReload}
                >
                    Students
                </a>             
                            </footer>
                <h1 class="info-title">Team Social Époque</h1>
                <div class="card-container">
                <a class="card" href="https://www.linkedin.com/in/igor-emmanuel-carnaúba-005a18b8/">
                <div> 
                <div class="boarder">
                <img
                src=${prefixUriIfNeeded('/assets/igor.png')}
                style="width:170px; height: 170px"
            />
                <h4><b>Igor Carnauba</b></h4> 
                <p>Idealizer</p> 
              </div>
              </a>
                </div>
                <a class="card" href="https://www.linkedin.com/in/marcosmarquesdev/">
                <div> 
                <div class="boarder">
                <img
                src=${prefixUriIfNeeded('/assets/marcos.png')}
                style="width:170px; height: 170px"
            />
                <h4><b>Marcos Marques</b></h4> 
                <p>Programmer: support</p> 
              </div>
                </div>
                </a>
                <a class="card" href="https://www.linkedin.com/in/ana-carolina-frança/">
                <div> 
                <div class="boarder">
                <img
                src=${prefixUriIfNeeded('/assets/carol.png')}
                style="width:170px; height: 170px"
            />
                <h4><b>Ana Carolina Marques</b></h4> 
                <p>Designer: supporter</p> 
              </div>
                </div>
                </a>
                <a class="card" href="https://www.linkedin.com/in/joana-avena-a4841076/">
                <div> 
                <div class="boarder">
                <img
                src=${prefixUriIfNeeded('/assets/joana.png')}
                style="width:170px; height: 170px"
            />
                <h4><b>Joana Avena</b></h4> 
                <p>Project supporter</p> 
              </div>
                </div>
                </a>
                </div>
            </div>
        </div>

    <//>
`
