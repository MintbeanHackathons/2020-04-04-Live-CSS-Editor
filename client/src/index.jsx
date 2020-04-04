import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newCSS: ''
    }
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    let sheets = document.styleSheets;
    let sheet;
    let newCSS = document.querySelector('#css').value;
    if (sheets.length === 0) {
      sheet = document.createElement('style');
      sheet.innerHTML = newCSS;
      document.body.appendChild(sheet);
    } else {
      sheet = sheets[0];
      sheet.insertRule(newCSS, sheet.cssRules.length);
    }
  }

  render() {
    return (
      <div>
        <h1 align="center">Mintbean Hackathon</h1>
        <h2 align="center">April 4, 2020</h2>
        <h2 align="center">Live CSS Editor</h2>
        <div>Insert Yo CSS In This Box</div>
        <textarea id='css' rows='10' cols='100'></textarea><br />
        <button id='updater' onClick={this.onClick}>Update Yo CSS</button>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et libero nibh. Maecenas posuere pulvinar ex in pellentesque. Vestibulum quis dolor nisl. Ut venenatis nunc et rutrum ultrices. Nunc lacinia mauris id nisl mollis viverra. Integer nec augue vulputate, sollicitudin dui fermentum, imperdiet dui. Ut bibendum, nibh sed pulvinar vestibulum, nisl nibh lacinia est, vitae dapibus libero metus at libero.</p>
        <p>Mauris vitae commodo nibh, et mattis massa. Ut sodales neque a euismod dignissim. Donec suscipit diam vitae risus tristique, quis consectetur dolor bibendum. Proin vel tincidunt mauris. Suspendisse turpis libero, fringilla nec rhoncus quis, dictum vel sem. Aenean nec viverra ligula. Proin nec pulvinar tellus, eu molestie lectus. Aenean id dapibus justo.</p>
        <p>Pellentesque neque purus, pharetra non lobortis eget, posuere ut metus. Integer mollis, neque ac facilisis sodales, libero leo luctus justo, sit amet malesuada enim ipsum in metus. Donec nec fringilla neque. Quisque quis vulputate nunc. Nunc ligula lorem, lobortis sit amet augue sed, viverra faucibus nisi. Praesent non sapien eu nisl dapibus aliquam eu eu libero. Quisque a finibus leo. Cras dapibus condimentum erat quis porttitor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque finibus sodales felis sit amet rhoncus. Sed risus ex, convallis ut gravida quis, varius in nibh.</p>
        <p>Sed finibus viverra nibh, ac iaculis felis mattis vitae. Morbi vel nibh et ligula commodo suscipit a ac lectus. Vestibulum aliquam ornare nunc. Cras mollis, sapien ac sollicitudin interdum, diam orci feugiat nibh, at sollicitudin orci tortor a sapien. Vestibulum consequat magna a ex aliquam bibendum. Mauris id ante tempor, aliquam diam sed, pharetra orci. Integer ac lectus rutrum, pharetra ex nec, rutrum sem. Nam urna turpis, dignissim sed commodo sed, sagittis sed risus. Nunc cursus molestie neque, nec viverra felis consequat vel. Curabitur et eleifend metus. Etiam imperdiet, augue consequat luctus facilisis, nisi leo auctor dolor, et eleifend odio nibh ornare magna. Aliquam at libero mauris. Aenean mattis posuere ex, sit amet vestibulum eros. Phasellus turpis nibh, ultricies in velit placerat, accumsan aliquet lacus. Donec rutrum dui et mauris porttitor, non accumsan purus sodales. Ut euismod dolor non pellentesque porttitor.</p>
        <p>Proin quis sagittis neque. Vestibulum sed dictum metus. Cras nec dolor eget ex imperdiet mollis non in est. Duis euismod sagittis nulla, quis posuere mauris pellentesque vitae. Donec ut nibh odio. Mauris faucibus euismod magna. Praesent vel quam ultricies, varius ipsum non, fermentum elit. Nam elementum magna at ex mattis feugiat. Suspendisse potenti. Morbi quis lacus ac sapien ornare consectetur et a nunc. Phasellus nec tellus enim. Vestibulum ultricies est id sapien tempor dignissim. Duis consequat elit eget justo aliquet venenatis. Proin tincidunt felis tincidunt interdum sagittis. Proin sed malesuada erat.</p>
        <h6>Thanks to <a href="https://www.lipsum.com/">Lipsum.com</a> for the fake text.</h6>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));