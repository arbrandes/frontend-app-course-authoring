import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, useIntl } from '@edx/frontend-platform/i18n';
import { Icon, ModalDialog, IconButton } from '@openedx/paragon';
import { Close } from '@openedx/paragon/icons';
import SelectTypeFooter from './SelectTypeFooter';

import * as hooks from '../../../../EditorContainer/hooks';
import ecMessages from '../../../../EditorContainer/messages';
import messages from './messages';

const SelectTypeWrapper = ({
  children,
  onClose,
  selected,
}) => {
  const handleCancel = hooks.handleCancel({ onClose });
  const intl = useIntl();

  return (
    <div
      className="position-relative zindex-0"
    >
      <ModalDialog.Header className="shadow-sm zindex-10">
        <ModalDialog.Title>
          <FormattedMessage {...messages.selectTypeTitle} />
          <div className="pgn__modal-close-container">
            <IconButton
              src={Close}
              iconAs={Icon}
              onClick={handleCancel}
              alt={intl.formatMessage(ecMessages.exitButtonAlt)}
            />
          </div>
        </ModalDialog.Title>
      </ModalDialog.Header>
      <ModalDialog.Body className="pb-6">
        {children}
      </ModalDialog.Body>
      <SelectTypeFooter
        selected={selected}
        onCancel={handleCancel}
      />
    </div>
  );
};

SelectTypeWrapper.defaultProps = {
  onClose: null,
};
SelectTypeWrapper.propTypes = {
  selected: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func,
};

export default SelectTypeWrapper;
