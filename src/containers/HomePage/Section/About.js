import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";

class About extends Component {
  changeLanguage = (language) => {
    this.props.changeLanguageAppRedux(language);
  };

  render() {
    return (
      <div className="section-share section-about">
        <div className="section-about-header">
          Truyền thông nói gì về bệnh viện Thu Cúc
        </div>
        <div className="section-about-content">
          <div className="content-left">
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/tDSBg-RsdoE"
              title="Khám chữa bệnh ở Thu Cúc có gì đặc biệt?"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="content-right">
            <p>BỆNH VIỆN ĐA KHOA QUỐC TẾ THU CÚC</p>
            <p>Địa chỉ: 286 Thụy Khuê, Tây Hồ, Hà Nội</p>
            <p>Email: contact@thucuchospital.vn</p>
            <p>Liên hệ khám chữa bệnh: 04. 383. 55555 hoặc 1900 558896 </p>
            <p>Hotline: 0904 97 0909</p>
            <p>Liên hệ công việc: 043 728 6699</p>
            <p>Website: www.benhvienthucuc.vn</p>
          </div>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
