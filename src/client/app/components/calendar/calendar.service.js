angular.module("app.components.calendar").service("Calendar", [function () {

    function Calendar(year, month, options) {

        var now = new Date();

        this.setWeekStartsOn = function (i) {
            var d = parseInt(i || 0, 10);
            if (!isNaN(d) && d >= 0 && d <= 6) {
                this.weekStartsOn = d;
            } else {
                this.weekStartsOn = 0;
            }
            return this.weekStartsOn;
        };

        this.options = angular.isObject(options) ? options : {};
        this.year = now.getFullYear();
        this.month = now.getMonth();
        this.weeks = [];
        this.weekStartsOn = this.setWeekStartsOn(this.options.weekStartsOn);

        this.next = function () {
            if (this.start.getMonth() < 11) {
                this.init(this.start.getFullYear(), this.start.getMonth() + 1);
                return;
            }
            this.init(this.start.getFullYear() + 1, 0);
        };

        this.prev = function () {
            if (this.month) {
                this.init(this.start.getFullYear(), this.start.getMonth() - 1);
                return;
            }
            this.init(this.start.getFullYear() - 1, 11);
        };

        // Month should be the javascript indexed month, 0 is January, etc.
        this.init = function (year, month) {

            var now = new Date();
            this.year = angular.isDefined(year) ? year : now.getFullYear();
            this.month = angular.isDefined(month) ? month : now.getMonth();

            var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            var monthLength = daysInMonth[this.month];

            // Figure out if is a leap year.
            if (this.month === 1) {
                if ((this.year % 4 === 0 && this.year % 100 !== 0) || this.year % 400 === 0) {
                    monthLength = 29;
                }
            }

            // First day of calendar month.
            this.start = new Date(this.year, this.month, 1);
            var date = angular.copy(this.start);
            while (date.getDay() !== this.weekStartsOn) {
                date.setDate(date.getDate() - 1);
                monthLength++;
            }

            // Last day of calendar month.
            while (monthLength % 7 !== 0) {
                monthLength++;
            }

            this.weeks = [];
            for (var i = 0; i < monthLength; ++i) {

                // Let's start a new week.
                if (i % 7 === 0) {
                    this.weeks.push([]);
                }

                // Add copy of the date. If not a copy,
                // it will get updated shortly.
                this.weeks[this.weeks.length - 1].push(angular.copy(date));

                // Increment it.
                date.setDate(date.getDate() + 1);

            }

        };

        this.init(year, month);

    }

    return Calendar;

}]);

angular.module("app.components.calendar").service("CalendarData", [function () {
    function CalendarData() {

        this.data = {};
        this.data.activeDate = null;
        this.data.disabled = [];

        this.setDisabled = function(date) {
            this.data.disabled.push(date);
        };        

        this.removeDisabled = function(date) {
            var i = this.data.disabled.indexOf(date);
            this.data.disabled.splice(i, 1);
        };

        this.getDisabled = function() {
            return this.data.disabled;
        };

        this.isDisabled = function (date) {
            if ( this.data.disabled.indexOf(date) !== -1) {
                return true;
            }
            return false;
        };

        this.setActiveDate = function(date) {
            this.data.activeDate = date;
        };

        this.getActiveDate = function() {
            return this.data.activeDate;
        };



        this.getDayKey = function(date) {
            return [date.getFullYear(), date.getMonth() + 1, date.getDate()].join("-");
        };

        this.setDayContent = function(date, content) {
            this.data[this.getDayKey(date)] = content || this.data[this.getDayKey(date)] || "";
        };
    }
    return new CalendarData();
}]);