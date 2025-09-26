document.write("Mój numer w dzienniku to 4 "+"<br>")
document.write("Pierwszy wiersz to:   13     Tak Nie 6"+"<br>")
document.write("Drugi wiersz to:          2     Nie Tak 6 "+"<br>")
document.write("ostatnia modyfikacja strony".fontcolor("silver").strike().fontsize(6)+"<br>"); 

document.write(document.lastModified).fontcolor("silver"); 

document.write(
  "ostatnia modyfikacja strony"
    .fontcolor("FFFF00")
    .strike()
    .fontsize(7) + "<br>"
);
    document.write(
      '<p style="color:#FFFF00; font-weight:strike; font-size:7px;">' +
        document.lastModified +
      '</p>'
    );



