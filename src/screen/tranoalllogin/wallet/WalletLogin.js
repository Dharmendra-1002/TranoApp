

import React from 'react';
import LoginForm from '../../../component/LoginForm';

const WalletLogin = () => {
  return (
    <LoginForm
      logo={require('../../../asset/ctpllogo.png')}
      apiUrl="http://testing-only-erp-api.containe.in/api/Account/Login"
      apiKey="K9qPw2Nx8V0rRy7LJ4bMhZtWaEp5FgY"
      onSuccessNavigate="WalletHome"
      title="Wallet Login"
    />
  );
};

export default WalletLogin

