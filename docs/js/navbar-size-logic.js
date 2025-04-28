addEventListener("load", (event) => {
  onresize(event);
});

addEventListener("resize", (event) => {
  onresize(event);
});

onresize = (event) => {
  let windowWidth = window.innerWidth;
  let windowHeight = window.innerHeight;
  const rowCutover = 502;
  const maxSizePx = 810;
  let isText = windowWidth >= maxSizePx;
  let maxSize = windowWidth >= maxSizePx;
  let osOneRow = windowWidth< maxSizePx && windowWidth >= rowCutover;
  let test = 810 >= rowCutover;
  let isOneAndOneHalfRows = windowWidth >= 400 && windowWidth < rowCutover;
  let isTwoRows = windowWidth <= 400;
  let navBarElement = document.getElementById("navbar");
  let backgroundImageTopIcon = document.getElementById("background-image-top");
  let leftMenu = document.getElementById(`left-menu`);
  let rightMenu = document.getElementById(`right-menu`);
  let leftMenuStyle = rightMenu.getAttribute("style") ?? "width:temp;";
  let rightMenuStyle = rightMenu.getAttribute("style") ?? "width:temp;";
  let navbarStyle = navBarElement.getAttribute("style") ?? "height:temp;";
  let backgroundImageStyle = window.getComputedStyle(backgroundImageTopIcon);
  let margins = {marginTop: backgroundImageStyle.marginTop};
  let marbackgroundImageStyleMargin = backgroundImageTopIcon.getAttribute("style")??"margin-top:-30%;";
  let elementIds = ['home-', 'projects-', 'hobbies-', 'contact-'];
  elementIds.forEach(el => {
    let textElement = document.getElementById(`${el}text`).parentElement;
    let iconElement = document.getElementById(`${el}icon`).parentElement.parentElement;
    let textStyle = textElement.getAttribute("style")?.match(/display:.*;/g) ? textElement.getAttribute("style") : textElement.getAttribute("style") ?? "" + 'display:none;';
    let iconStyle = iconElement.getAttribute("style")?.match(/display:.*;/g) ? iconElement.getAttribute("style") : iconElement.getAttribute("style") ?? "" + 'display:none;';

    // for displaying either text or icons
    if (isText) {
      textElement.setAttribute("style", textStyle.replace(/display:.*;/g, "display:block;"));
      iconElement.setAttribute("style", iconStyle.replace(/display:.*;/g, "display:none;"));
    }
    // display icons in list
    else {
      textElement.setAttribute("style", textStyle.replace(/display:.*;/g, "display:none;"));
      iconElement.setAttribute("style", iconStyle.replace(/display:.*;/g, "display:block;"));
    }

  })

  if(maxSize){
    navBarElement.setAttribute("style", navbarStyle.replace(/height:.*;/g, "height:4em;"));
    leftMenu.setAttribute("style", leftMenuStyle.replace(/width:.*;/g, "width:64%;"));
    rightMenu.setAttribute("style", rightMenuStyle.replace(/width:.*;/g, "width:36%;"));
    backgroundImageTopIcon.setAttribute("style", marbackgroundImageStyleMargin.replace(/margin-top:.*;/g, `margin-top:-${10}%;`));
  }
  // aligning background bar size and icon rows
  else if (osOneRow) {
    navBarElement.setAttribute("style", navbarStyle.replace(/height:.*;/g, "height:4em;"));
    leftMenu.setAttribute("style", leftMenuStyle.replace(/width:.*;/g, "width:64%;"));
    rightMenu.setAttribute("style", rightMenuStyle.replace(/width:.*;/g, "width:36%;"));
    backgroundImageTopIcon.setAttribute("style", marbackgroundImageStyleMargin.replace(/margin-top:.*;/g, `margin-top:-${20-10*Math.abs((windowWidth - rowCutover)/(maxSizePx-rowCutover))}%;`));
  }
  else if (isOneAndOneHalfRows) {503-360
    backgroundImageTopIcon.setAttribute("style", marbackgroundImageStyleMargin.replace(/margin-top:.*;/g, `margin-top:-${40-10*Math.abs((windowWidth - 360)/143)}%;`));
    navBarElement.setAttribute("style", navbarStyle.replace(/height:.*;/g, "height:8em;"));
    leftMenu.setAttribute("style", leftMenuStyle.replace(/width:.*;/g, "width:40%;"));
    rightMenu.setAttribute("style", rightMenuStyle.replace(/width:.*;/g, "width:60%;"));
  }
  else if (isTwoRows) {
    backgroundImageTopIcon.setAttribute("style", marbackgroundImageStyleMargin.replace(/margin-top:.*;/g, `margin-top:-${40-10*Math.abs((windowWidth - 360)/143)}%;`));
    navBarElement.setAttribute("style", navbarStyle.replace(/height:.*;/g, "height:8em;"));
    leftMenu.setAttribute("style", leftMenuStyle.replace(/width:.*;/g, "width:60%;"));
    rightMenu.setAttribute("style", rightMenuStyle.replace(/width:.*;/g, "width:40%;"));
  }
};