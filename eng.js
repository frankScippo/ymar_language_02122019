/** LEGENDA **/
/* 

TESTO FORMATTABILE:

GRASSETTO: doppio asterisco agli estremi (es. **PAROLE IN GRASSETTO**)
A CAPO: scrivere puntoacapo per andare a capo
CORSIVO: asterisco + i + asterisco, agli estremi (es. *i*PAROLE IN CORSIVO*i*)
SOTTOLINEATO: asterisco + ins + asterisco, agli estremi (es. *ins*PAROLE SOTTOLINEATE*ins*)
PEDICE: asterisco + sub + asterisco, agli estremi (es. *sub*PAROLE IN PEDICE*sub*)
APICE: asterisco + sup + asterisco, agli estremi (es. *sup*PAROLE IN APICE*sup*)
VIRGOLETTE: se hai bisogno di utilizzare le virgolette nel testo
ricordati di antecederle lo slash verso sinistra (es. \"ciao come stai\")
*/

const language = {
    lang: "English",
    index: {
        loading_message: "Uploading",
        nuVersion: "New version!",
        sideMenu: {
            user: "Account",
            signin: ["Login", "Registration", "Log Out"],
            home: "Home",
            contact: "Contacts",
            help: "About YouMeAR",
            reset: "Refresh notices",
            resetApp: "Reset APP",
            reload: "Update page",
            privacy: "Privacy",
            info: "Info",
            markerAR: "Sign in",
            close: "Close menu",
            /* DEVELOPER OPTIONS */
            options: "..."
        },
        /* TESTO FORMATTABILE */
        sideMenuAction: ['New puntoacapo Marker', "Marker puntoacapo List", "Use puntoacapo Camera"]
        /* FINE TESTO FORMATTABILE */
    },
    createmedia: {
        photo: "Take a photo",
        video: "Record a video",
        share: "Share"
    },
    user: {
        userChoose1: ["Continue as", "USER"],
        userChoose2: ["Continue as", "EXPERT"],
        progate1: ["For registered users", "LOGIN"],
        progate2: ["For new users", "START NOW"],
    },
    signin: {
        title: "Sign in to",
        subtitle: "YouMeAR!",
        button: "Sign in",
        form: [
            {
                type: "email",
                name: "email",
                label: "Email",
                pro: false
            },
            {
                type: "password",
                name: "password",
                label: "Password",
                pro: false
            },
        ]
    },
    signup: {
        title: "Create an Account",
        subtitle: "YouMeAR!",
        button: ["Next", "Complete the registration"],
        policyInteraction: "LEARN MORE...",
        policyTitle: "agree to general terms and conditions of service.",
        policyDescription: "In order to complete your subscription to the website and have free access to the Community, please agree to general terms and conditions about services' use. During the subscription and the registration of your personal information, you must conferm you have come of age and you have read general conditions for services offered by the Website. Click here to confirm \"Accept\".",
        policyDialogTitle: "Read and agree to general terms and conditions",
        /* TESTO FORMATTABILE */
        policyDialogDescription: [
            [
                "**title1**", // TITOLO DEL PARAGRAFO
                "description1 puntoacapo **description1.1** puntoacapo description1.2 ... etc ..." // DESCRIZIONE DEL PARAGRAFO
            ],
            [
                "**title2**", // TITOLO DEL PARAGRAFO
                "description2 puntoacapo description2.1 puntoacapo description2.2 ... etc ..." // DESCRIZIONE DEL PARAGRAFO
            ],
            [
                "**title3**", // TITOLO DEL PARAGRAFO
                "description3 puntoacapo description3.1 puntoacapo *ins*description3.2*ins* ... etc ..." // DESCRIZIONE DEL PARAGRAFO
            ],
        ],
        policyDialogYep: 'Accept',
        policyDialogNope: 'Refuse',
        /* FINE TESTO FORMATTABILE */
        recTitle: "Have you an account?",
        actionRecTitle: "Procede with Login",
        form: [
            {
                type: 'text',
                name: 'name',
                label: 'Name',
                pro: false,
                required: true,
                page: 1
            },
            {
                type: 'text',
                name: 'surname',
                label: 'Surname',
                pro: false,
                required: true,
                page: 1
            },
            {
                type: 'text',
                name: 'rec_name_business',
                label: 'Business Name',
                pro: true,
                required: true,
                page: 2
            },
            {
                type: 'text',
                name: 'rec_VATnumber',
                label: 'VAT number',
                pro: true,
                required: true,
                page: 2
            },
            {
                type: 'mail',
                name: 'email',
                label: 'Email',
                pro: false,
                required: true,
                page: 3
            },
            {
                type: 'password',
                name: 'password',
                label: 'Create Password',
                pro: false,
                required: true,
                page: 3
            },
            {
                type: 'password',
                name: 'password_confirmation',
                label: 'Confirm password',
                pro: false,
                required: true,
                page: 3
            }
        ]
    },
    homeTitle1: ["IMAGINE", "CREATE", "ENJOY!"],
    /* TESTO FORMATTABILE */
    homeTitle12: "Create your puntoacapo **Augmented Reality puntoacapo FOR FREE!**",
    /* FINE TESTO FORMATTABILE */
    homeTitle2: ["Open", "CAMERA"],
    homeTitle3: ["Modalità", "MARKERLESS"],
    homeTitle4: ["How to use", "THE APP"],
    homeTitleLI: ["", "LogIn"],
    homeTitleLO: ["", "LogOut"],
    marker: {
        title: "Imagine, Create, Enjoy",
        description: [
            /* TESTO FORMATTABILE */
            "Frame **your image** with the **camera of your smartphone** and explor the multimedia contents in **Augmented Reality**.",
            /* FINE TESTO FORMATTABILE */
        ],
        button: "FRAME",
        question: {
            question: 'Do you want to open your camera?',
            description: "The APP uses Augmented Reality technology for the exploration of virutal contents. For this reason the supervision is reccommended with minor users. Before starting to use Augmented Reality, please ensure that there are not any obtables dangerous for the user",
            yepText: "si",
            nopeText: "no"
        }
    },
    placement: {
        title: "Position your 3D model",
        description: [
            /* TESTO FORMATTABILE */
            "Position the **3D model** to admire it with the **camera of your Smarthphone**.",
            /* FINE TESTO FORMATTABILE */
        ],
        button: "POSITION",
        question: {
            question: 'Do you want to open the camera?',
            description: "The APP uses Augmented Reality technology for the exploration of virutal contents. For this reason the supervision is reccommended with minor users. Before starting to use Augmented Reality, please ensure that there are not any obtables dangerous for the user",
            yepText: "yes",
            nopeText: "no"
        }
    },
    arcamera: {
        title: "Do you want to have fun wih Augmented Reality?",
        button1: "Home",
        button2: "Stay here",
        button3: "Frame the Marker",
        button4: "How does it work?"
    },
    createmarker: {
        preview: {
            title: 'Preview',
            subtitle: 'Move the screen of the Smartphone to simulate Augmented Reality.',
            interaction: 'The interaction starts in',
            seconds: 's',
            button: 'Close'

        },
        step0: {
            title: "Name",
            subtitle: "your Augmented Reality",
            button: ["Skip", "Next"],
            placeholder: "Name",
            noName: "Marker without name"
        },
        step1: {
            title: "Choose the shape",
            subtitle: "Choose your favorite one",
            //geometry: ["Orizzontale", "Verticale", "Quadrato", "Circolare"],
            geometry: [
                {
                    name: 'horizontal',
                    screenName: 'Horizontal',
                    pro: false,
                    ratio: "16/9", // 16:9
                    orientation: 0,
                    shapeSRC: "",
                },
                {
                    name: 'vertical',
                    screenName: 'Vertical',
                    pro: false,
                    ratio: "9/16", // 9:16
                    orientation: 1,
                    shapeSRC: "",
                },
                {
                    name: 'square',
                    screenName: 'Square',
                    pro: false,
                    ratio: "1/1", // 1:1
                    orientation: 2,
                    shapeSRC: "",
                },
                {
                    name: 'circle',
                    screenName: 'Circle',
                    pro: true,
                    ratio: "1/1", // 1:1
                    orientation: 2,
                    shapeSRC: "",
                }
            ],
            button: "Choose"
        },
        step2: {
            title: "Upload Image",
            subtitle: "Upload the image for your Augmented Reality.",
            button: "Next",
            image: "Upload image",
            crop: "Cut"
        },
        step3: {
            title: "Upload video",
            subtitle: "Carica il video che vorresti in Realtà Aumentata.",
            button: "Continua!",
            video: "Carica video",
            crop: "Ritaglia Video",
        },
        step4: {
            title: "Inserisci il link",
            subtitle: "Link per l'interazione quando il video finisce.",
            button: "Continua!",
            placeholder: "Link URL",
            prefix: 'https://www.'
        },
        step5: {
            title: "Imposta parametri",
            subtitle: "Fai gli ultimi ritocchi sui parametri.",
            button: "Carica marker",
            setting: [
                {
                    name: "Video Follow",
                    id: "videofollow",
                    description: "Il VideoFollow ti permetterà di godere il video a schermo intero se il marker non è più inquadrato.",
                    action: "ok, ho capito",
                    img: setting_img_1, // non cambiare
                    imgc: setting_img_1c, // non cambiare
                    defaultValue: true // non cambiare
                },
                {
                    name: "Toolbar",
                    id: "toolbar",
                    description: "La toolbar ti permette di tornare indietro anche su devices senza tasti fisici.",
                    action: "ok, ho capito",
                    img: setting_img_2, // non cambiare
                    imgc: setting_img_2c, // non cambiare
                    defaultValue: false // non cambiare
                },
                {
                    name: "Toolbar Up",
                    id: "toolbarup",
                    description: "La toolbar Up sposta la toolbar in alto.",
                    action: "ok, ho capito",
                    img: setting_img_3, // non cambiare
                    imgc: setting_img_3c, // non cambiare
                    defaultValue: false // non cambiare
                }
            ]
        },
        step6: {
            title: "Creazione Marker",
            subtitle: "Il marker sta completando le fasi di creazione",
            done_title: "Fatto!",
            done_subtitle: "Il marker è pronto per essere inquadrato.",
            error_title: "Qualcosa non va! :(",
            error_subtitle: "Forse è un problema di connessione...",
            title1: "non so che scrivere",
            button: "Continua!",
            gotogameratooltip: "Vai alla camera",
            done_uptitle: "Fai TAP",
            done_downtitle: "e vai alla camera!",
            error_uptitle: "Errore",
            error_downtitle: "Clicca sulla X per riprovare",
            or: "oppure torna alla Home",
            download: "scarica l'APP da",
            download_title: "Marker Pronto.",
            download_subtitle: "apri YMAR oppure",
            link: [
                {
                    name: 'Apple Store',
                    link: 'https://apps.apple.com/it/app/youmear/id1474981907'
                },
                {
                    name: 'Google Play',
                    link: 'https://play.google.com/store/apps/details?id=com.IBSSRL.YouMeAR'
                }
            ],
        },
        tuts: [
            {
                img: step1, // non cambiare
                cover: step1c, // non cambiare
                title: "Step 1",
                subtitle: "Scegli la forma",
                autorizzato: true,
                description: "Seleziona la forma dell'immagine che caratterizzerà la TUA Realtà Aumentata"
            },
            {
                img: step2, // non cambiare
                cover: step2c, // non cambiare
                title: "Step 2",
                subtitle: "Carica immagine",
                autorizzato: true,
                description: "Seleziona l'immagine che vuoi rendere in Realtà Aumentata."
            },
            {
                img: step3, // non cambiare
                cover: step3c, // non cambiare
                title: "Step 3",
                subtitle: "Carica video",
                autorizzato: true,
                description: "Seleziona il video da sovrapporre all'immagine."
            },
            {
                img: step4, // non cambiare
                cover: step4c, // non cambiare
                title: "Step 4",
                subtitle: "Gestisci impostazioni",
                autorizzato: false,
                description: "Siamo quasi pronti caricare la tua Realtà Aumentata, inserisci il link per l'interazione e imposta i parametri del tuo marker."
            }
        ],
        tuts_index: {
            title: 'Come funziona',
            button: 'OK, HO CAPITO',
            next: 'AVANTI',
            hidden: 'Non mostrare più'
        }
    },
    app: {
        description: [
            /* TESTO FORMATTABILE */
            "Con **YouMeAR** creare **immagini interattive** sarà **semplicissimo** grazie alla magia della **Realtà Aumentata**."
            /* FINE TESTO FORMATTABILE */
        ],
        title: "Immagina, crea, vivi",
        /* TESTO FORMATTABILE */
        title1: "**MODALITÀ AR:**",
        title2: "**MODALITÀ MARKERLESS:**",
        /* FINE TESTO FORMATTABILE */
    },
    listMarker: {
        title: 'Lista Marker',
        subtitle: 'Elenco dei tuoi marker',
        more: 'Carica altri risultati...',
        description: {
            general1: 'Stato',
            general2: 'Qualità',
            general3: 'Caricato il',
            stats1: 'Totali',
            stats2: 'Questo mese',
            stats3: 'Mese scorso',
            stats4: 'Click sul link',
            int_description1: 'Quante volte un utente ha cliccato sulla funzione "LINK".',
            stats5: 'Schermo intero',
            int_description2: 'Numero di visualizzazioni a schermo intero.',
            checkout1: 'Inquadramenti rimanenti',
            checkout2: 'Ore rimanenti',
            int_checkout1: 'Numero di inquadramenti e/o ore rimanenti alla scadenza del marker.',
            deleteMarker: 'Cancella Marker'
        },
        details: "Dettagli",
        view: "visualizza Immagine",
        active: "Attiva",
        deactive: "Disattiva",
        delete: "Elimina",
        enabled: 'Attivo',
        disabled: 'Disattivo',
        title_description: {
            general: 'Info Generali',
            recogs: 'Inquadramenti',
            interaction: 'Statistiche',
            checkout: 'Traffico residuo'
        },
        noName: 'Senza Nome',
        nothing: 'nessun marker ... '
    }
};