const styles = {
    formGroup: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: '1rem',
    },
    label: {
        marginRight: '10px',
    },
    input: {
        width: '50%',
        padding: '8px',
        border: '1px solid #ccc',
        borderRadius: '4px',
    },
};

export const InputLogs = (props) => {
    const { logTitle, logTime, onChangeLogTitle, onChangeLogTime } = props
    return (
        <div>
            <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="title">学習項目</label>
                <input style={styles.input} id="title" type="text" placeholder='学習項目の概要を入力してください' value={logTitle} onChange={onChangeLogTitle} />
            </div >
            <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="time">学習時間</label>
                <input style={styles.input} id="time" type="number" placeholder='学習時間を入力してください' value={logTime} onChange={onChangeLogTime} />
            </div >
            <button>追加</button>
        </div>
    )
}