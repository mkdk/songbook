'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "b032834d8086d4ee609c4bc87705b413",
"version.json": "79695e35e98be675cbfba3b8c72ada2e",
"index.html": "d4649cda56251400ecc1a711ee3a6e4d",
"/": "d4649cda56251400ecc1a711ee3a6e4d",
"main.dart.js": "ffec92bf9e39c057416fd1b970724611",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "306447d5a30a417ea192fe0d87e42e20",
".git/config": "eb1817596a5b6b1a4c23fc70bc985325",
".git/objects/61/ad2305c111a294cc6fb1c43424d11d64b3c829": "14f5ed22b90f9298b5b0a67d1a1652b8",
".git/objects/66/9ae8f29a6e36984d31eb6579534c82d0c31a0c": "fa20e1dc72d699775ec63f0ffc9ceb90",
".git/objects/3e/d0ddd7136a48520910e7e4bf665362facd60d4": "c8322669a78b5f07c75b1decdc05718d",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/69/d36433df2ce7764d0f308fb23a4b02c77fa865": "7c9440dd9084fee0eb9447db2912937f",
".git/objects/56/85f9ba3beeb9b2ce9d378e6898ca53257b968e": "955f351d050d2f3fcd316e2333a56863",
".git/objects/67/b4fce51d7f3a1e3caddaea87b32df62ebe7818": "c0e809725844e8058d5f4c91f9b88232",
".git/objects/60/0bd3d01d85967c57dc51cc2a9ce0a2009777e5": "b521c40213bf522200485ac6d4ad150d",
".git/objects/34/b6d5dfe36c9ee0cc3083669551bdff99716f63": "d7868a896ed6a1ee7bde580b6c1b9b92",
".git/objects/5a/1e4305834a54c36c23bfaa104fbf4a010afbd3": "0a558c58623cce53c9b7c910435ebdf6",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/05/b8d5a1d0c46af301f20c4788186cfe4c938a1d": "1c398ee9f0a25ed37f77f504586697b7",
".git/objects/9d/080aa8be55a6945a2c7e96ff4278968c7994f2": "86f93388b1f56ad5ba92a5fd87f5e992",
".git/objects/9d/7d61f44d2746dbe7d27355000a5bb30fb98392": "79a36434a55a14d12fa852a5fb2a8d68",
".git/objects/02/a011d6d964fade2570f3b9404696b663d9f9e0": "a33e9d4311b8697907bcb99647688268",
".git/objects/a4/985ed56e4ca644b1c2fe3acaa15c09b28d53c9": "89d0346edeecfb91b69232d05a48de2e",
".git/objects/a4/007ef342be6c9d92ae5c9b7e9904e11390f587": "1d43fb57c714b06e3bce32c684bd0a5d",
".git/objects/a4/e41655410f6881cdf6d2c23b75b0e723edbc21": "c058625522d212ac9c2927e6f57da05f",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/ad/8536016f2afadc26893f16adebac738a834942": "1f18d3576ee34084c4b4889bab8aed57",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d0/79f0c9f6775f00184ce6c0857c90da29db175c": "2081e0cb91e0f440f1b0666e68bf539b",
".git/objects/df/1ebc41ab9ededc82fd782affbd3d97f6bdb2e4": "2d7f705e1f52ebdb05c2e816f38ed30a",
".git/objects/df/7acede74f276961517bcdffb76886a1b62ad5d": "fc162733908815350ed6783c3daba294",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/bd/6c40fd5d26b11ef8f1e98fb30da9aa98cbea42": "e0c6fd5a6d690e7407e42e0119776712",
".git/objects/d6/4971e058fc2fcabb930395838175f438ba4367": "409a1528eedad898370f8ef25557f51a",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/9a14c66fd8a777a6c203a433e207d50af91fab": "e7f4d7fc7ff594782a3117d723a915e0",
".git/objects/bc/3efa8d9221c87c2b68c298034ea53e351edf05": "82ec88a07d93a649321d0350aaeaeaef",
".git/objects/ae/7b09e2708752fdcde435cbad0a1b3d7cfbc107": "37887be7839d4235bc44467607ede827",
".git/objects/e2/6ec8ef5d98306914a33e6ac65bc8a2b7bb6d50": "4e90b7134a3478363b8c32b13144f4b7",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/c722b80049cff8b80fe51dca952d9756b694f7": "0cf3236fa29cdf0811c7cff09c1b747b",
".git/objects/ee/fc7dc5d2400ea83b60728e4190d703355a23f5": "db428834cd6a143bfa70a26db6f83e6f",
".git/objects/fc/936c99f858a5df557dd5f9e60be60b282333bc": "3713a0564dc32e3c3184cebc818d4e4b",
".git/objects/fd/af9f0ee96131e6e76591bc5393c5b0b4084df9": "1a8b46dbcdac34213067702c3ee382a3",
".git/objects/fd/e671a48ad1dc421dfc36d22e5ae62bd09e7ab4": "b1f845a179f376c5b063a237523ee02e",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f5/2f77a1d2ccf62dfa30a55b4accc868b0d81195": "2b03de2902dd859f1fe0446abaf23496",
".git/objects/cf/f07b6b245bd4005519befc2b2d538e3a47e5cb": "0af9666eda55df0558b897ee60fbf74e",
".git/objects/ec/9d7f00c072b9e757e83cbd64ee115c6d4ec45d": "58cc1abd3cd014a2f7114a92ad592648",
".git/objects/18/60efc8def6a7bf4eb00118d407174da18e5b90": "159fd72507bc9298e5184e9efb08780f",
".git/objects/11/3aab3324f621a19a6c50f25256d96dd9dc10de": "8351214465c999971833fb53e1744e0f",
".git/objects/7d/79db29c119dbd3bc6e2577dff2a86ae286fc9c": "4223be58e3039a45acc30250e4782462",
".git/objects/1f/1ebab340c62a4e6f59fdbd87c769dd2cf0bb71": "733a3a5af647a2f04d533f8759e7a94d",
".git/objects/87/ee9fcf20acf3dda6daeb4af009b657a9af0d5a": "10821317cace54dcf66946f9c634b304",
".git/objects/74/c6f19095c07cca04ebe9bd44311a5224af0f57": "9e8cd2457bbbd847f1e664a7c3ceed01",
".git/objects/17/4a8cf40f009a523132ac61f6fbfa8b6eaa2619": "fab57d33fdd197479756f31643bf2191",
".git/objects/7b/55fabf1e1b3ecc2dd44265beabd939f8bcd2ae": "49f9feb7c2a28c2eb3aea551525cbcb8",
".git/objects/8f/c8be62f202c40e7d3e2e16242fb065cfc4e1a7": "6fda1b80da67a8d96186cf8ab8b24087",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/ff6240189a8091e455872caaf31901f244ba2e": "21da354299973c3a61549d13458c7431",
".git/objects/4c/ad65ae00742f75d79d54d924e121e6ef4d1be9": "237dbc98d0bb7aaa73a4173556efeb5e",
".git/objects/2f/7725ddfed2b3c4bd58f6a1086b7acba46114df": "28bbaaa88004bb22c7f591efefea889a",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/5980fbe47704f51075dc4ef17d73b0095ca701": "f837f72450c19209789c3869b1308f53",
".git/objects/88/2a231917b5eee8839402b5067c57608d71f943": "d5a9b906c3955dc9d1628cb0668b198b",
".git/objects/6b/55fe88fda7eaf1bf767cb437cfcafe5ae624cd": "8a504353504e9fa31057b7fd8143fbe1",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/38/02424650af8e6dbeac2b726a9726a220e56a16": "4123c438d1919a959ec9e6e2da7ba1c6",
".git/objects/38/ecef1b0efef965f4b1328934d1127acede0be7": "eb9206ddd5ee2417613d0befc6d77cc2",
".git/objects/5c/66482cda887a6b21b20241517e9fb019691ffc": "50f0d49e01061cf2e1d53c25af67941c",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/54/a57b3183f4609db32be41c3c811c8c44743967": "353d67ddc775e29b28313d1fc16a42c0",
".git/objects/98/001f8429113eeb6b474640d286fcdac3e6d09a": "b0cef4b6ce642b182032b96bf952b19e",
".git/objects/30/7d438b83a03040d1692fe339f673d8e5d56280": "c8f0c478128086a8a19e45bac5af7075",
".git/objects/5e/08daa52f8569445c2afa1f91cfa9035ec13216": "708cfed1de245f378356b931c55c29a8",
".git/objects/5e/fe8f66861b37747f82d7522f9f5d09a6501a30": "e8ac72efc25747ca1e14c1c970943fb5",
".git/objects/6d/ee6286382329c78736ace25e4c7da90197c931": "8c379f6d3df554c9f9c883a4a6e72c1f",
".git/objects/06/1ca95e54bae6561feba5c6a6e36073a5718e00": "f8142ecbbf23bfea73eccdedf3f972ce",
".git/objects/6c/b6f498fd25534f77484732112196d58e7f7459": "abfb4318e7e2b97df82be17fa3017509",
".git/objects/99/7b93d338d58ef924ae41b5ef296246b09bbbc3": "d08a2f9920b3a79d02b54422aff015a0",
".git/objects/55/ec451a4a56ca264da31b1840ef487636d9be23": "4900bb0d1ed17615dc365e113a814d52",
".git/objects/63/5223858693a276b9466ed9a619905bdfc7f5d6": "ec9d3b537c2bc55283a78d04d54e76c7",
".git/objects/0a/d7a4bec5dfed4a73b78e974f2bdb9b71c8a6b1": "4cc3266040f27b0359f9f70657a4f7f5",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/b8/6e2337e0f5f3f20a858ecbd99cf899e0f9a1e2": "79dc34384bedadd0e4d5689893868896",
".git/objects/b1/a08f4d485b7caf8df674f42d04dcf21c956441": "9151fb3a80e0ba498e239e044c27b953",
".git/objects/b1/b0844fce41e99ba3904607148da30e0931fb4c": "aa249bcd38a2ecab61cf4c930fbc4041",
".git/objects/d2/c552d097266d3fbea333b26470e2c04c812282": "41c00f1acaf8be574bcaf5e404065309",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/b047f164f2011b11e81082f1ce36b9937a5cc5": "0afec534d11712b1ad8168f00bb69e17",
".git/objects/a8/c95dbf1f0ba2c5546e50b74954b70505432274": "4a3fd09f35c945106c8cb64aa6ddb1ea",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/de/0fb49984cc437d95946e2588c08aea655cacb1": "7304cea23c90da6cbc44c587b9ac4378",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/40c9ca2ddb6a03edfd08c733c2cbc347549829": "c9c3add738b2f5dd33521351901958e2",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/c4/7aa0694f3919c1e3d225ff905b6f2edf9c9c6a": "35f9025cd7c054c9f610b0dd51b2fb56",
".git/objects/e1/55899583fcbd68aeec4b43428df271488577ce": "6bbaf40996fbd9b11343cad2c93f909d",
".git/objects/cd/48e0daa33855ec883d206833303d87dc0027f8": "9a704a599f42b9ea0a6446aba9240fdb",
".git/objects/cc/0cc20b4de4c260a179a0263d856df9cfedf357": "ae4945d570b11b726997d588ff2b5c45",
".git/objects/e6/cc1238dbc0b7ccf7f9688c5ed49177fcfbf8c9": "9cc5a5efdd3c45e2b3243d052fb3b9f1",
".git/objects/f7/1cfe1b0bb9ebc82e9ee0d4441391f9bea30cb5": "5e96e993a0f854e1475d435b57021104",
".git/objects/ff/8ceb7aaf709822799a6368628775ea8daae37b": "a471fd89ac8c6b1fe7942e8b1ca90fec",
".git/objects/c2/6595897da11284429e51ae2f338518620ed981": "55ed2e0b150f3dd044adb87296053776",
".git/objects/f6/55b84626db3f1a79351e2dc479018b014dbd38": "0fcd971f192e773909ebac723de6cbea",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/e7/915e6a0128e8d32ad72ef41eb17cc89add00fd": "d143fc624dc4531bc36db8fa61d1ef25",
".git/objects/cb/6b7a6137f8e01d986294349a6bc2fadc6d1849": "9df7d09456db8013ef6b3c4b23309f7a",
".git/objects/e0/f1e868fd3ef6ca7d9139cb051b07ea3f3ae81a": "267126ff505131a1ea845284f3066860",
".git/objects/77/903c7e3a56026858ba7785b28ae734b20dc3b2": "ebf5fc41dc85b63a7c90430adfa4d8a5",
".git/objects/1e/2cce731aaa677ec17cb6c7a1712ffe941bd1c7": "05668886f1d9e9a5aa230b95ee8bb5b3",
".git/objects/1e/0b1197900233ebed4966ae01203bff0f6a583c": "7d81e1b049987004a5e54dab7f73a0e1",
".git/objects/84/fd99bb059b049b191cb54a091b2d3b86bcbff8": "9202b88669710be5e71ea3989dda2681",
".git/objects/84/2daf4e3b270502aba2077e12d4a8c577d11784": "d56aca5f0044158b369bfc0b79717595",
".git/objects/24/8e89c6e5c2fbb0810f95d6ef1f90a0147c0558": "bbc810563f09c23b0c68c54c3a2481c3",
".git/objects/23/52a1d3d9fffdb97d8c051e892c6cb88b34c4d1": "395ede902b0e0f565c925501bb27eeb1",
".git/objects/85/c32ba6869f55dd562564b1417dea9fc5ea02ca": "66176e1db18fb297ac84705b2ab6ef93",
".git/objects/85/f14887d36d9c32aadd1e6bc05e0e666a6a21c1": "882cdb66bd32909dd72e16db67dcd277",
".git/objects/1d/468b85698a60041b450286f31b3264b3bbd6f7": "5c8c497111befde32ac151f14cf92f85",
".git/objects/1c/deb9c58500a712cdb732d05abb73a9f63e22c8": "b0c0645bde54c4767c369d889e19bb79",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/78/629f3aa56e42dc4644f4cacd07752be27d8870": "8a0ad03a1e8993a6c30ea82c43c3fabb",
".git/objects/13/2e453995488573c55062143071a7ab9359e9de": "e40c8c38291c492035bb3b864e575c7c",
".git/objects/7f/31fb7de2db517639bc5bf53204dd2f9d966734": "6c69a76c9c7899d283aed9929f5ec1e8",
".git/objects/22/7d94f58425e6610b6a9be33bd94ad2ed6cf982": "d66ae6885513509c817a2919fdcae105",
".git/objects/22/ce0b1796525623550d9b0e175d6a73684d6846": "8337186a27782acbf3489f2a289d50c1",
".git/objects/25/d9ddfc8c37438b486da266e589727528f8c606": "ed94911c60608154137d0f91b3b8de3b",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e994be5abc4af3a62a1c82a4ff7a57af",
".git/logs/refs/heads/gh-pages": "e34d3fd2887e5ce8624f1a60c0d8ca1d",
".git/logs/refs/heads/main": "64595405eac681e5b21baa6e4bc6c914",
".git/logs/refs/remotes/origin/gh-pages": "56547d0e04eb4e2a54195744ff6546bd",
".git/logs/refs/remotes/origin/main": "eb88b176918d9c0400918b315ba04563",
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
".git/refs/heads/gh-pages": "ef333ca57ca2595289d14d978eda33e4",
".git/refs/heads/main": "4955aa56083d12666e1ac281be046c8e",
".git/refs/remotes/origin/gh-pages": "ef333ca57ca2595289d14d978eda33e4",
".git/refs/remotes/origin/main": "4955aa56083d12666e1ac281be046c8e",
".git/index": "0bf857faa1a57d6f3aff7cb299f5d03a",
".git/COMMIT_EDITMSG": "166d77ac1b46a1ec38aa35ab7e628ab5",
"assets/AssetManifest.json": "481e2491315e994467dfdc7b463e8c78",
"assets/NOTICES": "4477b183cd7d402b116e2e4e1c74bb4d",
"assets/FontManifest.json": "acd331eca4a55f9bcdf4c559856875ca",
"assets/AssetManifest.bin.json": "09ec8c631b4368f5fbf1d9eee6c1b4d6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "26e21f3d625e13c83139d9ad93b66b6b",
"assets/fonts/MaterialIcons-Regular.otf": "fc8be53cf9f038fc630cfee28e382e6b",
"assets/assets/images/border-beuty.png": "36a76a424d4a0c2ceaf14a8481f58b0b",
"assets/assets/json/rus_word.json": "b8631aa040e259c80c47fb70eca4ef14",
"assets/assets/fonts/NotoSerif-Regular.ttf": "a31fcddc07198b80f1af9a9404c16d71",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
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
