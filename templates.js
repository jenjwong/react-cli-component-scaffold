const componentTemplate = (jsxName) => `// @flow
import styles from './${jsxName}.scss';

type Props = {
//   fillInProps: any
};

@cssModule(styles)
export default class ${jsxName} extends React.PureComponent<Props> {
  render() {
    return <div styleName="${jsxName}">${jsxName} Component</div>;
  }
}

`;

const scssTemplate = jsxName => `@import '~sass-mq';
@import '~styles/shared';

.${jsxName} {
  border: solid blue 1px;
}

@include mq($from: $mobile-xl) {}

`;

const indexTemplate = jsxName => `import ${jsxName} from './${jsxName}';

export default ${jsxName};

`;

const componentTestTemplate = jsxName => `import {makeShallowRender} from 'test/helpers/testHelper';
import ${jsxName} from './${jsxName}';

const shallow${jsxName} = makeShallowRender(${jsxName});

describe('<${jsxName} />', () => {
  const mockProps = '';

  it('renders <${jsxName} />', () => {
    expect(shallow${jsxName}.bind(null, mockProps)).not.toThrow();
  });

  // describe('<${jsxName} />', () => {
  //   it('renders <${jsxName} />', () => {
  //     expect(${jsxName}).not.toThrow();
  //   });
  // });

  // it('renders fillMeIn!', () => {
  //   const wrapper = shallow${jsxName}(mockProps);

  //   expect(wrapper.find('fillMeIn!)).toBePresent();
  // });

  // it('renders the correct value', () => {
  //   const wrapper = shallow${jsxName}(mockProps);

  //   expect(wrapper.find('[className*="fillMeIn!"]').text()).toBe('fillMeIn!');
  // });

  // it('renders a li for every entry in ${jsxName} list', () => {
  //   const wrapper = shallowSearchNoResultsFound();

  //   expect(wrapper.find('li').length).toEqual(tips.length);
  // });

  // it('redirects to correct location', () => {
  //   const wrapper = shallowSearchNoResultsFound();

  //   expect(wrapper.find(Link).prop('to')).toEqual('/questions/new');
  // });

  // it('redirects to correct page on button click', () => {
  //   const mockProps = {
  //     history: {
  //       push: jest.fn()
  //     }
  //   };
  //   const wrapper = shallow${jsxName}(mockProps);
  //   wrapper.find('[data-ref="fillMeIn!"]').simulate('click');

  //   expect(mockProps.history.push).toHaveBeenCalledWith('fillMeIn!');
  // });
});

`;

const containerTemplate = jsxName => `// @flow

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
