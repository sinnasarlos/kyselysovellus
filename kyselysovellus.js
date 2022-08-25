//Not correctly translated

import 'dart:html';

function main() {
  var kysymykset = [];

  var vaihtoehdot = [];
  vaihtoehdot.add({'teksti': 'Kyllä', 'oikein': true});
  vaihtoehdot.add({'teksti': 'Ei', 'oikein': false});

  kysymykset.add({'teksti': 'Siistiä?', 'vaihtoehdot': vaihtoehdot});

  kysymykset.add({'teksti': 'Toimiiko?', 'vaihtoehdot': vaihtoehdot});

querySelector('#seuraava').onClick.listen((e) => {
    kysymykset.shuffle();
    asetaKysymys(kysymykset[0]);
  });
}

function asetaKysymys(kysymys) {
  asetaKysymysteksti(kysymys['teksti']);
  asetaVastausvaihtoehdot(kysymys['vaihtoehdot']);
}

function asetaKysymysteksti(teksti) {
  querySelector('#kysymys').text = teksti;
}

function asetaVastausvaihtoehdot(vaihtoehdot) {
  querySelector('#vastaukset').children.clear();

  for (var i = 0; i < vaihtoehdot.length; i++) {
    lisaaVastausvaihtoehto(vaihtoehdot[i]);
  }
}

function lisaaVastausvaihtoehto(vaihtoehto) {
  var elementti = Element.div();
  elementti.className = 'vaihtoehto';
  elementti.text = vaihtoehto['teksti'];

  elementti.onClick.listen((e) => {
    if (vaihtoehto['oikein']) {
      elementti.text = 'oikein!';
    } else {
      elementti.text = 'väärin!';
    }
  });

  querySelector('#vastaukset').children.add(elementti);
}
