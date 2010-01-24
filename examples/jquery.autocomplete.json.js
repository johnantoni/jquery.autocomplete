$(".tag-picker").autocomplete('/app/user/tags/json', {
    width: 320,
    max: 4,
    highlight: false,
    multiple: true,
    multipleSeparator: " ",
    scroll: true,
    scrollHeight: 300,
    dataType: "json",
    parse: function(data) {
        return $.map(data, function(row) {
            return {
                data: row,
                value: row,
                result: row
            }
        });
    },
    formatItem: function(row, i, max, term) {
        return term;
    },
    formatResult: function(row) {
        return row;
    }
}).result(function(row) {
    return row;
});
