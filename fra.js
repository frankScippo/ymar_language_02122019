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
    lang: "Francais",
    index: {
        loading_message: "Mise en ligne",
        nuVersion: "Nouvelle version!",
        sideMenu: {
            user: "Compte",
            signin: ["Connexion", "Registration", "Déconnexion"],
            home: "Accueil",
            contact: "Contacts",
            help: "Qu'est-ce que YouMeAR",
            reset: "Rétablir des notes",
            resetApp: "Reset APP",
            reload: "Mettre à jour la page",
            privacy: "Sécurité",
            info: "Information",
            markerAR: "Devenir partenaire",
            close: "Fermer le menu",
            /* DEVELOPER OPTIONS */
            options: "..."
        },
        /* TESTO FORMATTABILE */
        sideMenuAction: ['nouveau puntoacapo Marque', "List puntoacapo des Marque", "Utiliser puntoacapo l'appareil photo"]
        /* FINE TESTO FORMATTABILE */
    },
    createmedia: {
        photo: "Prendre une photo",
        video: "Enregistrer une video",
        share: "Publier"
    },
    user: {
        userChoose1: ["Suivre comme", "UTILISATEUR"],
        userChoose2: ["Suivre comme", "EXPERT"],
        progate1: ["Par utilisateurs enregistrés", "CONNEXION"],
        progate2: ["Par nouveaux utilisateurs", "COMMENCER"],
    },
    signin: {
        title: "Connecter à",
        subtitle: "YouMeAR!",
        button: "Connexion",
        form: [
            {
                type: "adresse e-mail",
                name: "adresse e-mail",
                label: "Adresse e-mail",
                pro: false
            },
            {
                type: "password",
                name: "password",
                label: "Password",
                pro: "faux"
            },
        ]
    },
    signup: {
        title: "Créer un compte",
        subtitle: "YouMeAR!",
        button: ["Suivant", "Compléter the registration"],
        policyInteraction: "EN SAVOIR PLUS...",
        policyTitle: "acceptation de conditions d'utilisation de notre service.",
        policyDescription: "Pour achever le processus d'enregistrement dans le site web et pour accéder gratuitement à la Communité, nous vous demandons de prendre connaissance des conditions d'utilisation de le service. Dans la phase de inscription et registration des votre informationes personelles, vous douvez être majeur et confirmer de avoir connaissance des conditions d\'utilisation de le service du site web. Cliquez ici pour confirmer \"Je accepte\".",
        policyDialogTitle: "Lire et accepter des terms et conditions générales",
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
        policyDialogYep: 'Je accepte',
        policyDialogNope: 'Je refuse',
        /* FINE TESTO FORMATTABILE */
        recTitle: "Vous avez un compte?",
        actionRecTitle: "allez su la page de connexion",
        form: [
            {
                type: 'text',
                name: 'name',
                label: 'Prénom',
                pro: false,
                required: true,
                page: 1
            },
            {
                type: 'text',
                name: 'surname',
                label: 'Name',
                pro: false,
                required: true,
                page: 1
            },
            {
                type: 'text',
                name: 'rec_name_business',
                label: 'Nom de la entreprise',
                pro: true,
                required: true,
                page: 2
            },
            {
                type: 'text',
                name: 'rec_VATnumber',
                label: 'numéro d\'identification TVA',
                pro: true,
                required: true,
                page: 2
            },
            {
                type: 'mail',
                name: 'email',
                label: 'addresse e-mail',
                pro: false,
                required: true,
                page: 3
            },
            {
                type: 'password',
                name: 'password',
                label: 'Créer Mot de passe',
                pro: false,
                required: true,
                page: 3
            },
            {
                type: 'password',
                name: 'password_confirmation',
                label: 'Confirmer mot de passe',
                pro: false,
                required: true,
                page: 3
            }
        ]
    },
    homeTitle1: ["IMAGINEZ", "CRÉEZ", "AMUSEZ-VOUS!"],
    /* TESTO FORMATTABILE */
    homeTitle12: "Créez your puntoacapo **Realitée Augmenteé puntoacapo GRATUITEMENT!**",
    /* FINE TESTO FORMATTABILE */
    homeTitle2: ["ouvrir", "APPAREIL PHOTO"],
    homeTitle3: ["Modalité", "MARKERLESS"],
    homeTitle4: ["Details d\'utilisation", "APP"],
    homeTitleLI: ["", "Connexion"],
    homeTitleLO: ["", "Déconnexion"],
    marker: {
        title: "Imaginez, Créez, Amusez-vous!",
        description: [
            /* TESTO FORMATTABILE */
          "Encadre les **images** avec le **appareil photo de ton Smartphone** et decouvre   les contenus multimédia en **Realité Augmentée**.",
            /* FINE TESTO FORMATTABILE */
        ],
        button: "ENCADREZ",
        question: {
            question: 'Est-ce que vous voulez ouvrire l\'appareil photo?',
            description: "The APP utilise la technologie de la Realité Augmentée pour l'exploration de contenus virtuels. Por cette raison vous reccomandons la surveillance d'adultes avec mineurs. Avant commencer l'utilisation de la Realité Augmentée, veuillez vous assurer que ils ne sont pas obstacles, dangerous pour des utilisateurs",
            yepText: "oui",
            nopeText: "no"
        }
    },
    placement: {
        title: "Positionner ton modèle 3D",
        description: [
            /* TESTO FORMATTABILE */
            "Positionner le **modèle 3D** pour admire-lui avec l\' **appareil photo de ton Smarthphone**.",
            /* FINE TESTO FORMATTABILE */
        ],
        button: "POSITIONNER",
        question: {
            question: 'Est-ce que vous voulez ouvrire l\'appareil photo?',
            description: "The APP utilise la technologie de la Realité Augmentée pour l'exploration de contenus virtuels. Por cette raison vous reccomandons la surveillance d'adultes avec mineurs. Avant commencer l'utilisation de la Realité Augmentée, veuillez vous assurer que ils ne sont pas obstacles, dangerous pour des utilisateurs",
            yepText: "oui",
            nopeText: "no"
        }
    },
    arcamera: {
        title: "Est-ce que vous voulex amuser-vous avec la Realité Augmentée?",
        button1: "Accueil",
        button2: "Restez sur cette page",
        button3: "Encadrer le Marque",
        button4: "Comment il fonctionne"
    },
    createmarker: {
        preview: {
            title: 'Aperçu',
            subtitle: 'Bougez l\ecran de le Smartphone pour simuler la Realité Augmentée.',
            interaction: 'La interaction commence dans',
            seconds: 's',
            button: 'Fermer'

        },
        step0: {
            title: "Donnez un nom",
            subtitle: "pour ta Realité Augmentée",
            button: ["Sauter", "Suivant"],
            placeholder: "Nom",
            noName: "Marque sans nom"
        },
        step1: {
            title: "Choise the shape",
            subtitle: "Choisez votre preferée",
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
                    screenName: 'Carré',
                    pro: false,
                    ratio: "1/1", // 1:1
                    orientation: 2,
                    shapeSRC: "",
                },
                {
                    name: 'circle',
                    screenName: 'Cercle',
                    pro: true,
                    ratio: "1/1", // 1:1
                    orientation: 2,
                    shapeSRC: "",
                }
            ],
            button: "Choisir"
        },
        step2: {
            title: "Charger l'image",
            subtitle: "Charger l'image pour ta Realité Augmentée.",
            button: "Suivant",
            image: "Charger l'image",
            crop: "Couper"
        },
        step3: {
            title: "Charger le vidéo",
            subtitle: "Charger le video chioisì pour ta Realité Augmentée.",
            button: "Suivant",
            video: "Charger le vidéo",
            crop: "Couper le video",
        },
        step4: {
            title: "Adjounter le lien",
            subtitle: "Le lien pour l\'interaction à la fin de le vidéo.",
            button: "Suivant",
            placeholder: "Link URL",
            prefix: 'https://www.'
        },
        step5: {
            title: "Définir Paramètres",
            subtitle: "Définir Paramètres finaux.",
            button: "Charger le marque",
            setting: [
                {
                    name: "Video Follow",
                    id: "videofollow",
                    description: "VideoFollow donnée le vidéo en plein écran sans l'ecranement du marque.",
                    action: "Entendu",
                    img: setting_img_1, // non cambiare
                    imgc: setting_img_1c, // non cambiare
                    defaultValue: true // non cambiare
                },
                {
                    name: "Toolbar",
                    id: "toolbar",
                    description: "Toolbar permet de revenir aussi avec dispositif sans boutons physiques.",
                    action: "Entendu",
                    img: setting_img_2, // non cambiare
                    imgc: setting_img_2c, // non cambiare
                    defaultValue: false // non cambiare
                },
                {
                    name: "Toolbarup",
                    id: "toolbarup",
                    description: "Toolbar Up monte la barre d'outils.",
                    action: "Entendu",
                    img: setting_img_3, // non cambiare
                    imgc: setting_img_3c, // non cambiare
                    defaultValue: false // non cambiare
                }
            ]
        },
        step6: {
            title: "Création du Marque",
            subtitle: "La creation du Marque est disponibile dans qualque minuts",
            done_title: "Fait!",
            done_subtitle: "The marker is ready for the frame.",
            error_title: "Something goes wrong :(",
            error_subtitle: "It may be a connection issue...",
            button: "Next",
            gotogameratooltip: "Use camera",
            done_uptitle: "TAP the screen",
            done_downtitle: "and use the camera!",
            error_uptitle: "Error",
            error_downtitle: "Click on X to try again",
            or: "or go back to the Home",
            download: "dowload the APP from",
            download_title: "Marker is ready.",
            download_subtitle: "open YMAR or",
            link: [
                {
                    name: 'use Apple Store',
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
                subtitle: "Choose the frame",
                autorizzato: true,
                description: "Select the frame choosen for YOUR Augmented Reality"
            },
            {
                img: step2, // non cambiare
                cover: step2c, // non cambiare
                title: "Step 2",
                subtitle: "Upload the image",
                autorizzato: true,
                description: "Select the image choosen for Augmented Reality."
            },
            {
                img: step3, // non cambiare
                cover: step3c, // non cambiare
                title: "Step 3",
                subtitle: "Upload the video",
                autorizzato: true,
                description: "Select the video to overlap on the image."
            },
            {
                img: step4, // non cambiare
                cover: step4c, // non cambiare
                title: "Step 4",
                subtitle: "Settings",
                autorizzato: false,
                description: "Your Augmented Reality is ready, add the link for the interaction and set the parameters of your marker."
            }
        ],
        tuts_index: {
            title: 'How it works',
            button: 'I UNDERSTOOD',
            next: 'NEXT',
            hidden: 'Do not show this message again'
        }
    },
    app: {
        description: [
            /* TESTO FORMATTABILE */
            "With **YouMeAR** the creation of **interactive images** will be **extremely easy** thanks to the magic of **Augmented Reality**."
            /* FINE TESTO FORMATTABILE */
        ],
        title: "Imagine, create, enjoy",
        /* TESTO FORMATTABILE */
        title1: "**AR MODALITY:**",
        title2: "**MARKERLESS MODALITY:**",
        /* FINE TESTO FORMATTABILE */
    },
    listMarker: {
        title: 'Marker List',
        subtitle: 'Marker List',
        more: 'Upload more results...',
        description: {
            general1: 'Status',
            general2: 'Quality',
            general3: 'Upload on',
            stats1: 'Total',
            stats2: 'This month',
            stats3: 'Last month',
            stats4: 'Click on the link',
            int_description1: 'How many times does a client click on "LINK" function.,
            stats5: 'Full screen',
            int_description2: 'Number of full screen views.',
            checkout1: 'Residual frameworks',
            checkout2: 'Residual hours',
            int_checkout1: 'Number of residual frameworks and/or hour at the marker\'s deadline.',
            deleteMarker: 'Delate Marker'
        },
        details: "Details",
        view: "display Image",
        active: "Turn on",
        deactive: "Turn off",
        delete: "Delate",
        enabled: 'TUrned on',
        disabled: 'Turned off',
        title_description: {
            general: 'General Info',
            recogs: 'Frameworks',
            interaction: 'Statistics',
            checkout: 'Residual traffic'
        },
        noName: 'No name',
        nothing: 'no marker ... '
    }
};