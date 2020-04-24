import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import Base from './Base';
import { TYPE } from './constants';
import I18n from '../../i18n';

const PasscodeEnter = ({
	theme, type, finishProcess
}) => {
	const confirmRef = useRef(null);
	const [subtitle, setSubtitle] = useState(null);
	const [status, setStatus] = useState(type);
	const [previousPasscode, setPreviouPasscode] = useState(null);

	const firstStep = (p) => {
		setStatus(TYPE.CONFIRM);
		setPreviouPasscode(p);
	};

	const changePasscode = p => finishProcess && finishProcess(p);

	const onError = () => {
		setStatus(TYPE.CHOOSE);
		setSubtitle(I18n.t('Passcode_choose_error'));
		confirmRef?.current?.animate('shake');
	};

	if (status === TYPE.CONFIRM) {
		return (
			<Base
				ref={confirmRef}
				theme={theme}
				type={TYPE.CONFIRM}
				onEndProcess={changePasscode}
				previousPasscode={previousPasscode}
				title={I18n.t('Passcode_choose_confirm_title')}
				onError={onError}
			/>
		);
	}

	return (
		<Base
			theme={theme}
			type={TYPE.CHOOSE}
			onEndProcess={firstStep}
			title={I18n.t('Passcode_choose_title')}
			subtitle={subtitle}
		/>
	);
};

PasscodeEnter.propTypes = {
	theme: PropTypes.string,
	type: PropTypes.string,
	finishProcess: PropTypes.func
};

export default PasscodeEnter;
