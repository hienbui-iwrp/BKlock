import React from "react";
import { Text, Checkbox } from "@mantine/core";
import { useListState } from "@mantine/hooks";
import "../../css/filterForm.css";

export default function CheckBoxes({
    items,
    label,
    filters,
    setFilters,
    uncheck,
    setUnCheck,
    badgeValue,
}) {
    const [values, handlers] = useListState(items);
    React.useEffect(() => {
        if (uncheck) {
            handlers.setState((current) =>
                current.map((value) => ({ ...value, checked: false }))
            );
        }
    }, [uncheck]);

    React.useEffect(() => {
        let index = values.findIndex((ele) => ele.value === badgeValue);
        handlers.setItemProp(index, "checked", false);
    }, [badgeValue]);

    return (
        <>
            <Text className="filter-radio-title">{label}</Text>
            {values.map((item, index) => {
                return (
                    <Checkbox
                        mt="xs"
                        ml={33}
                        size="md"
                        color="dark"
                        value={item.value}
                        label={item.value}
                        className="filter-radio-select"
                        key={item.value}
                        checked={item.checked}
                        onChange={(event) => {
                            /* Set the filter array */
                            event.currentTarget.checked
                                ? setFilters((arr) => [...arr, item.value])
                                : setFilters(
                                      filters.filter(
                                          (ele) => ele !== item.value
                                      )
                                  );

                            /* set checked value of checkbox */
                            handlers.setItemProp(
                                index,
                                "checked",
                                event.currentTarget.checked
                            );

                            /* uncheck all if clear button is clicked ! */
                            event.currentTarget.checked && setUnCheck(false);
                        }}
                    />
                );
            })}
        </>
    );
}
