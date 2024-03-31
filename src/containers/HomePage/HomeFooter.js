import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";

class HomeFooter extends Component {
  changeLanguage = (language) => {
    this.props.changeLanguageAppRedux(language);
  };

  render() {
    return (
      <div className="home-footer">
        <p>
          &copy; 2024 Mai Minh Quân. More information, please visit my
          <a target="_blank" href="#">
            {" "}
            Facebook
          </a>
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
