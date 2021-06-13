import React from 'react';
import cn from 'classnames';
import {hostProp, descriptionProp} from './host-prop.js';

function Host({host, description}) {
  const {name, isPro, avatarUrl} = host;
  const avatarClass = cn('property__avatar-wrapper', 'user__avatar-wrapper', {'property__avatar-wrapper--pro': isPro});

  return (
    <div className="property__host">
      <h2 className="property__host-title">Meet the host</h2>
      <div className="property__host-user user">
        <div className={avatarClass}>
          <img className="property__avatar user__avatar" src={avatarUrl} width="74" height="74" alt="Host avatar"/>
        </div>
        <span className="property__user-name">
          {name}
        </span>
        <span className="property__user-status">
          {isPro ? 'Pro' : ''}
        </span>
      </div>
      <div className="property__description">
        <p className="property__text">
          {description}
        </p>
        <p className="property__text">
          {description}
        </p>
      </div>
    </div>
  );
}

Host.propTypes = {
  host: hostProp,
  description: descriptionProp,
};

export default Host;
