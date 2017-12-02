var scenes = {
  //Game Intro
  1 : {
    delay : 0.9,
    text : [
      ["You awaken..."," it is dark..."],
      ["The darkness is total..."],
      ["Nothingness..."],
      ["Just... ", "Nothingness..."],
      ["Even your memory is nothing"],
      ["\"Who am I?\""],
      ["But you do not know"] ],
      button : [
        { text : "Search", click : "nextScene()" }
      ]
  },
  2 : {
      delay : 0.9,
      text : [
        ["You feel around"],
        ["Your hands brush against something..."],
        ["Two small stones... ", "And a pile of wood?"],
        [""]
      ],
      button : [
        { text : "Light Fire", click : "flashLight()" }
      ]
    },
  3 : {
      delay : 0.9,
      text : [
        ["A fire roars into life"],
        ["It's light extending outwards"],
        ["The ground around you is rocky"],
        ["Featureless..."],
        ["Aside from your fire... ", " And a small pile of wood"],
        ["At the edge of the circle of light..."],
        ["To the East... ", "A forest"],
        [""],
        ["To the North... ", "An ocean"],
        [""],
        ["Everywhere else... ", "A rocky floor fading into nothingness"],
        [""]
      ],
      button : [
        { text : "Go East", click : "nextScene('Woods')" },
        { text : "Go North", click : "nextScene('Ocean')" },
      ],
      inventory : ["Wood"]
    },

  //Locations
  Campsite : {
    delay : 0.9,
    text : [
      ["Your fire burns"],
      ["To the East... ", "A forest"],
      [""],
      ["To the North... ", "An ocean"],
      [""],
      ["Everywhere else... ", "Darkness"],
      [""]
    ],
    button : [
      { text : "Go East", click : "nextScene('Woods')" },
      { text : "Go North", click : "nextScene('Ocean')" },
      { text : "Enter the Darkness", require : [{material : "Torch", count : 1}], click : "nextScene('Dark')", fail : "nextScene('DarkFail')" },
        //Crafting
      { text : "Stoke Fire - 1 Wood", click : "stokeFire()" },
      { text : "Make Torch - 1 Wood, 1 Cloth", require : [{material : 'Wood', count : 1}, {material : 'Cloth', count : 1}], click : "craftMaterial('Torch', [{material : 'Wood', count : 1}, {material : 'Cloth', count : 1}])"},
      { text : "Make Boat - 10 Wood, 5 Cloth", require : [{material : "Wood", count : 10}, {material : "Cloth", count : 5}], click : "craftMaterial('Boat', [{material : 'Wood', count : 10}, {material : 'Cloth', count : 5}])"},
    ],
    inventory : ["Wood", "Cloth", "Metal", "Torch", "Boat"]
  },

  Dark : {
    delay : 0.9,
    text : [
      ["You enter the darkness..."],
      ["Your torch lighting the way"],
      ["The rocky ground continues"],
      [""]
    ],
    button : [
      { text : "Keep Going", require : [{material : "Torch", count : 1}], click : "nextScene('DarkContinue')", fail : "nextScene('DarkFail')" },
      { text : "Go Back", click : "nextScene('Campsite')" },
    ],
    inventory : ["Torch", "Sword"]
  },
  DarkFail : {
    delay : 0.9,
    text : [
      ["The darkness is total"],
      ["There appears to be nothing..."],
      [""]
    ],
    button : [
      { text : "Keep Going", click : "nextScene('DarkDeath')" },
      { text : "Go Back", click : "nextScene('Campsite')" },
    ]
  },
  DarkDeath : {
    delay : 0.9,
    text : [
      ["The darkness...", "Invades you mind..."],
      ["It gets darker..."],
      ["And darker..."],
      ["And darker..."],
      ["And darker..."],
      [""],
      [""],
      ["Game Over"]
    ],
    button : [
      { text : "Exit to Home", click : "exitGame()" },
    ],
  },
  DarkContinue : {
    delay : 0.9,
    text : [
      ["You keep going"],
      ["A noise pierces the air... ", "\"Whrrrrgh\""],
      ["You don't know what it is..."],
      [""]
    ],
    button : [
      { text : "Keep Going", require : [{material : "Sword", count : 1}, {material : "Torch", count : 1}], click : "nextScene('FightSuccess')", fail : "nextScene('FightFail')" },
      { text : "Go Back", click : "nextScene('Campsite')" },
    ],
    inventory : ["Torch", "Sword"]
  },
  FightFail : {
    delay : 0.9,
    text : [
      ["Something appears in the darkness..."],
      ["Something...", "You've never seen before..."],
      ["Before you realized what happened..."],
      ["A sharp object slices across your chest"],
      ["The darkness...", "Invades you mind..."],
      ["It gets darker..."],
      ["And darker..."],
      ["And darker..."],
      ["And darker..."],
      [""],
      [""],
      ["Game Over"]
    ],
    button : [
      { text : "Exit to Home", click : "exitGame()" },
    ],
  },
  FightSuccess : {
    delay : 0.9,
    text : [
      ["A great beast stands in front of you"],
      ["You raise your sword...","And strike the beast"],
      ["The beast recoils"],
      ["Dark liquid spurts from the beast's wound"],
      ["and the beast retreats into the darkness"],
      [""]
    ],
    button : [
      { text : "Keep Going", require : [{material : "Torch", count : 1}], click : "nextScene('ForestTorch')", fail : "nextScene('FightFail')" },
      { text : "Go Back", click : "nextScene('Campsite')" },
    ],
    inventory : ["Torch"]
  },
  DarkContinue : {
    delay : 0.9,
    text : [
      ["You have crossed the dark ocean..."],
      ["Braved the forest of night..."],
      ["And slain the beast of darkness..."],
      ["Now... ", "you must defeat the darkness itself..."],
      ["But how...", " and when..."],
      ["Is unknown..."],
      ["..."],
      ["..."],
      ["To Be Continued..."],
    ],
    button : [
      { text : "Finish Game... For Now...", click : "exitGame()" },
    ],
    inventory : ["Torch"]
  },

  //Wood
  Woods : {
      delay : 0.9,
      text : [
        ["You approach the edge of a dense forest"],
        ["Your fire burning in the distance"],
        ["You can make out various sticks lying around"],
        [""]
      ],
      button : [
        { text : "Enter Forest", require : [{material : "Torch", count : 1}], click : "nextScene('ForestTorch')", fail : "nextScene('ForestFail')" },
        { text : "Gather Sticks", click : "gatherSupplies('Wood')" },
        { text : "Go Back", click : "nextScene('Campsite')" },
      ],
      inventory : ["Torch"]
    },
  ForestTorch : {
    delay : 0.9,
    text : [
      ["Your torch lights a path"],
      ["The path continues deep into the forest"],
      ["As does the darkness..."],
      [""]
    ],
    button : [
      { text : "Enter Forest", require : [{material : "Torch", count : 1}], click : "nextScene('ForestPath')", fail : "nextScene('ForestFail')" },
      { text : "Go Back", click : "nextScene('Campsite')" },
    ],
    inventory : ["Torch"]
  },
  ForestPath : {
    delay : 0.9,
    text : [
      ["As you continue... ", "Your fire fades into the distance"],
      ["You approach a small clearing..."],
      ["In the center... ", "A rock"],
      ["Embedded in the rock... ", "A sword"],
      [""]
    ],
    button : [
      { text : "Take Sword", require : [{material : "Light", count : 1}], click : "gatherSupplies('Sword')", fail : "nextScene('SwordFail')" },
      { text : "Go Back", click : "nextScene('Campsite')" },
    ],
    inventory : ["Torch"]
  },
  SwordFail : {
    delay : 0.9,
    text : [
      ["You cannot pull the sword from the stone..."],
      [""]
    ],
    button : [
      { text : "Go Back", click : "nextScene('Campsite')" },
    ],
    inventory : ["Torch"]
  },
  ForestFail : {
      delay : 0.9,
      text : [
        ["The trees obscure your fire"],
        ["The darkness is complete"],
        [""]
      ],
      button : [
        { text : "Keep Going", click : "nextScene('ForestLost1')" },
        { text : "Go Back", click : "nextScene('Campsite')" },
      ]
    },
  ForestDeath : {
      delay : 0.9,
      text : [
        ["You push forwards despite the darkness"],
        ["You can see nothing"],
        [""]
      ],
      button : [
        { text : "Keep Going", click : "nextScene('ForestLost1')" },
        { text : "Go Back", click : "nextScene('Campsite')" },
      ],
    },
  ForestLost1 : {
      delay : 0.9,
      text : [
        ["You delve deeper and deeper"],
        ["Pushing your way through the trees"],
        ["You may be lost"],
        [""]
      ],
      button : [
        { text : "Keep Going", click : "nextScene('ForestLost2')" },
        { text : "Go Back", click : "nextScene('Campsite')" },
      ],
    },
  ForestLost2 : {
      delay : 0.9,
      text : [
        ["You push forwards despite the darkness"],
        ["You can see nothing"],
        ["You may be lost"],
        [""]
      ],
      button : [
        { text : "Keep Going", click : "nextScene('ForestLost3')" },
        { text : "Go Back", click : "nextScene('ForestLost3')" },
      ],
    },
  ForestLost3 : {
      delay : 0.9,
      text : [
        ["You are lost"],
        ["The darkness is maddening"],
        ["You cannot escape the dark"],
        [""],
        [""],
        ["Game Over"],
      ],
      button : [
        { text : "Exit to Home", click : "exitGame()" },
      ],
    },

  //Ocean
  Ocean : {
      delay : 0.9,
      text : [
        ["You stand on a beach"],
        ["Ahead of you is a vast ocean"],
        ["Your fire is burning in the distance"],
        ["You can make out various peices of fabric in the sand"],
        [""]
      ],
      button : [
        { text : "Go North", require : [{material : "Boat", count : 1}], click : "nextScene('OceanBoat')", fail : "nextScene('OceanFail')" },

        { text : "Dig Up Cloth", click : "gatherSupplies('Cloth')" },
        { text : "Go Back", click : "nextScene('Campsite')" },
      ],
    },
  OceanBoat : {
    delay : 0.9,
    text : [
      ["You embark onto the water"],
      ["The water is calm as you glide along"],
      ["As you get further,", " the light of your fire fades away"],
      [""]
    ],
    button : [
      { text : "Keep Going", require : [{material : "Torch", count : 1}], click : "nextScene('OceanShore')", fail : "nextScene('OceanLost')" },
      { text : "Go Back", click : "nextScene('Campsite')" },
    ],
  },
  OceanLost : {
    delay : 0.9,
    text : [
      ["You keep going in the darkness"],
      ["But with no sense of direction"],
      ["No sense of where you are"],
      ["You keep drifting..."],
      ["And drifting..."],
      ["And drifting..."],
      ["And drifting..."],
      ["And drifting..."],
      [""],
      [""],
      ["Game Over"],
    ],
    button : [
      { text : "Exit to Home", click : "exitGame()" },
    ],
  },
  OceanWater : {
    delay : 0.9,
    text : [
      ["You continue sailing..."],
      ["When suddenly... ", "A light from the sky..."],
      ["<em>Crash<em>"],
      ["The light impacts with the water"],
      ["And floats there..."],
      [""]
    ],
    button : [
      { text : "Take Light", require : [], click : "craftMaterial('Light', [])"},
      { text : "Keep Going", click : "nextScene('CampsiteReturn')" },
    ],
  },
  OceanShore : {
    delay : 0.9,
    text : [
      ["You arrive at a distance shore by torch light"],
      ["The nothingness... ", "Continues..."],
      ["But... ", "In the distance... ", "A light..."],
      [""]
    ],
    button : [
      { text : "Keep Going", click : "nextScene('CampsiteReturn')" },
      { text : "Go Back", click : "nextScene('Campsite')" },
    ],
  },
  OceanFail : {
    delay : 0.9,
    text : [
      ["You enter the water and start swimming"],
      ["The water is cold"],
      ["It takes all your strength to stay above water"],
      [""]
    ],
    button : [
      { text : "Keep Going", click : "nextScene('OceanDeath')" },
      { text : "Go Back", click : "nextScene('Campsite')" },
    ],
  },
  OceanDeath : {
    delay : 0.9,
    text : [
      ["You try to keep swimming"],
      ["The waves get bigger"],
      ["It takes all your strength to stay above water"],
      ["Something brushes your leg..."],
      ["Something... ", "Is under the water... "],
      ["Before you know what's happening"],
      ["Something pulls you under"],
      ["Down..."],
      ["Down..."],
      ["Down..."],
      ["Down..."],
      [""],
      [""],
      ["Game Over"],
    ],
    button : [
      { text : "Exit to Home", click : "exitGame()" },
    ],
  },

  CampsiteReturn : {
      delay : 0.9,
      text : [
        ["Somehow... ", "You've returned to you campsite..."],
        ["To the East... ", "A forest"],
        [""],
        ["To the North... ", "An ocean"],
        [""],
        ["Everywhere else... ", "Darkness"],
        [""]
      ],
      button : [
        { text : "Go East", click : "nextScene('Woods')" },
        { text : "Go North", click : "nextScene('Ocean')" },
        { text : "Go North", click : "nextScene('Ocean')" },

        //Crafting
        { text : "Stoke Fire - 1 Wood", click : "stokeFire()" },
        { text : "Make Torch - 1 Wood, 1 Cloth", require : [{material : 'Wood', count : 1}, {material : 'Cloth', count : 1}], click : "craftMaterial('Torch', [{material : 'Wood', count : 1}, {material : 'Cloth', count : 1}])"},
        { text : "Make Boat - 10 Wood, 5 Cloth", require : [{material : "Wood", count : 10}, {material : "Cloth", count : 5}], click : "craftMaterial('Boat', [{material : 'Wood', count : 10}, {material : 'Cloth', count : 5}])"},
      ],
      inventory : ["Wood", "Cloth", "Metal", "Torch", "Boat"]
    },

  GatheredWood : {
      delay : 0.9,
      text : [
        ["You've gathered some wood"],
        ["You're at the edge of a dense forest"],
        ["Your fire is burning in the distance"],
        ["You can make out various sticks lying around"],
        [""]
      ],
      button : [
        { text : "Enter Forest", require : [{material : "Torch", count : 1}], click : "nextScene('ForestTorch')", fail : "nextScene('ForestFail')" },
        { text : "Gather Sticks", click : "gatherSupplies('Wood')" },
        { text : "Go Back", click : "nextScene('Campsite')" },
      ],
      inventory : ["Torch"]
    },
  GatheredCloth : {
    delay : 0.9,
    text : [
      ["You've gathered some cloth"],
      ["You stand on a beach"],
      ["Ahead of you is a vast ocean"],
      ["Your fire is burning in the distance"],
      ["You can make out various peices of fabric in the sand"],
      [""]
    ],
    button : [
      { text : "Go North", require : [{material : "Boat", count : 1}], click : "nextScene('OceanBoat')", fail : "nextScene('OceanFail')" },

      { text : "Dig Up Cloth", click : "gatherSupplies('Cloth')" },
      { text : "Go Back", click : "nextScene('Campsite')" },
    ],
  },
  GatheredSword : {
      delay : 0.9,
      text : [
        ["You pull on the sword"],
        ["<em>Crack<em>...", "<em>Crack<em>..."],
        ["The sword comes free"],
        ["The light that gave you strength... ", "Slowly fades..."],
        [""]
      ],
      button : [
        { text : "Leave", click : "nextScene('Campsite')" },
      ]
    },
  GatheredLight : {
      delay : 0.9,
      text : [
        ["The light imbues you with strength!"],
        ["You pull on the sword"],
        ["<em>Crack<em>...", "<em>Crack<em>..."],
        ["The sword comes free"],
        [""]
      ],
      button : [
        { text : "Leave", click : "nextScene('Campsite')" },
      ]
    },
  FireDied : {
      delay : 0.9,
      text : [
        ["Your fire has died"],
        ["As the last embers lose their light"],
        ["The Darkness returns"],
        ["Without your fire... ", "There is nothing you can do..."],
        ["But wait for the sun..."],
        ["And wait..."],
        ["And wait..."],
        ["And wait..."],
        ["And wait..."],
        ["And wait..."],
        [""],
        [""],
        ["Game Over"],
      ],
      button : [
        { text : "Exit to Home", click : "exitGame()" },
      ]
    },
}

  var text = document.getElementById("TextArea")
  var button = document.getElementById("ButtonArea")
  var image = document.getElementById("ImageArea")
  var inventory = document.getElementById("InventoryArea")

  var sceneNum = 1

  var fireLength = 0
  var maxFire = 5

  fadeInScene(sceneNum)

  function craftMaterial(material, req) {
    for (var i = 0; i < req.length; i++) {
      var mat = req.material
      invet[mat] -= req.count
    }

    invet[material] += 1
    var delay = fadeOutScene(sceneNum)
    setTimeout( function () {fadeInScene(sceneNum)}, delay * 1000)
    setTimeout( function () { image.style.opacity = fireLength/maxFire; }, 0.1 * 1000)
  }

  function gatherSupplies(material) {
    invet[material] += Math.floor((Math.random() * 5));
    nextScene("Gathered"+material)
  }

  function nextScene(next) {
    var delay = fadeOutScene(sceneNum)

    if (next == null) {
      sceneNum++;
      setTimeout( function () {fadeInScene(sceneNum)}, delay * 1000)
      setTimeout( function () { image.style.opacity = fireLength/maxFire; }, 0.1 * 1000)
      return
    } else {
      sceneNum = next
    }

    if (fireLength > 0) {
      fireLength -= 1
      setTimeout( function () {fadeInScene(sceneNum)}, delay * 1000)
      setTimeout( function () { image.style.opacity = fireLength/maxFire; }, 0.1 * 1000)
    } else {
      setTimeout( function () {fadeInScene("FireDied")}, delay * 1000)
    }
  }

  var invet = {
    Wood : 7,
    Cloth : 0,
    Metal : 0,
    Torch : 0,
    Boat : 0,
    Sword : 0,
  }


  var strikes = 0
  function flashLight() {
    setTimeout( function () { image.style.opacity = 1; }, 0)
    setTimeout( function () { image.style.opacity = 0; }, 0.1 * 1000)
    strikes += 1

    if (strikes > 3) {
      fadeOutScene(sceneNum)
      setTimeout( function () { image.style.opacity = 1; }, 0.3 * 1000)
      invet.Wood -= 3
      fireLength = 5
      nextScene()
    }
  }

  function stokeFire() {
    invet.Wood -= 1
    fireLength += 5

    var delay = fadeOutScene(sceneNum)
    setTimeout( function () {fadeInScene(sceneNum)}, delay * 1000)
    setTimeout( function () { image.style.opacity = fireLength/maxFire; }, 0.1 * 1000)
  }

  var fadeDelay = 0.3
  function fadeOutScene(scn) {
    var texts = scenes[scn].text
    var buttons = scenes[scn].button
    var inventorys = scenes[scn].inventory

    var delay = 0

    for (var i = 0; i < buttons.length; i++) {
      var id = "SceneButton" + scn + i
      delay += fadeDelay
      hideText(id, delay)
    }

    for (var i = 0; i < texts.length; i++) {
      var line = texts[i]

      for (var j = 0; j < line.length; j++) {
        var id = "SceneText" + scn + i + j
        delay += fadeDelay
        hideText(id, delay)
      }
    }

    if (inventorys != null) {
      for (var i = 0; i < inventorys.length; i++) {
        var id = "SceneInvent" + scn + i
        delay += fadeDelay
        hideText(id, delay)
      }
    }

    return (delay + 1.5)
  }

  function fadeInScene(scn) {
    text.innerHTML = ""
    button.innerHTML = ""
    inventory.innerHTML = ""

    var texts = scenes[scn].text
    var buttons = scenes[scn].button
    var inventorys = scenes[scn].inventory

    var delay = 0

    for (var i = 0; i < texts.length; i++) {
      var line = texts[i]

      for (var j = 0; j < line.length; j++) {
        var currentText = scenes[scn].text[i][j]
        var id = "SceneText" + scn + i + j

        var style = ""
        if (line.length > 1) {
          text.innerHTML += "<p id=\"" + id + "\" style=\"opacity:0; transition: opacity 1.4s; display: inline;\">" + currentText + "</p>"
        } else {
          text.innerHTML += "<p id=\"" + id + "\" style=\"opacity:0; transition: opacity 1.4s; \">" + currentText + "</p>"
        }
        showText(id, delay+=scenes[scn].delay)
      }
    }

    for (var i = 0; i < buttons.length; i++) {
      var id = "SceneButton" + scn + i

      if (buttons[i].require != null) {

        var req = buttons[i].require
        var metReq = true

        for (var j = 0; j < req.length; j++) {

          if (invet[req[j].material] < req[j].count) {
            metReq = false
          }
        }

        if (metReq) {
          for (var i = 0; i < req.length; i++) {
            var mat = req.material
            invet[mat] -= req.count
          }

          var click = buttons[i].click
          console.log(click);
          button.innerHTML += "<button id=" + id + " onclick=\"" + click + ";\" style=\"opacity:0; transition: opacity 1.4s; \">" + buttons[i].text + "</button>"
          showText(id, delay+=scenes[scn].delay)
        } else if (buttons[i].fail != null) {
          var click = buttons[i].fail
          console.log(click);
          button.innerHTML += "<button id=" + id + " onclick=\"" + click + ";\" style=\"opacity:0; transition: opacity 1.4s; \">" + buttons[i].text + "</button>"
          showText(id, delay+=scenes[scn].delay)
        }
      } else {
        var click = buttons[i].click
        console.log(click);
        button.innerHTML += "<button id=" + id + " onclick=\"" + click + ";\" style=\"opacity:0; transition: opacity 1.4s; \">" + buttons[i].text + "</button>"
        showText(id, delay+=scenes[scn].delay)
      }
    }

    if (inventorys != null) {
      for (var i = 0; i < inventorys.length; i++) {
        var id = "SceneInvent" + scn + i
        var count = invet[inventorys[i]]
        if (count > 0){
          inventory.innerHTML += "<p id=\"" + id + "\" style=\"opacity:0; transition: opacity 1.4s; display: inline;\">" + inventorys[i] + ": " + count + "</p>"
          showText(id, delay+=scenes[scn].delay)
        }
      }
    }
  }

  function showText(id, delay) {
    setTimeout( function () { document.getElementById(id).style.opacity = 1; }, delay * 1000)
  }

  function hideText(id, delay) {
    setTimeout( function () { document.getElementById(id).style.opacity = 0; }, delay * 1000)
  }

  function exitGame() {
    window.location.href = "main_page.html";
  }
