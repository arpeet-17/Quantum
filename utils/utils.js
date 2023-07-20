"use strict";
exports.__esModule = true;
exports.getDashboardItem = void 0;
var getDashboardItem = function (course) {
    return "\n        <div class=\"dashboard-item\">\n            <div class=\"dashboard-item-top\">\n                <img src=\"".concat(course.image, "\" alt=\"").concat(course.name, "\"/>\n                <img \n                    src=\"assets/icons/").concat(course.starred ? 'favourite' : 'not-favourite', ".svg\" \n                    alt=\"Star\" \n                    class=\"dashboard-item-top-overlay-icon\" \n                    role=\"checkbox\" \n                    aria-checked=\"").concat(course.starred, "\" \n                    tabindex=\"0\"\n                />\n                <div class=\"dashboard-item-top-info\">\n                    <p>").concat(course.name, "</p>\n                    <p>\n                        <small class=\"dashboard-item-top-info-border\">").concat(course.subject, "</small>\n                        <small>Grade ").concat(course.grade, "<span>+").concat(course.gradeExtra, "</span></small>\n                    </p>\n                    <p>\n                        ").concat(course.unitCount && course.lessonCount && course.topicCount ?
        "<small class=\"dashboard-item-top-info-no-space\"><b>".concat(course.unitCount, "</b>Units</small>\n                            <small><b>").concat(course.lessonCount, "</b>Lessons</small>\n                            <small><b>").concat(course.topicCount, "</b>Topics</small>") :
        '', "\n                    </p>\n                    <select ").concat(course.classes.length ? '' : 'disabled', ">\n                        ").concat(course.classes.length ? '' : '<option>No Classes</option>', "\n                        ").concat(course.classes.map(function (courseClass) { return "<option>".concat(courseClass, "</option>"); }), "\n                    </select>\n                    <p>\n                        ").concat(course.studentCount ?
        "<small \n                                class=\"dashboard-item-top-info-no-space ".concat((course.startDate && course.endDate) ? 'dashboard-item-top-info-border' : '', "\"\n                            >\n                                ").concat(course.studentCount, " Students\n                            </small>") :
        '', "\n                        ").concat((course.startDate && course.endDate) ? "<small>".concat(course.startDate, " - ").concat(course.endDate, "</small>") : '', "\n                    </p>\n                </div>\n            </div>\n            <div class=\"dashboard-item-bottom\">\n                <ul class=\"dashboard-item-bottom-icons\">\n                    <li class=\"").concat(!course.isDetailsLinkActive ? 'dashboard-item-bottom-icon-disabled' : '', "\">\n                        <a href=\"#\" aria-label=\"Course Details\" ").concat(!course.isDetailsLinkActive ? "aria-hidden=true tabindex=-1" : '', ">\n                            <img src=\"assets/icons/preview.svg\" alt=\"Eye\"/>\n                        </a>\n                    </li>\n                    <li class=\"").concat(!course.isScheduleLinkActive ? 'dashboard-item-bottom-icon-disabled' : '', "\">\n                        <a href=\"#\" aria-label=\"Course Schedule\" ").concat(!course.isScheduleLinkActive ? "aria-hidden=true tabindex=-1" : '', ">\n                            <img src=\"assets/icons/manage course.svg\" alt=\"Calendar\"/>\n                        </a>\n                    </li>\n                    <li class=\"").concat(!course.isGradesLinkActive ? 'dashboard-item-bottom-icon-disabled' : '', "\">\n                        <a href=\"#\" aria-label=\"Course Grades\" ").concat(!course.isGradesLinkActive ? "aria-hidden=true tabindex=-1" : '', ">\n                            <img src=\"assets/icons/grade submissions.svg\" alt=\"Grade\"/>\n                        </a>\n                    </li>\n                    <li class=\"").concat(!course.isReportsLinkActive ? 'dashboard-item-bottom-icon-disabled' : '', "\">\n                        <a href=\"#\" aria-label=\"Course Reports\" ").concat(!course.isReportsLinkActive ? "aria-hidden=true tabindex=-1" : '', ">\n                            <img src=\"assets/icons/reports.svg\" alt=\"Graph\"/>\n                        </a>\n                    </li>\n                </ul>\n            </div>\n            ").concat(course.expired ? "<div class=\"dashboard-item-expired\">EXPIRED</div>" : '', "\n        </div>\n    ");
};
exports.getDashboardItem = getDashboardItem;
