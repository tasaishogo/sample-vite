export const PreviewList = ({ items }) => {
    return (
        <div>
            {items.map(({ label, value }) => (
                <p>入力されている{label}：{value}</p>
            ))}
        </div>
    )
}