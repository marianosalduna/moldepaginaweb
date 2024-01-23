<?php

define("TITLE", "Lorem Ipsum");

require "header.php";

// Start header & sidenav links
$buttons = array(

// Define header link labels without dropdown menu.
// First entry is main link.
              array("Projects",
                    "Lorem",
                    "Ipsum",
                    "Dolor",
                    "Sit"),
              array("Services",
                    "Lorem",
                    "Ipsum"),
              array("Ideals",
                    "Lorem",
                    "Ipsum",
                    "Dolor"),

// Define header link labels without dropdown menu
              "About", "Contact"
);

$links = array(

// Define header links without dropdown menu.
// First entry is main link.
              array("#",
                    "#",
                    "#",
                    "#",
                    "#"),
              array("#",
                    "#",
                    "#"),
              array("#",
                    "#",
                    "#",
                    "#"),

// Define header links without dropdown menu
              "#", "#"
);

// end define header links

echo'<div class="sidenav sn_big" id="sidebar">';

$i = 0;
foreach ($buttons as $button) {
  echo'<a href="' . $links[$i][0] . '">';
  if(is_array($button)) {
    echo $button[0];
  } else {
    echo $button;
  }
  echo'</a>';
  $i++;
}

echo'
</div>

<div class="header h_big" id="header">
  <div class="logo" onclick="">
    '; echo TITLE; echo'
  </div>
  <div class="sh_divider">
  </div>
';

$i=0;
foreach ($buttons as $button) {

  if(is_array($button))
  {
    echo'<div class="sh_dropdown" onclick="">
         <div class="sh_dropdown_btn sh_btn_big">'.$button[0].'</div>
         <div class="sh_dropdownmenu">';
    $j=1;
    foreach ($button as  $key => $link) {
      if($key < 1) continue;
      //echo $links[$i][$j];
      echo'<a href="' . $links[$i][$j] . '">'.$link.'</a>';
      $j++;
    }
    echo'</div>
    </div>';
  } else {
    echo'<div class="sh_button sh_btn_big" onclick="">
      '.$button.'
    </div>';
  }
$i++;
}

echo'<div class="sh_text">';

// etc.
$fun = array("Lorem Ipsum Dolor Sit Amet.",
             "This could be a quote, citation.",
             "This text is randomly chosen.");

$r = rand(0, count($fun)-1);

$q = $fun[$r];

echo $q;

echo '</div>
<div class="sh_menu" id="menu">
  <div class="menubar m_big" id="bar1"></div>
  <div class="menubar m_big" id="bar2"></div>
  <div class="menubar m_big" id="bar3"></div>
</div>
</div>';

 ?>
