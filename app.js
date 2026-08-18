const letterTypes = [
    {
        id: 'advice',
        icon: 'fa-lightbulb',
        titleEn: 'Letter of Advice',
        titleVi: 'Thư Cho Lời Khuyên',
        basicInfo: `
            <div class="content-block">
                <h3>Mục đích (Purpose)</h3>
                <p>Đưa ra lời khuyên, gợi ý hoặc đề xuất để giúp người nhận giải quyết một vấn đề hoặc đưa ra quyết định phù hợp trong một tình huống cụ thể.</p>
            </div>
            <div class="content-block">
                <h3>Phong cách thư (Style)</h3>
                <p>Chủ yếu là thư thân mật (Informal Letter).</p>
            </div>
            <div class="content-block">
                <h3>Văn phong (Tone)</h3>
                <p>Thân thiện, quan tâm, hỗ trợ và khích lệ.</p>
            </div>
        `,
        identifyingSigns: `
            <div class="content-block">
                <h3>Các từ khóa thường xuất hiện trong đề bài:</h3>
                <ul>
                    <li>advice / give me some advice / ask for advice</li>
                    <li>suggestions / recommendations</li>
                    <li>what should I do...? / what would you suggest...?</li>
                    <li>I need your help with...</li>
                </ul>
            </div>
        `,
        detailedOutline: `
            <div class="outline-note">
                <p><strong>LƯU Ý:</strong> Thư cho lời khuyên thường là thư thân mật.</p>
            </div>
            <div class="outline-step">
                <h4>1. Lời chào mở đầu</h4>
                <p>↳ <span class="outline-phrase" data-vi="Viết lời chào mở đầu thân mật: 'Kính gửi [tên của người nhận],'">Dear [tên của người nhận],</span></p>
            </div>
            <div class="outline-step">
                <h4>2. Mở thư</h4>
                <p>↳ <span class="outline-phrase" data-vi="Viết câu mở thư: 'Cảm ơn vì đã viết thư cho tớ. Dạo này cậu thế nào? Sau khi đọc thư của cậu, tớ có một vài gợi ý mà cậu có thể cân nhắc.'">Thanks for writing to me. How have you been lately? After reading your letter, I have a few suggestions that you may want to consider.</span></p>
            </div>
            <div class="outline-step">
                <h4>3. Thân thư</h4>
                <p>Lần lượt đưa ra lời khuyên/gợi ý phù hợp với tình huống của đề.</p>
                <div class="outline-structures">
                    <h5>CẤU TRÚC CHO LỜI KHUYÊN:</h5>
                    <ul>
                        <li><span class="outline-phrase" data-vi="Viết cấu trúc khuyên bảo: 'Tớ nghĩ cậu nên + Vo.'">I think you should + Vo.</span></li>
                        <li><span class="outline-phrase" data-vi="Viết cấu trúc khuyên bảo: 'Cậu có thể muốn + Vo.'">You may want to + Vo.</span></li>
                        <li><span class="outline-phrase" data-vi="Viết cấu trúc khuyên bảo: 'Đó sẽ là một ý kiến hay để + Vo.'">It would be a good idea to + Vo.</span></li>
                        <li><span class="outline-phrase" data-vi="Viết cấu trúc khuyên bảo: 'Nếu tớ là cậu, tớ sẽ + Vo.'">If I were you, I would + Vo.</span></li>
                        <li><span class="outline-phrase" data-vi="Viết cấu trúc khuyên bảo: 'Cậu có thể thử + Ving.'">You could try + Ving.</span></li>
                        <li><span class="outline-phrase" data-vi="Viết cấu trúc khuyên bảo: 'Hãy nhớ + Vo. / Đừng quên + Vo.'">Remember to + Vo. / Don't forget to + Vo.</span></li>
                        <li><span class="outline-phrase" data-vi="Viết cấu trúc khuyên bảo: 'Có lẽ đáng để + Ving.'">It might be worth + Ving.</span></li>
                        <li><span class="outline-phrase" data-vi="Viết cấu trúc khuyên bảo: 'Cậu có thể cân nhắc + Ving.'">You could consider + Ving.</span></li>
                    </ul>
                </div>
                <p>Từ liên kết gợi ý: ↳ <em>To begin with, … → Second, … → Next, … → Finally, …</em></p>
            </div>
            <div class="outline-step">
                <h4>4. Kết thư</h4>
                <p>↳ <span class="outline-phrase" data-vi="Viết câu kết thư: 'Tớ hy vọng cậu thấy những gợi ý của tớ hữu ích. Cho tớ biết tình hình ra sao nhé. Viết thư lại sớm nhé.'">I hope you find my suggestions helpful. Let me know how things go. Write back soon.</span></p>
            </div>
            <div class="outline-step">
                <h4>5. Lời chào kết thúc</h4>
                <p>↳ <span class="outline-phrase" data-vi="Viết lời chào kết thúc thân mật: 'Lời chúc tốt đẹp nhất,'">Best wishes,</span></p>
            </div>
        `,
        practicePrompt: 'You have received a letter from an English friend, Helen. She is going to visit Hanoi in June. Write a letter to give her some suggestions. In your letter, you should tell her: Where to stay, What dishes to try, Which places to visit, and What to wear when visiting Hanoi. You should write at least 120 words. Do not include your name or address.',
        sampleWriting: `
            <div class="content-block">
                <h3>BÀI VIẾT MẪU (SAMPLE LETTER - B2 LEVEL)</h3>
                <div class="sample-letter-box">
                    <strong>Dear Helen,</strong><br><br>
                    Thanks for writing to me. How have you been lately? After reading your letter, I have a few suggestions that you may want to consider for your upcoming trip to Hanoi in June.<br><br>
                    To begin with, you could consider staying in a boutique hotel in the Old Quarter. This area is situated right in the heart of the city, which makes it extremely convenient for sightseeing. Secondly, it would be a good idea to try out our renowned local cuisine, particularly Pho, Bun Cha, and Banh Mi. These traditional dishes are not only mouth-watering but also deeply represent our culinary culture. Next, if I were you, I would spend time visiting significant historical landmarks such as Hoan Kiem Lake, the Temple of Literature, and the Ho Chi Minh Mausoleum. They offer fascinating insights into Vietnam's rich heritage. Finally, remember to pack light and breathable clothing, such as cotton T-shirts and shorts, as the weather in June can be exceptionally hot and humid.<br><br>
                    I hope you find my suggestions helpful. Let me know how things go. Write back soon.<br><br>
                    <strong>Best wishes,</strong>
                </div>
                
                <h3 style="margin-top: 25px;">BẢN DỊCH CHI TIẾT</h3>
                <div class="translation-box" style="background-color: var(--bg-main); border: 1px solid var(--border-color); padding: 20px; border-radius: 12px; margin-top: 15px; font-family: var(--font-body); line-height: 1.8; color: var(--text-muted); font-style: italic;">
                    <strong>Helen thân mến,</strong><br><br>
                    Cảm ơn vì đã viết thư cho tớ. Dạo này cậu thế nào? Sau khi đọc thư của cậu, tớ có một vài gợi ý mà cậu có thể cân nhắc cho chuyến đi sắp tới đến Hà Nội vào tháng Sáu.<br><br>
                    Đầu tiên, cậu có thể cân nhắc ở tại một khách sạn boutique trong khu Phố Cổ. Khu vực này nằm ngay trung tâm thành phố, điều này làm cho việc tham quan ngắm cảnh cực kỳ thuận tiện. Thứ hai, sẽ là một ý kiến hay nếu thử nền ẩm thực địa phương nổi tiếng của chúng tớ, đặc biệt là Phở, Bún Chả và Bánh Mì. Những món ăn truyền thống này không chỉ ngon miệng mà còn thể hiện sâu sắc văn hóa ẩm thực của chúng tớ. Tiếp theo, nếu tớ là cậu, tớ sẽ dành thời gian tham quan các di tích lịch sử quan trọng như Hồ Hoàn Kiếm, Văn Miếu và Lăng Chủ tịch Hồ Chí Minh. Chúng mang đến cái nhìn hấp dẫn về di sản phong phú của Việt Nam. Cuối cùng, hãy nhớ mang theo quần áo mỏng nhẹ và thoáng khí, như áo phông cotton và quần đùi, vì thời tiết vào tháng Sáu có thể vô cùng nóng và ẩm.<br><br>
                    Tớ hy vọng cậu thấy những gợi ý của tớ hữu ích. Hãy cho tớ biết mọi chuyện diễn ra như thế nào nhé. Hồi âm sớm cho tớ.<br><br>
                    <strong>Chúc những điều tốt đẹp nhất,</strong>
                </div>
            </div>
        `
    },
    {
        id: 'request',
        icon: 'fa-hand-holding-hand',
        titleEn: 'Letter of Request',
        titleVi: 'Thư Yêu Cầu',
        basicInfo: `
            <div class="content-block">
                <h3>Mục đích (Purpose)</h3>
                <p>Yêu cầu hoặc xin thông tin, sự giúp đỡ, dịch vụ hoặc sự cho phép từ người nhận.</p>
            </div>
            <div class="content-block">
                <h3>Phong cách thư (Style)</h3>
                <p>Thường là thư bán trang trọng hoặc trang trọng (Semi-formal/Formal Letter).</p>
            </div>
            <div class="content-block">
                <h3>Văn phong (Tone)</h3>
                <p>Lịch sự, tôn trọng và rõ ràng.</p>
            </div>
        `,
        identifyingSigns: `
            <div class="content-block">
                <h3>Các từ khóa thường xuất hiện:</h3>
                <ul>
                    <li>request / ask for help / ask for information</li>
                    <li>ask about... / request information about...</li>
                    <li>would like to ask / would like to know</li>
                    <li>write a letter to ask... / inquire about...</li>
                </ul>
            </div>
        `,
        detailedOutline: `
            <div class="outline-note">
                <p><strong>LƯU Ý:</strong> Thư yêu cầu thường dùng để xin thông tin, xin giúp đỡ hoặc đề nghị điều gì đó. Thư có thể là thư thân mật, bán trang trọng hoặc trang trọng.</p>
            </div>
            <div class="outline-step">
                <h4>1. Lời chào mở đầu</h4>
                <ul>
                    <li><strong>Thân mật:</strong> ↳ <span class="outline-phrase" data-vi="Viết lời chào mở đầu thân mật: 'Kính gửi [tên của người nhận],'">Dear [tên của người nhận],</span></li>
                    <li><strong>Trang trọng:</strong>
                        <ul>
                            <li>↳ <span class="outline-phrase" data-vi="Viết lời chào mở đầu trang trọng: 'Kính gửi Ngài,'">Dear Sir,</span></li>
                            <li>↳ <span class="outline-phrase" data-vi="Viết lời chào mở đầu trang trọng: 'Kính gửi Bà,'">Dear Madam,</span></li>
                            <li>↳ <span class="outline-phrase" data-vi="Viết lời chào mở đầu trang trọng: 'Kính gửi Ông/Bà,'">Dear Sir/Madam,</span></li>
                        </ul>
                    </li>
                    <li><strong>Bán trang trọng:</strong> ↳ <span class="outline-phrase" data-vi="Viết lời chào mở đầu bán trang trọng: 'Kính gửi Ông/Bà [họ của người nhận],'">Dear Mr. / Ms. / Mrs. [họ của người nhận],</span></li>
                </ul>
            </div>
            <div class="outline-step">
                <h4>2. Mở thư</h4>
                <ul>
                    <li><strong>Thân mật:</strong> ↳ <span class="outline-phrase" data-vi="Viết câu mở thư yêu cầu (Thân mật): 'Dạo này cậu thế nào? Tớ hy vọng mọi thứ đều ổn. Tớ viết thư này để hỏi một số thông tin về [thứ cần xin thông tin], vì tớ dự định [mục đích].'">How have you been lately? I hope everything is going well. I’m writing to ask for some information about [thứ cần xin thông tin], as I’m planning to [mục đích].</span></li>
                    <li><strong>Trang trọng & Bán trang trọng:</strong> ↳ <span class="outline-phrase" data-vi="Viết câu mở thư yêu cầu (Trang trọng/Bán trang trọng): 'Tôi viết thư này để yêu cầu một số thông tin về [thứ cần xin thông tin], vì tôi quan tâm đến [mục đích] và muốn tìm hiểu thêm trước khi đưa ra quyết định.'">I am writing to request some information about [thứ cần xin thông tin], as I am interested in [mục đích] and would like to learn more before making a decision.</span></li>
                </ul>
            </div>
            <div class="outline-step">
                <h4>3. Thân thư</h4>
                <p>Lần lượt xin các thông tin cần thiết phù hợp với tình huống của đề.</p>
                <div class="outline-structures">
                    <h5>CẤU TRÚC XIN THÔNG TIN:</h5>
                    <p><strong>Thân mật:</strong></p>
                    <ul>
                        <li><span class="outline-phrase" data-vi="Viết câu xin thông tin (Thân mật): 'Cậu có thể cho tớ thêm thông tin về … không?'">Can you give me more information about …?</span></li>
                        <li><span class="outline-phrase" data-vi="Viết câu xin thông tin (Thân mật): 'Cậu có thể kể cho tớ thêm về … không?'">Can you tell me more about …?</span></li>
                        <li><span class="outline-phrase" data-vi="Viết câu xin thông tin (Thân mật): 'Cậu có thể cho tớ biết thêm về … không?'">Can you let me know more about …?</span></li>
                        <li><span class="outline-phrase" data-vi="Viết câu xin thông tin (Thân mật): 'Tớ muốn tìm hiểu thêm về …'">I’d like to learn more about …</span></li>
                        <li><span class="outline-phrase" data-vi="Viết câu xin thông tin (Thân mật): 'Tớ muốn biết thêm chi tiết về …'">I’d like to get more details about …</span></li>
                    </ul>
                    <p><strong>Trang trọng & Bán trang trọng:</strong></p>
                    <ul>
                        <li><span class="outline-phrase" data-vi="Viết câu xin thông tin (Trang trọng/Bán trang trọng): 'Ông/bà có thể cung cấp thêm thông tin về … không?'">Could you provide me with more information about …?</span></li>
                        <li><span class="outline-phrase" data-vi="Viết câu xin thông tin (Trang trọng/Bán trang trọng): 'Ông/bà có thể cho tôi thêm chi tiết về … không?'">Could you give me more details about …?</span></li>
                        <li><span class="outline-phrase" data-vi="Viết câu xin thông tin (Trang trọng/Bán trang trọng): 'Tôi sẽ rất cảm kích nếu ông/bà có thể cung cấp thêm thông tin về …'">I would appreciate it if you could provide more information about …</span></li>
                        <li><span class="outline-phrase" data-vi="Viết câu xin thông tin (Trang trọng/Bán trang trọng): 'Tôi muốn hỏi về …'">I would like to inquire about …</span></li>
                        <li><span class="outline-phrase" data-vi="Viết câu xin thông tin (Trang trọng/Bán trang trọng): 'Tôi cũng đang tự hỏi về …'">I am also wondering about …</span></li>
                    </ul>
                </div>
                <div class="outline-subnote">
                    <p><strong>LƯU Ý:</strong> Sau mỗi yêu cầu xin thông tin, nên kèm thêm một câu giải thích lý do.</p>
                </div>
                <p>Từ liên kết gợi ý: ↳ <em>To begin with, … → Second, … → Next, … → Finally, …</em></p>
            </div>
            <div class="outline-step">
                <h4>4. Kết thư</h4>
                <ul>
                    <li><strong>Thân mật:</strong> ↳ <span class="outline-phrase" data-vi="Viết câu kết thư (Thân mật): 'Tớ hy vọng cậu có thể giúp tớ việc này. Tớ rất mong nhận được phản hồi từ cậu. Viết lại sớm nhé.'">I hope you can help me with this. I’m looking forward to hearing from you. Write back soon.</span></li>
                    <li><strong>Trang trọng & Bán trang trọng:</strong> ↳ <span class="outline-phrase" data-vi="Viết câu kết thư (Trang trọng/Bán trang trọng): 'Cảm ơn ông/bà vì đã dành thời gian và hỗ trợ. Tôi rất mong sớm nhận được phản hồi.'">Thank you for your time and assistance. I look forward to hearing from you soon.</span></li>
                </ul>
            </div>
            <div class="outline-step">
                <h4>5. Lời chào kết thúc</h4>
                <ul>
                    <li><strong>Thân mật:</strong> ↳ <span class="outline-phrase" data-vi="Viết lời chào kết thúc thân mật: 'Lời chúc tốt đẹp nhất,'">Best wishes,</span></li>
                    <li><strong>Trang trọng:</strong> ↳ <span class="outline-phrase" data-vi="Viết lời chào kết thúc trang trọng: 'Trân trọng,'">Yours faithfully,</span></li>
                    <li><strong>Bán trang trọng:</strong> ↳ <span class="outline-phrase" data-vi="Viết lời chào kết thúc bán trang trọng: 'Trân trọng,'">Yours sincerely,</span></li>
                </ul>
            </div>
        `,
        practicePrompt: 'Your friend has just completed an English course at Rainbow Language Center and had a great experience. You are planning to study English as well and would like to know more about the course. Write a letter to your friend asking for more information about the course. In your email, you should ask about: The address of the center, The tuition fee, The teachers, and The training program. You should write at least 120 words. Do not include your name or address.',
        sampleWriting: `
            <div class="content-block">
                <h3>BÀI VIẾT MẪU (SAMPLE LETTER - B2 LEVEL)</h3>
                <div class="sample-letter-box">
                    <strong>Dear Moonie,</strong><br><br>
                    How have you been lately? I hope everything is going well. I’m writing to ask for some information about the English course at Rainbow Language Center, as I’m planning to enroll there next month to improve my language skills.<br><br>
                    To begin with, can you let me know more about the address of the center? I need to figure out whether it is within a reasonable commuting distance from my apartment. Secondly, I’d like to get more details about the tuition fee. It is essential for me to prepare a sufficient budget before officially signing up. Next, can you give me more information about the teachers? I want to ensure that they possess strong pedagogical skills and are supportive enough to help me progress. Finally, I’m also wondering about the training program. Could you share what specific skills or knowledge areas the curriculum focuses on?<br><br>
                    I hope you can help me with this. I’m looking forward to hearing from you. Write back soon.<br><br>
                    <strong>Best wishes,</strong>
                </div>
                
                <h3 style="margin-top: 25px;">BẢN DỊCH CHI TIẾT</h3>
                <div class="translation-box" style="background-color: var(--bg-main); border: 1px solid var(--border-color); padding: 20px; border-radius: 12px; margin-top: 15px; font-family: var(--font-body); line-height: 1.8; color: var(--text-muted); font-style: italic;">
                    <strong>Moonie thân mến,</strong><br><br>
                    Dạo này cậu thế nào? Tớ hy vọng mọi thứ đều diễn ra tốt đẹp. Tớ viết thư này để hỏi một số thông tin về khóa học tiếng Anh tại Trung tâm Ngoại ngữ Rainbow, vì tớ đang dự định đăng ký học ở đó vào tháng tới để cải thiện kỹ năng ngôn ngữ của mình.<br><br>
                    Đầu tiên, cậu có thể cho tớ biết thêm về địa chỉ của trung tâm không? Tớ cần xác định xem nó có nằm trong khoảng cách đi lại hợp lý từ căn hộ của tớ hay không. Thứ hai, tớ muốn biết thêm chi tiết về học phí. Việc chuẩn bị đủ ngân sách trước khi chính thức đăng ký là rất cần thiết đối với tớ. Tiếp theo, cậu có thể cung cấp cho tớ thêm thông tin về các giáo viên không? Tớ muốn đảm bảo rằng họ có kỹ năng sư phạm vững vàng và đủ hỗ trợ để giúp tớ tiến bộ. Cuối cùng, tớ cũng đang thắc mắc về chương trình đào tạo. Cậu có thể chia sẻ chương trình giảng dạy tập trung vào những kỹ năng hoặc lĩnh vực kiến thức cụ thể nào không?<br><br>
                    Tớ hy vọng cậu có thể giúp tớ việc này. Tớ rất mong nhận được hồi âm từ cậu. Viết thư lại sớm nhé.<br><br>
                    <strong>Chúc mọi điều tốt lành,</strong>
                </div>
            </div>
        `
    },
    {
        id: 'description',
        icon: 'fa-image',
        titleEn: 'Letter of Description',
        titleVi: 'Thư Mô Tả',
        basicInfo: `
            <div class="content-block">
                <h3>Mục đích (Purpose)</h3>
                <p>Cung cấp thông tin hoặc mô tả về một người, địa điểm, sự kiện, trải nghiệm hoặc tình huống cụ thể.</p>
            </div>
            <div class="content-block">
                <h3>Phong cách thư (Style)</h3>
                <p>Chủ yếu là thư thân mật (Informal Letter).</p>
            </div>
            <div class="content-block">
                <h3>Văn phong (Tone)</h3>
                <p>Thân thiện, tự nhiên và mang tính chia sẻ.</p>
            </div>
        `,
        identifyingSigns: `
            <div class="content-block">
                <h3>Các từ khóa thường xuất hiện:</h3>
                <ul>
                    <li>describe ... / write a letter to describe ...</li>
                    <li>give a description of ...</li>
                    <li>tell your friend about ...</li>
                    <li>tell him/her what ... is like</li>
                    <li>give details about ...</li>
                    <li>give information about ...</li>
                </ul>
            </div>
        `,
        detailedOutline: `
            <div class="outline-note">
                <p><strong>LƯU Ý:</strong> Thư mô tả dùng để cung cấp thông tin hoặc mô tả đặc điểm của một người, địa điểm, sự việc hoặc chương trình. Thư có thể là thư thân mật, bán trang trọng hoặc trang trọng.</p>
            </div>
            <div class="outline-step">
                <h4>1. Lời chào mở đầu</h4>
                <ul>
                    <li><strong>Thân mật:</strong> ↳ <span class="outline-phrase" data-vi="Viết lời chào mở đầu thân mật: 'Kính gửi [tên của người nhận],'">Dear [tên của người nhận],</span></li>
                    <li><strong>Trang trọng:</strong>
                        <ul>
                            <li>↳ <span class="outline-phrase" data-vi="Viết lời chào mở đầu trang trọng: 'Kính gửi Ngài,'">Dear Sir,</span></li>
                            <li>↳ <span class="outline-phrase" data-vi="Viết lời chào mở đầu trang trọng: 'Kính gửi Bà,'">Dear Madam,</span></li>
                            <li>↳ <span class="outline-phrase" data-vi="Viết lời chào mở đầu trang trọng: 'Kính gửi Ông/Bà,'">Dear Sir/Madam,</span></li>
                        </ul>
                    </li>
                    <li><strong>Bán trang trọng:</strong> ↳ <span class="outline-phrase" data-vi="Viết lời chào mở đầu bán trang trọng: 'Kính gửi Ông/Bà [họ của người nhận],'">Dear Mr. / Ms. / Mrs. [họ của người nhận],</span></li>
                </ul>
            </div>
            <div class="outline-step">
                <h4>2. Mở thư</h4>
                <div class="outline-substep">
                    <h5>2.1 Khi thư yêu cầu CUNG CẤP THÔNG TIN:</h5>
                    <ul>
                        <li><strong>Thân mật:</strong> ↳ <span class="outline-phrase" data-vi="Viết câu mở thư mô tả (Thân mật - Cách 1): 'Dạo này cậu thế nào? Tớ hy vọng mọi việc đều ổn. Trong thư, cậu đã hỏi tớ về [thứ cần mô tả thông tin], nên tớ muốn chia sẻ một vài thông tin với cậu.'">How have you been lately? I hope everything is going well. In your letter, you asked me about [thứ cần mô tả thông tin], so I’d like to share some information with you.</span></li>
                        <li><strong>Trang trọng & Bán trang trọng:</strong> ↳ <span class="outline-phrase" data-vi="Viết câu mở thư mô tả (Trang trọng/Bán trang trọng - Cách 1): 'Trong thư, ông/bà đã hỏi thông tin về [thứ cần mô tả thông tin], nên tôi viết thư này để cung cấp một vài chi tiết.'">In your letter, you asked for information about [thứ cần mô tả thông tin], so I am writing to provide you with some details.</span></li>
                    </ul>
                </div>
                <div class="outline-substep" style="margin-top: 10px;">
                    <h5>2.2 Khi thư yêu cầu MÔ TẢ MỘT ĐỐI TƯỢNG / SỰ VIỆC:</h5>
                    <ul>
                        <li><strong>Thân mật:</strong> ↳ <span class="outline-phrase" data-vi="Viết câu mở thư mô tả (Thân mật - Cách 2): 'Dạo này cậu thế nào? Tớ hy vọng mọi thứ đều ổn. Trong thư, cậu yêu cầu tớ mô tả [thứ cần mô tả], nên đây là một vài chi tiết.'">How have you been lately? I hope everything is going well. In your letter, you asked me to describe [thứ cần mô tả], so here are some details.</span></li>
                        <li><strong>Trang trọng & Bán trang trọng:</strong> ↳ <span class="outline-phrase" data-vi="Viết câu mở thư mô tả (Trang trọng/Bán trang trọng - Cách 2): 'Trong thư, ông/bà đã yêu cầu tôi mô tả [thứ cần mô tả], vì vậy tôi viết thư này để cung cấp một mô tả chi tiết.'">In your letter, you asked me to describe [thứ cần mô tả], so I am writing to provide you with a detailed description.</span></li>
                    </ul>
                </div>
            </div>
            <div class="outline-step">
                <h4>3. Thân thư</h4>
                <p>Cung cấp thông tin hoặc mô tả đối tượng, sự việc theo yêu cầu của người nhận.</p>
                <div class="outline-subnote">
                    <p><strong>LƯU Ý:</strong> Trong thân thư, chỉ mô tả hoặc cung cấp thông tin, không đặt câu hỏi, không đưa lời khuyên.</p>
                </div>
                <p>Từ liên kết gợi ý: ↳ <em>To begin with, … → Secondly, … → Next, … → Finally, …</em></p>
            </div>
            <div class="outline-step">
                <h4>4. Kết thư</h4>
                <ul>
                    <li><strong>Thân mật:</strong> ↳ <span class="outline-phrase" data-vi="Viết câu kết thư mô tả (Thân mật): 'Tớ hy vọng thông tin này hữu ích với cậu. Báo cho tớ biết nếu cậu cần thêm chi tiết nhé.'">I hope you find this information helpful. Let me know if you need more details.</span></li>
                    <li><strong>Trang trọng & Bán trang trọng:</strong> ↳ <span class="outline-phrase" data-vi="Viết câu kết thư mô tả (Trang trọng/Bán trang trọng): 'Tôi hy vọng những thông tin trên hữu ích với ông/bà. Đừng ngần ngại liên hệ với tôi nếu cần thêm bất kỳ chi tiết nào.'">I hope the information above is helpful to you. Please feel free to contact me if you need any further details.</span></li>
                </ul>
            </div>
            <div class="outline-step">
                <h4>5. Lời chào kết thúc</h4>
                <ul>
                    <li><strong>Thân mật:</strong> ↳ <span class="outline-phrase" data-vi="Viết lời chào kết thúc thân mật: 'Lời chúc tốt đẹp nhất,'">Best wishes,</span></li>
                    <li><strong>Trang trọng:</strong> ↳ <span class="outline-phrase" data-vi="Viết lời chào kết thúc trang trọng: 'Trân trọng,'">Yours faithfully,</span></li>
                    <li><strong>Bán trang trọng:</strong> ↳ <span class="outline-phrase" data-vi="Viết lời chào kết thúc bán trang trọng: 'Trân trọng,'">Yours sincerely,</span></li>
                </ul>
            </div>
        `,
        practicePrompt: 'You have received a letter from your English friend, Emily. Read part of her letter below:\n... I have received a letter from your friend, Hoa. She is going to do a course in London, so she asked me if she could stay with me and my family until she finds an apartment. Could you tell me some information about her? (things like her personality, her hobbies, her current work or study). I need to know whether she will fit in my family or not ...\nWrite a letter responding to Emily. You should write at least 120 words. Do not include your name or address.',
        sampleWriting: `
            <div class="content-block">
                <h3>BÀI VIẾT MẪU (SAMPLE LETTER - B2 LEVEL)</h3>
                <div class="sample-letter-box">
                    <strong>Dear Emily,</strong><br><br>
                    How have you been lately? I hope everything is going well. In your letter, you asked me about my friend Hoa, so I’d like to share some information with you.<br><br>
                    To begin with, she is a remarkably friendly and considerate individual. Because of her amiable personality, she consistently gets along well with people and is always willing to lend a helping hand to those in need. Secondly, she is passionate about quiet indoor activities, notably reading contemporary literature and listening to classical music. Therefore, you can be assured that she will not cause any disruption to your household. Next, she is currently a sophomore majoring in Business Administration at Can Tho University. The short course in London is an integral part of her exchange program, which is why she only needs temporary accommodation. Finally, I am completely convinced that she will fit right into your family as she is highly adaptable and respectful of household routines.<br><br>
                    I hope you find this information helpful. Let me know if you need more details.<br><br>
                    <strong>Best wishes,</strong>
                </div>
                
                <h3 style="margin-top: 25px;">BẢN DỊCH CHI TIẾT</h3>
                <div class="translation-box" style="background-color: var(--bg-main); border: 1px solid var(--border-color); padding: 20px; border-radius: 12px; margin-top: 15px; font-family: var(--font-body); line-height: 1.8; color: var(--text-muted); font-style: italic;">
                    <strong>Emily thân mến,</strong><br><br>
                    Dạo này cậu thế nào? Tớ hy vọng mọi thứ đều diễn ra tốt đẹp. Trong thư của cậu, cậu có hỏi tớ về bạn của tớ là Hoa, vì vậy tớ muốn chia sẻ một vài thông tin với cậu.<br><br>
                    Đầu tiên, cô ấy là một người cực kỳ thân thiện và chu đáo. Nhờ tính cách hòa đồng, cô ấy luôn hòa hợp tốt với mọi người và luôn sẵn sàng chìa tay giúp đỡ những người cần. Thứ hai, cô ấy đam mê các hoạt động yên tĩnh trong nhà, đặc biệt là đọc văn học đương đại và nghe nhạc cổ điển. Do đó, cậu có thể yên tâm rằng cô ấy sẽ không gây ra bất kỳ sự xáo trộn nào cho gia đình cậu. Tiếp theo, cô ấy hiện đang là sinh viên năm hai chuyên ngành Quản trị Kinh doanh tại Đại học Cần Thơ. Khóa học ngắn hạn ở London là một phần không thể thiếu trong chương trình trao đổi của cô ấy, đó là lý do tại sao cô ấy chỉ cần chỗ ở tạm thời. Cuối cùng, tớ hoàn toàn tin chắc rằng cô ấy sẽ rất phù hợp với gia đình cậu vì cô ấy có khả năng thích ứng cao và tôn trọng nếp sinh hoạt của gia đình.<br><br>
                    Tớ hy vọng cậu thấy thông tin này hữu ích. Hãy cho tớ biết nếu cậu cần thêm chi tiết.<br><br>
                    <strong>Chúc mọi điều tốt lành,</strong>
                </div>
            </div>
        `
    },
    {
        id: 'complaint',
        icon: 'fa-thumbs-down',
        titleEn: 'Letter of Complaint',
        titleVi: 'Thư Phàn Nàn',
        basicInfo: `
            <div class="content-block">
                <h3>Mục đích (Purpose)</h3>
                <p>Phàn nàn về một sản phẩm, dịch vụ hoặc tình huống không hài lòng, đồng thời yêu cầu giải quyết vấn đề.</p>
            </div>
            <div class="content-block">
                <h3>Phong cách thư (Style)</h3>
                <p>Chủ yếu là thư trang trọng (Formal Letter).</p>
            </div>
            <div class="content-block">
                <h3>Văn phong (Tone)</h3>
                <p>Nghiêm túc, lịch sự, khách quan và mang tính xây dựng.</p>
            </div>
        `,
        identifyingSigns: `
            <div class="content-block">
                <h3>Các từ khóa thường xuất hiện:</h3>
                <ul>
                    <li>complain about</li>
                    <li>express dissatisfaction with...</li>
                    <li>not satisfied with...</li>
                    <li>write a letter to report a problem</li>
                </ul>
            </div>
        `,
        detailedOutline: `
            <div class="outline-note">
                <p><strong>LƯU Ý:</strong> Thư phàn nàn thường là thư bán trang trọng hoặc trang trọng.</p>
            </div>
            <div class="outline-step">
                <h4>1. Lời chào mở đầu</h4>
                <ul>
                    <li><strong>Trang trọng:</strong>
                        <ul>
                            <li>↳ <span class="outline-phrase" data-vi="Viết lời chào mở đầu trang trọng: 'Kính gửi Ngài,'">Dear Sir,</span></li>
                            <li>↳ <span class="outline-phrase" data-vi="Viết lời chào mở đầu trang trọng: 'Kính gửi Bà,'">Dear Madam,</span></li>
                            <li>↳ <span class="outline-phrase" data-vi="Viết lời chào mở đầu trang trọng: 'Kính gửi Ông/Bà,'">Dear Sir/Madam,</span></li>
                        </ul>
                    </li>
                    <li><strong>Bán trang trọng:</strong> ↳ <span class="outline-phrase" data-vi="Viết lời chào mở đầu bán trang trọng: 'Kính gửi Ông/Bà [họ của người nhận],'">Dear Mr. / Ms. / Mrs. [họ của người nhận],</span></li>
                </ul>
            </div>
            <div class="outline-step">
                <h4>2. Mở thư</h4>
                <p>↳ <span class="outline-phrase" data-vi="Viết câu mở thư phàn nàn: 'Tôi viết thư này để bày tỏ sự không hài lòng về [vấn đề cần phàn nàn]. Gần đây tôi đã sử dụng [sản phẩm/dịch vụ/cơ sở vật chất] của ông/bà, và tôi khá thất vọng với trải nghiệm này.'">I am writing to express my dissatisfaction with [vấn đề cần phàn nàn]. I recently used your [sản phẩm/dịch vụ/cơ sở vật chất], and I was quite disappointed with the experience.</span></p>
            </div>
            <div class="outline-step">
                <h4>3. Thân thư</h4>
                <div class="outline-substep">
                    <h5>Thân thư 1: Trình bày vấn đề</h5>
                    <p>↳ <span class="outline-phrase" data-vi="Viết cấu trúc phàn nàn: 'Vấn đề chính là [vấn đề 1].'">The main problem was that [vấn đề 1].</span> → Trình bày cụ thể.</p>
                    <p>↳ <span class="outline-phrase" data-vi="Viết cấu trúc phàn nàn: 'Một mối bận tâm khác là [vấn đề 2].'">Another concern was that [vấn đề 2].</span> → Trình bày cụ thể.</p>
                    <p>↳ <span class="outline-phrase" data-vi="Viết cấu trúc phàn nàn: 'Một vấn đề xa hơn nữa là [vấn đề 3].'">A further issue was that [vấn đề 3].</span> → Trình bày cụ thể.</p>
                </div>
                <div class="outline-substep" style="margin-top: 10px;">
                    <h5>Thân thư 2: Cảm xúc với trải nghiệm và đề xuất giải pháp</h5>
                    <p>↳ <span class="outline-phrase" data-vi="Viết câu nêu cảm xúc và giải pháp: 'Tôi vô cùng [cảm xúc] với những vấn đề này, vì chúng ảnh hưởng tiêu cực đến trải nghiệm của tôi. Tình huống này là không thể chấp nhận và không đáp ứng mong đợi của tôi. Do đó, tôi sẽ rất cảm kích nếu ông/bà có thể hành động ngay lập tức để giải quyết. Cụ thể, tôi đề xuất [giải pháp].'">I was extremely [tính từ mô tả cảm xúc] with these issues, as they negatively affected my overall experience. This situation was unacceptable and did not meet my expectations. Therefore, I would appreciate it if you could take immediate action to address these problems. Specifically, I suggest that [các giải pháp cụ thể để giải quyết vấn đề].</span></p>
                </div>
            </div>
            <div class="outline-step">
                <h4>4. Kết thư</h4>
                <p>Yêu cầu xem xét vấn đề: ↳ <span class="outline-phrase" data-vi="Viết câu kết thư phàn nàn (Câu 1): 'Tôi hy vọng rằng vấn đề này sẽ được giải quyết nhanh chóng.'">I hope that this issue will be addressed promptly.</span></p>
                <p>Mong đợi hồi âm: ↳ <span class="outline-phrase" data-vi="Viết câu kết thư phàn nàn/phản hồi/xin lỗi (Câu 2): 'Tôi rất mong sớm nhận được hồi âm của ông/bà.'">I look forward to receiving your reply soon.</span></p>
            </div>
            <div class="outline-step">
                <h4>5. Lời chào kết thúc</h4>
                <ul>
                    <li><strong>Trang trọng:</strong> ↳ <span class="outline-phrase" data-vi="Viết lời chào kết thúc trang trọng: 'Trân trọng,'">Yours faithfully,</span></li>
                    <li><strong>Bán trang trọng:</strong> ↳ <span class="outline-phrase" data-vi="Viết lời chào kết thúc bán trang trọng: 'Trân trọng,'">Yours sincerely,</span></li>
                </ul>
            </div>
        `,
        practicePrompt: 'You are a member of a local sports center. You have recently used the changing room and were not satisfied with its condition. Write an email to the manager of the sports center. In your email, you should: Describe the problems you found in the changing room, Explain how the situation made you feel, and Suggest what should be done to improve the facility. You should write at least 120 words. Do not include your name or address.',
        sampleWriting: `
            <div class="content-block">
                <h3>BÀI VIẾT MẪU (SAMPLE LETTER - B2 LEVEL)</h3>
                <div class="sample-letter-box">
                    <strong>Dear Sir/Madam,</strong><br><br>
                    I am writing to express my dissatisfaction with the condition of the changing room at your sports center. I recently used your facility, and I was quite disappointed with the experience.<br><br>
                    The main problem was the unacceptable level of hygiene. The floor was consistently wet and slippery, and numerous used towels were carelessly discarded on the benches. Another concern was the maintenance of the lockers. Several of them were broken and incapable of being locked securely, causing significant anxiety regarding the safety of personal belongings. A further issue was the overpowering and unpleasant odor permeating the room, indicating a severe lack of proper ventilation.<br><br>
                    I was extremely frustrated with these issues, as they negatively affected my overall experience at your establishment. This situation was unacceptable and did not meet my expectations. Therefore, I would appreciate it if you could take immediate action to address these problems. Specifically, I suggest that you implement a more rigorous cleaning schedule, promptly repair the defective lockers, and upgrade the ventilation system.<br><br>
                    I hope that this issue will be addressed promptly. I look forward to receiving your reply soon.<br><br>
                    <strong>Yours faithfully,</strong>
                </div>
                
                <h3 style="margin-top: 25px;">BẢN DỊCH CHI TIẾT</h3>
                <div class="translation-box" style="background-color: var(--bg-main); border: 1px solid var(--border-color); padding: 20px; border-radius: 12px; margin-top: 15px; font-family: var(--font-body); line-height: 1.8; color: var(--text-muted); font-style: italic;">
                    <strong>Kính gửi Ông/Bà,</strong><br><br>
                    Tôi viết thư này để bày tỏ sự không hài lòng của mình đối với tình trạng phòng thay đồ tại trung tâm thể thao của ông/bà. Gần đây tôi đã sử dụng cơ sở của ông/bà và khá thất vọng với trải nghiệm này.<br><br>
                    Vấn đề chính là mức độ vệ sinh không thể chấp nhận được. Sàn nhà luôn ẩm ướt và trơn trượt, cùng với vô số khăn tắm đã qua sử dụng bị vứt bừa bãi trên các băng ghế. Một mối bận tâm khác là việc bảo trì các tủ đựng đồ. Một số trong đó đã bị hỏng và không thể khóa chặt, gây ra sự lo lắng đáng kể về sự an toàn của đồ đạc cá nhân. Một vấn đề xa hơn nữa là mùi khó chịu và nồng nặc lan tỏa khắp phòng, cho thấy sự thiếu hụt nghiêm trọng về hệ thống thông gió thích hợp.<br><br>
                    Tôi đã vô cùng bực bội với những vấn đề này, vì chúng ảnh hưởng tiêu cực đến trải nghiệm tổng thể của tôi tại cơ sở của ông/bà. Tình huống này là không thể chấp nhận được và không đáp ứng mong đợi của tôi. Do đó, tôi sẽ rất cảm kích nếu ông/bà có thể hành động ngay lập tức để giải quyết những vấn đề này. Cụ thể, tôi đề xuất ông/bà thực hiện lịch trình làm sạch nghiêm ngặt hơn, nhanh chóng sửa chữa các tủ đồ bị hỏng và nâng cấp hệ thống thông gió.<br><br>
                    Tôi hy vọng vấn đề này sẽ được giải quyết nhanh chóng. Tôi rất mong sớm nhận được hồi âm của ông/bà.<br><br>
                    <strong>Trân trọng,</strong>
                </div>
            </div>
        `
    },
    {
        id: 'feedback',
        icon: 'fa-comments',
        titleEn: 'Letter of Feedback',
        titleVi: 'Thư Phản Hồi/Đánh Giá',
        basicInfo: `
            <div class="content-block">
                <h3>Mục đích (Purpose)</h3>
                <p>Đưa ra nhận xét, đánh giá hoặc góp ý về một sản phẩm, dịch vụ, khóa học, sự kiện hoặc trải nghiệm.</p>
            </div>
            <div class="content-block">
                <h3>Phong cách thư (Style)</h3>
                <p>Thường là thư bán trang trọng (Semi-formal Letter).</p>
            </div>
            <div class="content-block">
                <h3>Văn phong (Tone)</h3>
                <p>Lịch sự, khách quan và mang tính xây dựng.</p>
            </div>
        `,
        identifyingSigns: `
            <div class="content-block">
                <h3>Các từ khóa thường xuất hiện:</h3>
                <ul>
                    <li>give/provide feedback on ...</li>
                    <li>share your opinion about ...</li>
                    <li>describe your experience with …</li>
                    <li>write a letter to comment on ...</li>
                    <li>say what you liked or did not like about ...</li>
                    <li>say what you are satisfied or dissatisfied with …</li>
                    <li>express your satisfaction or dissatisfaction with …</li>
                </ul>
            </div>
        `,
        detailedOutline: `
            <div class="outline-note">
                <p><strong>LƯU Ý:</strong> Thư cho phản hồi đánh giá thường là thư bán trang trọng hoặc trang trọng.</p>
            </div>
            <div class="outline-step">
                <h4>1. Lời chào mở đầu</h4>
                <ul>
                    <li><strong>Trang trọng:</strong>
                        <ul>
                            <li>↳ <span class="outline-phrase" data-vi="Viết lời chào mở đầu trang trọng: 'Kính gửi Ngài,'">Dear Sir,</span></li>
                            <li>↳ <span class="outline-phrase" data-vi="Viết lời chào mở đầu trang trọng: 'Kính gửi Bà,'">Dear Madam,</span></li>
                            <li>↳ <span class="outline-phrase" data-vi="Viết lời chào mở đầu trang trọng: 'Kính gửi Ông/Bà,'">Dear Sir/Madam,</span></li>
                        </ul>
                    </li>
                    <li><strong>Bán trang trọng:</strong> ↳ <span class="outline-phrase" data-vi="Viết lời chào mở đầu bán trang trọng: 'Kính gửi Ông/Bà [họ của người nhận],'">Dear Mr. / Ms. / Mrs. [họ của người nhận],</span></li>
                </ul>
            </div>
            <div class="outline-step">
                <h4>2. Mở thư</h4>
                <p>↳ <span class="outline-phrase" data-vi="Viết câu mở thư phản hồi: 'Tôi viết thư này để cung cấp phản hồi về [vấn đề cần phản hồi đánh giá]. Gần đây tôi đã sử dụng [sản phẩm/ dịch vụ/ cơ sở vật chất] của ông/bà và muốn chia sẻ trải nghiệm của mình.'">I am writing to provide feedback on [vấn đề cần phản hồi đánh giá]. I recently used your [sản phẩm/ dịch vụ/ cơ sở vật chất] and would like to share my experience.</span></p>
            </div>
            <div class="outline-step">
                <h4>3. Thân thư</h4>
                <p>Lần lượt đưa ra phản hồi đánh giá (khen/chê) và sau đó đề xuất giải pháp để cải thiện.</p>
                <div class="outline-structures">
                    <h5>CÁC CẤU TRÚC ĐÁNH GIÁ TÍCH CỰC [KHEN]:</h5>
                    <p>↳ <em>Overall, I found your [sản phẩm/ dịch vụ/ cơ sở vật chất] quite satisfactory, although there are some aspects that could be improved.</em></p>
                    <ul>
                        <li><span class="outline-phrase" data-vi="Viết câu khen ngợi: 'Một khía cạnh tôi đánh giá cao là [điểm khen] vì [lý do].'">One aspect I appreciated was [điểm khen] because [lý do].</span></li>
                        <li><span class="outline-phrase" data-vi="Viết câu khen ngợi: 'Tôi rất hài lòng với [điểm khen], vì [lý do].'">I was very satisfied with [điểm khen], as [lý do].</span></li>
                        <li><span class="outline-phrase" data-vi="Viết câu khen ngợi: 'Chất lượng của [điểm khen] rất tuyệt vời, điều này làm cho trải nghiệm của tôi thú vị hơn.'">The quality of [điểm khen] was excellent, which made my experience more enjoyable.</span></li>
                        <li><span class="outline-phrase" data-vi="Viết câu khen ngợi: 'Tôi đặc biệt ấn tượng với [điểm khen] vì [lý do].'">I was particularly impressed with [điểm khen] because [lý do].</span></li>
                    </ul>
                    
                    <h5 style="margin-top: 10px;">CÁC CẤU TRÚC PHẢN ÁNH ĐIỂM CHƯA HÀI LÒNG [CHÊ]:</h5>
                    <p>↳ <em>However, there were also several areas that required improvement.</em></p>
                    <ul>
                        <li><span class="outline-phrase" data-vi="Viết câu chê/góp ý: 'Một vấn đề tôi gặp phải là [điểm chê] vì [lý do].'">One issue that I encountered was [điểm chê] because [lý do].</span></li>
                        <li><span class="outline-phrase" data-vi="Viết câu chê/góp ý: 'Tôi đã thất vọng với [điểm chê], vì [lý do].'">I was disappointed with [điểm chê], as [lý do].</span></li>
                        <li><span class="outline-phrase" data-vi="Viết câu chê/góp ý: 'Tôi không hài lòng với [điểm chê] vì [lý do].'">I was not satisfied with [điểm chê] because [lý do].</span></li>
                        <li><span class="outline-phrase" data-vi="Viết câu chê/góp ý: 'Chất lượng của [điểm chê] không tốt như tôi mong đợi, điều này không đáp ứng được kỳ vọng của tôi.'">The quality of [điểm chê] was not as good as I expected, which did not meet my expectations.</span></li>
                    </ul>
                    
                    <h5 style="margin-top: 10px;">CÁC CẤU TRÚC ĐỀ XUẤT GIẢI PHÁP:</h5>
                    <p>↳ <em>To enhance the quality of your [sản phẩm/ dịch vụ/ cơ sở vật chất], I have a few suggestions.</em></p>
                    <ul>
                        <li><span class="outline-phrase" data-vi="Viết cấu trúc đề xuất: 'Tôi đề nghị ông/bà [hành động - Vo].'">I suggest that you [hành động – Vo].</span></li>
                        <li><span class="outline-phrase" data-vi="Viết cấu trúc đề xuất: 'Tôi khuyên ông/bà nên [hành động - Vo].'">I would recommend that you [hành động – Vo].</span></li>
                        <li><span class="outline-phrase" data-vi="Viết cấu trúc đề xuất: 'Sẽ tốt hơn nếu ông/bà có thể [hành động - Vo].'">It would be better if you could [hành động – Vo].</span></li>
                        <li><span class="outline-phrase" data-vi="Viết cấu trúc đề xuất: 'Tôi hy vọng ông/bà sẽ xem xét [hành động - Ving].'">I hope you will consider [hành động – Ving].</span></li>
                    </ul>
                </div>
            </div>
            <div class="outline-step">
                <h4>4. Kết thư</h4>
                <p>↳ <span class="outline-phrase" data-vi="Viết câu kết thư phản hồi: 'Tôi hy vọng phản hồi của tôi sẽ hữu ích trong việc cải thiện [sản phẩm/ dịch vụ/ cơ sở vật chất] của ông/bà. Xin đừng ngần ngại liên hệ nếu có thêm câu hỏi nào.'">I hope my feedback will be useful in improving your [sản phẩm/ dịch vụ/ cơ sở vật chất]. Please feel free to contact me if you have any further questions.</span></p>
            </div>
            <div class="outline-step">
                <h4>5. Lời chào kết thúc</h4>
                <ul>
                    <li><strong>Trang trọng:</strong> ↳ <span class="outline-phrase" data-vi="Viết lời chào kết thúc trang trọng: 'Trân trọng,'">Yours faithfully,</span></li>
                    <li><strong>Bán trang trọng:</strong> ↳ <span class="outline-phrase" data-vi="Viết lời chào kết thúc bán trang trọng: 'Trân trọng,'">Yours sincerely,</span></li>
                </ul>
            </div>
        `,
        practicePrompt: 'You recently stayed at a hotel and received an email from the hotel manager asking for feedback about your stay. Write an email to give your opinion. In your email, you should: Say whether you were satisfied or dissatisfied with the service, Describe your experience, and Suggest ways the hotel can improve its service. You should write at least 120 words. Do not include your name or address.',
        sampleWriting: `
            <div class="content-block">
                <h3>BÀI VIẾT MẪU (SAMPLE LETTER - B2 LEVEL)</h3>
                <div class="sample-letter-box">
                    <strong>Dear Sir/Madam,</strong><br><br>
                    I am writing to provide feedback on my recent stay at your accommodation. I recently used your services and would like to share my experience.<br><br>
                    Overall, I found your hotel quite satisfactory, although there are some aspects that could be improved. One aspect I appreciated was the spaciousness and cleanliness of the room, which provided a remarkably relaxing atmosphere. Furthermore, I was particularly impressed with the front desk staff because they were exceedingly welcoming and consistently attentive to my needs throughout my visit.<br><br>
                    However, there were also several areas that required improvement. One issue that I encountered was the limited variety offered at the breakfast buffet, as it lacked sufficient healthy options. Additionally, I was disappointed with the complimentary Wi-Fi connection, as its unstable speed significantly hindered my ability to conduct urgent remote work.<br><br>
                    To enhance the quality of your services, I have a few suggestions. I suggest that you diversify the breakfast menu by incorporating more nutritious choices. Furthermore, it would be better if you could upgrade your internet infrastructure to guarantee seamless connectivity for business travelers.<br><br>
                    I hope my feedback will be useful in improving your hotel. Please feel free to contact me if you have any further questions.<br><br>
                    <strong>Yours faithfully,</strong>
                </div>
                
                <h3 style="margin-top: 25px;">BẢN DỊCH CHI TIẾT</h3>
                <div class="translation-box" style="background-color: var(--bg-main); border: 1px solid var(--border-color); padding: 20px; border-radius: 12px; margin-top: 15px; font-family: var(--font-body); line-height: 1.8; color: var(--text-muted); font-style: italic;">
                    <strong>Kính gửi Ông/Bà,</strong><br><br>
                    Tôi viết thư này để cung cấp phản hồi về kỳ nghỉ gần đây của tôi tại chỗ ở của ông/bà. Gần đây tôi đã sử dụng dịch vụ của ông/bà và muốn chia sẻ trải nghiệm của mình.<br><br>
                    Nhìn chung, tôi thấy khách sạn của ông/bà khá đáng hài lòng, mặc dù có một số khía cạnh có thể được cải thiện. Một điểm tôi đánh giá cao là sự rộng rãi và sạch sẽ của căn phòng, mang lại một bầu không khí thư giãn đáng chú ý. Hơn nữa, tôi đặc biệt ấn tượng với đội ngũ nhân viên lễ tân vì họ vô cùng niềm nở và luôn chú ý đến nhu cầu của tôi trong suốt chuyến thăm.<br><br>
                    Tuy nhiên, cũng có một vài lĩnh vực cần được cải thiện. Một vấn đề mà tôi gặp phải là sự đa dạng hạn chế được cung cấp tại tiệc buffet bữa sáng, vì nó thiếu các lựa chọn lành mạnh đầy đủ. Ngoài ra, tôi rất thất vọng với kết nối Wi-Fi miễn phí, vì tốc độ không ổn định của nó đã cản trở đáng kể khả năng xử lý công việc từ xa khẩn cấp của tôi.<br><br>
                    Để nâng cao chất lượng dịch vụ của ông/bà, tôi có một vài gợi ý. Tôi đề nghị ông/bà đa dạng hóa thực đơn bữa sáng bằng cách kết hợp nhiều lựa chọn bổ dưỡng hơn. Hơn nữa, sẽ tốt hơn nếu ông/bà có thể nâng cấp cơ sở hạ tầng internet để đảm bảo kết nối liền mạch cho những du khách đi công tác.<br><br>
                    Tôi hy vọng phản hồi của tôi sẽ hữu ích trong việc cải thiện khách sạn của ông/bà. Vui lòng liên hệ với tôi nếu ông/bà có bất kỳ câu hỏi nào thêm.<br><br>
                    <strong>Trân trọng,</strong>
                </div>
            </div>
        `
    },
    {
        id: 'apology',
        icon: 'fa-face-frown',
        titleEn: 'Letter of Apology',
        titleVi: 'Thư Xin Lỗi',
        basicInfo: `
            <div class="content-block">
                <h3>Mục đích (Purpose)</h3>
                <p>Xin lỗi về một lỗi lầm, sự bất tiện hoặc việc không thể thực hiện một cam kết nào đó.</p>
            </div>
            <div class="content-block">
                <h3>Phong cách thư (Style)</h3>
                <p>Chủ yếu là thư thân mật (Informal Letter).</p>
            </div>
            <div class="content-block">
                <h3>Văn phong (Tone)</h3>
                <p>Chân thành, nhận trách nhiệm và thể hiện sự hối lỗi.</p>
            </div>
        `,
        identifyingSigns: `
            <div class="content-block">
                <h3>Các từ khóa thường xuất hiện:</h3>
                <ul>
                    <li>apologize for / say sorry for ...</li>
                    <li>explain why you ... (missed…, were late…, forgot…, damaged…, etc.)</li>
                    <li>say how you will make up for it</li>
                    <li>explain the situation and offer a solution</li>
                </ul>
            </div>
        `,
        detailedOutline: `
            <div class="outline-note">
                <p><strong>LƯU Ý:</strong> Thư xin lỗi có thể là thư thân mật, bán trang trọng hoặc trang trọng.</p>
            </div>
            <div class="outline-step">
                <h4>1. Lời chào mở đầu</h4>
                <ul>
                    <li><strong>Thân mật:</strong> ↳ <span class="outline-phrase" data-vi="Viết lời chào mở đầu thân mật: 'Kính gửi [tên của người nhận],'">Dear [tên của người nhận],</span></li>
                    <li><strong>Trang trọng:</strong>
                        <ul>
                            <li>↳ <span class="outline-phrase" data-vi="Viết lời chào mở đầu trang trọng: 'Kính gửi Ngài,'">Dear Sir,</span></li>
                            <li>↳ <span class="outline-phrase" data-vi="Viết lời chào mở đầu trang trọng: 'Kính gửi Bà,'">Dear Madam,</span></li>
                            <li>↳ <span class="outline-phrase" data-vi="Viết lời chào mở đầu trang trọng: 'Kính gửi Ông/Bà,'">Dear Sir/Madam,</span></li>
                        </ul>
                    </li>
                    <li><strong>Bán trang trọng:</strong> ↳ <span class="outline-phrase" data-vi="Viết lời chào mở đầu bán trang trọng: 'Kính gửi Ông/Bà [họ của người nhận],'">Dear Mr. / Ms. / Mrs. [họ của người nhận],</span></li>
                </ul>
            </div>
            <div class="outline-step">
                <h4>2. Mở thư</h4>
                <ul>
                    <li><strong>Thân mật:</strong> ↳ <span class="outline-phrase" data-vi="Viết câu mở thư xin lỗi (Thân mật): 'Tớ thực sự xin lỗi vì [vấn đề]. Tớ cảm thấy tồi tệ về những gì đã xảy ra, và tớ muốn giải thích tình huống rõ ràng hơn.'">I’m really sorry for [vấn đề]. I feel terrible about what happened, and I’d like to explain the situation more clearly.</span></li>
                    <li><strong>Trang trọng & Bán trang trọng:</strong> ↳ <span class="outline-phrase" data-vi="Viết câu mở thư xin lỗi (Trang trọng/Bán trang trọng): 'Tôi viết thư này để chân thành xin lỗi vì [vấn đề]. Tôi hoàn toàn hiểu rằng điều này có thể đã gây ra sự bất tiện, và tôi muốn cung cấp một lời giải thích rõ ràng hơn.'">I am writing to sincerely apologize for [vấn đề]. I fully understand that this may have caused inconvenience, and I would like to provide a clearer explanation.</span></li>
                </ul>
            </div>
            <div class="outline-step">
                <h4>3. Thân thư</h4>
                <p>Lần lượt giải thích lý do và nêu hành động bù đắp phù hợp. Sử dụng thì QUÁ KHỨ ĐƠN để mô tả sự việc đã xảy ra.</p>
                <div class="outline-structures">
                    <h5>CẤU TRÚC GIẢI THÍCH LÝ DO:</h5>
                    <p><strong>Thân mật:</strong> ↳ <em>First of all, here is the reason for this.</em></p>
                    <ul>
                        <li><span class="outline-phrase" data-vi="Viết cấu trúc lý do (Thân mật): 'Tớ thực sự xin lỗi vì tớ đã không thể [hành động – V0] bởi vì [lý do].'">I’m really sorry that I couldn’t [hành động – V0] because [lý do].</span></li>
                        <li><span class="outline-phrase" data-vi="Viết cấu trúc lý do (Thân mật): 'Tớ cảm thấy tồi tệ vì đã không [hành động – Ving], do [lý do].'">I feel terrible about not [hành động – Ving], as [lý do].</span></li>
                        <li><span class="outline-phrase" data-vi="Viết cấu trúc lý do (Thân mật): 'Tớ không cố ý [hành động – V0], nhưng [lý do].'">I didn’t mean to [hành động – V0], but [lý do].</span></li>
                        <li><span class="outline-phrase" data-vi="Viết cấu trúc lý do (Thân mật/Trang trọng): 'Tôi/Tớ đã không thể sắp xếp để [hành động – V0] vì [lý do].'">I couldn’t manage to [hành động – V0] because [lý do].</span></li>
                    </ul>
                    <p><strong>Trang trọng & Bán trang trọng:</strong> ↳ <em>First of all, here is the reason for this.</em></p>
                    <ul>
                        <li><span class="outline-phrase" data-vi="Viết cấu trúc lý do (Trang trọng/Bán trang trọng): 'Lý do tại sao tôi không thể [hành động – V0] là vì [lý do].'">The reason why I could not [hành động – V0] is that [lý do].</span></li>
                        <li><span class="outline-phrase" data-vi="Viết cấu trúc lý do (Trang trọng/Bán trang trọng): 'Tôi rất tiếc rằng tôi đã không thể [hành động – V0] vì [lý do].'">I regret that I was unable to [hành động – V0] because [lý do].</span></li>
                        <li><span class="outline-phrase" data-vi="Viết cấu trúc lý do (Trang trọng/Bán trang trọng): 'Bởi vì [lý do], tôi đã không thể [hành động – V0].'">Because [lý do], I was unable to [hành động – V0].</span></li>
                        <li><span class="outline-phrase" data-vi="Viết cấu trúc lý do (Trang trọng/Bán trang trọng): 'Thật không may, tôi không thể [hành động – V0] bởi vì [lý do].'">Unfortunately, I could not [hành động – V0] because [lý do].</span></li>
                    </ul>

                    <h5 style="margin-top: 10px;">CẤU TRÚC NÊU HÀNH ĐỘNG BÙ ĐẮP:</h5>
                    <p><strong>Thân mật:</strong></p>
                    <ul>
                        <li><span class="outline-phrase" data-vi="Viết cấu trúc đền bù (Thân mật): 'Hãy để tớ bù đắp cho cậu bằng cách [hành động – Ving], và tớ đảm bảo điều này sẽ không xảy ra nữa.'">Let me make it up to you by [hành động – Ving], and I’ll make sure this does not happen again.</span></li>
                        <li><span class="outline-phrase" data-vi="Viết cấu trúc đền bù (Thân mật): 'Tớ hy vọng tớ có thể bù đắp cho cậu bằng cách [hành động – Ving], và tớ đảm bảo điều này sẽ không xảy ra nữa.'">I hope I can make it up to you by [hành động – Ving], and I’ll make sure this does not happen again.</span></li>
                    </ul>
                    <p><strong>Trang trọng & Bán trang trọng:</strong></p>
                    <ul>
                        <li><span class="outline-phrase" data-vi="Viết cấu trúc đền bù (Trang trọng/Bán trang trọng): 'Để bù đắp cho sai lầm của mình, tôi muốn [hành động – V0]. Tôi sẽ đảm bảo rằng điều này không xảy ra nữa.'">To make up for my mistake, I would like to [hành động – V0]. I will ensure that this does not happen again.</span></li>
                        <li><span class="outline-phrase" data-vi="Viết cấu trúc đền bù (Trang trọng/Bán trang trọng): 'Tôi muốn bù đắp cho điều này bằng cách [hành động – Ving]. Tôi sẽ nỗ lực hết sức để tránh các tình huống tương tự trong tương lai.'">I would like to make up for this by [hành động – Ving]. I will make every effort to avoid similar situations in the future.</span></li>
                    </ul>
                </div>
            </div>
            <div class="outline-step">
                <h4>4. Kết thư</h4>
                <ul>
                    <li><strong>Thân mật:</strong> ↳ <span class="outline-phrase" data-vi="Viết câu kết thư xin lỗi (Thân mật): 'Tớ thực sự xin lỗi cậu một lần nữa. Tớ rất trân trọng sự thấu hiểu của cậu. Viết thư lại sớm nhé.'">I’m really sorry once again. I truly appreciate your understanding. Write back soon.</span></li>
                    <li><strong>Trang trọng & Bán trang trọng:</strong> ↳ <span class="outline-phrase" data-vi="Viết câu kết thư xin lỗi (Trang trọng/Bán trang trọng): 'Tôi muốn chân thành xin lỗi một lần nữa vì sự bất tiện này. Cảm ơn ông/bà đã thấu hiểu. Tôi rất mong sớm nhận được hồi âm.'">I would like to sincerely apologize once again for the inconvenience. Thank you for your understanding. I look forward to receiving your reply soon.</span></li>
                </ul>
            </div>
            <div class="outline-step">
                <h4>5. Lời chào kết thúc</h4>
                <ul>
                    <li><strong>Thân mật:</strong> ↳ <span class="outline-phrase" data-vi="Viết lời chào kết thúc thân mật: 'Lời chúc tốt đẹp nhất,'">Best wishes,</span></li>
                    <li><strong>Trang trọng:</strong> ↳ <span class="outline-phrase" data-vi="Viết lời chào kết thúc trang trọng: 'Trân trọng,'">Yours faithfully,</span></li>
                    <li><strong>Bán trang trọng:</strong> ↳ <span class="outline-phrase" data-vi="Viết lời chào kết thúc bán trang trọng: 'Trân trọng,'">Yours sincerely,</span></li>
                </ul>
            </div>
        `,
        practicePrompt: 'You borrowed a book from your friend Helen, but forgot to return it. Read part of her letter below:\n… Hey! How have you been lately? By the way, have you finished reading the book you borrowed from me? I was wondering why you haven’t returned it yet. When do you plan to give it back, and how will you return it? …\nWrite a letter to reply to Helen. In your letter, you should: apologize for not returning the book, explain your current situation and whether you’ve finished the book, say when and how you will return it.',
        sampleWriting: `
            <div class="content-block">
                <h3>BÀI VIẾT MẪU (SAMPLE LETTER - B2 LEVEL)</h3>
                <div class="sample-letter-box">
                    <strong>Dear Helen,</strong><br><br>
                    I’m really sorry for failing to return your book on time. I feel terrible about what happened, and I’d like to explain the situation more clearly.<br><br>
                    First of all, here is the reason for this. I couldn’t manage to give the book back to you because I have been overwhelmed with a highly demanding project at work over the past few weeks. I had to stay late at the office almost every evening, which completely slipped my mind regarding our agreement. Fortunately, I have already finished reading the novel, and I must admit that the storyline was incredibly captivating.<br><br>
                    Let me make it up to you by bringing the book directly to your apartment this coming Saturday afternoon, and I’ll make sure this does not happen again. I would also love to treat you to a cup of coffee at our favorite cafe as a small token of my apology.<br><br>
                    I’m really sorry once again. I truly appreciate your understanding. Write back soon.<br><br>
                    <strong>Best wishes,</strong>
                </div>
                
                <h3 style="margin-top: 25px;">BẢN DỊCH CHI TIẾT</h3>
                <div class="translation-box" style="background-color: var(--bg-main); border: 1px solid var(--border-color); padding: 20px; border-radius: 12px; margin-top: 15px; font-family: var(--font-body); line-height: 1.8; color: var(--text-muted); font-style: italic;">
                    <strong>Helen thân mến,</strong><br><br>
                    Tớ thực sự xin lỗi vì đã không trả lại sách của cậu đúng hạn. Tớ cảm thấy rất tồi tệ về những gì đã xảy ra, và tớ muốn giải thích tình hình rõ ràng hơn.<br><br>
                    Trước hết, đây là lý do cho việc này. Tớ không thể xoay sở để trả lại cuốn sách cho cậu vì tớ đã bị choáng ngợp bởi một dự án yêu cầu cao tại nơi làm việc trong vài tuần qua. Tớ đã phải ở lại văn phòng muộn gần như mỗi tối, điều đó khiến tớ hoàn toàn quên mất thỏa thuận của chúng ta. May mắn thay, tớ đã đọc xong cuốn tiểu thuyết, và tớ phải thừa nhận rằng cốt truyện vô cùng lôi cuốn.<br><br>
                    Hãy để tớ bù đắp cho cậu bằng cách mang sách trực tiếp đến căn hộ của cậu vào chiều thứ Bảy tới đây, và tớ sẽ đảm bảo điều này không lặp lại. Tớ cũng rất muốn mời cậu một tách cà phê tại quán cà phê yêu thích của chúng ta như một món quà nhỏ thay cho lời xin lỗi của tớ.<br><br>
                    Tớ thực sự xin lỗi một lần nữa. Tớ thực sự đánh giá cao sự thông cảm của cậu. Viết thư lại sớm nhé.<br><br>
                    <strong>Chúc mọi điều tốt đẹp nhất,</strong>
                </div>
            </div>
        `
    },
    {
        id: 'application',
        icon: 'fa-briefcase',
        titleEn: 'Letter of Application',
        titleVi: 'Thư Ứng Tuyển',
        basicInfo: `
            <div class="content-block">
                <h3>Mục đích (Purpose)</h3>
                <p>Viết thư xin việc để ứng tuyển vào một vị trí công việc hoặc tham gia một chương trình, khóa học.</p>
            </div>
            <div class="content-block">
                <h3>Phong cách thư (Style)</h3>
                <p>Chủ yếu là thư trang trọng (Formal Letter).</p>
            </div>
            <div class="content-block">
                <h3>Văn phong (Tone)</h3>
                <p>Chuyên nghiệp, tự tin và thuyết phục.</p>
            </div>
        `,
        identifyingSigns: `
            <div class="content-block">
                <h3>Các từ khóa thường xuất hiện:</h3>
                <ul>
                    <li>apply for the position of ...</li>
                    <li>apply for the job of ...</li>
                    <li>write a letter of application</li>
                    <li>respond to a job advertisement</li>
                    <li>apply for a part-time/full-time job</li>
                </ul>
            </div>
        `,
        detailedOutline: `
            <div class="outline-note">
                <p><strong>LƯU Ý:</strong> Thư ứng tuyển thường gặp nhất là thư xin việc và luôn là thư trang trọng.</p>
            </div>
            <div class="outline-step">
                <h4>1. Lời chào mở đầu</h4>
                <ul>
                    <li><strong>Trang trọng:</strong>
                        <ul>
                            <li>↳ <span class="outline-phrase" data-vi="Viết lời chào mở đầu trang trọng: 'Kính gửi Ngài,'">Dear Sir,</span></li>
                            <li>↳ <span class="outline-phrase" data-vi="Viết lời chào mở đầu trang trọng: 'Kính gửi Bà,'">Dear Madam,</span></li>
                            <li>↳ <span class="outline-phrase" data-vi="Viết lời chào mở đầu trang trọng: 'Kính gửi Ông/Bà,'">Dear Sir/Madam,</span></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="outline-step">
                <h4>2. Mở thư</h4>
                <p>↳ <span class="outline-phrase" data-vi="Viết câu mở thư ứng tuyển: 'Tôi viết thư này để ứng tuyển vào vị trí [vị trí công việc], được quảng cáo trên/trong [nguồn tuyển dụng].'">I am writing to apply for the position of [vị trí công việc], which was advertised on/in [nguồn tuyển dụng].</span></p>
            </div>
            <div class="outline-step">
                <h4>3. Thân thư</h4>
                <p>Lần lượt trình bày lý do có hứng thú với vị trí công việc này, đề cập trình độ học vấn và năng lực chuyên môn, kinh nghiệm làm việc đã có, sau đó nêu lý do mình là ứng cử viên phù hợp.</p>
                <div class="outline-structures">
                    <h5>LÝ DO CÓ HỨNG THÚ VỚI VỊ TRÍ CÔNG VIỆC:</h5>
                    <p>↳ <span class="outline-phrase" data-vi="Viết câu bày tỏ hứng thú với công việc: 'Tôi đặc biệt quan tâm đến vị trí này vì nó rất phù hợp với sở thích và mục tiêu nghề nghiệp của tôi. Ngoài ra, tôi rất yêu thích [hoạt động liên quan đến công việc], điều đó thôi thúc tôi ứng tuyển vào vai trò này. Vì vậy, tôi tin rằng công việc này sẽ cho tôi cơ hội quý báu để áp dụng kiến thức và thu được kinh nghiệm thực tế.'">I am particularly interested in this position because it closely matches my interests and career goals. In addition, I have a strong interest in [hoạt động liên quan đến công việc], which motivates me to apply for this role. Therefore, I believe this job will give me a valuable opportunity to apply my knowledge and gain practical experience.</span></p>
                    
                    <h5 style="margin-top: 10px;">KINH NGHIỆM LÀM VIỆC ĐÃ CÓ:</h5>
                    <p>↳ <span class="outline-phrase" data-vi="Viết câu trình bày kinh nghiệm: 'Tôi đã từng làm việc bán thời gian ở vị trí [vị trí công việc] tại [nơi làm việc]. Trong vai trò này, tôi chịu trách nhiệm về [nhiệm vụ]. Kinh nghiệm này cho phép tôi phát triển các kỹ năng mềm quan trọng như [kỹ năng mềm 1] và [kỹ năng mềm 2]. Nó cũng mang lại cho tôi kinh nghiệm thực tế quý báu và củng cố khả năng xử lý công việc hiệu quả.'">I worked part-time as a [vị trí công việc] at [nơi làm việc]. In this role, I was responsible for [nhiệm vụ]. This experience allowed me to develop important soft skills such as [kỹ năng mềm 1] and [kỹ năng mềm 2]. It also gave me valuable hands-on experience and strengthened my ability to handle tasks efficiently.</span></p>
                    
                    <h5 style="margin-top: 10px;">KHẲNG ĐỊNH LÀ ỨNG CỬ VIÊN PHÙ HỢP:</h5>
                    <p>↳ <span class="outline-phrase" data-vi="Viết câu khẳng định sự phù hợp: 'Tôi tin rằng tôi sẽ là một ứng viên phù hợp cho vị trí này vì tôi là người [đặc điểm tính cách]. Hơn nữa, tôi rất ham học hỏi và có thể thích nghi nhanh với môi trường mới. Tôi tự tin rằng mình có thể đóng góp tích cực cho tổ chức và thực hiện công việc một cách hiệu quả.'">I believe I would be a suitable candidate for this position because I am [đặc điểm tính cách]. Moreover, I am eager to learn and can adapt quickly to new environments. I am confident that I can make a positive contribution to your organization and perform my duties effectively.</span></p>
                </div>
            </div>
            <div class="outline-step">
                <h4>4. Kết thư</h4>
                <p>↳ <span class="outline-phrase" data-vi="Viết câu kết thư ứng tuyển: 'Tôi sẽ rất biết ơn nếu ông/bà có thể xem xét đơn ứng tuyển của tôi. Tôi sẵn sàng tham gia phỏng vấn vào lúc ông/bà thuận tiện và rất mong sớm nhận được phản hồi từ ông/bà.'">I would be grateful if you could consider my application. I am available for an interview at your convenience and look forward to hearing from you soon.</span></p>
            </div>
            <div class="outline-step">
                <h4>5. Lời chào kết thúc</h4>
                <ul>
                    <li><strong>Trang trọng:</strong> ↳ <span class="outline-phrase" data-vi="Viết lời chào kết thúc trang trọng: 'Trân trọng,'">Yours faithfully,</span></li>
                </ul>
            </div>
        `,
        practicePrompt: 'You saw a job advertisement for a sales assistant at a clothing store in your city. Write an email to apply for the job. In your email, you should: Introduce yourself and your current situation, Say why you are interested in the position, Mention any experience you have working with customers. You should write at least 120 words. Do not include your name or address.',
        sampleWriting: `
            <div class="content-block">
                <h3>BÀI VIẾT MẪU (SAMPLE LETTER - B2 LEVEL)</h3>
                <div class="sample-letter-box">
                    <strong>Dear Sir/Madam,</strong><br><br>
                    I am writing to apply for the position of Sales Assistant, which was advertised in the local newspaper. Currently, I am a second-year university student majoring in Business Administration, seeking a dynamic working environment to enhance my professional abilities.<br><br>
                    I am particularly interested in this position because it closely matches my interests and career goals in the retail sector. In addition, I have a strong interest in fashion and styling, which motivates me to apply for this role. Therefore, I believe this job will give me a valuable opportunity to apply my knowledge and gain practical customer service experience.<br><br>
                    Previously, I worked part-time as a cashier at a local grocery store. In this role, I was responsible for processing transactions and assisting shoppers with their inquiries. This experience allowed me to develop important soft skills such as effective communication and problem-solving under pressure. <br><br>
                    I believe I would be a suitable candidate for this position because I am highly organized and approachable. Moreover, I am eager to learn and can adapt quickly to new environments. I am confident that I can make a positive contribution to your organization.<br><br>
                    I would be grateful if you could consider my application. I am available for an interview at your convenience and look forward to hearing from you soon.<br><br>
                    <strong>Yours faithfully,</strong>
                </div>
                
                <h3 style="margin-top: 25px;">BẢN DỊCH CHI TIẾT</h3>
                <div class="translation-box" style="background-color: var(--bg-main); border: 1px solid var(--border-color); padding: 20px; border-radius: 12px; margin-top: 15px; font-family: var(--font-body); line-height: 1.8; color: var(--text-muted); font-style: italic;">
                    <strong>Kính gửi Ông/Bà,</strong><br><br>
                    Tôi viết thư này để ứng tuyển vào vị trí Trợ lý Bán hàng, vị trí đã được quảng cáo trên tờ báo địa phương. Hiện tại, tôi đang là sinh viên năm hai đại học chuyên ngành Quản trị Kinh doanh, đang tìm kiếm một môi trường làm việc năng động để nâng cao khả năng chuyên môn của mình.<br><br>
                    Tôi đặc biệt quan tâm đến vị trí này vì nó rất phù hợp với sở thích và mục tiêu nghề nghiệp của tôi trong lĩnh vực bán lẻ. Ngoài ra, tôi có niềm đam mê mãnh liệt với thời trang và tạo kiểu, điều này thúc đẩy tôi ứng tuyển vào vai trò này. Do đó, tôi tin rằng công việc này sẽ mang lại cho tôi cơ hội quý giá để áp dụng kiến thức của mình và tích lũy kinh nghiệm thực tế về dịch vụ khách hàng.<br><br>
                    Trước đây, tôi từng làm thu ngân bán thời gian tại một cửa hàng tạp hóa địa phương. Ở vai trò này, tôi chịu trách nhiệm xử lý các giao dịch và hỗ trợ người mua hàng với những thắc mắc của họ. Kinh nghiệm này đã cho phép tôi phát triển các kỹ năng mềm quan trọng như giao tiếp hiệu quả và giải quyết vấn đề dưới áp lực.<br><br>
                    Tôi tin rằng mình sẽ là ứng cử viên phù hợp cho vị trí này vì tôi là người có khả năng tổ chức cao và dễ gần. Hơn nữa, tôi rất ham học hỏi và có thể thích ứng nhanh chóng với các môi trường mới. Tôi tự tin rằng mình có thể đóng góp tích cực cho tổ chức của ông/bà.<br><br>
                    Tôi sẽ rất biết ơn nếu ông/bà có thể xem xét đơn ứng tuyển của tôi. Tôi sẵn sàng cho một cuộc phỏng vấn vào thời gian thuận tiện cho ông/bà và rất mong sớm nhận được phản hồi.<br><br>
                    <strong>Trân trọng,</strong>
                </div>
            </div>
        `
    }
];

// Helper functions (same as B1 Level)
function getElement(id) { return document.getElementById(id); }

let currentTypeIndex = -1;
let currentTab = 'basicInfo';

// System State
let systemProgress = 0;
let unlockedLetters = new Set();
let completedRecitations = new Set();

// Current recitation state
let currentQuestions = [];
let currentQuestionIndex = 0;
let attemptCount = 0;

// Initialize App
function initApp() {
    // Check login state
    const studentInfo = localStorage.getItem('vstep_b2_student_info');
    if (studentInfo) {
        getElement('loginOverlay').style.display = 'none';
        getElement('appContainer').style.display = 'flex';
    } else {
        getElement('loginOverlay').style.display = 'flex';
    }
    
    // Load progress from localStorage
    try {
        const savedCompleted = localStorage.getItem('vstep_b2_completed_letters');
        if (savedCompleted) {
            JSON.parse(savedCompleted).forEach(idx => completedRecitations.add(idx));
        }
    } catch (e) {
        console.error('Failed to load completedRecitations:', e);
    }

    try {
        const savedUnlocked = localStorage.getItem('vstep_b2_unlocked_letters');
        if (savedUnlocked) {
            JSON.parse(savedUnlocked).forEach(idx => unlockedLetters.add(idx));
        }
    } catch (e) {
        console.error('Failed to load unlockedLetters:', e);
    }

    generateNav();
    setupEventListeners();
    updateSystemProgress();
    checkInitialState();
}

function checkInitialState() {
    const mainTitle = getElement('mainTitle');
    mainTitle.innerHTML = '<div class="main-title-en placeholder-blink">Chọn một dạng thư để bắt đầu NHIỆM VỤ HỆ THỐNG của bạn!</div>';
    
    getElement('welcomeScreen').classList.remove('hidden');
    getElement('letterContent').classList.add('hidden');
}

function setupEventListeners() {
    // Theme toggle
    const themeToggle = getElement('themeToggle');
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        const icon = themeToggle.querySelector('i');
        if (document.body.classList.contains('dark-theme')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    });

    // Tab buttons
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const tabId = e.currentTarget.getAttribute('data-tab');
            switchTab(tabId);
        });
    });

    // Login button
    const btnLogin = getElement('btnLogin');
    if (btnLogin) {
        btnLogin.addEventListener('click', handleLogin);
    }

    // Recitation buttons
    getElement('btnCheckAnswer').addEventListener('click', checkRecitationAnswer);
    getElement('btnShowAnswer').addEventListener('click', showRecitationHint);
    getElement('btnNextQuestion').addEventListener('click', nextQuestion);
    getElement('btnPrevQuestion').addEventListener('click', prevQuestion);
    getElement('btnRestartRecitation').addEventListener('click', startRecitation);
    getElement('btnResetProgress').addEventListener('click', () => {
        if(confirm("Bạn có chắc muốn làm mới lại toàn bộ tiến độ không? Mọi lịch sử thuộc bài sẽ bị xóa.")) {
            unlockedLetters.clear();
            completedRecitations.clear();
            try {
                localStorage.removeItem('vstep_b2_completed_letters');
                localStorage.removeItem('vstep_b2_unlocked_letters');
            } catch (e) {
                console.error('Failed to clear progress:', e);
            }
            systemProgress = 0;
            updateSystemProgress();
            checkInitialState();
            generateNav(); // re-render nav locks
        }
    });
}

function generateNav() {
    const nav = getElement('letterNav');
    nav.innerHTML = '';
    
    // Add Home Tab
    const homeItem = document.createElement('div');
    homeItem.className = 'nav-item home-nav-item';
    if (currentTypeIndex === -1) homeItem.classList.add('active');
    
    homeItem.innerHTML = `
        <i class="fa-solid fa-house"></i>
        <span class="nav-text" style="display: flex; flex-direction: column; line-height: 1.3;">
            <strong>TRANG CHỦ</strong>
            <small style="font-weight: normal; font-size: 0.85em; opacity: 0.8; margin-top: 2px;">[Màn hình chính]</small>
        </span>
    `;
    homeItem.addEventListener('click', () => {
        currentTypeIndex = -1;
        document.querySelectorAll('.nav-item').forEach((el, i) => {
            el.classList.toggle('active', i === 0);
        });
        checkInitialState();
    });
    nav.appendChild(homeItem);
    
    letterTypes.forEach((type, index) => {
        const item = document.createElement('div');
        item.className = 'nav-item';
        if (index === currentTypeIndex) item.classList.add('active');
        
        let statusHtml = '';
        if (completedRecitations.has(index)) {
            statusHtml = '<i class="fa-solid fa-circle-check status-icon success"></i>';
        }

        item.innerHTML = `
            <i class="fa-solid ${type.icon}"></i>
            <span class="nav-text" style="display: flex; flex-direction: column; line-height: 1.3;">
                <strong>${type.titleEn}</strong>
                <small style="font-weight: normal; font-size: 0.85em; opacity: 0.8; margin-top: 2px;">[${type.titleVi}]</small>
            </span>
            ${statusHtml}
        `;
        
        item.addEventListener('click', () => selectLetterType(index));
        nav.appendChild(item);
    });
}

function selectLetterType(index) {
    if (index === currentTypeIndex) return;
    
    unlockedLetters.add(index);
    try {
        localStorage.setItem('vstep_b2_unlocked_letters', JSON.stringify(Array.from(unlockedLetters)));
    } catch (e) {
        console.error('Failed to save unlockedLetters:', e);
    }
    currentTypeIndex = index;
    
    // Update active nav
    document.querySelectorAll('.nav-item').forEach((item, i) => {
        item.classList.toggle('active', i === index + 1);
    });

    const type = letterTypes[index];
    
    // Update Header
    const mainTitle = getElement('mainTitle');
    mainTitle.innerHTML = `
        <div class="main-title-en">${type.titleEn}</div>
        <div class="main-title-vi">${type.titleVi}</div>
    `;

    // Show Content
    getElement('welcomeScreen').classList.add('hidden');
    getElement('letterContent').classList.remove('hidden');

    // Fill Content Panels
    getElement('basicInfoPanel').innerHTML = type.basicInfo;
    getElement('identifyingSignsPanel').innerHTML = type.identifyingSigns;
    getElement('detailedOutlinePanel').innerHTML = type.detailedOutline;
    getElement('sampleWritingPanel').innerHTML = type.sampleWriting;

    // Switch to first tab
    switchTab('basicInfo');
    
    // Initialize recitation for this type
    startRecitation();
}

function switchTab(tabId) {
    currentTab = tabId;
    
    // Update buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-tab') === tabId);
    });
    
    // Update panels
    document.querySelectorAll('.tab-panel').forEach(panel => {
        panel.classList.remove('active');
    });
    getElement(tabId + 'Panel').classList.add('active');
}

// ----------------------------------------------------
// QUIZ / RECITATION LOGIC (Extracting phrases from Outline)
// ----------------------------------------------------

function extractQuestionsFromOutline(outlineHtml) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(outlineHtml, 'text/html');
    const phrases = doc.querySelectorAll('.outline-phrase');
    
    let questions = [];
    phrases.forEach((phrase, index) => {
        let text = phrase.textContent.trim();
        // Basic requirement: must have some English content
        if (text.length > 5) {
            let cue = phrase.getAttribute('data-vi');
            
            if (!cue) {
                cue = "Hãy viết lại câu/cấu trúc tương ứng trong dàn ý.";
                
                // Try to infer cue from preceding text
                let parentHeader = phrase.closest('.outline-step')?.querySelector('h4, h5');
                let itemParent = phrase.closest('li');
                
                if (parentHeader) {
                    cue = "Thuộc phần: " + parentHeader.textContent;
                }
                if (itemParent && itemParent.textContent.includes('Thân mật')) {
                    cue += " (Dùng cho thư Thân mật)";
                } else if (itemParent && itemParent.textContent.includes('Trang trọng')) {
                    cue += " (Dùng cho thư Trang trọng)";
                }
            }

            questions.push({
                id: index,
                cue: cue,
                answer: text
            });
        }
    });

    // If no phrases found, create a dummy
    if (questions.length === 0) {
        questions.push({
            id: 0,
            cue: "Viết lại lời chào mở đầu.",
            answer: "Dear [tên của người nhận],"
        });
    }

    return questions;
}

function startRecitation() {
    const type = letterTypes[currentTypeIndex];
    currentQuestions = extractQuestionsFromOutline(type.detailedOutline);
    currentQuestionIndex = 0;
    attemptCount = 0;
    
    getElement('totalQuestionsNum').textContent = currentQuestions.length;
    getElement('recitationResultBox').classList.add('hidden');
    getElement('recitationQuizBox').classList.remove('hidden');
    
    loadQuestion();
}

function loadQuestion() {
    const q = currentQuestions[currentQuestionIndex];
    getElement('currentQuestionNum').textContent = currentQuestionIndex + 1;
    
    const progressPct = ((currentQuestionIndex) / currentQuestions.length) * 100;
    getElement('progressBarFill').style.width = `${progressPct}%`;
    
    getElement('questionCueText').textContent = q.cue;
    getElement('recitationInput').value = '';
    getElement('recitationInput').disabled = false;
    
    getElement('questionHintBox').classList.add('hidden');
    getElement('recitationFeedback').classList.add('hidden');
    
    getElement('btnCheckAnswer').classList.remove('hidden');
    getElement('btnNextQuestion').classList.add('hidden');
    
    getElement('btnPrevQuestion').disabled = currentQuestionIndex === 0;
    
    getElement('recitationInput').focus();
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
}

function nextQuestion() {
    if (currentQuestionIndex < currentQuestions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        finishRecitation();
    }
}

function showRecitationHint() {
    const q = currentQuestions[currentQuestionIndex];
    let hint = q.answer;
    
    // Obfuscate parts of the answer
    let words = hint.split(' ');
    let obfuscated = words.map((w, i) => {
        if (i % 2 !== 0 && w.length > 2) {
            return w[0] + '*'.repeat(w.length - 1);
        }
        return w;
    }).join(' ');

    getElement('questionHintText').textContent = obfuscated;
    getElement('questionHintBox').classList.remove('hidden');
}

// Word-by-word diff algorithm using LCS
function diffWords(userText, targetText) {
    const preProcess = (t) => t
        .replace(/…/g, '...')
        .replace(/\.\s*\.\s*\./g, '...')
        .replace(/[’‘]/g, "'")
        .replace(/[“”]/g, '"')
        .replace(/\s*[-\u2010\u2011\u2013\u2014\u2212]+\s*/g, ' - ');
        
    const clean = (w) => w.toLowerCase().trim();
    
    const uWords = preProcess(userText).trim().split(/\s+/).filter(w => w !== "");
    const tWords = preProcess(targetText).trim().split(/\s+/).filter(w => w !== "");
    
    const n = uWords.length;
    const m = tWords.length;
    const dp = Array(n + 1).fill(null).map(() => Array(m + 1).fill(0));
    
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            if (clean(uWords[i - 1]) === clean(tWords[j - 1])) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    
    let i = n, j = m;
    const diff = [];
    
    while (i > 0 || j > 0) {
        if (i > 0 && j > 0 && clean(uWords[i - 1]) === clean(tWords[j - 1])) {
            diff.unshift({ word: uWords[i - 1], type: 'match' });
            i--;
            j--;
        } else if (j > 0 && (i === 0 || dp[i][j - 1] >= dp[i - 1][j])) {
            diff.unshift({ word: tWords[j - 1], type: 'missing' });
            j--;
        } else {
            diff.unshift({ word: uWords[i - 1], type: 'extra' });
            i--;
        }
    }
    
    let matchCount = diff.filter(d => d.type === 'match').length;
    let maxWords = Math.max(tWords.length, uWords.length);
    let accuracy = maxWords > 0 ? Math.round((matchCount / maxWords) * 100) : 0;
    
    return {
        diff,
        accuracy,
        isPerfect: matchCount === tWords.length && uWords.length === tWords.length
    };
}

function checkRecitationAnswer() {
    if (currentQuestions.length === 0) return;
    const q = currentQuestions[currentQuestionIndex];
    const userInput = getElement('recitationInput').value.trim();
    
    if (userInput === '') {
        alert('Vui lòng nhập câu trả lời của bạn trước khi kiểm tra!');
        return;
    }
    
    const diffResult = diffWords(userInput, q.answer);
    
    const feedbackStatus = getElement('feedbackStatus');
    const userDiffResult = getElement('userDiffResult');
    const correctTextResult = getElement('correctTextResult');
    const feedbackBox = getElement('recitationFeedback');
    
    // Build user diff display
    userDiffResult.innerHTML = '';
    diffResult.diff.forEach(d => {
        if (d.type === 'match') {
            const span = document.createElement('span');
            span.className = 'diff-word-match';
            span.textContent = d.word + ' ';
            userDiffResult.appendChild(span);
        } else if (d.type === 'extra') {
            const span = document.createElement('span');
            span.className = 'diff-word-extra';
            span.textContent = d.word + ' ';
            userDiffResult.appendChild(span);
        }
    });
    if (userDiffResult.innerHTML === '') {
        userDiffResult.innerHTML = '<span style="color:var(--text-muted);font-style:italic;">(Bỏ trống)</span>';
    }
    
    // Build correct text display
    correctTextResult.innerHTML = '';
    diffResult.diff.forEach(d => {
        if (d.type === 'match') {
            const span = document.createElement('span');
            span.className = 'diff-word-match';
            span.textContent = d.word + ' ';
            correctTextResult.appendChild(span);
        } else if (d.type === 'missing') {
            const span = document.createElement('span');
            span.className = 'diff-word-mismatch';
            span.textContent = d.word + ' ';
            correctTextResult.appendChild(span);
        }
    });
    
    if (diffResult.isPerfect) {
        feedbackStatus.className = 'feedback-status status-success';
        feedbackStatus.innerHTML = '<i class="fa-solid fa-circle-check"></i> <strong>Chính xác tuyệt đối!</strong> (Độ chính xác: 100%)';
    } else {
        feedbackStatus.className = 'feedback-status status-error';
        feedbackStatus.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> <strong>Chưa chính xác! Độ chính xác: ${diffResult.accuracy}%. Xem phần so sánh bên dưới.</strong>`;
        attemptCount++;
    }
    
    getElement('btnCheckAnswer').classList.add('hidden');
    getElement('btnNextQuestion').classList.remove('hidden');
    getElement('recitationInput').disabled = true;
    
    feedbackBox.classList.remove('hidden');
}

function finishRecitation() {
    getElement('recitationQuizBox').classList.add('hidden');
    getElement('recitationFeedback').classList.add('hidden');
    getElement('recitationResultBox').classList.remove('hidden');
    getElement('progressBarFill').style.width = '100%';
    
    let score = Math.max(0, 100 - (attemptCount * 5)); // Penalty for wrong attempts
    
    getElement('scorePercentageVal').textContent = score;
    
    const statusVal = getElement('resultStatusVal');
    const msgVal = getElement('resultMessageVal');
    const iconVal = getElement('evaluationIcon');
    
    if (score >= 80) {
        statusVal.textContent = 'XUẤT SẮC';
        statusVal.style.background = 'rgba(16, 185, 129, 0.2)';
        statusVal.style.color = 'var(--success-color)';
        msgVal.textContent = `Chúc mừng bạn đã hoàn thành xuất sắc bài kiểm tra cấu trúc cho ${letterTypes[currentTypeIndex].titleEn}.`;
        iconVal.innerHTML = '<i class="fa-solid fa-award" style="color: var(--success-color);"></i>';
        
        // Mark as completed
        completedRecitations.add(currentTypeIndex);
        try {
            localStorage.setItem('vstep_b2_completed_letters', JSON.stringify(Array.from(completedRecitations)));
        } catch (e) {
            console.error('Failed to save completedRecitations:', e);
        }
        updateSystemProgress();
        generateNav(); // Refresh nav to show checkmark
        
    } else if (score >= 50) {
        statusVal.textContent = 'ĐẠT';
        statusVal.style.background = 'rgba(245, 158, 11, 0.2)';
        statusVal.style.color = 'var(--warning-color)';
        msgVal.textContent = 'Bạn đã hoàn thành bài kiểm tra, nhưng cần cố gắng ghi nhớ chính xác hơn nhé!';
        iconVal.innerHTML = '<i class="fa-solid fa-thumbs-up" style="color: var(--warning-color);"></i>';
        
        completedRecitations.add(currentTypeIndex);
        try {
            localStorage.setItem('vstep_b2_completed_letters', JSON.stringify(Array.from(completedRecitations)));
        } catch (e) {
            console.error('Failed to save completedRecitations:', e);
        }
        updateSystemProgress();
        generateNav();
    } else {
        statusVal.textContent = 'CẦN ÔN TẬP LẠI';
        statusVal.style.background = 'rgba(239, 68, 68, 0.2)';
        statusVal.style.color = 'var(--error-color)';
        msgVal.textContent = 'Bạn đã sai khá nhiều lần. Hãy xem lại Dàn ý chi tiết và làm lại bài kiểm tra này.';
        iconVal.innerHTML = '<i class="fa-solid fa-triangle-exclamation" style="color: var(--error-color);"></i>';
    }
}

function updateSystemProgress() {
    const total = letterTypes.length;
    const completed = completedRecitations.size;
    
    const pct = (completed / total) * 100;
    
    getElement('sidebarProgressText').textContent = `${completed}/${total} ĐẠT`;
    getElement('sidebarProgressFill').style.width = `${pct}%`;
    
    getElement('dashboardProgressPercent').textContent = `${Math.round(pct)}%`;
    getElement('dashboardProgressFill').style.width = `${pct}%`;
    
    const dashboardStatus = getElement('dashboardProgressStatus');
    if (completed === 0) {
        dashboardStatus.textContent = 'Chưa hoàn thành dạng thư nào. Hãy bắt đầu học tập!';
    } else if (completed === total) {
        dashboardStatus.textContent = 'Tuyệt vời! Bạn đã hoàn thành toàn bộ 7 dạng thư.';
        dashboardStatus.style.color = 'var(--success-color)';
    } else {
        dashboardStatus.textContent = `Đang tiến hành. Đã hoàn thành ${completed}/${total} dạng thư.`;
    }
}

function handleLogin() {
    const nameInput = getElement('studentName').value.trim();
    const classInput = getElement('studentClass').value.trim().toUpperCase();
    const errorDiv = getElement('loginError');

    if (!nameInput) {
        errorDiv.textContent = 'Vui lòng nhập Họ và Tên.';
        errorDiv.classList.remove('hidden');
        return;
    }

    const allowedClasses = ['CB201', 'CB202', 'B209'];
    if (!allowedClasses.includes(classInput)) {
        errorDiv.textContent = 'Lớp học không hợp lệ. Chỉ chấp nhận lớp: CB201, CB202, B209.';
        errorDiv.classList.remove('hidden');
        return;
    }

    errorDiv.classList.add('hidden');
    
    // Combine and submit
    const combinedInfo = `${nameInput} - ${classInput}`;
    getElement('formEntryInfo').value = combinedInfo;
    getElement('googleForm').submit();

    // Save to localStorage and unlock
    localStorage.setItem('vstep_b2_student_info', combinedInfo);
    getElement('loginOverlay').style.display = 'none';
    getElement('appContainer').style.display = 'flex';
}

// Start app
document.addEventListener('DOMContentLoaded', initApp);
