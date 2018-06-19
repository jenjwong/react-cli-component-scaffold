const componentTemplate = (jsxName, scssName, scssSelectorName) => `import React from 'react'
import './${scssName}.css';

const ${jsxName} = () => {
  return (
    <div className="${scssSelectorName}">
      ${jsxName} Component
    </div>
  )
}

export default ${jsxName} 

`;

const scssTemplate = scssSelectorName => `@import "../../scss/mixins";

.${scssSelectorName} {

}
`;

const indexTemplate = jsxName => `import ${jsxName} from './${jsxName}';

export default ${jsxName};

`;

const componentTestTemplate = jsxName => `import {makeShallowRender} from 'test/helpers/testHelper';
import ${jsxName} from './${jsxName}';

const shallow${jsxName} = makeShallowRender(${jsxName});

describe('<${jsxName} />', () => {
  let mockProps;

  beforeEach(() => {
    mockProps = {};
  });

  it('renders <${jsxName} />', () => {

    const wrapper = shallow${jsxName}(mockProps);

    expect(wrapper).toMatchSnapshot();
  });
  // it('shows "accept answer" and "verify answer" buttons if the props are true', () => {
  //   const wrapper = shallowAnswerAcceptVerify(mockProps);

  //   expect(wrapper.find('[data-ref="accept-answer"]')).toExist();
  //   expect(wrapper.find('[data-ref="verify-answer"]')).toExist();
  //   expect(wrapper).toMatchSnapshot();
  // });

  // it('displays the verified button with no click handler if isVerified is true and canVerify is false', () => {
  //   mockProps = {...mockProps, isVerified: true, canVerify: false};
  //   const wrapper = shallowAnswerAcceptVerify(mockProps);

  //   const verifyButton = wrapper.find('[data-ref="verify-answer"]');

  //   expect(verifyButton).toExist();
  //   expect(verifyButton).toHaveClassName('selected');
  //   expect(verifyButton).toHaveClassName('noclick');
  //   expect(verifyButton.props().onClick).toBe(null);
  //   expect(wrapper).toMatchSnapshot();
  // });

  // it('displays the verified button with a click handler if isVerified is true and canVerify is true', () => {
  //   mockProps = {...mockProps, isVerified: true, canVerify: true};
  //   const wrapper = shallowAnswerAcceptVerify(mockProps);

  //   const verifyButton = wrapper.find('[data-ref="verify-answer"]');

  //   expect(verifyButton).toExist();
  //   expect(verifyButton).toHaveClassName('selected');
  //   expect(verifyButton).not.toHaveClassName('noclick');
  //   expect(verifyButton.props().onClick).toBe(mockProps.handleToggleVerified);
  //   expect(wrapper).toMatchSnapshot();
  // });

  // it('calls handleToggleVerified() when verify button is clicked', () => {
  //   mockProps = {...mockProps, isVerified: false, canVerify: true};
  //   const wrapper = shallowAnswerAcceptVerify(mockProps);

  //   expect(mockProps.handleToggleVerified).not.toHaveBeenCalled();

  //   const verifyButton = wrapper.find('[data-ref="verify-answer"]');
  //   verifyButton.simulate('click');

  //   expect(mockProps.handleToggleVerified).toHaveBeenCalledTimes(1);
  // });

  // it('displays the accepted button with no click handler if isAccepted is true and canAccept is false', () => {
  //   mockProps = {...mockProps, isAccepted: true, canAccept: false};
  //   const wrapper = shallowAnswerAcceptVerify(mockProps);

  //   const acceptButton = wrapper.find('[data-ref="accept-answer"]');

  //   expect(acceptButton).toExist();
  //   expect(acceptButton).toHaveClassName('selected');
  //   expect(acceptButton).toHaveClassName('noclick');
  //   expect(acceptButton.props().onClick).toBe(null);
  //   expect(wrapper).toMatchSnapshot();
  // });

  // it('displays the accepted button with a click handler if isAccepted is true and canAccept is true', () => {
  //   mockProps = {...mockProps, isAccepted: true, canAccept: true};
  //   const wrapper = shallowAnswerAcceptVerify(mockProps);

  //   const acceptButton = wrapper.find('[data-ref="accept-answer"]');

  //   expect(acceptButton).toExist();
  //   expect(acceptButton).toHaveClassName('selected');
  //   expect(acceptButton).not.toHaveClassName('noclick');
  //   expect(acceptButton.props().onClick).toBe(mockProps.handleToggleAccepted);
  //   expect(wrapper).toMatchSnapshot();
  // });

  // it('calls handleToggleAccepted() when verify button is clicked', () => {
  //   mockProps = {...mockProps, isAccepted: false, canAccept: true};
  //   const wrapper = shallowAnswerAcceptVerify(mockProps);

  //   expect(mockProps.handleToggleAccepted).not.toHaveBeenCalled();

  //   const acceptButton = wrapper.find('[data-ref="accept-answer"]');
  //   acceptButton.simulate('click');

  //   expect(mockProps.handleToggleAccepted).toHaveBeenCalledTimes(1);
  // });

  // describe('accept/verify button pending states', () => {
  //   const verifyRef = '[data-ref="verify-answer"]';
  //   const acceptRef = '[data-ref="accept-answer"]';

  //   it('disables the verify button when pending', () => {
  //     mockProps = {...mockProps, isVerifyPending: false};
  //     const wrapper = shallowAnswerAcceptVerify(mockProps);

  //     expect(wrapper.find(verifyRef)).not.toBeDisabled();

  //     wrapper.setProps({isVerifyPending: true});

  //     expect(wrapper.find(verifyRef)).toBeDisabled();
  //     expect(wrapper).toMatchSnapshot();
  //   });

  //   it('disables the accept button when pending', () => {
  //     mockProps = {...mockProps, isAcceptPending: false};
  //     const wrapper = shallowAnswerAcceptVerify(mockProps);

  //     expect(wrapper.find(acceptRef)).not.toBeDisabled();

  //     wrapper.setProps({isAcceptPending: true});

  //     expect(wrapper.find(acceptRef)).toBeDisabled();
  //     expect(wrapper).toMatchSnapshot();
  //   });
  // });
});

`;

const containerTemplate = jsxName => `import {connect} from 'react-redux';
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
  let mockProps;

  beforeEach(() => {
    mockProps = {};
  });


  it('renders <${jsxName}Container />', () => {

    const wrapper = shallow${jsxName}Container(mockProps);

    expect(wrapper).toMatchSnapshot();
  });
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
