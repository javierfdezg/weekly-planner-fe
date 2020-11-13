<template>
  <v-container fill-height>
    <calendar-view
      :items="items"
      :show-date="showDate"
      :time-format-options="{ hour: 'numeric', minute: '2-digit' }"
      :enable-drag-drop="true"
      :disable-past="disablePast"
      :disable-future="disableFuture"
      :show-times="showTimes"
      :display-period-uom="displayPeriodUom"
      :display-period-count="displayPeriodCount"
      :starting-day-of-week="startingDayOfWeek"
      :class="themeClasses"
      :period-changed-callback="periodChanged"
      :current-period-label="useTodayIcons ? 'icons' : ''"
      :displayWeekNumbers="displayWeekNumbers"
      :enable-date-selection="true"
      :selection-start="selectionStart"
      :selection-end="selectionEnd"
      @date-selection-start="setSelection"
      @date-selection="setSelection"
      @date-selection-finish="finishSelection"
      @drop-on-date="onDrop"
      @click-date="onClickDay"
      @click-item="onClickItem"
    >
      <calendar-view-header
        slot="header"
        slot-scope="{ headerProps }"
        :header-props="headerProps"
        @input="setShowDate"
      />
    </calendar-view>
  </v-container>
</template>

<script>
import { CalendarView, CalendarViewHeader, CalendarMathMixin } from "vue-simple-calendar";

export default {
  name: "Menus",
  components: { CalendarView, CalendarViewHeader },
  mixins: [CalendarMathMixin],
  data() {
    return {
      /* Show the current month, and give it some fake items to show */
      showDate: this.thisMonth(1),
      message: "",
      startingDayOfWeek: 1,
      disablePast: false,
      disableFuture: false,
      displayPeriodUom: "week",
      displayPeriodCount: 1,
      displayWeekNumbers: false,
      showTimes: true,
      selectionStart: null,
      selectionEnd: null,
      newItemTitle: "",
      newItemStartDate: "",
      newItemEndDate: "",
      useDefaultTheme: true,
      useHolidayTheme: true,
      useTodayIcons: false,
      items: [
        {
          id: "e0",
          startDate: "2018-01-05"
        },
        {
          id: "e1",
          startDate: this.thisMonth(15, 18, 30)
        },
        {
          id: "e2",
          startDate: this.thisMonth(15),
          title: "Single-day item with a long title"
        },
        {
          id: "e3",
          startDate: this.thisMonth(7, 9, 25),
          endDate: this.thisMonth(10, 16, 30),
          title: "Multi-day item with a long title and times"
        },
        {
          id: "e4",
          startDate: this.thisMonth(20),
          title: "My Birthday!",
          classes: "birthday",
          url: "https://en.wikipedia.org/wiki/Birthday"
        },
        {
          id: "e5",
          startDate: this.thisMonth(5),
          endDate: this.thisMonth(12),
          title: "Multi-day item",
          classes: "purple"
        },
        {
          id: "foo",
          startDate: this.thisMonth(29),
          title: "Same day 1"
        },
        {
          id: "e6",
          startDate: this.thisMonth(29),
          title: "Same day 2",
          classes: "orange"
        },
        {
          id: "e7",
          startDate: this.thisMonth(29),
          title: "Same day 3"
        },
        {
          id: "e8",
          startDate: this.thisMonth(29),
          title: "Same day 4",
          classes: "orange"
        },
        {
          id: "e9",
          startDate: this.thisMonth(29),
          title: "Same day 5"
        },
        {
          id: "e10",
          startDate: this.thisMonth(29),
          title: "Same day 6",
          classes: "orange"
        },
        {
          id: "e11",
          startDate: this.thisMonth(29),
          title: "Same day 7"
        }
      ]
    };
  },
  computed: {
    userLocale() {
      return this.getDefaultBrowserLocale;
    },
    dayNames() {
      return this.getFormattedWeekdayNames(this.userLocale, "long", 0);
    },
    themeClasses() {
      return {
        "theme-default": this.useDefaultTheme,
        "holiday-us-traditional": this.useHolidayTheme,
        "holiday-us-official": this.useHolidayTheme
      };
    }
  },
  mounted() {
    this.newItemStartDate = this.isoYearMonthDay(this.today());
    this.newItemEndDate = this.isoYearMonthDay(this.today());
  },
  methods: {
    periodChanged() {
      // range, eventSource) {
      // Demo does nothing with this information, just including the method to demonstrate how
      // you can listen for changes to the displayed range and react to them (by loading items, etc.)
      //console.log(eventSource)
      //console.log(range)
    },
    thisMonth(d, h, m) {
      const t = new Date();
      return new Date(t.getFullYear(), t.getMonth(), d, h || 0, m || 0);
    },
    onClickDay(d) {
      this.selectionStart = null;
      this.selectionEnd = null;
      this.message = `You clicked: ${d.toLocaleDateString()}`;
    },
    onClickItem(e) {
      this.message = `You clicked: ${e.title}`;
    },
    setShowDate(d) {
      this.message = `Changing calendar view to ${d.toLocaleDateString()}`;
      this.showDate = d;
    },
    setSelection(dateRange) {
      this.selectionEnd = dateRange[1];
      this.selectionStart = dateRange[0];
    },
    finishSelection(dateRange) {
      this.setSelection(dateRange);
      this.message = `You selected: ${this.selectionStart.toLocaleDateString()} -${this.selectionEnd.toLocaleDateString()}`;
    },
    onDrop(item, date) {
      this.message = `You dropped ${item.id} on ${date.toLocaleDateString()}`;
      // Determine the delta between the old start date and the date chosen,
      // and apply that delta to both the start and end date to move the item.
      const eLength = this.dayDiff(item.startDate, date);
      item.originalItem.startDate = this.addDays(item.startDate, eLength);
      item.originalItem.endDate = this.addDays(item.endDate, eLength);
    },
    clickTestAddItem() {
      this.items.push({
        startDate: this.newItemStartDate,
        endDate: this.newItemEndDate,
        title: this.newItemTitle,
        id:
          "e" +
          Math.random()
            .toString(36)
            .substr(2, 10)
      });
      this.message = "You added a calendar item!";
    }
  }
};
</script>

<style scoped></style>
