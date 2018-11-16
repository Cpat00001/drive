<?php
//stick this header into every page with a driving category
echo ' 
 <nav class="navbar navbar-expand-md bg-dark navbar-dark">
    <a class="navbar-brand" href="../oskwiraz.php">Wiraz</a>
    
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="../oskwiraz.php">Główna</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="../ciezarowe/naukajazdy_kategoriaC.php">Kategoria C</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="../ciezarowe/naukajazdy_kategoriaCE.php">Kategoria C+E</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link  dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">Osobowe</a>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="../kategoria-b.php"> Kategoria B</a>
          <a class="dropdown-item" href="../kategoria-b+e.php"> Kategoria B+E Osobowe z przyczepą</a>
        </div>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navdropdown" data-toggle="dropdown">Motocykle</a>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="../nauka_jazdy_motor/kategoria_A.php"> Kategoria A powyżej 500cm3</a>
          <a class="dropdown-item" href="../nauka_jazdy_motor/kategoria_A2.php"> Kategoria A2 do 500cm3</a>
          <a class="dropdown-item"  href="../nauka_jazdy_motor/kategoria_A1.php"> Kategoria A1 klasa 125cm3</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="../ciezarowe/szkolenia_przewozy_rzeczy_osob.php"> Przewóz rzeczy i osób</a>
      </li>
    </ul>
	<a href="../kontakt.php" class="btn btn-danger" role="button">Kontakt</a>
  </nav> ';
  
?>