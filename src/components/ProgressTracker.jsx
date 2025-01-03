const accumulate = (items) => {
    return items.reduce((acc, item) => acc + Number(item.time), 0);
}

export const ProgressTracker = ({ title, unit, max, items }) => {
    const total = items ? accumulate(items) : 0;
    return (
        <div>
            <p>合計{title}： {total}/{max}({unit})</p>
        </div>
    )
}