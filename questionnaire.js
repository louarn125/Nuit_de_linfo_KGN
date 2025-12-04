let ready_htpp_request = false;
let xml_doc = new XMLDocument();

function sport_pratique() {
  if (document.getElementById("box_pratique_sport").elements[0].checked) {
    let element_to_show = document.getElementById("q_sport_pratique");
    element_to_show.hidden = false;
    load_xml_file();
    /*
    for (xml_question in data.getElementByTagName("sport_pratique")) {
      element_to_show.appendChild(document.createElement("p"));
      }
    */
  } else {
    document.getElementById("q_sport_pratique").hidden = true;
  }
}

function load_xml_file() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      // j'ai un truc
      ready_htpp_request = true;
    }
    xmlhttp.open("GET", "https://louarn125.github.io/questions.xml", true);
    xmlhttp.send();
    xml_doc = xmlhttp.responseXML;
  };
}
