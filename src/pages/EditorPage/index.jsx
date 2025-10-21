import React from "react";
import BlogTopicForm from "@/components/BlogTopicForm";
import BlogExportSection from "@/components/BlogExportSection";
import { GoogleGenerativeAI } from "@google/generative-ai";
import useGetIp from "@/hooks/useGetIp";
const EditorPage = () => {
  const [valueInput, setValueInput] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [result, setResult] = React.useState("");
  const { ip } = useGetIp();

  console.log("ip", ip);

  const buildPrompt = (topic) => `
Bạn là một **biên tập viên blog chuyên nghiệp**, hãy viết **bài blog tiếng Việt** với format trình bày **đẹp, thoáng, dễ đọc trên website**.  
Yêu cầu đặc biệt:
- Mỗi **tiêu đề (H1, H2)** phải **cách 1 dòng trống** so với nội dung trước và sau.  
- Mỗi đoạn văn cách nhau 1 dòng trống.  
- Khi dùng **chữ đậm (strong)**, hãy tách riêng trên dòng mới nếu nó là tiêu đề mini hoặc nhấn mạnh nguyên đoạn.  
- Không viết liền tiêu đề và nội dung — luôn có một dòng trống xen giữa.  

---

# **${topic}**

> Viết 2–3 câu mở đầu gợi tò mò hoặc cảm xúc.  
> Dẫn dắt người đọc đi vào chủ đề.

---

**1. Giới Thiệu Chung**  

Giải thích khái niệm chính hoặc hiện tượng liên quan.  

Trình bày bằng 2–3 đoạn ngắn, có ví dụ cụ thể.  

---

**2. Nguồn Gốc hoặc Ý Nghĩa Đặc Biệt**  

Phân tích nguồn gốc hoặc ý nghĩa đằng sau chủ đề.  

Dùng **đậm** để nhấn các cụm quan trọng, nhưng tránh dính liền đoạn khác.  

* Ví dụ 1  
* Ví dụ 2  

---

**3. Quan Niệm, Niềm Tin Hoặc Câu Chuyện Liên Quan**  

Kể lại các quan niệm dân gian, truyền thuyết hoặc câu chuyện thú vị.  

Giữ giọng văn nhẹ, dễ đọc.  

---

**4. Sự Thật Hoặc Giải Thích Khoa Học**  

Đưa ra các dẫn chứng khoa học, giải thích logic.  

* **Sức khỏe:** trình bày ngắn gọn.  
* **Tính cách:** ví dụ thực tế.  

---

**5. Lời Kết / Thông Điệp**  

Tóm tắt 3–4 câu giàu cảm xúc.  

Giữ giọng văn truyền cảm, nhân văn.  

> “Đừng để định kiến che mờ vẻ đẹp thật sự của chủ đề này.”  

---

### 🧭 Quy ước trình bày
- Dùng **dòng trống trước & sau mỗi tiêu đề hoặc strong text**.  
- Mỗi đoạn cách nhau 1 dòng.  
- Chỉ xuất **Markdown sạch**, không có HTML, JSON hoặc meta.  
- Độ dài bài: **800–1200 từ**.  
- Phong cách: storytelling nhẹ, gần gũi, truyền cảm.

Chỉ xuất nội dung Markdown hoàn chỉnh theo format trên cho chủ đề: **${topic}**
`;

  const handleCreateBlog = async (value) => {
    // const ip = usegetIp();
    // console.log("ip", ip);
    const limitCheck = checkLimitByIpAndDay(ip);
    if (!limitCheck.allowed) {
      alert(limitCheck.message);
      setLoading(false);
      return;
    }
    setLoading(true);
    const prompt = buildPrompt(value);
    const genAI = new GoogleGenerativeAI(import.meta.env.VITE_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
    const result = await model.generateContent(prompt);
    const resultBlog = result.response.candidates[0].content.parts[0].text;
    setResult(resultBlog);
    const historyItem = {
      id: Date.now(),
      title: value,
      result: resultBlog,
      ip: ip,
      creatatDay: new Date().toLocaleString(),
    };

    const stored = JSON.parse(localStorage.getItem("blogHistories") || "[]");
    stored.push(historyItem);
    localStorage.setItem("blogHistories", JSON.stringify(stored));
    setLoading(false);
  };

  const handleShowResult = () => {
    return result;
  };
  const handleCopy = async () => {
    await navigator.clipboard.writeText(result);
  };
  const checkLimitByIpAndDay = (ip) => {
    const today = new Date().toLocaleDateString("vi-VN");
    const limitData = JSON.parse(localStorage.getItem("blogLimit") || "{}");
    if (!limitData[ip]) {
      limitData[ip] = { date: today, count: 0 };
    }
    if (limitData[ip].date !== today) {
      limitData[ip] = { date: today, count: 0 };
    }
    if (limitData[ip].count >= 5) {
      return {
        allowed: false,
        message: "Bạn đã đạt giới hạn 5 bài/ngày cho IP này.",
      };
    }
    limitData[ip].count += 1;
    localStorage.setItem("blogLimit", JSON.stringify(limitData));
    return { allowed: true };
  };

  return (
    <div className="grid gap-6">
      <div className="grid gap-6">
        <h1 className="text-[32px] font-bold">Blog Editor</h1>
        <BlogTopicForm
          loading={loading}
          handleCreateBlog={handleCreateBlog}
          setValueInput={setValueInput}
          valueInput={valueInput}
        />
        <BlogExportSection
          handleShowResult={handleShowResult}
          handleCopy={handleCopy}
          valueInput={valueInput}
        />
      </div>
    </div>
  );
};

export default EditorPage;
