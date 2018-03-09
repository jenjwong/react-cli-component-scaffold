const componentTemplate = (jsxName, scssName) => `
// @flow
import styles from './${scssName}.scss';

type Props = {
//   fillInProps: any
};

@cssModule(styles)
export default class ${jsxName} extends React.PureComponent<Props> {
  render() {
    return <div styleName="${scssName}">${jsxName} Component</div>;
  }
}

`;

const scssTemplate = scssName => `
@import '~styles/shared';
@import '~sass-mq';
.${scssName} {
  border: solid blue 1px;
}

@include mq($from: $mobile-xl) {}

`;

const indexTemplate = jsxName => `
import ${jsxName} from './${jsxName}';

export default ${jsxName};

`;

const componentTestTemplate = jsxName => `
import {makeShallowRender} from 'test/helpers/testHelper';
import ${jsxName} from './${jsxName}';

const shallow${jsxName} = makeShallowRender(${jsxName});

describe('<${jsxName} />', () => {
  const mockProps = '';

  it('renders <${jsxName} />', () => {
    expect(shallow${jsxName}.bind(null, mockProps)).not.toThrow();
  });

  // it('renders the correct value', () => {
  //   const wrapper = shallow${jsxName}(mockProps);

  //   expect(wrapper.find('[className*="tag"]').text()).toBe('react');
  // });
});

`;

const containerTemplate = jsxName => `
// @flow

import {connect} from 'react-redux';
// import ${jsxName} from 'components/${jsxName}';
type Props = {};

const mapStateToProps = (state) => ({
  fillMeIn: {fillMeIn: state}
});

const mapDispatchToProps = {
  fillMeInFunc: () => ({fillMeIn: true})
};

export class ${jsxName}Container extends React.PureComponent<Props> {

  render = () => {
    // const {fillMeIn} = this.props;

    return (
      <div>${jsxName}Container</div>
    );
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(${jsxName}Container);

`;

const containerTestTemplate = jsxName => `
import {makeShallowRender} from 'test/helpers/testHelper';
import {${jsxName}Container} from './${jsxName}Container';
// import ${jsxName} from 'components/${jsxName}';

const shallow${jsxName}Container = makeShallowRender(${jsxName}Container);

describe('<${jsxName}Container />', () => {
  const mockProps = '';

  it('renders <${jsxName}Container />', () => {
    expect(shallow${jsxName}Container.bind(null, mockProps)).not.toThrow();
  });

  // it('renders the correct value', () => {
  //   const wrapper = shallow${jsxName}Container(mockProps);

  //   expect(wrapper.find('[className*="tag"]').text()).toBe('react');
  // });
});

`;

module.exports = {
  componentTemplate,
  scssTemplate,
  indexTemplate,
  containerTemplate,
  componentTestTemplate,
  containerTestTemplate
};
