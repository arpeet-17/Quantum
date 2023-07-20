import {Course} from '../dashboard-data-types/dashboard-data';

export const getDashboardItem = (course: Course): string => {
    return `
        <div class="dashboard-item">
            <div class="dashboard-item-top">
                <img src="${course.image}" alt="${course.name}"/>
                <img 
                    src="assets/icons/${course.starred ? 'favourite' : 'not-favourite'}.svg" 
                    alt="Star" 
                    class="dashboard-item-top-overlay-icon" 
                    role="checkbox" 
                    aria-checked="${course.starred}" 
                    tabindex="0"
                />
                <div class="dashboard-item-top-info">
                    <p>${course.name}</p>
                    <p>
                        <small class="dashboard-item-top-info-border">${course.subject}</small>
                        <small>Grade ${course.grade}<span>+${course.gradeExtra}</span></small>
                    </p>
                    <p>
                        ${
                            course.unitCount && course.lessonCount && course.topicCount ?  
                            `<small class="dashboard-item-top-info-no-space"><b>${course.unitCount}</b>Units</small>
                            <small><b>${course.lessonCount}</b>Lessons</small>
                            <small><b>${course.topicCount}</b>Topics</small>` :
                            ''
                        }
                    </p>
                    <select ${course.classes.length ? '' : 'disabled'}>
                        ${course.classes.length ? '' : '<option>No Classes</option>'}
                        ${course.classes.map(courseClass => `<option>${courseClass}</option>`)}
                    </select>
                    <p>
                        ${course.studentCount ? 
                            `<small 
                                class="dashboard-item-top-info-no-space ${(course.startDate && course.endDate) ? 'dashboard-item-top-info-border' : ''}"
                            >
                                ${course.studentCount} Students
                            </small>` : 
                            ''
                        }
                        ${(course.startDate && course.endDate) ? `<small>${course.startDate} - ${course.endDate}</small>` : ''}
                    </p>
                </div>
            </div>
            <div class="dashboard-item-bottom">
                <ul class="dashboard-item-bottom-icons">
                    <li class="${!course.isDetailsLinkActive ? 'dashboard-item-bottom-icon-disabled' : ''}">
                        <a href="#" aria-label="Course Details" ${!course.isDetailsLinkActive ? "aria-hidden=true tabindex=-1" : ''}>
                            <img src="assets/icons/preview.svg" alt="Eye"/>
                        </a>
                    </li>
                    <li class="${!course.isScheduleLinkActive ? 'dashboard-item-bottom-icon-disabled' : ''}">
                        <a href="#" aria-label="Course Schedule" ${!course.isScheduleLinkActive ? "aria-hidden=true tabindex=-1" : ''}>
                            <img src="assets/icons/manage course.svg" alt="Calendar"/>
                        </a>
                    </li>
                    <li class="${!course.isGradesLinkActive ? 'dashboard-item-bottom-icon-disabled' : ''}">
                        <a href="#" aria-label="Course Grades" ${!course.isGradesLinkActive ? "aria-hidden=true tabindex=-1" : ''}>
                            <img src="assets/icons/grade submissions.svg" alt="Grade"/>
                        </a>
                    </li>
                    <li class="${!course.isReportsLinkActive ? 'dashboard-item-bottom-icon-disabled' : ''}">
                        <a href="#" aria-label="Course Reports" ${!course.isReportsLinkActive ? "aria-hidden=true tabindex=-1" : ''}>
                            <img src="assets/icons/reports.svg" alt="Graph"/>
                        </a>
                    </li>
                </ul>
            </div>
            ${course.expired ? `<div class="dashboard-item-expired">EXPIRED</div>` : ''}
        </div>
    `;
};