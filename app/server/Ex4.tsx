import axios from "axios";

async function getData() {
    try {
        const res = await axios.get("https://example.com/invalid-endpoint");
        return { data: res.data, error: null };
    } catch (error:any) {
        if (error.response) {
            return { data: null, error: error.response.status };
        } else if (error.request) {
            return { data: null, error: "No response from server" };
        } else {
            return { data: null, error: "Request error" };
        }
    }
}

export default async function Page() {
    const { data, error } = await getData();

    if (error) {
        return (
            <div>
                {error === 404 && <h1>404 - Trang không tồn tại</h1>}
                {error === 500 && <h1>500 - Lỗi máy chủ</h1>}
                {typeof error === "string" && <h1>{error}</h1>}
            </div>
        );
    }
    return (
        <div>
            <h1>Dữ liệu API:</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}
