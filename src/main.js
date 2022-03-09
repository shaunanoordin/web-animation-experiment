/*  Primary App Class
 */
//==============================================================================
class App {
  constructor() {
    this.html = {
      s2Object: document.getElementById('s2-object'),
      s2ColourA: document.getElementById('s2-colour-a'),
      s2ColourB: document.getElementById('s2-colour-b'),
      s2StartButton: document.getElementById('s2-start-button'),
    }

    this.html.s2StartButton.onclick = this.s2StartButton_onClick.bind(this)
  }

  s2StartButton_onClick (e) {
    const s2Object = this.html.s2Object
    const startVal = this.html.s2ColourA.value
    const endVal = this.html.s2ColourB.value

    const s2AnimationSteps = [
      { background: startVal, offset: 0.0 },
      { background: endVal, offset: 1.0 },
    ]

    const s2Timing = {
      duration: 3000,
      iterations: Infinity,
    }

    s2Object.animate(s2AnimationSteps, s2Timing)
  }
}
//==============================================================================

/*  Initialisations
 */
//==============================================================================
var app;
window.onload = function() {
  window.app = new App();
};
//==============================================================================
