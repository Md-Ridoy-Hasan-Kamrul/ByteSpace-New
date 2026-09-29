import React, { memo } from 'react';
import { MODULE_ICON, MODULE_ICON_SIZE } from './courseDetailsAssets';

const CourseModule = memo(({ module }) => (
  <article className="course-module">
    <span className="course-module-icon">
      <img src={MODULE_ICON} alt="" width={MODULE_ICON_SIZE} height={MODULE_ICON_SIZE} />
    </span>
    <div className="course-module-copy">
      <h3>{module.title}</h3>
      <p>{module.body}</p>
    </div>
  </article>
));

CourseModule.displayName = 'CourseModule';

export default CourseModule;
