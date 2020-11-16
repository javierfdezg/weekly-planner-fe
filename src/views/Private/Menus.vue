<template>
  <v-container fill-height>
    <planner-view
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
      :item-content-height="itemContentHeight"
      @date-selection-start="setSelection"
      @date-selection="setSelection"
      @date-selection-finish="finishSelection"
      @drop-on-date="onDrop"
      @click-date="onClickDay"
      @click-item="onClickItem"
    >
      <planner-header
        slot="header"
        slot-scope="{ headerProps }"
        :header-props="headerProps"
        @input="setShowDate"
      />
    </planner-view>
  </v-container>
</template>

<script>
import PlannerView from "@/components/Planner/PlannerView";
import PlannerHeader from "@/components/Planner/PlannerHeader";
import PlannerMathMixin from "@/components/Planner/PlannerMathMixin";

export default {
  name: "Menus",
  components: { PlannerView, PlannerHeader },
  mixins: [PlannerMathMixin],
  data() {
    return {
      /* Show the current month, and give it some fake items to show */
      showDate: this.thisMonth(new Date().getDate()),
      message: "",
      startingDayOfWeek: 1,
      disablePast: false,
      disableFuture: false,
      displayPeriodUom: "week",
      displayPeriodCount: 1,
      displayWeekNumbers: false,
      showTimes: false,
      selectionStart: null,
      selectionEnd: null,
      newItemTitle: "",
      newItemStartDate: "",
      newItemEndDate: "",
      useDefaultTheme: true,
      useHolidayTheme: true,
      useTodayIcons: false,
      itemContentHeight: "10em",
      items: []
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
        "holiday-us-official": this.useHolidayTheme,
        "custom-class": true
      };
    }
  },
  mounted() {
    this.newItemStartDate = this.isoYearMonthDay(this.today());
    this.newItemEndDate = this.isoYearMonthDay(this.today());
  },
  methods: {
    periodChanged: function(range) {
      let start = Date.parse(range.periodStart);
      let end = Date.parse(range.periodEnd);

      let loop = new Date(start);
      let items = [];

      while (loop <= end) {
        items.push(
          this.$store.getters["menus/getNewItem"](
            "breakfast",
            loop.getDate(),
            loop.getMonth(),
            loop.getFullYear()
          )
        );
        items.push(
          this.$store.getters["menus/getNewItem"](
            "lunch",
            loop.getDate(),
            loop.getMonth(),
            loop.getFullYear()
          )
        );
        items.push(
          this.$store.getters["menus/getNewItem"](
            "dinner",
            loop.getDate(),
            loop.getMonth(),
            loop.getFullYear()
          )
        );

        let newDate = loop.setDate(loop.getDate() + 1);
        loop = new Date(newDate);
      }

      this.$store.dispatch("menus/updateItems", items);
      this.items = this.$store.getters["menus/getItems"];
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

<style>
.theme-default .cv-item {
  height: 10em;
}
</style>
