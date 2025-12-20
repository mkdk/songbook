'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "e1bdda258008d217cc9e927a2e8c4e9f",
"version.json": "79695e35e98be675cbfba3b8c72ada2e",
"index.html": "93367f183f7688046ec26560fb9a13a3",
"/": "93367f183f7688046ec26560fb9a13a3",
"deploy.py": "021e9c6cf2950fd996169bc0ae8829bc",
"main.dart.js": "5d4072c87fc173586e076c98753e434a",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"favicon.png": "bce2faa7456243a29f281a1290624351",
"icons/favicon-16x16.png": "9f0f4a8f8ea978ba0c316cf7ecee2a01",
"icons/favicon-144x144.png": "2ed5ddbc2c674313ee5bdaec0f3191f2",
"icons/favicon.ico": "bce2faa7456243a29f281a1290624351",
"icons/favicon-310x310.png": "58d9aa39e314f4ae70a6c4596389aeae",
"icons/favicon-128x128.png": "b45b422d9b851ba73876f181ae2016a7",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/favicon-512x512.png": "0bd2e82dc8623787266c61a52ac557bd",
"icons/favicon-114x114.png": "3006f19f537c336bc32208d65cfc454e",
"icons/favicon-70x70.png": "659db316e7c20d7c0a0efd7bd2ca7e2c",
"icons/favicon-60x60.png": "b07d6e5bcd67ce911b0bf24a755dfe6d",
"icons/favicon-180x180.png": "6c193b0b2ef778771343a82391c9d542",
"icons/favicon-96x96.png": "bbf25df8104be5e9cae6e929ba010e00",
"icons/favicon-72x72.png": "63afe9fd6c68dd2f2321200475549907",
"icons/favicon-152x152.png": "5f36db0ccc4aa9b746bbac3900468c29",
"icons/favicon-57x57.png": "a87003ac0a78e5210c6b4516e2f771bb",
"icons/favicon-150x150.png": "ee5413de4fe9d7fa3270fd72a93d5ca6",
"icons/favicon-120x120.png": "0aa5dd7d3973a6b489cf91f3da48cd9f",
"icons/favicon-192x192.png": "e89ad086b27e80b8782ae2657bb2d43e",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/favicon-32x32.png": "e5b5000fee588118025ff0950344715b",
"icons/favicon-384x384.png": "5a71eeb5bf0d49f5091cd188a013dcf9",
"icons/favicon-76x76.png": "8eea014d3930a8513dcf2ec5d4e1bcd8",
"manifest.json": "c9ea35fc83b770529d80b2be722b5223",
"commit_and_publish.sh": "9956457bebc87235cf8b5d027760ba6f",
".git/ORIG_HEAD": "b4472f39c967c21ef3b0a52eda075f3e",
".git/config": "cb6686b9f9fb3031aa264af16db90cdd",
".git/objects/0d/a597bce4d1e32b6e531cd2307491995f3f3111": "af6aab3702f96b2cfb4a88ee1e06b554",
".git/objects/95/e41e38c7c7c1fbbccb55a0e1685132183b8285": "07d5d4fa5b5bfe7faa636fba2484cd82",
".git/objects/95/6ab2e2ff77bb71465ea98a8073a062bf0ae2ef": "98e4381c57fd73ba6c4601283e577a0e",
".git/objects/59/1957dfe0f55ecb23b92ed90c384e882f50cc52": "1b76c59fbf7a765ced9c7edf10632fe0",
".git/objects/0c/f723fae9b64d42414fd14b452106e0a3983545": "d0bad7acdcf85b741bd49a22c8d81430",
".git/objects/50/0f8dab3b81447886d140bce99fa52564f57b19": "8cb56c2f2bad72ad4e0aaf2b51993a8e",
".git/objects/50/b72609024c3ee98a0719b233e8d3afaad3f229": "35d7437da2c8c888537e7b8fbc9faabe",
".git/objects/57/73b9f97d2c98494f2ce03e8b716c7805b3afae": "b674c9abb8c789afac350ed881c86ef9",
".git/objects/3b/b05422d21dd6bc3bdef1f99f8e982d9c9f715d": "880b85a7e4d79e42c747e15029fc240e",
".git/objects/9b/f4964ba64920d4433d5b2f4065357645f67266": "97a6763511f19dadf89b9dbf9b21bc02",
".git/objects/9e/1e0eeeb121eb4a95dbf553666b0b38a15759ff": "44fe6b6bf6554ecd2e5a6443190d8e91",
".git/objects/9e/ea2f9f8fb72756783e68b1724dd8f08a71fe92": "2fe3bd2498215ad5f44f8cab4bcedaec",
".git/objects/04/db231dc29631ee70f7678f6a182c644b5f5569": "c38738391c041761c707cee5b888c99b",
".git/objects/04/e203fec8d14c1e11efec4d643dcc12d699f836": "7b7b7162b6eea13a2d5089f732a5d430",
".git/objects/04/141162ef9e597c9897e6afcb6e26d064ce6877": "5a0f36edd5a5d3ff42c84aa2480e5c12",
".git/objects/6a/092667ecc30434c032818b9080c2b6d0be186a": "2e7f3acd7f12703e8ca8b95422ac4942",
".git/objects/32/07bb90a4b603b1423121cc5548307e8e08cb93": "d88abb81d6b9c662c67182dfe43457a3",
".git/objects/35/9102b38f6916560ad70e659ae632ad06be67ed": "342499052f9455124a10f496bc4701ad",
".git/objects/69/752ad6d7ca530de0c015bd37747237a693fa41": "77994ac28513731208c53c6e0fc5a0d6",
".git/objects/56/d851d8f8bd61c0f5a4e0f62f5f35ee3908d6fa": "687ec8907db8319d1f3af80919ccf049",
".git/objects/51/f661e0a3f83aa9a1e57a1548541ee7266f6458": "f2e5d8f46d4107687a9258e982a4a204",
".git/objects/58/32b0422b31ce68e20aa5e3155c1a9e3a21b64c": "9b07db98c48948389b496d54c2faced4",
".git/objects/58/4bf80cb4224cdf585cab491e826774c7a89993": "2579c9bc3da72eb42d8bb00ab6519055",
".git/objects/93/02a8fbd5f8800d4948bd179d0569ac1ab6c3d8": "71fccb165c541247909ad7863c3f660d",
".git/objects/94/108e67ea6eb17880773b3980b513afbc936c5b": "ad7da59c3e0f6a82cdae3a61eda24472",
".git/objects/0e/478d9e5519df293c70011a44949901e0a96785": "f680b066c4fcf4b74f16d76eb4b20ac7",
".git/objects/60/2234b76bafe9b596f51b505ec2595c1a301c4b": "f2ac33a3ab3ec0c4bc7cbd5998238f60",
".git/objects/34/75e81943e02307c1afa5dd5804f9d24be08bf6": "3583b12d85894e636378c090982606c4",
".git/objects/34/2995190f9ba0411929347e73cfe38dad5c5680": "ed106974838b25f2d53c66bef17c0ba8",
".git/objects/33/330e40ee91e9a8bc3fcca8cffb7035a3ffb029": "5946f0f72819e8db9b47222f1eae0402",
".git/objects/9d/a8ebcfb353367089cc04cea832c9f9de701e80": "0430ebc63b8c7dadfb9aa4a087a007b3",
".git/objects/9d/be77a3aa79d66fdd63728a2a4a91b677ca7fb1": "d80d89ef54b8e79866e94e05104a35b8",
".git/objects/9c/95b15d5cad14b173d0d49bed6f15e34612283c": "be389338ef412f2a2885f8b53469ba44",
".git/objects/a3/ef4c41f534dd78a251afdd13c8eedbb5a54b80": "361d005990596052a0dba8b275e78376",
".git/objects/d9/f4356104c1b7e76a5f519b6c1ea45f0b2790e1": "a8f21ceb45f10164b0471534268039ac",
".git/objects/d7/74fba8f8483acbdccfee3cca03522a2c94fc93": "67d88ca0ca362ed74d15ac1795e03346",
".git/objects/b3/262d09cdbb7331c27d54bec18f30d70c24cc75": "8f37639ed8623510027a60b4183a1183",
".git/objects/b4/d2c262537c3fa72e83605c67c0739d99c954cb": "b645e828a36a3b4e4105e9e3688acafe",
".git/objects/d1/068e26b68f59b6facbef29469902128cc3f32b": "43008636ddb308a1325dc44697ec5d83",
".git/objects/d6/d235d7cbe1f5becaac28281da9b555dc9ce97c": "41f4abf3dc8cca0f3e0dcc951b2e9ca9",
".git/objects/d8/04b0c69d1c282515f336dec8d31dab2880d11d": "08ca1b37e8b03d6ea5456429bb841f8c",
".git/objects/c9/5cc2e09901c36fd9ce9ddd11876ea5bec10536": "9a7395b39198126588280339bc6bf585",
".git/objects/fd/16abd1fb904c8175073f4ed5b9cdeb54d21cd6": "ea885f848718fecc81e1223afbce340e",
".git/objects/ca/64c014dad82228b5aaf8fcc0d6f24c68906126": "4e95075c629c74f98596a9d5f0b24e12",
".git/objects/fe/c2cf843ce3588ed37732a601c5cb138f3175c8": "49196a6a2562b9257ea7cf4c8368cc47",
".git/objects/20/2891deb994c3318aa1efaf393db07e7c14d801": "5393936415e4e65ffceec6ca528d0a7f",
".git/objects/18/923fd92158499fe42a72fd8df6b8a027eef902": "e01c4dbaf326cbaaec7a6dfc929993b9",
".git/objects/pack/pack-cbe0734f7ab748ae5917dc7d26718fa45dba7b7b.pack": "0a29de9c0828ed5eec0005b11d975077",
".git/objects/pack/pack-cbe0734f7ab748ae5917dc7d26718fa45dba7b7b.idx": "e4235187e2d3700266580859c62d2f8a",
".git/objects/11/a167ce8b4f489f77b27b90079257284a28bb22": "b18bef47076f537ed87baabf8c5d8286",
".git/objects/7d/4a17f447028320d42ba371714f33ea58a4a9fe": "4a1b1ae15d455783aca39ada999100fb",
".git/objects/7c/519161a2a29aea84a96ae2ac5ef22403f25f75": "de5dbb5004365631f4dc9e4cb26d3f4b",
".git/objects/42/fae89955f0f8d6ef9a5843cafce41c3a66c2d3": "533c667619dfac7ea36450e2817847f4",
".git/objects/89/8373870b8432d4b2265642acf80142aac496ff": "4da435d3ebf993f607f2d1f3312fa611",
".git/objects/89/4fcb3fb9d01024b1fc2de7362dee24b9aa5fa6": "e61ee13edcc1b1d31161281c07406ba7",
".git/objects/87/143427faebdfbab1d696f703ddf901b78044e9": "ee64d22f4483558f8e2a3b78cde53658",
".git/objects/74/806cfcc789cdb43fea135b02257b15445e50b5": "6a84b5f000d97bc227a4d151fbe871b5",
".git/objects/74/33feba71edfda59778d1a703aedbe787bf3f5f": "4d894ae3a1cf5f46eed5f69f72b93f3d",
".git/objects/28/aec7f8446a0a211665b3146639484284c67e81": "97a70ff31dffd356a3719e69507ba7be",
".git/objects/17/1acca7cf50e28892d1104e87ee3f5cffc5307d": "58b24c9b35a45b1ebda231f4f42d6a99",
".git/objects/7b/b890ba0299f1b5b2a48176b2df92d3db5f37f0": "32ad30200518a349273f4c87812ae208",
".git/objects/10/ca79b91d5fd99fc582e0565469e57234cf3ed3": "19007985fa2454ef68dfa5afa5d534a3",
".git/objects/19/0d4170d869534e23f6d4af1b88ef6361a81168": "392a29b9100d2eb3089c083051da6dc6",
".git/objects/4c/09793d8e07de97e1b6a65b46403d104a867c7b": "f1cc5f41707f0934fbb5ae790af7e876",
".git/objects/86/1093b8fb02cb8b4485814607874f6ae6338c37": "85bc92d376a361d49351fcb7dd195137",
".git/objects/2a/306eafceb30d8c22a48fddb63d4fcd685a6381": "096190c40d9a27a024518e9fe6403a5c",
".git/objects/2f/14945d8e064c69f136145d389155601a3f3cd1": "0f5dc166dceac94a36b1fbada7b14e00",
".git/objects/6b/092102c3efddcf01d26e0f73a773d07571f7d8": "d55be64957c2f2e265f30a9b5a0aba61",
".git/objects/96/da79c6c079299dca3fd0266b82c1c44f3275a6": "6c501394fb6f82b6d84153cc9ead680d",
".git/objects/54/885872aaf489e1b4a81196997b3e49b5d19013": "669b21e7603f744c5a1519b564c54602",
".git/objects/53/d43a12377b73ba47bdd6f28d6b3da92bd64b94": "07892e23e3e926601a340a33bf1a1069",
".git/objects/08/dcd0b739215fd8b4ecfe51fa8b6d8f918a04ea": "e11518da14df6a2068f9dec2b4341042",
".git/objects/08/75a230062794366cb959d5f25c52ee632ab93e": "255cf0cecc1ea2db7d3b29b4c478c867",
".git/objects/6d/90efd78c11addbfedd675b78a022b7b835874d": "3429adc871c6e122fa14d7f1e5492031",
".git/objects/01/a7033566c0dcabafca8fd3e439fc1d0817ff1d": "e3d16eba13d95e67ae93c81201e1e511",
".git/objects/06/b8fb4eab48718b5e6680f46bb62e49f0bdafae": "13f1e794b069ed1c6fdbd72012e2a93a",
".git/objects/06/d96c0073e1b3fdbbebaac4458671c01874e633": "ec5dd4600119107a511473ceaf292e9c",
".git/objects/6c/01a7b0869dae407813041574c2fad4e4175fa9": "5629f990ee2aa06ae914d2f6fa09daa3",
".git/objects/99/2b4e744bd8ca748f4e949d1d63462223879672": "c1173ccb0393fc737173bd61486add8e",
".git/objects/97/7f2fddafc0d38c2458c49bd5e9f5461baa3f1e": "94cdcd28f20ac2a5adf3007bac4dd891",
".git/objects/0a/6a0a2015a5e5a210c24b3c3b4359d822e99c77": "814d187105517549dcbab0dfd26f3bbf",
".git/objects/64/2d836da367edbf819eeb9e6980c7605882d51c": "e89ba4f352d1ced43f9c0f4fe41b495b",
".git/objects/90/a49f94e86b67a034d0d7d6189eb949b204702d": "8e0ff92313f4fda6f730c668820fa05e",
".git/objects/bf/62472c47a6441928cb15b886cb3ab9e8a959e7": "c3b53b1c7dc4cb2f75622194ea4f3072",
".git/objects/bf/59ab6e34eb7c15150aef68169411f3ba2741d2": "94b68d32198997f4fd3d4408b4469148",
".git/objects/d3/065124f507033836d2b2f8ae6ff223ceacbed2": "9805be9f03379c05ff079d59a4fd4c07",
".git/objects/d4/c60088568bc01460dc96755697e76b4f3fe3ea": "70b44fa81ff2f0f997b9541bddb585eb",
".git/objects/ba/609291df295f79c9731b52198fbf090da78dea": "96c846b52f835bbde9cb1979ea1a74fb",
".git/objects/dd/de9f7f399ea68706e19e7337ea031a1cc35231": "d33098843dfff98bd233b7de5eb087d7",
".git/objects/dc/1039c36d3a56eff09a7cba9eb46f0cfc79eb33": "2223d7c4cf8a30293892bc8c6ebbd09c",
".git/objects/d5/aade00c9092bb9ac393a8a928e2ac84d101ff9": "8a6c24973452b5d297823eba387e6fa1",
".git/objects/aa/a2449e2af442465b63b9767ac955f7489b5677": "a397a1f1ce0b4d541e571f6e0cd3153d",
".git/objects/af/7cbf6cd274a972167a739faee48f00cc164431": "f6e25434bd22148631d7043609c6c62f",
".git/objects/a8/f834062989cb80d08acc66bb96db36184470d8": "0f9edc3f468c8969b750ccccd06fe34f",
".git/objects/a6/19c97d952bfdf06ea8c14addc646b7186f985c": "c2231943f4dfc181d5a5a5975a5bdcbb",
".git/objects/a6/dfba1678f38f02eaeaa76a48fede9d21134e29": "c0d265420bdbf2381297b498b1f09ffa",
".git/objects/ef/198840f5b12af569512cd3ae5ae2ab9de54bd2": "2e4037bb99a942321af330674119df26",
".git/objects/c4/12d8333ebbb275e19cf96a87163e2235bd807a": "bf2b9c08f8c2e151662445e9a0575533",
".git/objects/e1/5ebdb1ad822e3c4bf1a40fefae9bf84169f3c8": "7e61b72dc03587bac3ddec0f38799fc4",
".git/objects/cc/97fbb18a61cee93a64c9268f9ccdce541169db": "8f85b46ca7bcde4a51afa020b2a055b4",
".git/objects/cc/a52e3caf4bd90e0f0543a75dd5bda6a5c082fb": "b3aca0dffc773cc2462f612653b08f81",
".git/objects/e6/0a475a9632ef4451c1843a0dd2c18b69680239": "b3c17a29df104ceb3bebf6ff05f30a26",
".git/objects/e6/4d5018489710d76fe7e6f4c385e3bd1734271d": "2315e52454fe5e91b49ecbdde798620d",
".git/objects/f9/89e8228a3e0d94ea1f00b8063f6ba68eafc30b": "a432cdb49abc03c2e0fbbebc90091922",
".git/objects/f7/823b1aa9009e2b3a7a00b27275903108659d45": "5d213f4203734ce08a468b6b11ee0495",
".git/objects/e8/9f2b7dba3d9c20fc67d40b29997d6f9bf5a219": "56cc9dfb24de45ba184545412a4fbcf3",
".git/objects/e8/e5c31f36c83e4c6809c07e4ba87ed64aba4eda": "54c1999256fd3325af238aa2251c7d6d",
".git/objects/fa/c378cdf18d633c727f45e169cae083f5ec3bc0": "ca514a46858bb644ecd2899b7536a82e",
".git/objects/c5/bd4be18a76e820b2602db88eccdb15bf3204c1": "cff81c75b0ba50d494b8628c00674a42",
".git/objects/f6/6707c848d951478a42bd64274df83869d376da": "32b0bc18ff80d55f59c8e076c793dac7",
".git/objects/f6/29caf61879bc23a05556696bd9cd352a18c61e": "37aefb8aa29da116e0597e9e3a40780e",
".git/objects/e9/a9bd2fb7c6fd934b333c9faced2a550d6b2e4a": "b121ef509e90e634e318baaa851abed6",
".git/objects/e7/61f3e48a14d2ee521be9345a3ea5c5b655897f": "d7d486b1ffa9aa9ab3155dd239e49016",
".git/objects/e7/2514b3e6e212ec8e478999c972ec3eabcc1e7e": "e02b1b58d412f786f396202042d6bb08",
".git/objects/e7/522bfcc26499a0f804bddf449cf4a6e9df9fe9": "6863e6fd92de2b3cee8285a7502d0eaa",
".git/objects/cb/22f635b750b9c3f92b3758145c52fd217d2226": "3f4b1fcd1c05335a9798160a5ced2ec3",
".git/objects/f8/231f7e2249c3da4ce202e0f34116353b5c3b52": "fb70c5517f8286507523ab06b29c7c17",
".git/objects/ce/05d5204c7eaed647a57009e39c1cb02a9fa4b7": "6eaa7093863a2b0868799977cacd3f52",
".git/objects/2c/670b95e664ca8c464b6e29594b31aeaa7389c6": "219e5e284559b12fb0d834afb90ce586",
".git/objects/2c/95443c8d7bb56ae4969a9477c3af0015173569": "84e3cf929c42ec11ec05ec8e217cbe38",
".git/objects/1b/d0780756b19c3e5bad298c0413d87a4b6ee3e6": "e143dda471dc51e6b0363e543ed6783c",
".git/objects/48/ed7987747b124d522c92c0d538546379b8371c": "9a15fb56490aa15b6a8b5700b980641f",
".git/objects/24/30e9bd6355169e6e48243346cb43d983ff50ec": "b199da9416f4636b867121b226bfcc3c",
".git/objects/23/16fd7cb662e334986de3a3cdfbbe5597197a32": "b3b7ec7ad516f862bcbb5a0e77fb3090",
".git/objects/8d/014e6ba1d3d5c8a4daca9db89e817608838d4c": "8686c0522dcb11b000c04faabed69dab",
".git/objects/8d/090c6cb977337a40920783f2e1a1774460337e": "e9a3bbf8fdd673208602ddfaec4286cf",
".git/objects/15/0d5fe8746960428cf9b188b5e1e7b83d0d5238": "15200ffdd72cadc9867649dda32a8812",
".git/objects/1d/1fcb8d9b3cc79c747f942b8060ee5a28563d13": "c58887b61f894a045292e6af9e9dcd72",
".git/objects/1c/ffe22ab150e9bc56524822493e404047f0768c": "9bbdec8fa2f20573bdb54de92eb7a266",
".git/objects/82/331ff38bb500c52ecca6825c897e162e37fc83": "241824af5354e84fc294a766df1eb72f",
".git/objects/82/9ae3f005ea1cb6823826c789fd54a7593d872b": "9443e338c065403b729c1d928a616103",
".git/objects/40/95587e4adac589296d159b54e5235ab5c72015": "8b898f32746f35af4a04fe4e8e1dd2d4",
".git/objects/2b/d2bff160caf89432b4267db00a3c3fc464a326": "fc13b9b5476739c4587c83c7052d3173",
".git/objects/2b/1d460e1cc8c45ed8f32ade8427f2850a06f0d5": "189ab079459feb95a4f50c2bfabe81dd",
".git/objects/8b/605f85d27b412e9a1811c0df84941a45449833": "5ad9a88ea0425841d39003c477ba5043",
".git/objects/13/fe1fcb3e15fd888f448f8dbc391c0468f30f07": "05bd7ca31fd2b872b83a29356e52ef6f",
".git/objects/14/40273c3bebf001c74cc57a9825cce04820ac72": "49c5f400a869a834d33be6368bbea7c8",
".git/objects/14/474a7d2eb5ed996645ae45b4f6c59d5148834d": "b97675cbe7379dfbf9bb4691088812a3",
".git/objects/8e/55094c7bb94047e7515bdc9566a73cceb89067": "49ede794428afba616a5c115a6a92b22",
".git/objects/22/25131184ca81892133081177e6db4b37429d72": "6e079069df29d7db624f07fe64b2af68",
".git/objects/22/9408f4ddc2796c7e33a3c3b9704b9f248459aa": "1f1f7b98f9b6353eef954332037ef307",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f33cfbf0dc96b110c84bc772b58bf7d3",
".git/logs/refs/heads/gh-pages": "ed52afad47db275d4d597c0891e80119",
".git/logs/refs/remotes/origin/gh-pages": "c85032443e44b5b6111e10e39e1ac40c",
".git/logs/refs/remotes/origin/main": "5868d210d206e7b247a2977910287811",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/gh-pages": "962e3e8d4035b9f9dde980d3c9203344",
".git/refs/remotes/origin/gh-pages": "962e3e8d4035b9f9dde980d3c9203344",
".git/refs/remotes/origin/main": "4955aa56083d12666e1ac281be046c8e",
".git/index": "6be015c1e604184b36383ccbe1dce086",
".git/COMMIT_EDITMSG": "591876b4db47d56b4e3b40ece2106bd5",
".git/FETCH_HEAD": "391f5589a4c0cef4217199a83f0fd0c3",
"assets/NOTICES": "d71451107820984ccca30f3a3217238c",
"assets/FontManifest.json": "acd331eca4a55f9bcdf4c559856875ca",
"assets/AssetManifest.bin.json": "18f1f7078ad8ab5a40b32e10e0c84ac0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "5356eaa0217dbdd438745ec58dab8512",
"assets/fonts/MaterialIcons-Regular.otf": "fc8be53cf9f038fc630cfee28e382e6b",
"assets/assets/images/border-beuty.png": "36a76a424d4a0c2ceaf14a8481f58b0b",
"assets/assets/json/songs.json": "61d5dbf060f44f4a348dd13ef0a91aad",
"assets/assets/json/rus_word_2026.json": "fa055f2e3f2a064a3de28c0c74ae8cd9",
"assets/assets/json/rus_word_2025.json": "b8631aa040e259c80c47fb70eca4ef14",
"assets/assets/fonts/NotoSerif-Regular.ttf": "a31fcddc07198b80f1af9a9404c16d71",
"splash_screens/iPhone_17_Pro__iPhone_17__iPhone_16_Pro_landscape.png": "4ee404bf1ce2de4290e2dfad26ba6325",
"splash_screens/10.5__iPad_Air_landscape.png": "4f94f8626ff79677aca8c5a802a6dce3",
"splash_screens/iPhone_14_Plus__iPhone_13_Pro_Max__iPhone_12_Pro_Max_portrait.png": "d0d018d570d93315c3c56aac4378ce62",
"splash_screens/icon.png": "9b36add2b7c18c844af038766bdec269",
"splash_screens/4__iPhone_SE__iPod_touch_5th_generation_and_later_landscape.png": "6bba583ea9325463c382bb064884a143",
"splash_screens/12.9__iPad_Pro_portrait.png": "34078a2750f5a481ff5d3b3837801814",
"splash_screens/iPhone_17_Pro_Max__iPhone_16_Pro_Max_portrait.png": "6a1506e34218bc56c0499bf5c4fb3b07",
"splash_screens/4__iPhone_SE__iPod_touch_5th_generation_and_later_portrait.png": "882507be85ee792f46a9e0c73dc54c1a",
"splash_screens/8.3__iPad_Mini_portrait.png": "033931ab302b91320323e2573ccf80ec",
"splash_screens/10.2__iPad_portrait.png": "0ab07a063842f5661dda0a61d4a0f491",
"splash_screens/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_landscape.png": "3e527990a9eefe8d66a29c8d176b6c45",
"splash_screens/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_landscape.png": "301a3680d5d04818d6fea1eb831a45d9",
"splash_screens/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_portrait.png": "efcf20ebb227c979030a6895a08ee8e2",
"splash_screens/iPhone_17_Pro__iPhone_17__iPhone_16_Pro_portrait.png": "401cdd5dd5e97ffc33c76732b04e4fab",
"splash_screens/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_portrait.png": "b86c9dfb719e82637f7fa80a3738006f",
"splash_screens/iPhone_14_Plus__iPhone_13_Pro_Max__iPhone_12_Pro_Max_landscape.png": "c77c3d0c4ece271452214aaf5801ca44",
"splash_screens/10.2__iPad_landscape.png": "5881ddef9071283548ea4a6db239218e",
"splash_screens/10.9__iPad_Air_landscape.png": "32eeeb12648ccc7c3fdfd82151bb738d",
"splash_screens/13__iPad_Pro_M4_landscape.png": "86e56fb2267e39a21f0b35046d62569e",
"splash_screens/iPhone_Air_portrait.png": "f3f3c46d2999f6f50e7aeb26db419e37",
"splash_screens/iPhone_16_Plus__iPhone_15_Pro_Max__iPhone_15_Plus__iPhone_14_Pro_Max_landscape.png": "7300a6d964910a072843fde78eb5a367",
"splash_screens/iPhone_11__iPhone_XR_portrait.png": "d7d2e46fb3708dd9664aedc4a1838c36",
"splash_screens/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_landscape.png": "3878031e32a551ce47fd3f56c1d879e7",
"splash_screens/11__iPad_Pro__10.5__iPad_Pro_portrait.png": "f94abdf612954efe3bac927c1d920951",
"splash_screens/10.5__iPad_Air_portrait.png": "1388da54c37e5a4f1481c086e60aee01",
"splash_screens/8.3__iPad_Mini_landscape.png": "0c35acbed00b9f03a1c0fe91a8e63945",
"splash_screens/iPhone_17_Pro_Max__iPhone_16_Pro_Max_landscape.png": "3b775970e9d4dace5dd0bc3e6faabc26",
"splash_screens/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_landscape.png": "7d45c8d611889cbf00053e8df8dcb750",
"splash_screens/11__iPad_Pro_M4_landscape.png": "b61a9ab4ab3f441d71f205e9de9e6b75",
"splash_screens/11__iPad_Pro_M4_portrait.png": "a4d2f128b2daca0715081d4d6d268067",
"splash_screens/iPhone_16__iPhone_15_Pro__iPhone_15__iPhone_14_Pro_landscape.png": "7cf6bc7326e0ef96de89fbbb850493f6",
"splash_screens/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_portrait.png": "3387e86476993af2961ec127019ace65",
"splash_screens/iPhone_11_Pro_Max__iPhone_XS_Max_landscape.png": "9d5cdcebb3c1b59bf87895f908da782c",
"splash_screens/iPhone_16_Plus__iPhone_15_Pro_Max__iPhone_15_Plus__iPhone_14_Pro_Max_portrait.png": "24c66583be8a5dbb3477da39c4336f6f",
"splash_screens/10.9__iPad_Air_portrait.png": "374cec4f2284477edabf4e52597c9775",
"splash_screens/iPhone_11__iPhone_XR_landscape.png": "613e77da2898644fd6d213c2ecd4887b",
"splash_screens/iPhone_16e__iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_portrait.png": "b8e1e49b41f596d44174ef8cba2b238c",
"splash_screens/11__iPad_Pro__10.5__iPad_Pro_landscape.png": "1f84544eee79f83141556ce1bd6d772e",
"splash_screens/iPhone_Air_landscape.png": "88d0a9c45be6c916044634ca4396c9f1",
"splash_screens/iPhone_11_Pro_Max__iPhone_XS_Max_portrait.png": "b52c02a0d0fd8c9df556f93fe102f9e9",
"splash_screens/iPhone_16e__iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_landscape.png": "6fd43e6864e11cbf169a6cca4b2788a9",
"splash_screens/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_portrait.png": "3dc4ad79e06fbae521266c7b41e8992b",
"splash_screens/13__iPad_Pro_M4_portrait.png": "cc5946a84e5db2641a07441a03f992a3",
"splash_screens/iPhone_16__iPhone_15_Pro__iPhone_15__iPhone_14_Pro_portrait.png": "fc906e56a56b9671578add7c0693a63a",
"splash_screens/12.9__iPad_Pro_landscape.png": "5f037aa44e8f24e9338c4b278200c04a",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
