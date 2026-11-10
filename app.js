// ==============================================================================
// VSTEP WRITING TASK 01 - B2 LEVEL OFFICIAL INTERACTIVE LEARNING SYSTEM
// COMPILED BY MISS NGUYET (ANH NGỮ RIVER)
// ==============================================================================

const letterTypes = [
    {
        "id": "advice",
        "icon": "fa-lightbulb",
        "titleEn": "Letter of Advice",
        "titleVi": "Thư Cho Lời Khuyên",
        "basicInfo": "\n        <div class=\"content-block\">\n            <h3>Mục đích (Purpose)</h3>\n            <p>Đưa ra lời khuyên, gợi ý hoặc đề xuất để giúp người nhận giải quyết một vấn đề hoặc đưa ra quyết định phù hợp trong một tình huống cụ thể.</p>\n        </div>\n        <div class=\"content-block\">\n            <h3>Phong cách thư (Style)</h3>\n            <p>Chủ yếu là thư thân mật (Informal Letter).</p>\n        </div>\n        <div class=\"content-block\">\n            <h3>Văn phong (Tone)</h3>\n            <p>Thân thiện, quan tâm, hỗ trợ và khích lệ.</p>\n        </div>\n    ",
        "identifyingSigns": "\n        <div class=\"content-block\">\n            <h3>Các từ khóa thường xuất hiện trong đề bài:</h3>\n            <ul>\n                <li>advice / give me some advice / ask for advice</li>\n                <li>suggestions / recommendations</li>\n                <li>what should I do...? / what would you suggest...?</li>\n                <li>I need your help with...</li>\n            </ul>\n        </div>\n    ",
        "detailedOutline": "\n        <div class=\"outline-note\">\n            <p><strong>LƯU Ý:</strong> Thư cho lời khuyên thường là thư thân mật.</p>\n        </div>\n        <div class=\"outline-step\">\n            <h4>1. Lời chào mở đầu</h4>\n            <p>↳ <span class=\"outline-phrase\">Dear [tên của người nhận],</span></p>\n        </div>\n        <div class=\"outline-step\">\n            <h4>2. Mở thư</h4>\n            <p>↳ <span class=\"outline-phrase\">Thanks for writing to me. How have you been lately? After reading your letter, I have a few suggestions that you may want to consider.</span></p>\n        </div>\n        <div class=\"outline-step\">\n            <h4>3. Thân thư</h4>\n            <p>Lần lượt đưa ra lời khuyên/gợi ý phù hợp với tình huống của đề.</p>\n            <div class=\"outline-structures\">\n                <h5>CẤU TRÚC CHO LỜI KHUYÊN:</h5>\n                <ul>\n                    <li>↳ <span class=\"outline-phrase\">I think you should + Vo.</span></li>\n                    <li>↳ <span class=\"outline-phrase\">You may want to + Vo.</span></li>\n                    <li>↳ <span class=\"outline-phrase\">It would be a good idea to + Vo.</span></li>\n                    <li>↳ <span class=\"outline-phrase\">If I were you, I would + Vo.</span></li>\n                    <li>↳ <span class=\"outline-phrase\">You could try + Ving.</span></li>\n                    <li>↳ <span class=\"outline-phrase\">Remember to + Vo. / Don’t forget to + Vo.</span></li>\n                    <li>↳ <span class=\"outline-phrase\">It might be worth + Ving.</span></li>\n                    <li>↳ <span class=\"outline-phrase\">You could consider + Ving.</span></li>\n                </ul>\n            </div>\n            <p>Từ liên kết gợi ý: ↳ <em>To begin with, … → Second, … → Next, … → Finally, …</em></p>\n        </div>\n        <div class=\"outline-step\">\n            <h4>4. Kết thư</h4>\n            <p>↳ <span class=\"outline-phrase\">I hope you find my suggestions helpful. Let me know how things go. Write back soon.</span></p>\n        </div>\n        <div class=\"outline-step\">\n            <h4>5. Lời chào kết thúc</h4>\n            <p>↳ <span class=\"outline-phrase\">Best wishes,</span></p>\n        </div>\n    ",
        "practicePrompt": "You have received a letter from an English friend, Helen. She is going to visit Hanoi in June. Write a letter to give her some suggestions. In your letter, you should tell her: Where to stay, What dishes to try, Which places to visit, What to wear when visiting Hanoi. You should write at least 120 words. Do not include your name or address.",
        "sampleWriting": "\n        <div class=\"sample-prompt-container\">\n            <div class=\"sample-prompt-header\">\n                <i class=\"fa-solid fa-file-circle-question\"></i> ĐỀ BÀI (TOPIC PROMPT)\n            </div>\n            <div class=\"sample-prompt-text\">\n                \n    <p>You have received a letter from an English friend, Helen. She is going to visit Hanoi in June. Write a letter to give her some suggestions. In your letter, you should tell her:</p>\n    <ul>\n        <li>Where to stay</li>\n        <li>What dishes to try</li>\n        <li>Which places to visit</li>\n        <li>What to wear when visiting Hanoi</li>\n    </ul>\n    <p style=\"margin-top: 8px; font-style: italic; color: var(--text-muted);\">You should write at least 120 words. Do not include your name or address.</p>\n\n            </div>\n            <div class=\"sample-analysis-grid\">\n                <div class=\"sample-analysis-item\">\n                    <strong>Người nhận</strong>\n                    <span>Helen (Bạn bè người Anh)</span>\n                </div>\n                <div class=\"sample-analysis-item\">\n                    <strong>Mục đích</strong>\n                    <span>Gợi ý kinh nghiệm du lịch Hà Nội vào tháng 6</span>\n                </div>\n                <div class=\"sample-analysis-item\">\n                    <strong>Văn phong</strong>\n                    <span>Thân mật (Informal Letter)</span>\n                </div>\n                <div class=\"sample-analysis-item\">\n                    <strong>Yêu cầu cốt lõi</strong>\n                    <span>Nơi ở, món ăn nên thử, điểm tham quan, trang phục</span>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"content-block\">\n            <!-- Toolbar Card -->\n            <div class=\"sample-toolbar-card\">\n                <div class=\"sample-metrics-group\">\n                    <span class=\"sample-metric-chip accent-words\">\n                        <i class=\"fa-solid fa-file-lines\"></i> 182 từ (Đạt chuẩn 120-180 từ)\n                    </span>\n                    <span class=\"sample-metric-chip accent-tone\">\n                        <i class=\"fa-solid fa-tag\"></i> Thân mật (Informal Letter)\n                    </span>\n                    <span class=\"sample-metric-chip accent-band\">\n                        <i class=\"fa-solid fa-medal\"></i> Chuẩn VSTEP B2\n                    </span>\n                    <span class=\"sample-metric-chip\">\n                        <i class=\"fa-solid fa-clock\"></i> 20 Phút\n                    </span>\n                </div>\n                <div class=\"sample-audio-controls\">\n                    <button class=\"btn-sample-audio\" id=\"btnPlaySampleAudio\" onclick=\"playCurrentSampleLetter()\" title=\"Nghe toàn bộ bức thư\">\n                        <i class=\"fa-solid fa-volume-high\"></i> Nghe bài mẫu\n                    </button>\n                    <button class=\"btn-sample-audio btn-stop\" id=\"btnStopSampleAudio\" onclick=\"stopSampleAudio()\" title=\"Dừng đọc\" style=\"display: none;\">\n                        <i class=\"fa-solid fa-stop\"></i> Dừng\n                    </button>\n                    <select class=\"sample-speed-select\" id=\"sampleAudioRate\" onchange=\"updateSampleAudioSpeed(this.value)\">\n                        <option value=\"0.85\">0.85x Chậm</option>\n                        <option value=\"1.0\" selected>1.0x Chuẩn</option>\n                        <option value=\"1.15\">1.15x Nhanh</option>\n                    </select>\n                    <span class=\"sample-audio-status\" id=\"sampleAudioStatus\" style=\"display: none;\">\n                        <i class=\"fa-solid fa-headphones fa-bounce\"></i> Đang đọc...\n                    </span>\n                </div>\n            </div>\n\n            <!-- View Switcher Tabs -->\n            <div class=\"sample-view-nav\" style=\"margin-top: 18px;\">\n                <button class=\"sample-view-tab-btn active\" data-view=\"sampleViewAnnotated\" onclick=\"switchSampleView('sampleViewAnnotated', this)\">\n                    <i class=\"fa-solid fa-shapes\"></i> 🎨 Phân tích Cấu trúc & Bí quyết B2\n                </button>\n                <button class=\"sample-view-tab-btn\" data-view=\"sampleViewClean\" onclick=\"switchSampleView('sampleViewClean', this)\">\n                    <i class=\"fa-solid fa-file-lines\"></i> 📄 Toàn văn lá thư đầy đủ (Không chú thích)\n                </button>\n                <button class=\"sample-view-tab-btn\" data-view=\"sampleViewBilingual\" onclick=\"switchSampleView('sampleViewBilingual', this)\">\n                    <i class=\"fa-solid fa-language\"></i> 🇻🇳 Đối chiếu Song ngữ Anh - Việt\n                </button>\n            </div>\n\n            <!-- 3 Dynamic View Panels -->\n            <div class=\"sample-view-container\" style=\"margin-top: 16px;\">\n                <!-- Panel 1: Annotated -->\n                <div id=\"sampleViewAnnotated\" class=\"sample-view-content active\">\n                    <div class=\"clean-letter-quick-banner\" style=\"background: var(--bg-card); border: 1px dashed var(--primary-color); border-radius: 10px; padding: 12px 18px; margin-bottom: 16px; display: flex; align-items: center; justify-content: space-between; gap: 12px; flex-wrap: wrap;\">\n                        <div style=\"font-size: 13.5px; font-weight: 600; color: var(--text-main);\">\n                            <i class=\"fa-solid fa-book-open-reader\" style=\"color: var(--primary-color); margin-right: 6px;\"></i> Bạn muốn đọc hoặc học thuộc trọn vẹn bức thư liền mạch không chú thích?\n                        </div>\n                        <button type=\"button\" class=\"btn btn-outline\" onclick=\"switchSampleView('sampleViewClean', document.querySelector('[data-view=\\'sampleViewClean\\']'))\" style=\"font-size: 12.5px; padding: 6px 14px; border-radius: 6px; cursor: pointer; border-color: var(--primary-color); color: var(--primary-color); font-weight: 600;\">\n                            <i class=\"fa-solid fa-file-lines\"></i> Mở Bản Đầy Đủ Không Chú Thích <i class=\"fa-solid fa-arrow-right\"></i>\n                        </button>\n                    </div>\n\n                    <div class=\"sample-filter-bar\">\n                        <div class=\"sample-filter-title\">\n                            <i class=\"fa-solid fa-highlighter\"></i> BẬT / TẮT ĐIỂM SÁNG B2:\n                        </div>\n                        <div class=\"sample-filter-pills\">\n                            <span class=\"filter-pill active-pill\" onclick=\"toggleSampleHighlight('connectors')\">\n                                <i class=\"fa-solid fa-link\"></i> Từ nối B2\n                            </span>\n                            <span class=\"filter-pill active-pill\" onclick=\"toggleSampleHighlight('vocab')\">\n                                <i class=\"fa-solid fa-gem\"></i> Từ vựng B2\n                            </span>\n                            <span class=\"filter-pill active-pill\" onclick=\"toggleSampleHighlight('grammar')\">\n                                <i class=\"fa-solid fa-wand-magic-sparkles\"></i> Ngữ pháp ghi điểm\n                            </span>\n                        </div>\n                    </div>\n\n                    <div class=\"sample-annotated-flow\">\n                        \n            <div class=\"sample-section-card\">\n                <div class=\"sample-section-header\">\n                    <span class=\"sample-section-badge\">LỜI CHÀO & MỞ THƯ</span>\n                    <span class=\"sample-section-title\">Mở thư thân mật & Thiết lập mục đích</span>\n                    <button class=\"sample-section-btn-audio\" onclick=\"speakText('Dear Helen, Thanks for writing to me. How have you been lately? After reading your letter, I have a few suggestions that you may want to consider for your upcoming trip to Hanoi in June.')\"><i class=\"fa-solid fa-volume-high\"></i> Nghe câu này</button>\n                </div>\n                <div class=\"sample-section-body\">\n                    <p><strong>Dear Helen,</strong></p><p>Thanks for writing to me. How have you been lately? <span class=\"hl-grammar\">After reading your letter, I have a few suggestions that you may want to consider</span> for your upcoming trip to Hanoi in June.</p>\n                </div>\n                <div class=\"sample-section-note\"><i class=\"fa-solid fa-lightbulb\"></i> <strong>Bí quyết B2:</strong> Mẫu câu mở thư B2 tự nhiên, kết nối trực tiếp với lá thư trước của bạn bè.</div>\n            </div>\n        \n            <div class=\"sample-section-card\">\n                <div class=\"sample-section-header\">\n                    <span class=\"sample-section-badge\">GỢI Ý 1 - NƠI Ở</span>\n                    <span class=\"sample-section-title\">Gợi ý khách sạn & vị trí trung tâm</span>\n                    <button class=\"sample-section-btn-audio\" onclick=\"speakText('To begin with, you could consider staying in a boutique hotel in the Old Quarter. This area is situated right in the heart of the city, which makes it extremely convenient for sightseeing.')\"><i class=\"fa-solid fa-volume-high\"></i> Nghe câu này</button>\n                </div>\n                <div class=\"sample-section-body\">\n                    <p><span class=\"hl-connector\">To begin with,</span> <span class=\"hl-grammar\">you could consider staying</span> in a <span class=\"hl-vocab\">boutique hotel</span> in the Old Quarter. This area is <span class=\"hl-vocab\">situated right in the heart</span> of the city, <span class=\"hl-grammar\">which makes it extremely convenient</span> for sightseeing.</p>\n                </div>\n                <div class=\"sample-section-note\"><i class=\"fa-solid fa-lightbulb\"></i> <strong>Bí quyết B2:</strong> Cấu trúc consider + Ving kết hợp mệnh đề quan hệ kết quả which makes it...</div>\n            </div>\n        \n            <div class=\"sample-section-card\">\n                <div class=\"sample-section-header\">\n                    <span class=\"sample-section-badge\">GỢI Ý 2 - MÓN ĂN</span>\n                    <span class=\"sample-section-title\">Gợi ý ẩm thực đặc trưng</span>\n                    <button class=\"sample-section-btn-audio\" onclick=\"speakText('Secondly, it would be a good idea to try out our renowned local cuisine, particularly Pho, Bun Cha, and Banh Mi. These traditional dishes are not only mouth-watering but also deeply represent our culinary culture.')\"><i class=\"fa-solid fa-volume-high\"></i> Nghe câu này</button>\n                </div>\n                <div class=\"sample-section-body\">\n                    <p><span class=\"hl-connector\">Secondly,</span> <span class=\"hl-grammar\">it would be a good idea to try</span> out our <span class=\"hl-vocab\">renowned local cuisine</span>, particularly Pho, Bun Cha, and Banh Mi. These traditional dishes are <span class=\"hl-grammar\">not only</span> mouth-watering <span class=\"hl-grammar\">but also</span> deeply represent our <span class=\"hl-vocab\">culinary culture</span>.</p>\n                </div>\n                <div class=\"sample-section-note\"><i class=\"fa-solid fa-lightbulb\"></i> <strong>Bí quyết B2:</strong> Cấu trúc khuyên it would be a good idea to Vo và cặp liên từ not only... but also...</div>\n            </div>\n        \n            <div class=\"sample-section-card\">\n                <div class=\"sample-section-header\">\n                    <span class=\"sample-section-badge\">GỢI Ý 3 - ĐIỂM THAM QUAN</span>\n                    <span class=\"sample-section-title\">Gợi ý di tích lịch sử</span>\n                    <button class=\"sample-section-btn-audio\" onclick=\"speakText('Next, if I were you, I would spend time visiting significant historical landmarks such as Hoan Kiem Lake, the Temple of Literature, and the Ho Chi Minh Mausoleum. They offer fascinating insights into Vietnam\\'s rich heritage.')\"><i class=\"fa-solid fa-volume-high\"></i> Nghe câu này</button>\n                </div>\n                <div class=\"sample-section-body\">\n                    <p><span class=\"hl-connector\">Next,</span> <span class=\"hl-grammar\">if I were you, I would spend time visiting</span> <span class=\"hl-vocab\">significant historical landmarks</span> such as Hoan Kiem Lake, the Temple of Literature, and the Ho Chi Minh Mausoleum. They offer <span class=\"hl-vocab\">fascinating insights</span> into Vietnam's <span class=\"hl-vocab\">rich heritage</span>.</p>\n                </div>\n                <div class=\"sample-section-note\"><i class=\"fa-solid fa-lightbulb\"></i> <strong>Bí quyết B2:</strong> Câu điều kiện loại 2 giả định lời khuyên và cụm từ học thuật rich heritage, fascinating insights.</div>\n            </div>\n        \n            <div class=\"sample-section-card\">\n                <div class=\"sample-section-header\">\n                    <span class=\"sample-section-badge\">GỢI Ý 4 - TRANG PHỤC</span>\n                    <span class=\"sample-section-title\">Trang phục phù hợp thời tiết nhiệt đới</span>\n                    <button class=\"sample-section-btn-audio\" onclick=\"speakText('Finally, remember to pack light and breathable clothing, such as cotton T-shirts and shorts, as the weather in June can be exceptionally hot and humid.')\"><i class=\"fa-solid fa-volume-high\"></i> Nghe câu này</button>\n                </div>\n                <div class=\"sample-section-body\">\n                    <p><span class=\"hl-connector\">Finally,</span> <span class=\"hl-grammar\">remember to pack</span> light and <span class=\"hl-vocab\">breathable clothing</span>, such as cotton T-shirts and shorts, <span class=\"hl-grammar\">as the weather in June can be</span> <span class=\"hl-vocab\">exceptionally hot and humid</span>.</p>\n                </div>\n                <div class=\"sample-section-note\"><i class=\"fa-solid fa-lightbulb\"></i> <strong>Bí quyết B2:</strong> Cấu trúc remember to Vo và tính từ ghép breathable clothing, exceptionally hot and humid.</div>\n            </div>\n        \n            <div class=\"sample-section-card\">\n                <div class=\"sample-section-header\">\n                    <span class=\"sample-section-badge\">KẾT THƯ & KÝ TÊN</span>\n                    <span class=\"sample-section-title\">Lời chúc & Hẹn gặp lại</span>\n                    <button class=\"sample-section-btn-audio\" onclick=\"speakText('I hope you find my suggestions helpful. Let me know how things go. Write back soon. Best wishes,')\"><i class=\"fa-solid fa-volume-high\"></i> Nghe câu này</button>\n                </div>\n                <div class=\"sample-section-body\">\n                    <p>I hope you find my suggestions helpful. Let me know how things go. Write back soon.</p><p><strong>Best wishes,</strong></p>\n                </div>\n                <div class=\"sample-section-note\"><i class=\"fa-solid fa-lightbulb\"></i> <strong>Bí quyết B2:</strong> Kết thư chuẩn thân mật B2.</div>\n            </div>\n        \n                    </div>\n                </div>\n\n                <!-- Panel 2: Clean Letter -->\n                <div id=\"sampleViewClean\" class=\"sample-view-content\" style=\"display: none;\">\n                    <div class=\"sample-letter-box\">\n                        <p>Dear Helen,</p><p>Thanks for writing to me. How have you been lately? After reading your letter, I have a few suggestions that you may want to consider for your upcoming trip to Hanoi in June.</p><p>To begin with, you could consider staying in a boutique hotel in the Old Quarter. This area is situated right in the heart of the city, which makes it extremely convenient for sightseeing. Secondly, it would be a good idea to try out our renowned local cuisine, particularly Pho, Bun Cha, and Banh Mi. These traditional dishes are not only mouth-watering but also deeply represent our culinary culture. Next, if I were you, I would spend time visiting significant historical landmarks such as Hoan Kiem Lake, the Temple of Literature, and the Ho Chi Minh Mausoleum. They offer fascinating insights into Vietnam's rich heritage. Finally, remember to pack light and breathable clothing, such as cotton T-shirts and shorts, as the weather in June can be exceptionally hot and humid.</p><p>I hope you find my suggestions helpful. Let me know how things go. Write back soon.</p><p>Best wishes,</p>\n                    </div>\n                </div>\n\n                <!-- Panel 3: Bilingual View -->\n                <div id=\"sampleViewBilingual\" class=\"sample-view-content\" style=\"display: none;\">\n                    <div class=\"bilingual-container\">\n                        \n            <div class=\"bilingual-row\">\n                <div class=\"bilingual-col-en\">\n                    <div class=\"bilingual-header-tag\">\n                        <span>LỜI CHÀO</span>\n                        <button class=\"sample-section-btn-audio\" onclick=\"speakText('Dear Helen,')\"><i class=\"fa-solid fa-volume-high\"></i></button>\n                    </div>\n                    Dear Helen,\n                </div>\n                <div class=\"bilingual-col-vi\">\n                    <div class=\"bilingual-header-tag\"><span>TIẾNG VIỆT</span></div>\n                    Helen thân mến,\n                </div>\n            </div>\n        \n            <div class=\"bilingual-row\">\n                <div class=\"bilingual-col-en\">\n                    <div class=\"bilingual-header-tag\">\n                        <span>MỞ THƯ</span>\n                        <button class=\"sample-section-btn-audio\" onclick=\"speakText('Thanks for writing to me. How have you been lately? After reading your letter, I have a few suggestions that you may want to consider for your upcoming trip to Hanoi in June.')\"><i class=\"fa-solid fa-volume-high\"></i></button>\n                    </div>\n                    Thanks for writing to me. How have you been lately? After reading your letter, I have a few suggestions that you may want to consider for your upcoming trip to Hanoi in June.\n                </div>\n                <div class=\"bilingual-col-vi\">\n                    <div class=\"bilingual-header-tag\"><span>TIẾNG VIỆT</span></div>\n                    Cảm ơn vì đã viết thư cho tớ. Dạo này cậu thế nào? Sau khi đọc thư của cậu, tớ có một vài gợi ý mà cậu có thể cân nhắc cho chuyến đi sắp tới đến Hà Nội vào tháng Sáu.\n                </div>\n            </div>\n        \n            <div class=\"bilingual-row\">\n                <div class=\"bilingual-col-en\">\n                    <div class=\"bilingual-header-tag\">\n                        <span>GỢI Ý 1 - NƠI Ở</span>\n                        <button class=\"sample-section-btn-audio\" onclick=\"speakText('To begin with, you could consider staying in a boutique hotel in the Old Quarter. This area is situated right in the heart of the city, which makes it extremely convenient for sightseeing.')\"><i class=\"fa-solid fa-volume-high\"></i></button>\n                    </div>\n                    To begin with, you could consider staying in a boutique hotel in the Old Quarter. This area is situated right in the heart of the city, which makes it extremely convenient for sightseeing.\n                </div>\n                <div class=\"bilingual-col-vi\">\n                    <div class=\"bilingual-header-tag\"><span>TIẾNG VIỆT</span></div>\n                    Đầu tiên, cậu có thể cân nhắc ở tại một khách sạn boutique trong khu Phố Cổ. Khu vực này nằm ngay trung tâm thành phố, điều này làm cho việc tham quan ngắm cảnh cực kỳ thuận tiện.\n                </div>\n            </div>\n        \n            <div class=\"bilingual-row\">\n                <div class=\"bilingual-col-en\">\n                    <div class=\"bilingual-header-tag\">\n                        <span>GỢI Ý 2 - MÓN ĂN</span>\n                        <button class=\"sample-section-btn-audio\" onclick=\"speakText('Secondly, it would be a good idea to try out our renowned local cuisine, particularly Pho, Bun Cha, and Banh Mi. These traditional dishes are not only mouth-watering but also deeply represent our culinary culture.')\"><i class=\"fa-solid fa-volume-high\"></i></button>\n                    </div>\n                    Secondly, it would be a good idea to try out our renowned local cuisine, particularly Pho, Bun Cha, and Banh Mi. These traditional dishes are not only mouth-watering but also deeply represent our culinary culture.\n                </div>\n                <div class=\"bilingual-col-vi\">\n                    <div class=\"bilingual-header-tag\"><span>TIẾNG VIỆT</span></div>\n                    Thứ hai, sẽ là một ý kiến hay nếu thử nền ẩm thực địa phương nổi tiếng của chúng tớ, đặc biệt là Phở, Bún Chả và Bánh Mì. Những món ăn truyền thống này không chỉ ngon miệng mà còn thể hiện sâu sắc văn hóa ẩm thực của chúng tớ.\n                </div>\n            </div>\n        \n            <div class=\"bilingual-row\">\n                <div class=\"bilingual-col-en\">\n                    <div class=\"bilingual-header-tag\">\n                        <span>GỢI Ý 3 - ĐIỂM THAM QUAN</span>\n                        <button class=\"sample-section-btn-audio\" onclick=\"speakText('Next, if I were you, I would spend time visiting significant historical landmarks such as Hoan Kiem Lake, the Temple of Literature, and the Ho Chi Minh Mausoleum. They offer fascinating insights into Vietnam\\'s rich heritage.')\"><i class=\"fa-solid fa-volume-high\"></i></button>\n                    </div>\n                    Next, if I were you, I would spend time visiting significant historical landmarks such as Hoan Kiem Lake, the Temple of Literature, and the Ho Chi Minh Mausoleum. They offer fascinating insights into Vietnam's rich heritage.\n                </div>\n                <div class=\"bilingual-col-vi\">\n                    <div class=\"bilingual-header-tag\"><span>TIẾNG VIỆT</span></div>\n                    Tiếp theo, nếu tớ là cậu, tớ sẽ dành thời gian tham quan các di tích lịch sử quan trọng như Hồ Hoàn Kiếm, Văn Miếu và Lăng Chủ tịch Hồ Chí Minh. Chúng mang đến cái nhìn hấp dẫn về di sản phong phú của Việt Nam.\n                </div>\n            </div>\n        \n            <div class=\"bilingual-row\">\n                <div class=\"bilingual-col-en\">\n                    <div class=\"bilingual-header-tag\">\n                        <span>GỢI Ý 4 - TRANG PHỤC</span>\n                        <button class=\"sample-section-btn-audio\" onclick=\"speakText('Finally, remember to pack light and breathable clothing, such as cotton T-shirts and shorts, as the weather in June can be exceptionally hot and humid.')\"><i class=\"fa-solid fa-volume-high\"></i></button>\n                    </div>\n                    Finally, remember to pack light and breathable clothing, such as cotton T-shirts and shorts, as the weather in June can be exceptionally hot and humid.\n                </div>\n                <div class=\"bilingual-col-vi\">\n                    <div class=\"bilingual-header-tag\"><span>TIẾNG VIỆT</span></div>\n                    Cuối cùng, hãy nhớ mang theo quần áo mỏng nhẹ và thoáng khí, như áo phông cotton và quần đùi, vì thời tiết vào tháng Sáu có thể vô cùng nóng và ẩm.\n                </div>\n            </div>\n        \n            <div class=\"bilingual-row\">\n                <div class=\"bilingual-col-en\">\n                    <div class=\"bilingual-header-tag\">\n                        <span>KẾT THƯ & KÝ TÊN</span>\n                        <button class=\"sample-section-btn-audio\" onclick=\"speakText('I hope you find my suggestions helpful. Let me know how things go. Write back soon. Best wishes,')\"><i class=\"fa-solid fa-volume-high\"></i></button>\n                    </div>\n                    I hope you find my suggestions helpful. Let me know how things go. Write back soon. Best wishes,\n                </div>\n                <div class=\"bilingual-col-vi\">\n                    <div class=\"bilingual-header-tag\"><span>TIẾNG VIỆT</span></div>\n                    Tớ hy vọng cậu thấy những gợi ý của tớ hữu ích. Hãy cho tớ biết mọi chuyện diễn ra như thế nào nhé. Hồi âm sớm cho tớ. Chúc những điều tốt đẹp nhất,\n                </div>\n            </div>\n        \n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <!-- Examiner Takeaways Card -->\n        <div class=\"examiner-card\">\n            \n        <div class=\"examiner-header\">\n            <i class=\"fa-solid fa-award\"></i> BÍ QUYẾT GIÁM KHẢO: PHÂN TÍCH ĐIỂM CAO 4 TIÊU CHÍ VSTEP B2\n        </div>\n        <div class=\"examiner-grid\">\n            <div class=\"examiner-item\">\n                <div class=\"examiner-item-title\" style=\"color: #2563eb;\">\n                    <i class=\"fa-solid fa-bullseye\"></i> 1. Task Fulfillment (Hoàn thành nhiệm vụ)\n                </div>\n                <p class=\"examiner-item-desc\">Bao quát toàn diện và phát triển sâu 4 gợi ý theo đúng yêu cầu đề bài: nơi lưu trú trung tâm, 3 món ẩm thực biểu tượng, các di tích lịch sử nổi tiếng và trang phục hè thoáng mát.</p>\n            </div>\n            <div class=\"examiner-item\">\n                <div class=\"examiner-item-title\" style=\"color: #059669;\">\n                    <i class=\"fa-solid fa-link\"></i> 2. Coherence & Cohesion (Mạch lạc & Liên kết)\n                </div>\n                <p class=\"examiner-item-desc\">Bố cục logic 3 phần rõ ràng; sử dụng từ nối chuyển tiếp B2 mượt mà (To begin with, Secondly, Next, Finally). Các câu được liên kết chặt chẽ.</p>\n            </div>\n            <div class=\"examiner-item\">\n                <div class=\"examiner-item-title\" style=\"color: #d97706;\">\n                    <i class=\"fa-solid fa-book-bookmark\"></i> 3. Lexical Resource (Vốn từ vựng B2)\n                </div>\n                <p class=\"examiner-item-desc\">Vốn từ B2 phong phú, chuẩn xác: boutique hotel, situated right in the heart, renowned local cuisine, culinary culture, significant historical landmarks, rich heritage, breathable clothing.</p>\n            </div>\n            <div class=\"examiner-item\">\n                <div class=\"examiner-item-title\" style=\"color: #dc2626;\">\n                    <i class=\"fa-solid fa-pen-ruler\"></i> 4. Grammatical Range (Ngữ pháp đa dạng)\n                </div>\n                <p class=\"examiner-item-desc\">Đa dạng các cấu trúc khuyên học thuật: consider + Ving, would be a good idea to, câu điều kiện loại 2 (if I were you, I would), cấu trúc song hành not only... but also, mệnh đề quan hệ không xác định.</p>\n            </div>\n        </div>\n    \n        </div>\n    "
    },
    {
        "id": "request",
        "icon": "fa-hand-holding-hand",
        "titleEn": "Letter of Request",
        "titleVi": "Thư Yêu Cầu",
        "basicInfo": "\n        <div class=\"content-block\">\n            <h3>Mục đích (Purpose)</h3>\n            <p>Yêu cầu hoặc xin thông tin, sự giúp đỡ, dịch vụ hoặc sự cho phép từ người nhận.</p>\n        </div>\n        <div class=\"content-block\">\n            <h3>Phong cách thư (Style)</h3>\n            <p>Thường là thư bán trang trọng hoặc trang trọng (Semi-formal/Formal Letter).</p>\n        </div>\n        <div class=\"content-block\">\n            <h3>Văn phong (Tone)</h3>\n            <p>Lịch sự, tôn trọng và rõ ràng.</p>\n        </div>\n    ",
        "identifyingSigns": "\n        <div class=\"content-block\">\n            <h3>Các từ khóa thường xuất hiện trong đề bài:</h3>\n            <ul>\n                <li>request / ask for help / ask for information</li>\n                <li>ask about… / request information about…</li>\n                <li>would like to ask / would like to know</li>\n                <li>write a letter to ask… / inquire about…</li>\n            </ul>\n        </div>\n    ",
        "detailedOutline": "\n        <div class=\"outline-note\">\n            <p><strong>LƯU Ý:</strong> Thư yêu cầu thường dùng để xin thông tin, xin giúp đỡ hoặc đề nghị điều gì đó. Thư có thể là thư thân mật, bán trang trọng hoặc trang trọng.</p>\n        </div>\n        <div class=\"outline-step\">\n            <h4>1. Lời chào mở đầu</h4>\n            <p>- Thân mật: ↳ <span class=\"outline-phrase\">Dear [tên của người nhận],</span></p>\n            <p>- Trang trọng: ↳ <span class=\"outline-phrase\">Dear Sir/Madam,</span></p>\n            <p>- Bán trang trọng: ↳ <span class=\"outline-phrase\">Dear Mr. / Ms. / Mrs. [họ của người nhận],</span></p>\n        </div>\n        <div class=\"outline-step\">\n            <h4>2. Mở thư</h4>\n            <p>- Thân mật: ↳ <span class=\"outline-phrase\">How have you been lately? I hope everything is going well. I’m writing to ask for some information about [thông tin cần hỏi].</span></p>\n            <p>- Trang trọng & Bán trang trọng: ↳ <span class=\"outline-phrase\">I am writing this letter to request information about [thông tin cần hỏi]. I would appreciate it if you could answer a few questions regarding this matter.</span></p>\n        </div>\n        <div class=\"outline-step\">\n            <h4>3. Thân thư</h4>\n            <p>Lần lượt đặt các câu hỏi để xin thông tin hoặc yêu cầu sự giúp đỡ.</p>\n            <div class=\"outline-structures\">\n                <h5>CẤU TRÚC HỎI THÔNG TIN:</h5>\n                <ul>\n                    <li>↳ <span class=\"outline-phrase\">Could you please let me know [thông tin cần hỏi]?</span></li>\n                    <li>↳ <span class=\"outline-phrase\">I would like to ask whether/if [thông tin cần hỏi].</span></li>\n                    <li>↳ <span class=\"outline-phrase\">I was wondering if you could provide me with details about [thông tin cần hỏi].</span></li>\n                    <li>↳ <span class=\"outline-phrase\">Could you also tell me about [thông tin cần hỏi]?</span></li>\n                    <li>↳ <span class=\"outline-phrase\">Would you mind letting me know [thông tin cần hỏi]?</span></li>\n                    <li>↳ <span class=\"outline-phrase\">I would also be grateful if you could clarify [thông tin cần hỏi].</span></li>\n                </ul>\n            </div>\n            <p>Từ liên kết gợi ý: ↳ <em>To begin with, … → In addition, … → Furthermore, … → Finally, …</em></p>\n        </div>\n        <div class=\"outline-step\">\n            <h4>4. Kết thư</h4>\n            <p>- Thân mật: ↳ <span class=\"outline-phrase\">I hope to hear from you soon. Thanks a lot for your help. Take care.</span></p>\n            <p>- Trang trọng & Bán trang trọng: ↳ <span class=\"outline-phrase\">Thank you in advance for your time and assistance. I look forward to receiving your response at your earliest convenience.</span></p>\n        </div>\n        <div class=\"outline-step\">\n            <h4>5. Lời chào kết thúc</h4>\n            <p>- Thân mật: ↳ <span class=\"outline-phrase\">Best wishes,</span></p>\n            <p>- Trang trọng: ↳ <span class=\"outline-phrase\">Yours faithfully,</span></p>\n            <p>- Bán trang trọng: ↳ <span class=\"outline-phrase\">Yours sincerely,</span></p>\n        </div>\n    ",
        "practicePrompt": "You are planning to take an English course next month. Write a letter to Rainbow Language Center to ask for information about the course. In your letter, you should ask about: course schedule, course fee, teachers' qualifications, available study materials. You should write at least 120 words. Do not include your name or address.",
        "sampleWriting": "\n        <div class=\"sample-prompt-container\">\n            <div class=\"sample-prompt-header\">\n                <i class=\"fa-solid fa-file-circle-question\"></i> ĐỀ BÀI (TOPIC PROMPT)\n            </div>\n            <div class=\"sample-prompt-text\">\n                \n    <p>You are planning to take an English course next month. Write a letter to Rainbow Language Center to ask for information about the course. In your letter, you should ask about:</p>\n    <ul>\n        <li>course schedule</li>\n        <li>course fee</li>\n        <li>teachers' qualifications</li>\n        <li>available study materials</li>\n    </ul>\n    <p style=\"margin-top: 8px; font-style: italic; color: var(--text-muted);\">You should write at least 120 words. Do not include your name or address.</p>\n\n            </div>\n            <div class=\"sample-analysis-grid\">\n                <div class=\"sample-analysis-item\">\n                    <strong>Người nhận</strong>\n                    <span>Ban Tuyển sinh Rainbow Language Center</span>\n                </div>\n                <div class=\"sample-analysis-item\">\n                    <strong>Mục đích</strong>\n                    <span>Hỏi thông tin chi tiết về khóa học tiếng Anh sắp tới</span>\n                </div>\n                <div class=\"sample-analysis-item\">\n                    <strong>Văn phong</strong>\n                    <span>Trang trọng (Formal Letter)</span>\n                </div>\n                <div class=\"sample-analysis-item\">\n                    <strong>Yêu cầu cốt lõi</strong>\n                    <span>Lịch học, học phí & ưu đãi, năng lực giáo viên, tài liệu giáo trình</span>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"content-block\">\n            <!-- Toolbar Card -->\n            <div class=\"sample-toolbar-card\">\n                <div class=\"sample-metrics-group\">\n                    <span class=\"sample-metric-chip accent-words\">\n                        <i class=\"fa-solid fa-file-lines\"></i> 166 từ (Đạt chuẩn 120-180 từ)\n                    </span>\n                    <span class=\"sample-metric-chip accent-tone\">\n                        <i class=\"fa-solid fa-tag\"></i> Trang trọng (Formal Letter)\n                    </span>\n                    <span class=\"sample-metric-chip accent-band\">\n                        <i class=\"fa-solid fa-medal\"></i> Chuẩn VSTEP B2\n                    </span>\n                    <span class=\"sample-metric-chip\">\n                        <i class=\"fa-solid fa-clock\"></i> 20 Phút\n                    </span>\n                </div>\n                <div class=\"sample-audio-controls\">\n                    <button class=\"btn-sample-audio\" id=\"btnPlaySampleAudio\" onclick=\"playCurrentSampleLetter()\" title=\"Nghe toàn bộ bức thư\">\n                        <i class=\"fa-solid fa-volume-high\"></i> Nghe bài mẫu\n                    </button>\n                    <button class=\"btn-sample-audio btn-stop\" id=\"btnStopSampleAudio\" onclick=\"stopSampleAudio()\" title=\"Dừng đọc\" style=\"display: none;\">\n                        <i class=\"fa-solid fa-stop\"></i> Dừng\n                    </button>\n                    <select class=\"sample-speed-select\" id=\"sampleAudioRate\" onchange=\"updateSampleAudioSpeed(this.value)\">\n                        <option value=\"0.85\">0.85x Chậm</option>\n                        <option value=\"1.0\" selected>1.0x Chuẩn</option>\n                        <option value=\"1.15\">1.15x Nhanh</option>\n                    </select>\n                    <span class=\"sample-audio-status\" id=\"sampleAudioStatus\" style=\"display: none;\">\n                        <i class=\"fa-solid fa-headphones fa-bounce\"></i> Đang đọc...\n                    </span>\n                </div>\n            </div>\n\n            <!-- View Switcher Tabs -->\n            <div class=\"sample-view-nav\" style=\"margin-top: 18px;\">\n                <button class=\"sample-view-tab-btn active\" data-view=\"sampleViewAnnotated\" onclick=\"switchSampleView('sampleViewAnnotated', this)\">\n                    <i class=\"fa-solid fa-shapes\"></i> 🎨 Phân tích Cấu trúc & Bí quyết B2\n                </button>\n                <button class=\"sample-view-tab-btn\" data-view=\"sampleViewClean\" onclick=\"switchSampleView('sampleViewClean', this)\">\n                    <i class=\"fa-solid fa-file-lines\"></i> 📄 Toàn văn lá thư đầy đủ (Không chú thích)\n                </button>\n                <button class=\"sample-view-tab-btn\" data-view=\"sampleViewBilingual\" onclick=\"switchSampleView('sampleViewBilingual', this)\">\n                    <i class=\"fa-solid fa-language\"></i> 🇻🇳 Đối chiếu Song ngữ Anh - Việt\n                </button>\n            </div>\n\n            <!-- 3 Dynamic View Panels -->\n            <div class=\"sample-view-container\" style=\"margin-top: 16px;\">\n                <!-- Panel 1: Annotated -->\n                <div id=\"sampleViewAnnotated\" class=\"sample-view-content active\">\n                    <div class=\"clean-letter-quick-banner\" style=\"background: var(--bg-card); border: 1px dashed var(--primary-color); border-radius: 10px; padding: 12px 18px; margin-bottom: 16px; display: flex; align-items: center; justify-content: space-between; gap: 12px; flex-wrap: wrap;\">\n                        <div style=\"font-size: 13.5px; font-weight: 600; color: var(--text-main);\">\n                            <i class=\"fa-solid fa-book-open-reader\" style=\"color: var(--primary-color); margin-right: 6px;\"></i> Bạn muốn đọc hoặc học thuộc trọn vẹn bức thư liền mạch không chú thích?\n                        </div>\n                        <button type=\"button\" class=\"btn btn-outline\" onclick=\"switchSampleView('sampleViewClean', document.querySelector('[data-view=\\'sampleViewClean\\']'))\" style=\"font-size: 12.5px; padding: 6px 14px; border-radius: 6px; cursor: pointer; border-color: var(--primary-color); color: var(--primary-color); font-weight: 600;\">\n                            <i class=\"fa-solid fa-file-lines\"></i> Mở Bản Đầy Đủ Không Chú Thích <i class=\"fa-solid fa-arrow-right\"></i>\n                        </button>\n                    </div>\n\n                    <div class=\"sample-filter-bar\">\n                        <div class=\"sample-filter-title\">\n                            <i class=\"fa-solid fa-highlighter\"></i> BẬT / TẮT ĐIỂM SÁNG B2:\n                        </div>\n                        <div class=\"sample-filter-pills\">\n                            <span class=\"filter-pill active-pill\" onclick=\"toggleSampleHighlight('connectors')\">\n                                <i class=\"fa-solid fa-link\"></i> Từ nối B2\n                            </span>\n                            <span class=\"filter-pill active-pill\" onclick=\"toggleSampleHighlight('vocab')\">\n                                <i class=\"fa-solid fa-gem\"></i> Từ vựng B2\n                            </span>\n                            <span class=\"filter-pill active-pill\" onclick=\"toggleSampleHighlight('grammar')\">\n                                <i class=\"fa-solid fa-wand-magic-sparkles\"></i> Ngữ pháp ghi điểm\n                            </span>\n                        </div>\n                    </div>\n\n                    <div class=\"sample-annotated-flow\">\n                        \n            <div class=\"sample-section-card\">\n                <div class=\"sample-section-header\">\n                    <span class=\"sample-section-badge\">LỜI CHÀO & MỞ THƯ</span>\n                    <span class=\"sample-section-title\">Mở thư trang trọng & Nêu rõ mục đích xin thông tin</span>\n                    <button class=\"sample-section-btn-audio\" onclick=\"speakText('Dear Sir/Madam, I am writing this letter to request information about the English course at Rainbow Language Center, as I am planning to enroll next month to enhance my proficiency. I would appreciate it if you could answer a few questions regarding this matter.')\"><i class=\"fa-solid fa-volume-high\"></i> Nghe câu này</button>\n                </div>\n                <div class=\"sample-section-body\">\n                    <p><strong>Dear Sir/Madam,</strong></p><p><span class=\"hl-grammar\">I am writing this letter to request information about</span> the English course at Rainbow Language Center, as I am planning to enroll next month to <span class=\"hl-vocab\">enhance my proficiency</span>. <span class=\"hl-grammar\">I would appreciate it if you could answer a few questions</span> regarding this matter.</p>\n                </div>\n                <div class=\"sample-section-note\"><i class=\"fa-solid fa-lightbulb\"></i> <strong>Bí quyết B2:</strong> Cấu trúc mở thư trang trọng B2: I would appreciate it if you could...</div>\n            </div>\n        \n            <div class=\"sample-section-card\">\n                <div class=\"sample-section-header\">\n                    <span class=\"sample-section-badge\">CÂU HỎI 1 & 2 - LỊCH HỌC & HỌC PHÍ</span>\n                    <span class=\"sample-section-title\">Hỏi lịch học và chính sách ưu đãi</span>\n                    <button class=\"sample-section-btn-audio\" onclick=\"speakText('To begin with, could you please let me know the upcoming course schedule, including the exact start date and the weekly class timetables? In addition, I would like to ask whether there are any discounts available on the course fee for students who register early or pay in full upfront.')\"><i class=\"fa-solid fa-volume-high\"></i> Nghe câu này</button>\n                </div>\n                <div class=\"sample-section-body\">\n                    <p><span class=\"hl-connector\">To begin with,</span> <span class=\"hl-grammar\">could you please let me know</span> the upcoming <span class=\"hl-vocab\">course schedule</span>, including the exact start date and the weekly class timetables? <span class=\"hl-connector\">In addition,</span> <span class=\"hl-grammar\">I would like to ask whether there are any discounts available</span> on the course fee for students who register early or pay in full upfront.</p>\n                </div>\n                <div class=\"sample-section-note\"><i class=\"fa-solid fa-lightbulb\"></i> <strong>Bí quyết B2:</strong> Sử dụng câu hỏi gián tiếp lịch sự could you please let me know và I would like to ask whether...</div>\n            </div>\n        \n            <div class=\"sample-section-card\">\n                <div class=\"sample-section-header\">\n                    <span class=\"sample-section-badge\">CÂU HỎI 3 & 4 - GIÁO VIÊN & TÀI LIỆU</span>\n                    <span class=\"sample-section-title\">Hỏi bằng cấp giáo viên và tài nguyên số</span>\n                    <button class=\"sample-section-btn-audio\" onclick=\"speakText('Furthermore, I was wondering if you could provide me with details about the teachers\\' professional qualifications and teaching background. Lastly, I would also be grateful if you could clarify what study materials are provided, and whether digital learning resources are included in the tuition.')\"><i class=\"fa-solid fa-volume-high\"></i> Nghe câu này</button>\n                </div>\n                <div class=\"sample-section-body\">\n                    <p><span class=\"hl-connector\">Furthermore,</span> <span class=\"hl-grammar\">I was wondering if you could provide me with details about</span> the teachers' <span class=\"hl-vocab\">professional qualifications</span> and teaching background. <span class=\"hl-connector\">Lastly,</span> <span class=\"hl-grammar\">I would also be grateful if you could clarify</span> what study materials are provided, and whether <span class=\"hl-vocab\">digital learning resources</span> are included in the tuition.</p>\n                </div>\n                <div class=\"sample-section-note\"><i class=\"fa-solid fa-lightbulb\"></i> <strong>Bí quyết B2:</strong> Cấu trúc I was wondering if you could... và I would also be grateful if you could clarify...</div>\n            </div>\n        \n            <div class=\"sample-section-card\">\n                <div class=\"sample-section-header\">\n                    <span class=\"sample-section-badge\">KẾT THƯ & KÝ TÊN</span>\n                    <span class=\"sample-section-title\">Cảm ơn & Mong đợi hồi âm</span>\n                    <button class=\"sample-section-btn-audio\" onclick=\"speakText('Thank you in advance for your time and assistance. I look forward to receiving your response at your earliest convenience. Yours faithfully,')\"><i class=\"fa-solid fa-volume-high\"></i> Nghe câu này</button>\n                </div>\n                <div class=\"sample-section-body\">\n                    <p>Thank you in advance for your time and assistance. <span class=\"hl-grammar\">I look forward to receiving your response at your earliest convenience</span>.</p><p><strong>Yours faithfully,</strong></p>\n                </div>\n                <div class=\"sample-section-note\"><i class=\"fa-solid fa-lightbulb\"></i> <strong>Bí quyết B2:</strong> Kết thư trang trọng tiêu chuẩn quốc tế: at your earliest convenience và Yours faithfully.</div>\n            </div>\n        \n                    </div>\n                </div>\n\n                <!-- Panel 2: Clean Letter -->\n                <div id=\"sampleViewClean\" class=\"sample-view-content\" style=\"display: none;\">\n                    <div class=\"sample-letter-box\">\n                        <p>Dear Sir/Madam,</p><p>I am writing this letter to request information about the English course at Rainbow Language Center, as I am planning to enroll next month to enhance my proficiency. I would appreciate it if you could answer a few questions regarding this matter.</p><p>To begin with, could you please let me know the upcoming course schedule, including the exact start date and the weekly class timetables? In addition, I would like to ask whether there are any discounts available on the course fee for students who register early or pay in full upfront. Furthermore, I was wondering if you could provide me with details about the teachers' professional qualifications and teaching background. Lastly, I would also be grateful if you could clarify what study materials are provided, and whether digital learning resources are included in the tuition.</p><p>Thank you in advance for your time and assistance. I look forward to receiving your response at your earliest convenience.</p><p>Yours faithfully,</p>\n                    </div>\n                </div>\n\n                <!-- Panel 3: Bilingual View -->\n                <div id=\"sampleViewBilingual\" class=\"sample-view-content\" style=\"display: none;\">\n                    <div class=\"bilingual-container\">\n                        \n            <div class=\"bilingual-row\">\n                <div class=\"bilingual-col-en\">\n                    <div class=\"bilingual-header-tag\">\n                        <span>LỜI CHÀO</span>\n                        <button class=\"sample-section-btn-audio\" onclick=\"speakText('Dear Sir/Madam,')\"><i class=\"fa-solid fa-volume-high\"></i></button>\n                    </div>\n                    Dear Sir/Madam,\n                </div>\n                <div class=\"bilingual-col-vi\">\n                    <div class=\"bilingual-header-tag\"><span>TIẾNG VIỆT</span></div>\n                    Kính gửi Ban Tuyển sinh,\n                </div>\n            </div>\n        \n            <div class=\"bilingual-row\">\n                <div class=\"bilingual-col-en\">\n                    <div class=\"bilingual-header-tag\">\n                        <span>MỞ THƯ</span>\n                        <button class=\"sample-section-btn-audio\" onclick=\"speakText('I am writing this letter to request information about the English course at Rainbow Language Center, as I am planning to enroll next month to enhance my proficiency. I would appreciate it if you could answer a few questions regarding this matter.')\"><i class=\"fa-solid fa-volume-high\"></i></button>\n                    </div>\n                    I am writing this letter to request information about the English course at Rainbow Language Center, as I am planning to enroll next month to enhance my proficiency. I would appreciate it if you could answer a few questions regarding this matter.\n                </div>\n                <div class=\"bilingual-col-vi\">\n                    <div class=\"bilingual-header-tag\"><span>TIẾNG VIỆT</span></div>\n                    Tôi viết thư này để xin thông tin về khóa học tiếng Anh tại Trung tâm Ngoại ngữ Rainbow, vì tôi dự định đăng ký vào tháng tới để nâng cao trình độ. Tôi sẽ rất cảm kích nếu ông/bà có thể giải đáp một vài câu hỏi liên quan đến vấn đề này.\n                </div>\n            </div>\n        \n            <div class=\"bilingual-row\">\n                <div class=\"bilingual-col-en\">\n                    <div class=\"bilingual-header-tag\">\n                        <span>CÂU HỎI 1 - LỊCH HỌC</span>\n                        <button class=\"sample-section-btn-audio\" onclick=\"speakText('To begin with, could you please let me know the upcoming course schedule, including the exact start date and the weekly class timetables?')\"><i class=\"fa-solid fa-volume-high\"></i></button>\n                    </div>\n                    To begin with, could you please let me know the upcoming course schedule, including the exact start date and the weekly class timetables?\n                </div>\n                <div class=\"bilingual-col-vi\">\n                    <div class=\"bilingual-header-tag\"><span>TIẾNG VIỆT</span></div>\n                    Trước hết, ông/bà có thể vui lòng cho tôi biết lịch học sắp tới, bao gồm ngày khai giảng chính xác và thời khóa biểu các lớp hàng tuần được không?\n                </div>\n            </div>\n        \n            <div class=\"bilingual-row\">\n                <div class=\"bilingual-col-en\">\n                    <div class=\"bilingual-header-tag\">\n                        <span>CÂU HỎI 2 - HỌC PHÍ</span>\n                        <button class=\"sample-section-btn-audio\" onclick=\"speakText('In addition, I would like to ask whether there are any discounts available on the course fee for students who register early or pay in full upfront.')\"><i class=\"fa-solid fa-volume-high\"></i></button>\n                    </div>\n                    In addition, I would like to ask whether there are any discounts available on the course fee for students who register early or pay in full upfront.\n                </div>\n                <div class=\"bilingual-col-vi\">\n                    <div class=\"bilingual-header-tag\"><span>TIẾNG VIỆT</span></div>\n                    Ngoài ra, tôi muốn hỏi liệu có chính sách ưu đãi giảm học phí nào cho học viên đăng ký sớm hoặc đóng trọn gói trước không.\n                </div>\n            </div>\n        \n            <div class=\"bilingual-row\">\n                <div class=\"bilingual-col-en\">\n                    <div class=\"bilingual-header-tag\">\n                        <span>CÂU HỎI 3 - GIÁO VIÊN</span>\n                        <button class=\"sample-section-btn-audio\" onclick=\"speakText('Furthermore, I was wondering if you could provide me with details about the teachers\\' professional qualifications and teaching background.')\"><i class=\"fa-solid fa-volume-high\"></i></button>\n                    </div>\n                    Furthermore, I was wondering if you could provide me with details about the teachers' professional qualifications and teaching background.\n                </div>\n                <div class=\"bilingual-col-vi\">\n                    <div class=\"bilingual-header-tag\"><span>TIẾNG VIỆT</span></div>\n                    Hơn nữa, tôi tự hỏi liệu ông/bà có thể cung cấp thêm chi tiết về trình độ chuyên môn cũng như kinh nghiệm giảng dạy của đội ngũ giáo viên.\n                </div>\n            </div>\n        \n            <div class=\"bilingual-row\">\n                <div class=\"bilingual-col-en\">\n                    <div class=\"bilingual-header-tag\">\n                        <span>CÂU HỎI 4 - TÀI LIỆU</span>\n                        <button class=\"sample-section-btn-audio\" onclick=\"speakText('Lastly, I would also be grateful if you could clarify what study materials are provided, and whether digital learning resources are included in the tuition.')\"><i class=\"fa-solid fa-volume-high\"></i></button>\n                    </div>\n                    Lastly, I would also be grateful if you could clarify what study materials are provided, and whether digital learning resources are included in the tuition.\n                </div>\n                <div class=\"bilingual-col-vi\">\n                    <div class=\"bilingual-header-tag\"><span>TIẾNG VIỆT</span></div>\n                    Cuối cùng, tôi cũng rất biết ơn nếu ông/bà làm rõ tài liệu học tập nào được phát, và liệu tài nguyên số có được bao gồm trong học phí.\n                </div>\n            </div>\n        \n            <div class=\"bilingual-row\">\n                <div class=\"bilingual-col-en\">\n                    <div class=\"bilingual-header-tag\">\n                        <span>KẾT THƯ & KÝ TÊN</span>\n                        <button class=\"sample-section-btn-audio\" onclick=\"speakText('Thank you in advance for your time and assistance. I look forward to receiving your response at your earliest convenience. Yours faithfully,')\"><i class=\"fa-solid fa-volume-high\"></i></button>\n                    </div>\n                    Thank you in advance for your time and assistance. I look forward to receiving your response at your earliest convenience. Yours faithfully,\n                </div>\n                <div class=\"bilingual-col-vi\">\n                    <div class=\"bilingual-header-tag\"><span>TIẾNG VIỆT</span></div>\n                    Xin cảm ơn trước sự hỗ trợ của ông/bà. Tôi rất mong sớm nhận được phản hồi vào thời điểm thuận tiện nhất. Trân trọng,\n                </div>\n            </div>\n        \n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <!-- Examiner Takeaways Card -->\n        <div class=\"examiner-card\">\n            \n        <div class=\"examiner-header\">\n            <i class=\"fa-solid fa-award\"></i> BÍ QUYẾT GIÁM KHẢO: PHÂN TÍCH ĐIỂM CAO 4 TIÊU CHÍ VSTEP B2\n        </div>\n        <div class=\"examiner-grid\">\n            <div class=\"examiner-item\">\n                <div class=\"examiner-item-title\" style=\"color: #2563eb;\">\n                    <i class=\"fa-solid fa-bullseye\"></i> 1. Task Fulfillment (Hoàn thành nhiệm vụ)\n                </div>\n                <p class=\"examiner-item-desc\">Hỏi đầy đủ và cụ thể cả 4 thông tin: thời khóa biểu khai giảng, mức phí và chiết khấu, bằng cấp sư phạm của giáo viên, học liệu bản cứng và nền tảng số.</p>\n            </div>\n            <div class=\"examiner-item\">\n                <div class=\"examiner-item-title\" style=\"color: #059669;\">\n                    <i class=\"fa-solid fa-link\"></i> 2. Coherence & Cohesion (Mạch lạc & Liên kết)\n                </div>\n                <p class=\"examiner-item-desc\">Bố cục học thuật hoàn hảo, chuyển mạch khéo léo với liên từ B2 (To begin with, In addition, Furthermore, Lastly).</p>\n            </div>\n            <div class=\"examiner-item\">\n                <div class=\"examiner-item-title\" style=\"color: #d97706;\">\n                    <i class=\"fa-solid fa-book-bookmark\"></i> 3. Lexical Resource (Vốn từ vựng B2)\n                </div>\n                <p class=\"examiner-item-desc\">Từ vựng hành chính và giáo dục cao cấp: enhance my proficiency, upcoming course schedule, professional qualifications, digital learning resources, earliest convenience.</p>\n            </div>\n            <div class=\"examiner-item\">\n                <div class=\"examiner-item-title\" style=\"color: #dc2626;\">\n                    <i class=\"fa-solid fa-pen-ruler\"></i> 4. Grammatical Range (Ngữ pháp đa dạng)\n                </div>\n                <p class=\"examiner-item-desc\">Vận dụng xuất sắc hệ thống câu hỏi gián tiếp (indirect questions): could you please let me know, I would like to ask whether, I was wondering if, I would also be grateful if.</p>\n            </div>\n        </div>\n    \n        </div>\n    "
    },
    {
        "id": "description",
        "icon": "fa-image",
        "titleEn": "Letter of Description",
        "titleVi": "Thư Mô Tả",
        "basicInfo": "\n            <div class=\"content-block\">\n                <h3>Mục đích (Purpose)</h3>\n                <p>Cung cấp thông tin hoặc mô tả chi tiết, sinh động về một người, địa điểm, sự kiện, trải nghiệm hoặc tình huống cụ thể.</p>\n            </div>\n            <div class=\"content-block\">\n                <h3>Phong cách thư (Style)</h3>\n                <p>Thường là thư thân mật (Informal Letter) khi viết cho bạn bè/người quen, hoặc bán trang trọng khi viết theo yêu cầu của đơn vị tổ chức.</p>\n            </div>\n            <div class=\"content-block\">\n                <h3>Văn phong (Tone)</h3>\n                <p>Sinh động, giàu hình ảnh miêu tả, biểu cảm tích cực và mạch lạc.</p>\n            </div>\n        ",
        "identifyingSigns": "\n            <div class=\"content-block\">\n                <h3>Các từ khóa thường xuất hiện trong đề bài:</h3>\n                <ul>\n                    <li>describe … / write a letter to describe …</li>\n                    <li>give a description of …</li>\n                    <li>tell your friend about …</li>\n                    <li>tell him/her what … is like</li>\n                    <li>give details about … / give information about …</li>\n                </ul>\n            </div>\n        ",
        "detailedOutline": "\n            <div class=\"outline-note\">\n                <p><strong>LƯU Ý:</strong> Thư mô tả dùng để cung cấp thông tin hoặc miêu tả về một người, địa điểm, sự kiện, trải nghiệm hoặc tình huống cụ thể. Thư có thể là thư thân mật, bán trang trọng hoặc trang trọng.</p>\n            </div>\n            <div class=\"outline-step\">\n                <h4>1. Lời chào mở đầu</h4>\n                <p>- Thân mật: ↳ <span class=\"outline-phrase\">Dear [tên của người nhận],</span></p>\n                <p>- Trang trọng: ↳ <span class=\"outline-phrase\">Dear Sir/Madam,</span></p>\n                <p>- Bán trang trọng: ↳ <span class=\"outline-phrase\">Dear Mr. / Ms. / Mrs. [họ của người nhận],</span></p>\n            </div>\n            <div class=\"outline-step\">\n                <h4>2. Mở thư</h4>\n                <p>- Thân mật: ↳ <span class=\"outline-phrase\">How have you been lately? I hope everything is going well. In your letter, you asked me about [đối tượng cần mô tả], so I’d like to share some information with you.</span></p>\n                <p>- Trang trọng & Bán trang trọng: ↳ <span class=\"outline-phrase\">I am writing to provide you with a detailed description of [đối tượng cần mô tả], as requested in your previous correspondence.</span></p>\n            </div>\n            <div class=\"outline-step\">\n                <h4>3. Thân thư</h4>\n                <p>Lần lượt miêu tả các đặc điểm của đối tượng theo yêu cầu của đề.</p>\n                <div class=\"outline-structures\">\n                    <h5>CẤU TRÚC MÔ TẢ ĐẶC ĐIỂM:</h5>\n                    <ul>\n                        <li>↳ <span class=\"outline-phrase\">To begin with, [đối tượng] is [tính từ mô tả tổng quan]. In particular, [chi tiết cụ thể].</span></li>\n                        <li>↳ <span class=\"outline-phrase\">In addition, what makes [đối tượng] truly stand out is [đặc điểm nổi bật]. For example, [ví dụ/chi tiết minh chứng].</span></li>\n                        <li>↳ <span class=\"outline-phrase\">Furthermore, [đối tượng] provides a wonderful opportunity to [hoạt động/ý nghĩa]. In my opinion, [cảm nhận/đánh giá].</span></li>\n                    </ul>\n                </div>\n            </div>\n            <div class=\"outline-step\">\n                <h4>4. Kết thư</h4>\n                <p>- Thân mật: ↳ <span class=\"outline-phrase\">I hope this gives you a clear picture of [đối tượng]. Let me know if you want more details. Write back soon.</span></p>\n                <p>- Trang trọng & Bán trang trọng: ↳ <span class=\"outline-phrase\">I hope the above information is useful to you. Please feel free to contact me if you require any further details.</span></p>\n            </div>\n            <div class=\"outline-step\">\n                <h4>5. Lời chào kết thúc</h4>\n                <p>- Thân mật: ↳ <span class=\"outline-phrase\">Best wishes,</span></p>\n                <p>- Trang trọng: ↳ <span class=\"outline-phrase\">Yours faithfully,</span></p>\n                <p>- Bán trang trọng: ↳ <span class=\"outline-phrase\">Yours sincerely,</span></p>\n            </div>\n        ",
        "practicePrompt": "You have received a letter from your English pen pal, Emily, who wants to know about your best friend, Hoa. Write a letter to describe Hoa to Emily. In your letter, you should describe: her appearance, her personality, her hobbies/interests, why she is special to you. You should write at least 120 words. Do not include your name or address.",
        "sampleWriting": "\n            <div class=\"sample-prompt-container\">\n                <div class=\"sample-prompt-header\">\n                    <i class=\"fa-solid fa-file-circle-question\"></i> ĐỀ BÀI (TOPIC PROMPT)\n                </div>\n                <div class=\"sample-prompt-text\">\n                    <p>You have received a letter from your English pen pal, Emily, who wants to know about your best friend, Hoa. Write a letter to describe Hoa to Emily. In your letter, you should describe:</p>\n                    <ul>\n                        <li>her appearance</li>\n                        <li>her personality</li>\n                        <li>her hobbies/interests</li>\n                        <li>why she is special to you</li>\n                    </ul>\n                    <p style=\"margin-top: 10px; font-weight: bold; color: var(--primary-color);\">You should write at least 120 words. Do not include your name or address.</p>\n                </div>\n                <div class=\"prompt-analysis-box\">\n                    <h4><i class=\"fa-solid fa-magnifying-glass-chart\"></i> PHÂN TÍCH ĐỀ BÀI (PROMPT ANALYSIS)</h4>\n                    <div class=\"analysis-grid\">\n                        <div><strong>Người nhận:</strong> Emily (Bạn qua thư người Anh)</div>\n                        <div><strong>Mục đích:</strong> Miêu tả chi tiết về người bạn thân nhất (Hoa)</div>\n                        <div><strong>Phong cách / Văn phong:</strong> Thân mật (Informal), sinh động, ấm áp, chân thành</div>\n                        <div><strong>Yêu cầu cốt lõi:</strong> Ngoại hình, tính cách, sở thích và lý do người bạn đó đặc biệt đối với mình</div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"sample-interactive-wrapper\">\n                <div class=\"sample-view-controls\">\n                    <button class=\"sample-view-btn active\" onclick=\"switchSampleView('bilingual', this)\"><i class=\"fa-solid fa-table-columns\"></i> Song ngữ đối chiếu</button>\n                    <button class=\"sample-view-btn\" onclick=\"switchSampleView('clean', this)\"><i class=\"fa-solid fa-file-lines\"></i> Bài hoàn chỉnh</button>\n                    <button class=\"sample-view-btn\" onclick=\"switchSampleView('highlight', this)\"><i class=\"fa-solid fa-highlighter\"></i> Highlight ngữ pháp</button>\n                </div>\n\n                <div class=\"sample-audio-bar\">\n                    <div class=\"audio-controls-left\">\n                        <button class=\"sample-audio-btn play-btn\" onclick=\"playCurrentSampleLetter()\"><i class=\"fa-solid fa-circle-play\"></i> Nghe bài mẫu</button>\n                        <button class=\"sample-audio-btn stop-btn\" onclick=\"stopSampleAudio()\"><i class=\"fa-solid fa-circle-stop\"></i> Dừng</button>\n                        <div class=\"audio-speed-group\">\n                            <span>Tốc độ:</span>\n                            <button class=\"speed-btn active\" onclick=\"updateSampleAudioSpeed(1.0, this)\">1.0x</button>\n                            <button class=\"speed-btn\" onclick=\"updateSampleAudioSpeed(0.8, this)\">0.8x</button>\n                            <button class=\"speed-btn\" onclick=\"updateSampleAudioSpeed(1.2, this)\">1.2x</button>\n                        </div>\n                    </div>\n                    <div class=\"audio-status-text\" id=\"audioStatusText\">Sẵn sàng phát âm thanh</div>\n                </div>\n\n                <!-- Clean View -->\n                <div class=\"sample-clean-view hidden\" id=\"sampleCleanView\">\n                    <div class=\"clean-letter-paper\">\n                        <p>Dear Emily,</p>\n                        <p>How have you been lately? I hope everything is going well. In your letter, you asked me about my friend Hoa, so I’d like to share some information with you.</p>\n                        <p>To begin with, she is a remarkably fine-looking young woman with an elegant appearance. In particular, she has an oval face, radiant smile, and gentle brown eyes that instantly make people feel comfortable. In addition, what makes Hoa truly stand out is her kind-hearted and supportive personality. For example, whenever I struggle with academic assignments or personal issues, she is always patient, empathetic, and willing to listen. Furthermore, she possesses a keen interest in outdoor activities, particularly hiking and photography, which allows us to spend memorable weekends exploring picturesque landscapes together. In my opinion, she is extraordinarily special to me because our deep mutual understanding and long-standing friendship have helped me grow into a more confident person.</p>\n                        <p>I hope this gives you a clear picture of Hoa. Let me know if you want more details. Write back soon.</p>\n                        <p>Best wishes,</p>\n                    </div>\n                </div>\n\n                <!-- Highlight View -->\n                <div class=\"sample-highlight-view hidden\" id=\"sampleHighlightView\">\n                    <div class=\"highlight-legend\">\n                        <span class=\"legend-chip topic-chip\"><i class=\"fa-solid fa-square\"></i> Mở/Kết thư</span>\n                        <span class=\"legend-chip connector-chip\"><i class=\"fa-solid fa-square\"></i> Từ nối liên kết</span>\n                        <span class=\"legend-chip vocab-chip\"><i class=\"fa-solid fa-square\"></i> Từ vựng B2</span>\n                        <span class=\"legend-chip grammar-chip\"><i class=\"fa-solid fa-square\"></i> Cấu trúc ngữ pháp</span>\n                    </div>\n                    <div class=\"clean-letter-paper\">\n                        <p><span class=\"hl-topic\">Dear Emily,</span></p>\n                        <p><span class=\"hl-topic\">How have you been lately? I hope everything is going well. In your letter, you asked me about my friend Hoa, so I’d like to share some information with you.</span></p>\n                        <p><span class=\"hl-connector\">To begin with,</span> she is a <span class=\"hl-vocab\">remarkably fine-looking</span> young woman with an <span class=\"hl-vocab\">elegant appearance</span>. <span class=\"hl-connector\">In particular,</span> she has an oval face, <span class=\"hl-vocab\">radiant smile</span>, and gentle brown eyes <span class=\"hl-grammar\">that instantly make people feel comfortable</span>. <span class=\"hl-connector\">In addition,</span> <span class=\"hl-grammar\">what makes Hoa truly stand out is</span> her <span class=\"hl-vocab\">kind-hearted and supportive personality</span>. <span class=\"hl-connector\">For example,</span> <span class=\"hl-grammar\">whenever I struggle with</span> academic assignments, she is always patient, <span class=\"hl-vocab\">empathetic</span>, and willing to listen. <span class=\"hl-connector\">Furthermore,</span> she <span class=\"hl-vocab\">possesses a keen interest in</span> outdoor activities, particularly hiking and photography, <span class=\"hl-grammar\">which allows us to spend memorable weekends</span> exploring <span class=\"hl-vocab\">picturesque landscapes</span> together. <span class=\"hl-connector\">In my opinion,</span> she is <span class=\"hl-vocab\">extraordinarily special</span> to me <span class=\"hl-grammar\">because our deep mutual understanding</span> and long-standing friendship have helped me grow into a more confident person.</p>\n                        <p><span class=\"hl-topic\">I hope this gives you a clear picture of Hoa. Let me know if you want more details. Write back soon.</span></p>\n                        <p><span class=\"hl-topic\">Best wishes,</span></p>\n                    </div>\n                </div>\n\n                <!-- Bilingual View -->\n                <div class=\"sample-bilingual-view\" id=\"sampleBilingualView\">\n                    <div class=\"bilingual-container\">\n                        <div class=\"bilingual-row\">\n                            <div class=\"bilingual-col-en\">\n                                <div class=\"bilingual-header-tag\"><span>LỜI CHÀO</span><button class=\"sample-section-btn-audio\" onclick=\"speakText('Dear Emily,')\"><i class=\"fa-solid fa-volume-high\"></i></button></div>\n                                Dear Emily,\n                            </div>\n                            <div class=\"bilingual-col-vi\">\n                                <div class=\"bilingual-header-tag\"><span>TIẾNG VIỆT</span></div>\n                                Emily thân mến,\n                            </div>\n                        </div>\n                        <div class=\"bilingual-row\">\n                            <div class=\"bilingual-col-en\">\n                                <div class=\"bilingual-header-tag\"><span>MỞ THƯ</span><button class=\"sample-section-btn-audio\" onclick=\"speakText('How have you been lately? I hope everything is going well. In your letter, you asked me about my friend Hoa, so I would like to share some information with you.')\"><i class=\"fa-solid fa-volume-high\"></i></button></div>\n                                How have you been lately? I hope everything is going well. In your letter, you asked me about my friend Hoa, so I’d like to share some information with you.\n                            </div>\n                            <div class=\"bilingual-col-vi\">\n                                <div class=\"bilingual-header-tag\"><span>TIẾNG VIỆT</span></div>\n                                Dạo này cậu thế nào? Tớ hy vọng mọi chuyện đều ổn thỏa. Trong thư trước, cậu có hỏi tớ về bạn Hoa của tớ, vì vậy tớ muốn chia sẻ một vài thông tin với cậu.\n                            </div>\n                        </div>\n                        <div class=\"bilingual-row\">\n                            <div class=\"bilingual-col-en\">\n                                <div class=\"bilingual-header-tag\"><span>MÔ TẢ 1 - NGOẠI HÌNH</span><button class=\"sample-section-btn-audio\" onclick=\"speakText('To begin with, she is a remarkably fine-looking young woman with an elegant appearance. In particular, she has an oval face, radiant smile, and gentle brown eyes that instantly make people feel comfortable.')\"><i class=\"fa-solid fa-volume-high\"></i></button></div>\n                                To begin with, she is a remarkably fine-looking young woman with an elegant appearance. In particular, she has an oval face, radiant smile, and gentle brown eyes that instantly make people feel comfortable.\n                            </div>\n                            <div class=\"bilingual-col-vi\">\n                                <div class=\"bilingual-header-tag\"><span>TIẾNG VIỆT</span></div>\n                                Trước hết, cô ấy là một thiếu nữ rất ưa nhìn với vẻ ngoài thanh lịch. Đặc biệt, bạn ấy có khuôn mặt trái xoan, nụ cười rạng rỡ và đôi mắt nâu hiền dịu khiến mọi người ngay lập tức cảm thấy dễ chịu.\n                            </div>\n                        </div>\n                        <div class=\"bilingual-row\">\n                            <div class=\"bilingual-col-en\">\n                                <div class=\"bilingual-header-tag\"><span>MÔ TẢ 2 - TÍNH CÁCH</span><button class=\"sample-section-btn-audio\" onclick=\"speakText('In addition, what makes Hoa truly stand out is her kind-hearted and supportive personality. For example, whenever I struggle with academic assignments or personal issues, she is always patient, empathetic, and willing to listen.')\"><i class=\"fa-solid fa-volume-high\"></i></button></div>\n                                In addition, what makes Hoa truly stand out is her kind-hearted and supportive personality. For example, whenever I struggle with academic assignments or personal issues, she is always patient, empathetic, and willing to listen.\n                            </div>\n                            <div class=\"bilingual-col-vi\">\n                                <div class=\"bilingual-header-tag\"><span>TIẾNG VIỆT</span></div>\n                                Thêm vào đó, điều khiến Hoa thực sự nổi bật là tính cách nhân hậu và hay giúp đỡ người khác. Chẳng hạn, bất cứ khi nào tớ gặp khó khăn với bài tập học tập hay chuyện riêng, bạn ấy luôn kiên nhẫn, đồng cảm và sẵn sàng lắng nghe.\n                            </div>\n                        </div>\n                        <div class=\"bilingual-row\">\n                            <div class=\"bilingual-col-en\">\n                                <div class=\"bilingual-header-tag\"><span>MÔ TẢ 3 - SỞ THÍCH</span><button class=\"sample-section-btn-audio\" onclick=\"speakText('Furthermore, she possesses a keen interest in outdoor activities, particularly hiking and photography, which allows us to spend memorable weekends exploring picturesque landscapes together.')\"><i class=\"fa-solid fa-volume-high\"></i></button></div>\n                                Furthermore, she possesses a keen interest in outdoor activities, particularly hiking and photography, which allows us to spend memorable weekends exploring picturesque landscapes together.\n                            </div>\n                            <div class=\"bilingual-col-vi\">\n                                <div class=\"bilingual-header-tag\"><span>TIẾNG VIỆT</span></div>\n                                Hơn nữa, cô ấy có niềm đam mê lớn với các hoạt động ngoài trời, đặc biệt là leo núi và nhiếp ảnh, điều này cho phép chúng tớ dành những dịp cuối tuần đáng nhớ cùng nhau khám phá những phong cảnh đẹp như tranh.\n                            </div>\n                        </div>\n                        <div class=\"bilingual-row\">\n                            <div class=\"bilingual-col-en\">\n                                <div class=\"bilingual-header-tag\"><span>MÔ TẢ 4 - Ý NGHĨA ĐẶC BIỆT</span><button class=\"sample-section-btn-audio\" onclick=\"speakText('In my opinion, she is extraordinarily special to me because our deep mutual understanding and long-standing friendship have helped me grow into a more confident person.')\"><i class=\"fa-solid fa-volume-high\"></i></button></div>\n                                In my opinion, she is extraordinarily special to me because our deep mutual understanding and long-standing friendship have helped me grow into a more confident person.\n                            </div>\n                            <div class=\"bilingual-col-vi\">\n                                <div class=\"bilingual-header-tag\"><span>TIẾNG VIỆT</span></div>\n                                Theo tớ, bạn ấy cực kỳ đặc biệt đối với tớ vì sự thấu hiểu sâu sắc lẫn nhau và tình bạn lâu năm của chúng tớ đã giúp tớ trưởng thành và trở thành một người tự tin hơn.\n                            </div>\n                        </div>\n                        <div class=\"bilingual-row\">\n                            <div class=\"bilingual-col-en\">\n                                <div class=\"bilingual-header-tag\"><span>KẾT THƯ & KÝ TÊN</span><button class=\"sample-section-btn-audio\" onclick=\"speakText('I hope this gives you a clear picture of Hoa. Let me know if you want more details. Write back soon. Best wishes,')\"><i class=\"fa-solid fa-volume-high\"></i></button></div>\n                                I hope this gives you a clear picture of Hoa. Let me know if you want more details. Write back soon.<br><br><strong>Best wishes,</strong>\n                            </div>\n                            <div class=\"bilingual-col-vi\">\n                                <div class=\"bilingual-header-tag\"><span>TIẾNG VIỆT</span></div>\n                                Tớ hy vọng điều này mang lại cho cậu hình dung rõ ràng về Hoa. Cho tớ biết nếu cậu muốn biết thêm chi tiết nhé. Viết thư lại sớm nhé.<br><br><strong>Chúc những điều tốt đẹp nhất,</strong>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"examiner-card\">\n                <div class=\"examiner-header\">\n                    <i class=\"fa-solid fa-award\"></i> BÍ QUYẾT GIÁM KHẢO: PHÂN TÍCH ĐIỂM CAO 4 TIÊU CHÍ VSTEP B2\n                </div>\n                <div class=\"examiner-grid\">\n                    <div class=\"examiner-item\">\n                        <div class=\"examiner-item-title\" style=\"color: #2563eb;\">\n                            <i class=\"fa-solid fa-bullseye\"></i> 1. Task Fulfillment (Hoàn thành nhiệm vụ)\n                        </div>\n                        <p class=\"examiner-item-desc\">Mô tả đầy đủ cả 4 khía cạnh theo yêu cầu đề: ngoại hình, phẩm chất tính cách, sở thích và giải thích thuyết phục vì sao người bạn này lại có ý nghĩa đặc biệt.</p>\n                    </div>\n                    <div class=\"examiner-item\">\n                        <div class=\"examiner-item-title\" style=\"color: #059669;\">\n                            <i class=\"fa-solid fa-link\"></i> 2. Coherence & Cohesion (Mạch lạc & Liên kết)\n                        </div>\n                        <p class=\"examiner-item-desc\">Tổ chức bố cục mạch lạc với liên từ B2: To begin with, In addition, For example, Furthermore, In my opinion. Các câu dẫn ý tự nhiên.</p>\n                    </div>\n                    <div class=\"examiner-item\">\n                        <div class=\"examiner-item-title\" style=\"color: #d97706;\">\n                            <i class=\"fa-solid fa-book-bookmark\"></i> 3. Lexical Resource (Vốn từ vựng B2)\n                        </div>\n                        <p class=\"examiner-item-desc\">Tính từ và danh từ miêu tả đặc sắc: remarkably fine-looking, radiant smile, kind-hearted, empathetic, possesses a keen interest, picturesque landscapes, deep mutual understanding.</p>\n                    </div>\n                    <div class=\"examiner-item\">\n                        <div class=\"examiner-item-title\" style=\"color: #dc2626;\">\n                            <i class=\"fa-solid fa-pen-ruler\"></i> 4. Grammatical Range (Ngữ pháp đa dạng)\n                        </div>\n                        <p class=\"examiner-item-desc\">Cấu trúc nhấn mạnh: what makes Hoa truly stand out is..., mệnh đề quan hệ không xác định (which allows us to...), mệnh đề thời gian whenever, thì hiện tại hoàn thành.</p>\n                    </div>\n                </div>\n            </div>\n        "
    },
    {
        "id": "complaint",
        "icon": "fa-thumbs-down",
        "titleEn": "Letter of Complaint",
        "titleVi": "Thư Phàn Nàn",
        "basicInfo": "\n            <div class=\"content-block\">\n                <h3>Mục đích (Purpose)</h3>\n                <p>Bày tỏ sự không hài lòng về sản phẩm, dịch vụ hoặc tình huống không thỏa đáng; giải thích sự bất tiện và yêu cầu phương án bồi thường/khắc phục.</p>\n            </div>\n            <div class=\"content-block\">\n                <h3>Phong cách thư (Style)</h3>\n                <p>Thường là thư bán trang trọng hoặc trang trọng (Semi-formal/Formal Letter).</p>\n            </div>\n            <div class=\"content-block\">\n                <h3>Văn phong (Tone)</h3>\n                <p>Cương quyết, rõ ràng, mang tính xây dựng nhưng luôn giữ chừng mực lịch sự và chuyên nghiệp.</p>\n            </div>\n        ",
        "identifyingSigns": "\n            <div class=\"content-block\">\n                <h3>Các từ khóa thường xuất hiện trong đề bài:</h3>\n                <ul>\n                    <li>complain about (phàn nàn về...)</li>\n                    <li>express dissatisfaction with... (bày tỏ sự không hài lòng với...)</li>\n                    <li>not satisfied with... (không thỏa mãn với...)</li>\n                    <li>write a letter to report a problem (viết thư để báo cáo sự cố)</li>\n                </ul>\n            </div>\n        ",
        "detailedOutline": "\n            <div class=\"outline-note\">\n                <p><strong>LƯU Ý:</strong> Thư phàn nàn thường là thư bán trang trọng hoặc trang trọng.</p>\n            </div>\n            <div class=\"outline-step\">\n                <h4>1. Lời chào mở đầu</h4>\n                <p>- Trang trọng: ↳ <span class=\"outline-phrase\">Dear Sir/Madam,</span> (hoặc <span class=\"outline-phrase\">Dear Sir,</span> / <span class=\"outline-phrase\">Dear Madam,</span>)</p>\n                <p>- Bán trang trọng: ↳ <span class=\"outline-phrase\">Dear Mr. / Ms. / Mrs. [họ của người nhận],</span></p>\n            </div>\n            <div class=\"outline-step\">\n                <h4>2. Mở thư</h4>\n                <p>↳ <span class=\"outline-phrase\">I am writing to express my dissatisfaction with [sản phẩm/ dịch vụ/ tình huống không hài lòng]. I recently used your [sản phẩm/ dịch vụ/ cơ sở vật chất], and I was quite disappointed with the experience.</span></p>\n            </div>\n            <div class=\"outline-step\">\n                <h4>3. Thân thư</h4>\n                <p>Lần lượt trình bày 2-3 vấn đề gặp phải và sau đó nêu đề xuất giải quyết.</p>\n                <div class=\"outline-structures\">\n                    <h5>CẤU TRÚC TRÌNH BÀY VẤN ĐỀ & YÊU CẦU:</h5>\n                    <ul>\n                        <li>↳ <span class=\"outline-phrase\">The main issue that I would like to highlight is [vấn đề 1]. Specifically, [chi tiết vấn đề 1]. This caused a great deal of inconvenience for me.</span></li>\n                        <li>↳ <span class=\"outline-phrase\">Furthermore, to make matters worse, [vấn đề 2]. In fact, [chi tiết vấn đề 2]. This was completely unacceptable given the reputation of your company.</span></li>\n                        <li>↳ <span class=\"outline-phrase\">Given these circumstances, I expect you to [hướng giải quyết].</span></li>\n                    </ul>\n                </div>\n            </div>\n            <div class=\"outline-step\">\n                <h4>4. Kết thư</h4>\n                <p>↳ <span class=\"outline-phrase\">I hope you will resolve this issue promptly. I look forward to receiving your prompt reply and a satisfactory solution.</span></p>\n            </div>\n            <div class=\"outline-step\">\n                <h4>5. Lời chào kết thúc</h4>\n                <p>- Trang trọng: ↳ <span class=\"outline-phrase\">Yours faithfully,</span></p>\n                <p>- Bán trang trọng: ↳ <span class=\"outline-phrase\">Yours sincerely,</span></p>\n            </div>\n        ",
        "practicePrompt": "You recently visited a sports center and were dissatisfied with the condition of the changing rooms. Write a letter of complaint to the manager of the sports center. In your letter, you should: explain why you are writing, describe the problems with the changing rooms in detail, state what action you expect the manager to take. You should write at least 120 words. Do not include your name or address.",
        "sampleWriting": "\n            <div class=\"sample-prompt-container\">\n                <div class=\"sample-prompt-header\">\n                    <i class=\"fa-solid fa-file-circle-question\"></i> ĐỀ BÀI (TOPIC PROMPT)\n                </div>\n                <div class=\"sample-prompt-text\">\n                    <p>You recently visited a sports center and were dissatisfied with the condition of the changing rooms. Write a letter of complaint to the manager of the sports center. In your letter, you should:</p>\n                    <ul>\n                        <li>explain why you are writing</li>\n                        <li>describe the problems with the changing rooms in detail</li>\n                        <li>state what action you expect the manager to take</li>\n                    </ul>\n                    <p style=\"margin-top: 10px; font-weight: bold; color: var(--primary-color);\">You should write at least 120 words. Do not include your name or address.</p>\n                </div>\n                <div class=\"prompt-analysis-box\">\n                    <h4><i class=\"fa-solid fa-magnifying-glass-chart\"></i> PHÂN TÍCH ĐỀ BÀI (PROMPT ANALYSIS)</h4>\n                    <div class=\"analysis-grid\">\n                        <div><strong>Người nhận:</strong> Quản lý trung tâm thể thao (The Manager)</div>\n                        <div><strong>Mục đích:</strong> Khiếu nại về điều kiện tồi tàn, mất vệ sinh của phòng thay đồ</div>\n                        <div><strong>Phong cách / Văn phong:</strong> Trang trọng (Formal), kiên quyết, lịch thiệp, yêu cầu giải quyết rõ ràng</div>\n                        <div><strong>Yêu cầu cốt lõi:</strong> Lý do viết thư, mô tả chi tiết các vấn đề hỏng hóc & vệ sinh, yêu cầu hành động khắc phục cụ thể</div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"sample-interactive-wrapper\">\n                <div class=\"sample-view-controls\">\n                    <button class=\"sample-view-btn active\" onclick=\"switchSampleView('bilingual', this)\"><i class=\"fa-solid fa-table-columns\"></i> Song ngữ đối chiếu</button>\n                    <button class=\"sample-view-btn\" onclick=\"switchSampleView('clean', this)\"><i class=\"fa-solid fa-file-lines\"></i> Bài hoàn chỉnh</button>\n                    <button class=\"sample-view-btn\" onclick=\"switchSampleView('highlight', this)\"><i class=\"fa-solid fa-highlighter\"></i> Highlight ngữ pháp</button>\n                </div>\n\n                <div class=\"sample-audio-bar\">\n                    <div class=\"audio-controls-left\">\n                        <button class=\"sample-audio-btn play-btn\" onclick=\"playCurrentSampleLetter()\"><i class=\"fa-solid fa-circle-play\"></i> Nghe bài mẫu</button>\n                        <button class=\"sample-audio-btn stop-btn\" onclick=\"stopSampleAudio()\"><i class=\"fa-solid fa-circle-stop\"></i> Dừng</button>\n                        <div class=\"audio-speed-group\">\n                            <span>Tốc độ:</span>\n                            <button class=\"speed-btn active\" onclick=\"updateSampleAudioSpeed(1.0, this)\">1.0x</button>\n                            <button class=\"speed-btn\" onclick=\"updateSampleAudioSpeed(0.8, this)\">0.8x</button>\n                            <button class=\"speed-btn\" onclick=\"updateSampleAudioSpeed(1.2, this)\">1.2x</button>\n                        </div>\n                    </div>\n                    <div class=\"audio-status-text\" id=\"audioStatusText\">Sẵn sàng phát âm thanh</div>\n                </div>\n\n                <!-- Clean View -->\n                <div class=\"sample-clean-view hidden\" id=\"sampleCleanView\">\n                    <div class=\"clean-letter-paper\">\n                        <p>Dear Sir/Madam,</p>\n                        <p>I am writing to express my dissatisfaction with the condition of the changing room at your sports center. I recently used your facility, and I was quite disappointed with the experience.</p>\n                        <p>The main issue that I would like to highlight is the poor cleanliness of the changing room. Specifically, the floor was wet and slippery, and the trash bins were overflowing with rubbish. This caused a great deal of inconvenience for me and posed safety risks. Furthermore, to make matters worse, several showers were not working properly, with no hot water available, and some lockers had broken locks. In fact, members were unable to secure their personal belongings safely. This was completely unacceptable given the reputation of your company.</p>\n                        <p>Given these circumstances, I expect you to take immediate action to clean the changing room thoroughly, repair the broken showers and locks, and ensure better maintenance in the future.</p>\n                        <p>I hope you will resolve this issue promptly. I look forward to receiving your prompt reply and a satisfactory solution.</p>\n                        <p>Yours faithfully,</p>\n                    </div>\n                </div>\n\n                <!-- Highlight View -->\n                <div class=\"sample-highlight-view hidden\" id=\"sampleHighlightView\">\n                    <div class=\"highlight-legend\">\n                        <span class=\"legend-chip topic-chip\"><i class=\"fa-solid fa-square\"></i> Mở/Kết thư</span>\n                        <span class=\"legend-chip connector-chip\"><i class=\"fa-solid fa-square\"></i> Từ nối liên kết</span>\n                        <span class=\"legend-chip vocab-chip\"><i class=\"fa-solid fa-square\"></i> Từ vựng B2</span>\n                        <span class=\"legend-chip grammar-chip\"><i class=\"fa-solid fa-square\"></i> Cấu trúc ngữ pháp</span>\n                    </div>\n                    <div class=\"clean-letter-paper\">\n                        <p><span class=\"hl-topic\">Dear Sir/Madam,</span></p>\n                        <p><span class=\"hl-topic\">I am writing to express my dissatisfaction with the condition of the changing room at your sports center. I recently used your facility, and I was quite disappointed with the experience.</span></p>\n                        <p><span class=\"hl-connector\">The main issue that I would like to highlight is</span> the <span class=\"hl-vocab\">poor cleanliness</span> of the changing room. <span class=\"hl-connector\">Specifically,</span> the floor was <span class=\"hl-vocab\">wet and slippery</span>, and the trash bins were <span class=\"hl-vocab\">overflowing with rubbish</span>. <span class=\"hl-grammar\">This caused a great deal of inconvenience for me</span> and <span class=\"hl-vocab\">posed safety risks</span>. <span class=\"hl-connector\">Furthermore, to make matters worse,</span> several showers <span class=\"hl-grammar\">were not working properly</span>, with no hot water available, and some lockers had <span class=\"hl-vocab\">broken locks</span>. <span class=\"hl-connector\">In fact,</span> members were <span class=\"hl-grammar\">unable to secure their personal belongings</span> safely. <span class=\"hl-grammar\">This was completely unacceptable</span> <span class=\"hl-vocab\">given the reputation of your company</span>.</p>\n                        <p><span class=\"hl-connector\">Given these circumstances,</span> <span class=\"hl-grammar\">I expect you to take immediate action to</span> clean the changing room thoroughly, repair the broken showers and locks, and <span class=\"hl-vocab\">ensure better maintenance</span> in the future.</p>\n                        <p><span class=\"hl-topic\">I hope you will resolve this issue promptly. I look forward to receiving your prompt reply and a satisfactory solution.</span></p>\n                        <p><span class=\"hl-topic\">Yours faithfully,</span></p>\n                    </div>\n                </div>\n\n                <!-- Bilingual View -->\n                <div class=\"sample-bilingual-view\" id=\"sampleBilingualView\">\n                    <div class=\"bilingual-container\">\n                        <div class=\"bilingual-row\">\n                            <div class=\"bilingual-col-en\">\n                                <div class=\"bilingual-header-tag\"><span>LỜI CHÀO</span><button class=\"sample-section-btn-audio\" onclick=\"speakText('Dear Sir/Madam,')\"><i class=\"fa-solid fa-volume-high\"></i></button></div>\n                                Dear Sir/Madam,\n                            </div>\n                            <div class=\"bilingual-col-vi\">\n                                <div class=\"bilingual-header-tag\"><span>TIẾNG VIỆT</span></div>\n                                Kính gửi Ban Quản lý Trung tâm Thể thao,\n                            </div>\n                        </div>\n                        <div class=\"bilingual-row\">\n                            <div class=\"bilingual-col-en\">\n                                <div class=\"bilingual-header-tag\"><span>MỞ THƯ</span><button class=\"sample-section-btn-audio\" onclick=\"speakText('I am writing to express my dissatisfaction with the condition of the changing room at your sports center. I recently used your facility, and I was quite disappointed with the experience.')\"><i class=\"fa-solid fa-volume-high\"></i></button></div>\n                                I am writing to express my dissatisfaction with the condition of the changing room at your sports center. I recently used your facility, and I was quite disappointed with the experience.\n                            </div>\n                            <div class=\"bilingual-col-vi\">\n                                <div class=\"bilingual-header-tag\"><span>TIẾNG VIỆT</span></div>\n                                Tôi viết thư này để bày tỏ sự không hài lòng về tình trạng của phòng thay đồ tại trung tâm thể thao của ông/bà. Gần đây tôi đã sử dụng cơ sở vật chất của trung tâm, và tôi đã khá thất vọng với trải nghiệm này.\n                            </div>\n                        </div>\n                        <div class=\"bilingual-row\">\n                            <div class=\"bilingual-col-en\">\n                                <div class=\"bilingual-header-tag\"><span>VẤN ĐỀ 1 - MẤT VỆ SINH</span><button class=\"sample-section-btn-audio\" onclick=\"speakText('The main issue that I would like to highlight is the poor cleanliness of the changing room. Specifically, the floor was wet and slippery, and the trash bins were overflowing with rubbish. This caused a great deal of inconvenience for me and posed safety risks.')\"><i class=\"fa-solid fa-volume-high\"></i></button></div>\n                                The main issue that I would like to highlight is the poor cleanliness of the changing room. Specifically, the floor was wet and slippery, and the trash bins were overflowing with rubbish. This caused a great deal of inconvenience for me and posed safety risks.\n                            </div>\n                            <div class=\"bilingual-col-vi\">\n                                <div class=\"bilingual-header-tag\"><span>TIẾNG VIỆT</span></div>\n                                Vấn đề chính mà tôi muốn nhấn mạnh là tình trạng vệ sinh kém của phòng thay đồ. Cụ thể, sàn nhà bị ướt và trơn trượt, còn các thùng rác thì tràn ngập rác thải. Điều này đã gây ra rất nhiều sự bất tiện cho tôi và tiềm ẩn những rủi ro an toàn.\n                            </div>\n                        </div>\n                        <div class=\"bilingual-row\">\n                            <div class=\"bilingual-col-en\">\n                                <div class=\"bilingual-header-tag\"><span>VẤN ĐỀ 2 - THIẾT BỊ HỎNG</span><button class=\"sample-section-btn-audio\" onclick=\"speakText('Furthermore, to make matters worse, several showers were not working properly, with no hot water available, and some lockers had broken locks. In fact, members were unable to secure their personal belongings safely. This was completely unacceptable given the reputation of your company.')\"><i class=\"fa-solid fa-volume-high\"></i></button></div>\n                                Furthermore, to make matters worse, several showers were not working properly, with no hot water available, and some lockers had broken locks. In fact, members were unable to secure their personal belongings safely. This was completely unacceptable given the reputation of your company.\n                            </div>\n                            <div class=\"bilingual-col-vi\">\n                                <div class=\"bilingual-header-tag\"><span>TIẾNG VIỆT</span></div>\n                                Hơn nữa, tồi tệ hơn là một vài vòi hoa sen không hoạt động bình thường, không hề có nước nóng, và một số tủ khóa bị hỏng khóa. Trên thực tế, các hội viên không thể bảo quản đồ đạc cá nhân một cách an toàn. Điều này hoàn toàn không thể chấp nhận được xét theo danh tiếng của quý công ty.\n                            </div>\n                        </div>\n                        <div class=\"bilingual-row\">\n                            <div class=\"bilingual-col-en\">\n                                <div class=\"bilingual-header-tag\"><span>ĐỀ XUẤT GIẢI QUYẾT</span><button class=\"sample-section-btn-audio\" onclick=\"speakText('Given these circumstances, I expect you to take immediate action to clean the changing room thoroughly, repair the broken showers and locks, and ensure better maintenance in the future.')\"><i class=\"fa-solid fa-volume-high\"></i></button></div>\n                                Given these circumstances, I expect you to take immediate action to clean the changing room thoroughly, repair the broken showers and locks, and ensure better maintenance in the future.\n                            </div>\n                            <div class=\"bilingual-col-vi\">\n                                <div class=\"bilingual-header-tag\"><span>TIẾNG VIỆT</span></div>\n                                Trước những tình cảnh này, tôi kỳ vọng ông/bà sẽ có biện pháp xử lý ngay lập tức để dọn dẹp kỹ lưỡng phòng thay đồ, sửa chữa các vòi sen và khóa bị hỏng, đồng thời đảm bảo công tác bảo trì tốt hơn trong tương lai.\n                            </div>\n                        </div>\n                        <div class=\"bilingual-row\">\n                            <div class=\"bilingual-col-en\">\n                                <div class=\"bilingual-header-tag\"><span>KẾT THƯ & KÝ TÊN</span><button class=\"sample-section-btn-audio\" onclick=\"speakText('I hope you will resolve this issue promptly. I look forward to receiving your prompt reply and a satisfactory solution. Yours faithfully,')\"><i class=\"fa-solid fa-volume-high\"></i></button></div>\n                                I hope you will resolve this issue promptly. I look forward to receiving your prompt reply and a satisfactory solution.<br><br><strong>Yours faithfully,</strong>\n                            </div>\n                            <div class=\"bilingual-col-vi\">\n                                <div class=\"bilingual-header-tag\"><span>TIẾNG VIỆT</span></div>\n                                Tôi hy vọng ông/bà sẽ giải quyết vấn đề này kịp thời. Tôi rất mong sớm nhận được phản hồi nhanh chóng và một giải pháp thỏa đáng từ ông/bà.<br><br><strong>Trân trọng,</strong>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"examiner-card\">\n                <div class=\"examiner-header\">\n                    <i class=\"fa-solid fa-award\"></i> BÍ QUYẾT GIÁM KHẢO: PHÂN TÍCH ĐIỂM CAO 4 TIÊU CHÍ VSTEP B2\n                </div>\n                <div class=\"examiner-grid\">\n                    <div class=\"examiner-item\">\n                        <div class=\"examiner-item-title\" style=\"color: #2563eb;\">\n                            <i class=\"fa-solid fa-bullseye\"></i> 1. Task Fulfillment (Hoàn thành nhiệm vụ)\n                        </div>\n                        <p class=\"examiner-item-desc\">Nêu rõ mục đích phàn nàn, trình bày chi tiết 2 vấn đề lớn (vệ sinh và hỏng hóc thiết bị) và đưa ra yêu cầu giải quyết cụ thể, có tính khả thi cao.</p>\n                    </div>\n                    <div class=\"examiner-item\">\n                        <div class=\"examiner-item-title\" style=\"color: #059669;\">\n                            <i class=\"fa-solid fa-link\"></i> 2. Coherence & Cohesion (Mạch lạc & Liên kết)\n                        </div>\n                        <p class=\"examiner-item-desc\">Mạch văn logic từ nguyên nhân đến hệ quả: The main issue that I would like to highlight is..., Specifically, Furthermore, to make matters worse, Given these circumstances.</p>\n                    </div>\n                    <div class=\"examiner-item\">\n                        <div class=\"examiner-item-title\" style=\"color: #d97706;\">\n                            <i class=\"fa-solid fa-book-bookmark\"></i> 3. Lexical Resource (Vốn từ vựng B2)\n                        </div>\n                        <p class=\"examiner-item-desc\">Thuật ngữ khiếu nại học thuật: express my dissatisfaction with, overflowing with rubbish, posed safety risks, personal belongings, completely unacceptable, resolve this issue promptly.</p>\n                    </div>\n                    <div class=\"examiner-item\">\n                        <div class=\"examiner-item-title\" style=\"color: #dc2626;\">\n                            <i class=\"fa-solid fa-pen-ruler\"></i> 4. Grammatical Range (Ngữ pháp đa dạng)\n                        </div>\n                        <p class=\"examiner-item-desc\">Cấu trúc phức: to make matters worse, given these circumstances, expect someone to + Vo, cấu trúc phân từ rút gọn, câu bị động và các thì quá khứ đơn miêu tả sự việc.</p>\n                    </div>\n                </div>\n            </div>\n        "
    },
    {
        "id": "feedback",
        "icon": "fa-comments",
        "titleEn": "Letter of Feedback",
        "titleVi": "Thư Phản Hồi/Đánh Giá",
        "basicInfo": "\n            <div class=\"content-block\">\n                <h3>Mục đích (Purpose)</h3>\n                <p>Đưa ra nhận xét, đánh giá hoặc góp ý khách quan (khen và chê) về một sản phẩm, dịch vụ, khóa học, sự kiện hoặc trải nghiệm, đồng thời đề xuất giải pháp cải thiện.</p>\n            </div>\n            <div class=\"content-block\">\n                <h3>Phong cách thư (Style)</h3>\n                <p>Thường là thư bán trang trọng hoặc trang trọng (Semi-formal/Formal Letter).</p>\n            </div>\n            <div class=\"content-block\">\n                <h3>Văn phong (Tone)</h3>\n                <p>Khách quan, mang tính xây dựng, tôn trọng và lịch sự.</p>\n            </div>\n        ",
        "identifyingSigns": "\n            <div class=\"content-block\">\n                <h3>Các từ khóa thường xuất hiện trong đề bài:</h3>\n                <ul>\n                    <li>give/provide feedback on ... (đưa ra phản hồi về...)</li>\n                    <li>share your opinion about ... (chia sẻ ý kiến về...)</li>\n                    <li>describe your experience with … (mô tả trải nghiệm của bạn với...)</li>\n                    <li>write a letter to comment on ... (viết thư nhận xét về...)</li>\n                    <li>say what you liked or did not like about ... (nêu điều thích hoặc không thích...)</li>\n                    <li>say what you are satisfied or dissatisfied with … (nêu điểm hài lòng/chưa hài lòng...)</li>\n                    <li>express your opinion (bày tỏ quan điểm)</li>\n                </ul>\n            </div>\n        ",
        "detailedOutline": "\n            <div class=\"outline-note\">\n                <p><strong>LƯU Ý:</strong> Thư phản hồi đánh giá thường là thư bán trang trọng hoặc trang trọng.</p>\n            </div>\n            <div class=\"outline-step\">\n                <h4>1. Lời chào mở đầu</h4>\n                <p>- Trang trọng: ↳ <span class=\"outline-phrase\">Dear Sir/Madam,</span> (hoặc <span class=\"outline-phrase\">Dear Sir,</span> / <span class=\"outline-phrase\">Dear Madam,</span>)</p>\n                <p>- Bán trang trọng: ↳ <span class=\"outline-phrase\">Dear Mr. / Ms. / Mrs. [họ của người nhận],</span></p>\n            </div>\n            <div class=\"outline-step\">\n                <h4>2. Mở thư</h4>\n                <p>↳ <span class=\"outline-phrase\">I am writing to provide feedback on [vấn đề cần phản hồi đánh giá]. I recently used your [sản phẩm/ dịch vụ/ cơ sở vật chất] and would like to share my experience.</span></p>\n            </div>\n            <div class=\"outline-step\">\n                <h4>3. Thân thư</h4>\n                <p>Lần lượt đưa ra phản hồi đánh giá (khen/chê) và sau đó đề xuất giải pháp để cải thiện.</p>\n                <div class=\"outline-structures\">\n                    <h5>CÁC CẤU TRÚC ĐÁNH GIÁ TÍCH CỰC [KHEN]:</h5>\n                    <p>↳ <em>Overall, I found your [sản phẩm/ dịch vụ/ cơ sở vật chất] quite satisfactory, although there are some aspects that could be improved.</em></p>\n                    <ul>\n                        <li>↳ <span class=\"outline-phrase\">One aspect I appreciated was [điểm khen] because [lý do].</span></li>\n                        <li>↳ <span class=\"outline-phrase\">I was very satisfied with [điểm khen], as [lý do].</span></li>\n                        <li>↳ <span class=\"outline-phrase\">The quality of [điểm khen] was excellent, which made my experience more enjoyable.</span></li>\n                        <li>↳ <span class=\"outline-phrase\">I was particularly impressed with [điểm khen] because [lý do].</span></li>\n                    </ul>\n                    <h5>CÁC CẤU TRÚC PHẢN ÁNH ĐIỂM CHƯA HÀI LÒNG [CHÊ]:</h5>\n                    <p>↳ <em>However, there were also several areas that required improvement.</em></p>\n                    <ul>\n                        <li>↳ <span class=\"outline-phrase\">One issue that I encountered was [điểm chê] because [lý do].</span></li>\n                        <li>↳ <span class=\"outline-phrase\">I was disappointed with [điểm chê], as [lý do].</span></li>\n                        <li>↳ <span class=\"outline-phrase\">I was not satisfied with [điểm chê] because [lý do].</span></li>\n                        <li>↳ <span class=\"outline-phrase\">The quality of [điểm chê] was not as good as I expected, which did not meet my expectations.</span></li>\n                    </ul>\n                    <h5>CÁC CẤU TRÚC ĐỀ XUẤT GIẢI PHÁP:</h5>\n                    <p>↳ <em>To enhance the quality of your [sản phẩm/ dịch vụ/ cơ sở vật chất], I have a few suggestions.</em></p>\n                    <ul>\n                        <li>↳ <span class=\"outline-phrase\">I suggest that you [hành động – Vo].</span></li>\n                        <li>↳ <span class=\"outline-phrase\">I would recommend that you [hành động – Vo].</span></li>\n                        <li>↳ <span class=\"outline-phrase\">It would be better if you could [hành động – Vo].</span></li>\n                        <li>↳ <span class=\"outline-phrase\">I hope you will consider [hành động – Ving].</span></li>\n                    </ul>\n                </div>\n            </div>\n            <div class=\"outline-step\">\n                <h4>4. Kết thư</h4>\n                <p>↳ <span class=\"outline-phrase\">I hope my feedback will be useful in improving your [sản phẩm/ dịch vụ/ cơ sở vật chất]. Please feel free to contact me if you have any further questions.</span></p>\n            </div>\n            <div class=\"outline-step\">\n                <h4>5. Lời chào kết thúc</h4>\n                <p>- Trang trọng: ↳ <span class=\"outline-phrase\">Yours faithfully,</span></p>\n                <p>- Bán trang trọng: ↳ <span class=\"outline-phrase\">Yours sincerely,</span></p>\n            </div>\n        ",
        "practicePrompt": "You recently stayed at a hotel and received an email from the hotel manager asking for feedback about your stay. Write an email to give your opinion. In your email, you should: Say whether you were satisfied or dissatisfied with the service, Describe your experience, Suggest ways the hotel can improve its service. You should write at least 120 words. Do not include your name or address.",
        "sampleWriting": "\n            <div class=\"sample-prompt-container\">\n                <div class=\"sample-prompt-header\">\n                    <i class=\"fa-solid fa-file-circle-question\"></i> ĐỀ BÀI (TOPIC PROMPT)\n                </div>\n                <div class=\"sample-prompt-text\">\n                    <p>You recently stayed at a hotel and received an email from the hotel manager asking for feedback about your stay. Write an email to give your opinion. In your email, you should:</p>\n                    <ul>\n                        <li>Say whether you were satisfied or dissatisfied with the service</li>\n                        <li>Describe your experience</li>\n                        <li>Suggest ways the hotel can improve its service</li>\n                    </ul>\n                    <p style=\"margin-top: 10px; font-weight: bold; color: var(--primary-color);\">You should write at least 120 words. Do not include your name or address.</p>\n                </div>\n                <div class=\"prompt-analysis-box\">\n                    <h4><i class=\"fa-solid fa-magnifying-glass-chart\"></i> PHÂN TÍCH ĐỀ BÀI (PROMPT ANALYSIS)</h4>\n                    <div class=\"analysis-grid\">\n                        <div><strong>Người nhận:</strong> Quản lý khách sạn (The Hotel Manager)</div>\n                        <div><strong>Mục đích:</strong> Phản hồi, nhận xét trải nghiệm lưu trú và đề xuất cải tiến</div>\n                        <div><strong>Phong cách / Văn phong:</strong> Trang trọng (Formal), khách quan, xây dựng, lịch thiệp</div>\n                        <div><strong>Yêu cầu cốt lõi:</strong> Đánh giá mức độ hài lòng/không hài lòng, mô tả trải nghiệm khen & chê, gợi ý giải pháp cải thiện</div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"sample-interactive-wrapper\">\n                <div class=\"sample-view-controls\">\n                    <button class=\"sample-view-btn active\" onclick=\"switchSampleView('bilingual', this)\"><i class=\"fa-solid fa-table-columns\"></i> Song ngữ đối chiếu</button>\n                    <button class=\"sample-view-btn\" onclick=\"switchSampleView('clean', this)\"><i class=\"fa-solid fa-file-lines\"></i> Bài hoàn chỉnh</button>\n                    <button class=\"sample-view-btn\" onclick=\"switchSampleView('highlight', this)\"><i class=\"fa-solid fa-highlighter\"></i> Highlight ngữ pháp</button>\n                </div>\n\n                <div class=\"sample-audio-bar\">\n                    <div class=\"audio-controls-left\">\n                        <button class=\"sample-audio-btn play-btn\" onclick=\"playCurrentSampleLetter()\"><i class=\"fa-solid fa-circle-play\"></i> Nghe bài mẫu</button>\n                        <button class=\"sample-audio-btn stop-btn\" onclick=\"stopSampleAudio()\"><i class=\"fa-solid fa-circle-stop\"></i> Dừng</button>\n                        <div class=\"audio-speed-group\">\n                            <span>Tốc độ:</span>\n                            <button class=\"speed-btn active\" onclick=\"updateSampleAudioSpeed(1.0, this)\">1.0x</button>\n                            <button class=\"speed-btn\" onclick=\"updateSampleAudioSpeed(0.8, this)\">0.8x</button>\n                            <button class=\"speed-btn\" onclick=\"updateSampleAudioSpeed(1.2, this)\">1.2x</button>\n                        </div>\n                    </div>\n                    <div class=\"audio-status-text\" id=\"audioStatusText\">Sẵn sàng phát âm thanh</div>\n                </div>\n\n                <!-- Clean View -->\n                <div class=\"sample-clean-view hidden\" id=\"sampleCleanView\">\n                    <div class=\"clean-letter-paper\">\n                        <p>Dear Sir/Madam,</p>\n                        <p>I am writing to provide feedback on my recent stay at your accommodation. I recently used your services and would like to share my experience.</p>\n                        <p>Overall, I found your hotel quite satisfactory, although there are some aspects that could be improved. One aspect I appreciated was the customer service because the staff were exceptionally welcoming and attentive. In addition, the quality of the breakfast was excellent, which made my dining experience more enjoyable.</p>\n                        <p>However, there were also several areas that required improvement. One issue that I encountered was the Wi-Fi connection because the internet was extremely slow and unstable in my room. Furthermore, the noise from the street was quite noticeable at night, which made it difficult to sleep peacefully.</p>\n                        <p>To enhance the quality of your hotel, I have a few suggestions. I would recommend that you upgrade the internet bandwidth so that guests can work smoothly. It would also be better if you could install soundproof windows to minimize external disturbances.</p>\n                        <p>I hope my feedback will be useful in improving your hospitality services. Please feel free to contact me if you have any further questions.</p>\n                        <p>Yours faithfully,</p>\n                    </div>\n                </div>\n\n                <!-- Highlight View -->\n                <div class=\"sample-highlight-view hidden\" id=\"sampleHighlightView\">\n                    <div class=\"highlight-legend\">\n                        <span class=\"legend-chip topic-chip\"><i class=\"fa-solid fa-square\"></i> Mở/Kết thư</span>\n                        <span class=\"legend-chip connector-chip\"><i class=\"fa-solid fa-square\"></i> Từ nối liên kết</span>\n                        <span class=\"legend-chip vocab-chip\"><i class=\"fa-solid fa-square\"></i> Từ vựng B2</span>\n                        <span class=\"legend-chip grammar-chip\"><i class=\"fa-solid fa-square\"></i> Cấu trúc ngữ pháp</span>\n                    </div>\n                    <div class=\"clean-letter-paper\">\n                        <p><span class=\"hl-topic\">Dear Sir/Madam,</span></p>\n                        <p><span class=\"hl-topic\">I am writing to provide feedback on my recent stay at your accommodation. I recently used your services and would like to share my experience.</span></p>\n                        <p><span class=\"hl-connector\">Overall,</span> <span class=\"hl-grammar\">I found your hotel quite satisfactory</span>, <span class=\"hl-grammar\">although there are some aspects that could be improved</span>. <span class=\"hl-grammar\">One aspect I appreciated was</span> the customer service <span class=\"hl-grammar\">because the staff were</span> <span class=\"hl-vocab\">exceptionally welcoming and attentive</span>. <span class=\"hl-connector\">In addition,</span> the quality of the breakfast was <span class=\"hl-vocab\">excellent</span>, <span class=\"hl-grammar\">which made my dining experience more enjoyable</span>.</p>\n                        <p><span class=\"hl-connector\">However,</span> <span class=\"hl-grammar\">there were also several areas that required improvement</span>. <span class=\"hl-grammar\">One issue that I encountered was</span> the Wi-Fi connection because the internet was <span class=\"hl-vocab\">extremely slow and unstable</span>. <span class=\"hl-connector\">Furthermore,</span> the noise from the street was <span class=\"hl-vocab\">quite noticeable</span> at night, <span class=\"hl-grammar\">which made it difficult to sleep peacefully</span>.</p>\n                        <p><span class=\"hl-connector\">To enhance the quality of your hotel,</span> I have a few suggestions. <span class=\"hl-grammar\">I would recommend that you upgrade</span> the <span class=\"hl-vocab\">internet bandwidth</span> so that guests can work smoothly. <span class=\"hl-grammar\">It would also be better if you could install</span> <span class=\"hl-vocab\">soundproof windows</span> to <span class=\"hl-vocab\">minimize external disturbances</span>.</p>\n                        <p><span class=\"hl-topic\">I hope my feedback will be useful in improving your hospitality services. Please feel free to contact me if you have any further questions.</span></p>\n                        <p><span class=\"hl-topic\">Yours faithfully,</span></p>\n                    </div>\n                </div>\n\n                <!-- Bilingual View -->\n                <div class=\"sample-bilingual-view\" id=\"sampleBilingualView\">\n                    <div class=\"bilingual-container\">\n                        <div class=\"bilingual-row\">\n                            <div class=\"bilingual-col-en\">\n                                <div class=\"bilingual-header-tag\"><span>LỜI CHÀO</span><button class=\"sample-section-btn-audio\" onclick=\"speakText('Dear Sir/Madam,')\"><i class=\"fa-solid fa-volume-high\"></i></button></div>\n                                Dear Sir/Madam,\n                            </div>\n                            <div class=\"bilingual-col-vi\">\n                                <div class=\"bilingual-header-tag\"><span>TIẾNG VIỆT</span></div>\n                                Kính gửi Ban Quản lý Khách sạn,\n                            </div>\n                        </div>\n                        <div class=\"bilingual-row\">\n                            <div class=\"bilingual-col-en\">\n                                <div class=\"bilingual-header-tag\"><span>MỞ THƯ</span><button class=\"sample-section-btn-audio\" onclick=\"speakText('I am writing to provide feedback on my recent stay at your accommodation. I recently used your services and would like to share my experience.')\"><i class=\"fa-solid fa-volume-high\"></i></button></div>\n                                I am writing to provide feedback on my recent stay at your accommodation. I recently used your services and would like to share my experience.\n                            </div>\n                            <div class=\"bilingual-col-vi\">\n                                <div class=\"bilingual-header-tag\"><span>TIẾNG VIỆT</span></div>\n                                Tôi viết thư này để đưa ra phản hồi về kỳ nghỉ gần đây của tôi tại cơ sở lưu trú của ông/bà. Gần đây tôi đã sử dụng dịch vụ của khách sạn và muốn chia sẻ trải nghiệm của mình.\n                            </div>\n                        </div>\n                        <div class=\"bilingual-row\">\n                            <div class=\"bilingual-col-en\">\n                                <div class=\"bilingual-header-tag\"><span>ĐÁNH GIÁ TÍCH CỰC [KHEN]</span><button class=\"sample-section-btn-audio\" onclick=\"speakText('Overall, I found your hotel quite satisfactory, although there are some aspects that could be improved. One aspect I appreciated was the customer service because the staff were exceptionally welcoming and attentive. In addition, the quality of the breakfast was excellent, which made my dining experience more enjoyable.')\"><i class=\"fa-solid fa-volume-high\"></i></button></div>\n                                Overall, I found your hotel quite satisfactory, although there are some aspects that could be improved. One aspect I appreciated was the customer service because the staff were exceptionally welcoming and attentive. In addition, the quality of the breakfast was excellent, which made my dining experience more enjoyable.\n                            </div>\n                            <div class=\"bilingual-col-vi\">\n                                <div class=\"bilingual-header-tag\"><span>TIẾNG VIỆT</span></div>\n                                Nhìn chung, tôi thấy khách sạn của ông/bà khá thỏa đáng, mặc dù có một số khía cạnh có thể được cải thiện. Một khía cạnh tôi đánh giá cao là dịch vụ khách hàng vì nhân viên đặc biệt niềm nở và chu đáo. Ngoài ra, chất lượng bữa sáng rất tuyệt vời, điều này làm cho trải nghiệm dùng bữa của tôi thú vị hơn.\n                            </div>\n                        </div>\n                        <div class=\"bilingual-row\">\n                            <div class=\"bilingual-col-en\">\n                                <div class=\"bilingual-header-tag\"><span>ĐIỂM CHƯA HÀI LÒNG [CHÊ]</span><button class=\"sample-section-btn-audio\" onclick=\"speakText('However, there were also several areas that required improvement. One issue that I encountered was the Wi-Fi connection because the internet was extremely slow and unstable in my room. Furthermore, the noise from the street was quite noticeable at night, which made it difficult to sleep peacefully.')\"><i class=\"fa-solid fa-volume-high\"></i></button></div>\n                                However, there were also several areas that required improvement. One issue that I encountered was the Wi-Fi connection because the internet was extremely slow and unstable in my room. Furthermore, the noise from the street was quite noticeable at night, which made it difficult to sleep peacefully.\n                            </div>\n                            <div class=\"bilingual-col-vi\">\n                                <div class=\"bilingual-header-tag\"><span>TIẾNG VIỆT</span></div>\n                                Tuy nhiên, cũng có một vài phương diện cần cải thiện. Một vấn đề tôi gặp phải là kết nối Wi-Fi vì mạng internet trong phòng tôi cực kỳ chậm và chập chờn. Hơn nữa, tiếng ồn từ ngoài đường khá rõ vào ban đêm, khiến tôi khó có thể ngủ yên giấc.\n                            </div>\n                        </div>\n                        <div class=\"bilingual-row\">\n                            <div class=\"bilingual-col-en\">\n                                <div class=\"bilingual-header-tag\"><span>ĐỀ XUẤT CẢI THIỆN</span><button class=\"sample-section-btn-audio\" onclick=\"speakText('To enhance the quality of your hotel, I have a few suggestions. I would recommend that you upgrade the internet bandwidth so that guests can work smoothly. It would also be better if you could install soundproof windows to minimize external disturbances.')\"><i class=\"fa-solid fa-volume-high\"></i></button></div>\n                                To enhance the quality of your hotel, I have a few suggestions. I would recommend that you upgrade the internet bandwidth so that guests can work smoothly. It would also be better if you could install soundproof windows to minimize external disturbances.\n                            </div>\n                            <div class=\"bilingual-col-vi\">\n                                <div class=\"bilingual-header-tag\"><span>TIẾNG VIỆT</span></div>\n                                Để nâng cao chất lượng khách sạn, tôi có một vài đề xuất. Tôi đề nghị rằng ông/bà nâng cấp băng thông internet để khách có thể làm việc mượt mà. Sẽ tốt hơn nếu ông/bà có thể lắp cửa sổ cách âm để giảm thiểu những phiền toái từ bên ngoài.\n                            </div>\n                        </div>\n                        <div class=\"bilingual-row\">\n                            <div class=\"bilingual-col-en\">\n                                <div class=\"bilingual-header-tag\"><span>KẾT THƯ & KÝ TÊN</span><button class=\"sample-section-btn-audio\" onclick=\"speakText('I hope my feedback will be useful in improving your hospitality services. Please feel free to contact me if you have any further questions. Yours faithfully,')\"><i class=\"fa-solid fa-volume-high\"></i></button></div>\n                                I hope my feedback will be useful in improving your hospitality services. Please feel free to contact me if you have any further questions.<br><br><strong>Yours faithfully,</strong>\n                            </div>\n                            <div class=\"bilingual-col-vi\">\n                                <div class=\"bilingual-header-tag\"><span>TIẾNG VIỆT</span></div>\n                                Tôi hy vọng phản hồi của tôi sẽ hữu ích trong việc nâng cao chất lượng dịch vụ khách sạn của ông/bà. Xin vui lòng liên hệ với tôi nếu ông/bà có bất kỳ câu hỏi nào khác.<br><br><strong>Trân trọng,</strong>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"examiner-card\">\n                <div class=\"examiner-header\">\n                    <i class=\"fa-solid fa-award\"></i> BÍ QUYẾT GIÁM KHẢO: PHÂN TÍCH ĐIỂM CAO 4 TIÊU CHÍ VSTEP B2\n                </div>\n                <div class=\"examiner-grid\">\n                    <div class=\"examiner-item\">\n                        <div class=\"examiner-item-title\" style=\"color: #2563eb;\">\n                            <i class=\"fa-solid fa-bullseye\"></i> 1. Task Fulfillment (Hoàn thành nhiệm vụ)\n                        </div>\n                        <p class=\"examiner-item-desc\">Đánh giá cân bằng cả hai mặt: điểm hài lòng (nhân viên, bữa sáng), điểm hạn chế (Wi-Fi, tiếng ồn) và 2 giải pháp nâng cấp cụ thể.</p>\n                    </div>\n                    <div class=\"examiner-item\">\n                        <div class=\"examiner-item-title\" style=\"color: #059669;\">\n                            <i class=\"fa-solid fa-link\"></i> 2. Coherence & Cohesion (Mạch lạc & Liên kết)\n                        </div>\n                        <p class=\"examiner-item-desc\">Bố cục 3 phần rõ nét (khen - chê - đề xuất), liên kết chặt chẽ bằng Overall, One aspect I appreciated was, However, Furthermore, To enhance the quality.</p>\n                    </div>\n                    <div class=\"examiner-item\">\n                        <div class=\"examiner-item-title\" style=\"color: #d97706;\">\n                            <i class=\"fa-solid fa-book-bookmark\"></i> 3. Lexical Resource (Vốn từ vựng B2)\n                        </div>\n                        <p class=\"examiner-item-desc\">Từ vựng ngành dịch vụ khách sạn chuẩn xác: quite satisfactory, exceptionally welcoming, dining experience, unstable, internet bandwidth, soundproof windows, minimize external disturbances.</p>\n                    </div>\n                    <div class=\"examiner-item\">\n                        <div class=\"examiner-item-title\" style=\"color: #dc2626;\">\n                            <i class=\"fa-solid fa-pen-ruler\"></i> 4. Grammatical Range (Ngữ pháp đa dạng)\n                        </div>\n                        <p class=\"examiner-item-desc\">Cấu trúc nhượng bộ although, mệnh đề quan hệ kết quả which made..., giả định thức sau recommend: recommend that you upgrade, câu điều kiện loại 2 lịch sự: It would also be better if you could...</p>\n                    </div>\n                </div>\n            </div>\n        "
    },
    {
        "id": "apology",
        "icon": "fa-face-frown",
        "titleEn": "Letter of Apology",
        "titleVi": "Thư Xin Lỗi",
        "basicInfo": "\n            <div class=\"content-block\">\n                <h3>Mục đích (Purpose)</h3>\n                <p>Xin lỗi chân thành về một lỗi lầm, sự bất tiện hoặc việc không thể thực hiện một cam kết nào đó, đồng thời giải thích lý do và đưa ra giải pháp khắc phục / bù đắp.</p>\n            </div>\n            <div class=\"content-block\">\n                <h3>Phong cách thư (Style)</h3>\n                <p>Có thể là thư thân mật (khi viết cho bạn bè/người quen), hoặc bán trang trọng / trang trọng (khi viết cho khách hàng, đồng nghiệp hoặc cấp trên).</p>\n            </div>\n            <div class=\"content-block\">\n                <h3>Văn phong (Tone)</h3>\n                <p>Chân thành, lịch sự, nhận trách nhiệm và thể hiện sự tôn trọng.</p>\n            </div>\n        ",
        "identifyingSigns": "\n            <div class=\"content-block\">\n                <h3>Các từ khóa thường xuất hiện trong đề bài:</h3>\n                <ul>\n                    <li>apologize for / say sorry for ... (xin lỗi vì...)</li>\n                    <li>explain why you ... (missed…, were late…, forgot…, damaged…, etc.) (giải thích lý do...)</li>\n                    <li>say how you will make up for it (nêu cách bạn sẽ bù đắp...)</li>\n                    <li>explain the situation and offer a solution (giải thích tình huống và đưa ra giải pháp...)</li>\n                </ul>\n            </div>\n        ",
        "detailedOutline": "\n            <div class=\"outline-note\">\n                <p><strong>LƯU Ý:</strong> Thư xin lỗi có thể là thư thân mật, bán trang trọng hoặc trang trọng tùy thuộc vào người nhận.</p>\n            </div>\n            <div class=\"outline-step\">\n                <h4>1. Lời chào mở đầu</h4>\n                <p>- Thân mật: ↳ <span class=\"outline-phrase\">Dear [tên của người nhận],</span></p>\n                <p>- Trang trọng: ↳ <span class=\"outline-phrase\">Dear Sir/Madam,</span></p>\n                <p>- Bán trang trọng: ↳ <span class=\"outline-phrase\">Dear Mr. / Ms. / Mrs. [họ của người nhận],</span></p>\n            </div>\n            <div class=\"outline-step\">\n                <h4>2. Mở thư</h4>\n                <p>- Thân mật: ↳ <span class=\"outline-phrase\">I’m really sorry for [lỗi lầm - Ving/N]. I feel terrible about what happened, and I’d like to explain the situation more clearly.</span></p>\n                <p>- Trang trọng & Bán trang trọng: ↳ <span class=\"outline-phrase\">I am writing to sincerely apologize for [lỗi lầm - Ving/N]. I deeply regret any inconvenience or distress that this situation may have caused you.</span></p>\n            </div>\n            <div class=\"outline-step\">\n                <h4>3. Thân thư</h4>\n                <p>Giải thích nguyên nhân xảy ra sự việc và đề xuất giải pháp/hành động bù đắp.</p>\n                <div class=\"outline-structures\">\n                    <h5>CẤU TRÚC GIẢI THÍCH LÝ DO:</h5>\n                    <p>↳ <em>First of all, here is the reason for this.</em></p>\n                    <ul>\n                        <li>↳ <span class=\"outline-phrase\">The reason why I could not [hành động – Vo] is that [lý do].</span></li>\n                        <li>↳ <span class=\"outline-phrase\">I regret that I was unable to [hành động – Vo] because [lý do].</span></li>\n                        <li>↳ <span class=\"outline-phrase\">Because [lý do], I was unable to [hành động – Vo].</span></li>\n                        <li>↳ <span class=\"outline-phrase\">Unfortunately, I could not [hành động – Vo] because [lý do].</span></li>\n                    </ul>\n                    <p><em>(Lưu ý: Sau khi nêu lý do, nên thêm 1-3 câu mô tả cụ thể tình huống để người đọc hiểu rõ hơn, sử dụng thì Quá khứ đơn).</em></p>\n                    <h5>CẤU TRÚC NÊU HÀNH ĐỘNG BÙ ĐẮP:</h5>\n                    <p>- Thân mật:</p>\n                    <ul>\n                        <li>↳ <span class=\"outline-phrase\">Let me make it up to you by [hành động – Ving], and I’ll make sure this does not happen again.</span></li>\n                        <li>↳ <span class=\"outline-phrase\">I hope I can make it up to you by [hành động – Ving], and I’ll make sure this does not happen again.</span></li>\n                    </ul>\n                    <p>- Trang trọng & Bán trang trọng:</p>\n                    <ul>\n                        <li>↳ <span class=\"outline-phrase\">To make up for my mistake, I would like to [hành động – Vo]. I will ensure that this does not happen again.</span></li>\n                        <li>↳ <span class=\"outline-phrase\">I would like to make up for this by [hành động – Ving]. I will make every effort to avoid similar situations in the future.</span></li>\n                    </ul>\n                </div>\n            </div>\n            <div class=\"outline-step\">\n                <h4>4. Kết thư</h4>\n                <p>- Thân mật: ↳ <span class=\"outline-phrase\">I’m really sorry once again. I truly appreciate your understanding. Write back soon.</span></p>\n                <p>- Trang trọng & Bán trang trọng: ↳ <span class=\"outline-phrase\">I would like to sincerely apologize once again for the inconvenience. Thank you for your understanding. I look forward to receiving your reply soon.</span></p>\n            </div>\n            <div class=\"outline-step\">\n                <h4>5. Lời chào kết thúc</h4>\n                <p>- Thân mật: ↳ <span class=\"outline-phrase\">Best wishes,</span></p>\n                <p>- Trang trọng: ↳ <span class=\"outline-phrase\">Yours faithfully,</span></p>\n                <p>- Bán trang trọng: ↳ <span class=\"outline-phrase\">Yours sincerely,</span></p>\n            </div>\n        ",
        "practicePrompt": "You borrowed a book from your friend Helen, but forgot to return it. Read part of her letter below: ... Hey! How have you been lately? By the way, have you finished reading the book you borrowed from me? I was wondering why you haven't returned it yet. When do you plan to give it back, and how will you return it? ... Write a letter to reply to Helen. In your letter, you should: apologize for not returning the book, explain your current situation and whether you've finished the book, say when and how you will return it. You should write at least 120 words. Do not include your name or address.",
        "sampleWriting": "\n            <div class=\"sample-prompt-container\">\n                <div class=\"sample-prompt-header\">\n                    <i class=\"fa-solid fa-file-circle-question\"></i> ĐỀ BÀI (TOPIC PROMPT)\n                </div>\n                <div class=\"sample-prompt-text\">\n                    <p>You borrowed a book from your friend Helen, but forgot to return it. Read part of her letter below:</p>\n                    <div style=\"background-color: var(--bg-hover); padding: 12px; border-left: 3px solid var(--primary-color); margin: 8px 0; font-style: italic;\">\n                        \"... Hey! How have you been lately? By the way, have you finished reading the book you borrowed from me? I was wondering why you haven't returned it yet. When do you plan to give it back, and how will you return it? ...\"\n                    </div>\n                    <p>Write a letter to reply to Helen. In your letter, you should:</p>\n                    <ul>\n                        <li>apologize for not returning the book</li>\n                        <li>explain your current situation and whether you've finished the book</li>\n                        <li>say when and how you will return it</li>\n                    </ul>\n                    <p style=\"margin-top: 10px; font-weight: bold; color: var(--primary-color);\">You should write at least 120 words. Do not include your name or address.</p>\n                </div>\n                <div class=\"prompt-analysis-box\">\n                    <h4><i class=\"fa-solid fa-magnifying-glass-chart\"></i> PHÂN TÍCH ĐỀ BÀI (PROMPT ANALYSIS)</h4>\n                    <div class=\"analysis-grid\">\n                        <div><strong>Người nhận:</strong> Helen (Bạn thân)</div>\n                        <div><strong>Mục đích:</strong> Xin lỗi vì chậm trả sách, giải thích nguyên nhân và hẹn lịch trả kèm đền bù</div>\n                        <div><strong>Phong cách / Văn phong:</strong> Thân mật (Informal), chân thành, áy náy, nhiệt tình</div>\n                        <div><strong>Yêu cầu cốt lõi:</strong> Lời xin lỗi chân thật, giải thích hoàn cảnh bận rộn/khẩn cấp, kế hoạch và cách thức gửi trả sách</div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"sample-interactive-wrapper\">\n                <div class=\"sample-view-controls\">\n                    <button class=\"sample-view-btn active\" onclick=\"switchSampleView('bilingual', this)\"><i class=\"fa-solid fa-table-columns\"></i> Song ngữ đối chiếu</button>\n                    <button class=\"sample-view-btn\" onclick=\"switchSampleView('clean', this)\"><i class=\"fa-solid fa-file-lines\"></i> Bài hoàn chỉnh</button>\n                    <button class=\"sample-view-btn\" onclick=\"switchSampleView('highlight', this)\"><i class=\"fa-solid fa-highlighter\"></i> Highlight ngữ pháp</button>\n                </div>\n\n                <div class=\"sample-audio-bar\">\n                    <div class=\"audio-controls-left\">\n                        <button class=\"sample-audio-btn play-btn\" onclick=\"playCurrentSampleLetter()\"><i class=\"fa-solid fa-circle-play\"></i> Nghe bài mẫu</button>\n                        <button class=\"sample-audio-btn stop-btn\" onclick=\"stopSampleAudio()\"><i class=\"fa-solid fa-circle-stop\"></i> Dừng</button>\n                        <div class=\"audio-speed-group\">\n                            <span>Tốc độ:</span>\n                            <button class=\"speed-btn active\" onclick=\"updateSampleAudioSpeed(1.0, this)\">1.0x</button>\n                            <button class=\"speed-btn\" onclick=\"updateSampleAudioSpeed(0.8, this)\">0.8x</button>\n                            <button class=\"speed-btn\" onclick=\"updateSampleAudioSpeed(1.2, this)\">1.2x</button>\n                        </div>\n                    </div>\n                    <div class=\"audio-status-text\" id=\"audioStatusText\">Sẵn sàng phát âm thanh</div>\n                </div>\n\n                <!-- Clean View -->\n                <div class=\"sample-clean-view hidden\" id=\"sampleCleanView\">\n                    <div class=\"clean-letter-paper\">\n                        <p>Dear Helen,</p>\n                        <p>I’m really sorry for failing to return your book on time. I feel terrible about what happened, and I’d like to explain the situation more clearly.</p>\n                        <p>First of all, here is the reason for this. I could not return the book earlier because I had to deal with an unexpected family emergency in my hometown last week. Consequently, I was completely occupied with personal matters and did not have access to my study materials. Fortunately, I have already finished reading the entire book, and I found it exceptionally insightful.</p>\n                        <p>Let me make it up to you by returning the book to you in person this Saturday afternoon, and I’ll make sure this does not happen again. I would love to meet you at our favorite café downtown around 2 PM. Besides returning the book, I would be delighted to treat you to some coffee and pastries as a small token of my apology.</p>\n                        <p>I’m really sorry once again. I truly appreciate your understanding. Write back soon.</p>\n                        <p>Best wishes,</p>\n                    </div>\n                </div>\n\n                <!-- Highlight View -->\n                <div class=\"sample-highlight-view hidden\" id=\"sampleHighlightView\">\n                    <div class=\"highlight-legend\">\n                        <span class=\"legend-chip topic-chip\"><i class=\"fa-solid fa-square\"></i> Mở/Kết thư</span>\n                        <span class=\"legend-chip connector-chip\"><i class=\"fa-solid fa-square\"></i> Từ nối liên kết</span>\n                        <span class=\"legend-chip vocab-chip\"><i class=\"fa-solid fa-square\"></i> Từ vựng B2</span>\n                        <span class=\"legend-chip grammar-chip\"><i class=\"fa-solid fa-square\"></i> Cấu trúc ngữ pháp</span>\n                    </div>\n                    <div class=\"clean-letter-paper\">\n                        <p><span class=\"hl-topic\">Dear Helen,</span></p>\n                        <p><span class=\"hl-topic\">I’m really sorry for failing to return your book on time. I feel terrible about what happened, and I’d like to explain the situation more clearly.</span></p>\n                        <p><span class=\"hl-connector\">First of all, here is the reason for this.</span> <span class=\"hl-grammar\">I could not return the book earlier because</span> I had to deal with an <span class=\"hl-vocab\">unexpected family emergency</span> in my hometown last week. <span class=\"hl-connector\">Consequently,</span> I was <span class=\"hl-vocab\">completely occupied with personal matters</span> and <span class=\"hl-grammar\">did not have access to</span> my study materials. <span class=\"hl-connector\">Fortunately,</span> I have already finished reading the entire book, and I found it <span class=\"hl-vocab\">exceptionally insightful</span>.</p>\n                        <p><span class=\"hl-grammar\">Let me make it up to you by returning the book to you in person</span> this Saturday afternoon, <span class=\"hl-grammar\">and I’ll make sure this does not happen again</span>. I would love to meet you at our favorite café downtown around 2 PM. <span class=\"hl-connector\">Besides returning the book,</span> <span class=\"hl-grammar\">I would be delighted to treat you to</span> some coffee and pastries as a <span class=\"hl-vocab\">small token of my apology</span>.</p>\n                        <p><span class=\"hl-topic\">I’m really sorry once again. I truly appreciate your understanding. Write back soon.</span></p>\n                        <p><span class=\"hl-topic\">Best wishes,</span></p>\n                    </div>\n                </div>\n\n                <!-- Bilingual View -->\n                <div class=\"sample-bilingual-view\" id=\"sampleBilingualView\">\n                    <div class=\"bilingual-container\">\n                        <div class=\"bilingual-row\">\n                            <div class=\"bilingual-col-en\">\n                                <div class=\"bilingual-header-tag\"><span>LỜI CHÀO</span><button class=\"sample-section-btn-audio\" onclick=\"speakText('Dear Helen,')\"><i class=\"fa-solid fa-volume-high\"></i></button></div>\n                                Dear Helen,\n                            </div>\n                            <div class=\"bilingual-col-vi\">\n                                <div class=\"bilingual-header-tag\"><span>TIẾNG VIỆT</span></div>\n                                Helen thân mến,\n                            </div>\n                        </div>\n                        <div class=\"bilingual-row\">\n                            <div class=\"bilingual-col-en\">\n                                <div class=\"bilingual-header-tag\"><span>MỞ THƯ</span><button class=\"sample-section-btn-audio\" onclick=\"speakText('I am really sorry for failing to return your book on time. I feel terrible about what happened, and I would like to explain the situation more clearly.')\"><i class=\"fa-solid fa-volume-high\"></i></button></div>\n                                I’m really sorry for failing to return your book on time. I feel terrible about what happened, and I’d like to explain the situation more clearly.\n                            </div>\n                            <div class=\"bilingual-col-vi\">\n                                <div class=\"bilingual-header-tag\"><span>TIẾNG VIỆT</span></div>\n                                Tớ thực sự xin lỗi vì đã không trả sách cho cậu đúng hạn. Tớ cảm thấy rất tệ về chuyện này, và tớ muốn giải thích rõ ràng hơn về tình huống của mình.\n                            </div>\n                        </div>\n                        <div class=\"bilingual-row\">\n                            <div class=\"bilingual-col-en\">\n                                <div class=\"bilingual-header-tag\"><span>GIẢI THÍCH NGUYÊN NHÂN</span><button class=\"sample-section-btn-audio\" onclick=\"speakText('First of all, here is the reason for this. I could not return the book earlier because I had to deal with an unexpected family emergency in my hometown last week. Consequently, I was completely occupied with personal matters and did not have access to my study materials. Fortunately, I have already finished reading the entire book, and I found it exceptionally insightful.')\"><i class=\"fa-solid fa-volume-high\"></i></button></div>\n                                First of all, here is the reason for this. I could not return the book earlier because I had to deal with an unexpected family emergency in my hometown last week. Consequently, I was completely occupied with personal matters and did not have access to my study materials. Fortunately, I have already finished reading the entire book, and I found it exceptionally insightful.\n                            </div>\n                            <div class=\"bilingual-col-vi\">\n                                <div class=\"bilingual-header-tag\"><span>TIẾNG VIỆT</span></div>\n                                Trước hết, đây là lý do cho việc này. Tớ đã không thể trả sách sớm hơn vì tuần trước tớ phải giải quyết một việc gia đình đột xuất ở quê. Do đó, tớ đã hoàn toàn bận rộn với việc riêng và không thể tiếp cận các tài liệu học tập của mình. May mắn thay, tớ đã đọc xong toàn bộ cuốn sách rồi, và tớ thấy cuốn sách này cực kỳ sâu sắc và bổ ích.\n                            </div>\n                        </div>\n                        <div class=\"bilingual-row\">\n                            <div class=\"bilingual-col-en\">\n                                <div class=\"bilingual-header-tag\"><span>HÀNH ĐỘNG BÙ ĐẮP</span><button class=\"sample-section-btn-audio\" onclick=\"speakText('Let me make it up to you by returning the book to you in person this Saturday afternoon, and I will make sure this does not happen again. I would love to meet you at our favorite café downtown around 2 PM. Besides returning the book, I would be delighted to treat you to some coffee and pastries as a small token of my apology.')\"><i class=\"fa-solid fa-volume-high\"></i></button></div>\n                                Let me make it up to you by returning the book to you in person this Saturday afternoon, and I’ll make sure this does not happen again. I would love to meet you at our favorite café downtown around 2 PM. Besides returning the book, I would be delighted to treat you to some coffee and pastries as a small token of my apology.\n                            </div>\n                            <div class=\"bilingual-col-vi\">\n                                <div class=\"bilingual-header-tag\"><span>TIẾNG VIỆT</span></div>\n                                Hãy để tớ bù đắp cho cậu bằng cách trực tiếp trả sách cho cậu vào chiều thứ Bảy tuần này nhé, và tớ hứa sẽ không để chuyện này xảy ra lần nữa. Tớ rất muốn gặp cậu tại quán cà phê quen thuộc của chúng mình ở trung tâm vào khoảng 2 giờ chiều. Bên cạnh việc trả sách, tớ rất vui được mời cậu cà phê và bánh ngọt như một lời xin lỗi chân thành từ tớ.\n                            </div>\n                        </div>\n                        <div class=\"bilingual-row\">\n                            <div class=\"bilingual-col-en\">\n                                <div class=\"bilingual-header-tag\"><span>KẾT THƯ & KÝ TÊN</span><button class=\"sample-section-btn-audio\" onclick=\"speakText('I am really sorry once again. I truly appreciate your understanding. Write back soon. Best wishes,')\"><i class=\"fa-solid fa-volume-high\"></i></button></div>\n                                I’m really sorry once again. I truly appreciate your understanding. Write back soon.<br><br><strong>Best wishes,</strong>\n                            </div>\n                            <div class=\"bilingual-col-vi\">\n                                <div class=\"bilingual-header-tag\"><span>TIẾNG VIỆT</span></div>\n                                Một lần nữa tớ thực sự xin lỗi cậu nhé. Tớ rất trân trọng sự thông cảm của cậu. Hồi âm sớm cho tớ nha.<br><br><strong>Chúc những điều tốt đẹp nhất,</strong>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"examiner-card\">\n                <div class=\"examiner-header\">\n                    <i class=\"fa-solid fa-award\"></i> BÍ QUYẾT GIÁM KHẢO: PHÂN TÍCH ĐIỂM CAO 4 TIÊU CHÍ VSTEP B2\n                </div>\n                <div class=\"examiner-grid\">\n                    <div class=\"examiner-item\">\n                        <div class=\"examiner-item-title\" style=\"color: #2563eb;\">\n                            <i class=\"fa-solid fa-bullseye\"></i> 1. Task Fulfillment (Hoàn thành nhiệm vụ)\n                        </div>\n                        <p class=\"examiner-item-desc\">Đầy đủ 3 nhiệm vụ: xin lỗi chân thành, giải thích nguyên nhân khẩn cấp và đã đọc xong sách, chốt thời gian & địa điểm gặp mặt cụ thể để trả sách kèm đền bù.</p>\n                    </div>\n                    <div class=\"examiner-item\">\n                        <div class=\"examiner-item-title\" style=\"color: #059669;\">\n                            <i class=\"fa-solid fa-link\"></i> 2. Coherence & Cohesion (Mạch lạc & Liên kết)\n                        </div>\n                        <p class=\"examiner-item-desc\">Mạch văn diễn tiến hợp lý: First of all, Consequently, Fortunately, Besides returning the book, I would be delighted to.</p>\n                    </div>\n                    <div class=\"examiner-item\">\n                        <div class=\"examiner-item-title\" style=\"color: #d97706;\">\n                            <i class=\"fa-solid fa-book-bookmark\"></i> 3. Lexical Resource (Vốn từ vựng B2)\n                        </div>\n                        <p class=\"examiner-item-desc\">Cụm từ cảm xúc & sự cố phong phú: failing to return, unexpected family emergency, occupied with personal matters, exceptionally insightful, small token of my apology.</p>\n                    </div>\n                    <div class=\"examiner-item\">\n                        <div class=\"examiner-item-title\" style=\"color: #dc2626;\">\n                            <i class=\"fa-solid fa-pen-ruler\"></i> 4. Grammatical Range (Ngữ pháp đa dạng)\n                        </div>\n                        <p class=\"examiner-item-desc\">Cấu trúc thì quá khứ hoàn thành và hiện tại hoàn thành, cấu trúc đề nghị: Let me make it up to you by + Ving, would love to meet, would be delighted to treat.</p>\n                    </div>\n                </div>\n            </div>\n        "
    },
    {
        "id": "application",
        "icon": "fa-briefcase",
        "titleEn": "Letter of Application",
        "titleVi": "Thư Ứng Tuyển – Xin Việc",
        "basicInfo": "\n            <div class=\"content-block\">\n                <h3>Mục đích (Purpose)</h3>\n                <p>Viết thư xin việc để ứng tuyển vào một vị trí công việc hoặc tham gia một chương trình, khóa học, nêu bật năng lực và sự phù hợp của bản thân.</p>\n            </div>\n            <div class=\"content-block\">\n                <h3>Phong cách thư (Style)</h3>\n                <p>Luôn là thư trang trọng (Formal Letter).</p>\n            </div>\n            <div class=\"content-block\">\n                <h3>Văn phong (Tone)</h3>\n                <p>Tự tin, chuyên nghiệp, lịch sự và mang tính thuyết phục cao.</p>\n            </div>\n        ",
        "identifyingSigns": "\n            <div class=\"content-block\">\n                <h3>Các từ khóa thường xuất hiện trong đề bài:</h3>\n                <ul>\n                    <li>apply for the position of … (ứng tuyển vào vị trí...)</li>\n                    <li>apply for the job of … (ứng tuyển công việc...)</li>\n                    <li>write a letter of application (viết một lá thư xin việc)</li>\n                    <li>respond to a job advertisement (phản hồi một quảng cáo tuyển dụng)</li>\n                    <li>apply for a part-time/full-time job (ứng tuyển công việc bán thời gian/toàn thời gian)</li>\n                </ul>\n            </div>\n        ",
        "detailedOutline": "\n            <div class=\"outline-note\">\n                <p><strong>LƯU Ý:</strong> Thư ứng tuyển thường gặp nhất là thư xin việc và luôn là thư trang trọng.</p>\n            </div>\n            <div class=\"outline-step\">\n                <h4>1. Lời chào mở đầu</h4>\n                <p>- Trang trọng: ↳ <span class=\"outline-phrase\">Dear Sir/Madam,</span> (hoặc <span class=\"outline-phrase\">Dear Sir,</span> / <span class=\"outline-phrase\">Dear Madam,</span>)</p>\n            </div>\n            <div class=\"outline-step\">\n                <h4>2. Mở thư</h4>\n                <p>↳ <span class=\"outline-phrase\">I am writing to apply for the position of [vị trí công việc], which was advertised on/in [nguồn tuyển dụng].</span></p>\n            </div>\n            <div class=\"outline-step\">\n                <h4>3. Thân thư</h4>\n                <p>Lần lượt trình bày lý do có hứng thú với vị trí công việc này, đề cập trình độ học vấn và năng lực chuyên môn, kinh nghiệm làm việc đã có, sau đó nêu lý do mình là ứng cử viên phù hợp cho vị trí này.</p>\n                <div class=\"outline-structures\">\n                    <h5>LÝ DO CÓ HỨNG THÚ VỚI VỊ TRÍ CÔNG VIỆC NÀY:</h5>\n                    <p>↳ <span class=\"outline-phrase\">I am particularly interested in this position because it closely matches my interests and career goals. In addition, I have a strong interest in [hoạt động liên quan đến công việc], which motivates me to apply for this role. Therefore, I believe this job will give me a valuable opportunity to apply my knowledge and gain practical experience.</span></p>\n                    <h5>KINH NGHIỆM LÀM VIỆC ĐÃ CÓ:</h5>\n                    <p>↳ <span class=\"outline-phrase\">I worked part-time as a [vị trí công việc] at [nơi làm việc]. In this role, I was responsible for [nhiệm vụ]. This experience allowed me to develop important soft skills such as [kỹ năng mềm 1] and [kỹ năng mềm 2]. It also gave me valuable hands-on experience and strengthened my ability to handle tasks efficiently.</span></p>\n                    <h5>KHẲNG ĐỊNH LÀ ỨNG CỬ VIÊN PHÙ HỢP:</h5>\n                    <p>↳ <span class=\"outline-phrase\">I believe I would be a suitable candidate for this position because I am [đặc điểm tính cách]. Moreover, I am eager to learn and can adapt quickly to new environments. I am confident that I can make a positive contribution to your organization and perform my duties effectively.</span></p>\n                </div>\n            </div>\n            <div class=\"outline-step\">\n                <h4>4. Kết thư</h4>\n                <p>↳ <span class=\"outline-phrase\">I would be grateful if you could consider my application. I am available for an interview at your convenience and look forward to hearing from you soon.</span></p>\n            </div>\n            <div class=\"outline-step\">\n                <h4>5. Lời chào kết thúc</h4>\n                <p>↳ <span class=\"outline-phrase\">Yours faithfully,</span></p>\n            </div>\n        ",
        "practicePrompt": "You saw a job advertisement for a sales assistant at a clothing store in your city. Write an email to apply for the job. In your email, you should: Introduce yourself and your current situation, Say why you are interested in the position, Mention any experience you have working with customers. You should write at least 120 words. Do not include your name or address.",
        "sampleWriting": "\n            <div class=\"sample-prompt-container\">\n                <div class=\"sample-prompt-header\">\n                    <i class=\"fa-solid fa-file-circle-question\"></i> ĐỀ BÀI (TOPIC PROMPT)\n                </div>\n                <div class=\"sample-prompt-text\">\n                    <p>You saw a job advertisement for a sales assistant at a clothing store in your city. Write an email to apply for the job. In your email, you should:</p>\n                    <ul>\n                        <li>Introduce yourself and your current situation</li>\n                        <li>Say why you are interested in the position</li>\n                        <li>Mention any experience you have working with customers</li>\n                    </ul>\n                    <p style=\"margin-top: 10px; font-weight: bold; color: var(--primary-color);\">You should write at least 120 words. Do not include your name or address.</p>\n                </div>\n                <div class=\"prompt-analysis-box\">\n                    <h4><i class=\"fa-solid fa-magnifying-glass-chart\"></i> PHÂN TÍCH ĐỀ BÀI (PROMPT ANALYSIS)</h4>\n                    <div class=\"analysis-grid\">\n                        <div><strong>Người nhận:</strong> Bộ phận Tuyển dụng cửa hàng thời trang (Hiring Manager)</div>\n                        <div><strong>Mục đích:</strong> Ứng tuyển vào vị trí Nhân viên Bán hàng (Sales Assistant)</div>\n                        <div><strong>Phong cách / Văn phong:</strong> Trang trọng (Formal), đĩnh đạc, tự tin, chuyên nghiệp</div>\n                        <div><strong>Yêu cầu cốt lõi:</strong> Giới thiệu bản thân & tình trạng hiện tại, lý do đam mê vị trí, kinh nghiệm phục vụ khách hàng và kỹ năng</div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"sample-interactive-wrapper\">\n                <div class=\"sample-view-controls\">\n                    <button class=\"sample-view-btn active\" onclick=\"switchSampleView('bilingual', this)\"><i class=\"fa-solid fa-table-columns\"></i> Song ngữ đối chiếu</button>\n                    <button class=\"sample-view-btn\" onclick=\"switchSampleView('clean', this)\"><i class=\"fa-solid fa-file-lines\"></i> Bài hoàn chỉnh</button>\n                    <button class=\"sample-view-btn\" onclick=\"switchSampleView('highlight', this)\"><i class=\"fa-solid fa-highlighter\"></i> Highlight ngữ pháp</button>\n                </div>\n\n                <div class=\"sample-audio-bar\">\n                    <div class=\"audio-controls-left\">\n                        <button class=\"sample-audio-btn play-btn\" onclick=\"playCurrentSampleLetter()\"><i class=\"fa-solid fa-circle-play\"></i> Nghe bài mẫu</button>\n                        <button class=\"sample-audio-btn stop-btn\" onclick=\"stopSampleAudio()\"><i class=\"fa-solid fa-circle-stop\"></i> Dừng</button>\n                        <div class=\"audio-speed-group\">\n                            <span>Tốc độ:</span>\n                            <button class=\"speed-btn active\" onclick=\"updateSampleAudioSpeed(1.0, this)\">1.0x</button>\n                            <button class=\"speed-btn\" onclick=\"updateSampleAudioSpeed(0.8, this)\">0.8x</button>\n                            <button class=\"speed-btn\" onclick=\"updateSampleAudioSpeed(1.2, this)\">1.2x</button>\n                        </div>\n                    </div>\n                    <div class=\"audio-status-text\" id=\"audioStatusText\">Sẵn sàng phát âm thanh</div>\n                </div>\n\n                <!-- Clean View -->\n                <div class=\"sample-clean-view hidden\" id=\"sampleCleanView\">\n                    <div class=\"clean-letter-paper\">\n                        <p>Dear Sir/Madam,</p>\n                        <p>I am writing to apply for the position of Sales Assistant, which was advertised in the local newspaper. Currently, I am a second-year university student majoring in Business Administration, seeking a dynamic working environment to improve my interpersonal skills.</p>\n                        <p>I am particularly interested in this position because it closely matches my interests and career goals. In addition, I have a strong interest in fashion and retail services, which motivates me to apply for this role. Therefore, I believe this job will give me a valuable opportunity to apply my knowledge and gain practical experience.</p>\n                        <p>Regarding my background, I worked part-time as a shop assistant at a local bookstore for six months. In this role, I was responsible for welcoming shoppers, advising them on book selections, and handling cashier transactions. This experience allowed me to develop important soft skills such as effective communication and problem-solving. It also gave me valuable hands-on experience and strengthened my ability to handle tasks efficiently under pressure.</p>\n                        <p>I believe I would be a suitable candidate for this position because I am enthusiastic, honest, and reliable. Moreover, I am eager to learn and can adapt quickly to new environments. I am confident that I can make a positive contribution to your organization and perform my duties effectively.</p>\n                        <p>I would be grateful if you could consider my application. I am available for an interview at your convenience and look forward to hearing from you soon.</p>\n                        <p>Yours faithfully,</p>\n                    </div>\n                </div>\n\n                <!-- Highlight View -->\n                <div class=\"sample-highlight-view hidden\" id=\"sampleHighlightView\">\n                    <div class=\"highlight-legend\">\n                        <span class=\"legend-chip topic-chip\"><i class=\"fa-solid fa-square\"></i> Mở/Kết thư</span>\n                        <span class=\"legend-chip connector-chip\"><i class=\"fa-solid fa-square\"></i> Từ nối liên kết</span>\n                        <span class=\"legend-chip vocab-chip\"><i class=\"fa-solid fa-square\"></i> Từ vựng B2</span>\n                        <span class=\"legend-chip grammar-chip\"><i class=\"fa-solid fa-square\"></i> Cấu trúc ngữ pháp</span>\n                    </div>\n                    <div class=\"clean-letter-paper\">\n                        <p><span class=\"hl-topic\">Dear Sir/Madam,</span></p>\n                        <p><span class=\"hl-topic\">I am writing to apply for the position of Sales Assistant, which was advertised in the local newspaper. Currently, I am a second-year university student majoring in Business Administration, seeking a dynamic working environment to improve my interpersonal skills.</span></p>\n                        <p><span class=\"hl-grammar\">I am particularly interested in this position because</span> it <span class=\"hl-vocab\">closely matches my interests and career goals</span>. <span class=\"hl-connector\">In addition,</span> I have a <span class=\"hl-vocab\">strong interest in</span> fashion and retail services, <span class=\"hl-grammar\">which motivates me to apply for this role</span>. <span class=\"hl-connector\">Therefore,</span> I believe this job will give me a <span class=\"hl-vocab\">valuable opportunity</span> to apply my knowledge and <span class=\"hl-vocab\">gain practical experience</span>.</p>\n                        <p><span class=\"hl-connector\">Regarding my background,</span> I <span class=\"hl-grammar\">worked part-time as a shop assistant</span> at a local bookstore for six months. In this role, <span class=\"hl-grammar\">I was responsible for</span> welcoming shoppers, advising them on book selections, and handling cashier transactions. <span class=\"hl-grammar\">This experience allowed me to develop</span> important <span class=\"hl-vocab\">soft skills</span> such as effective communication and problem-solving. It also gave me valuable <span class=\"hl-vocab\">hands-on experience</span> and strengthened my ability to <span class=\"hl-vocab\">handle tasks efficiently</span> under pressure.</p>\n                        <p><span class=\"hl-grammar\">I believe I would be a suitable candidate for this position because</span> I am <span class=\"hl-vocab\">enthusiastic, honest, and reliable</span>. <span class=\"hl-connector\">Moreover,</span> I am <span class=\"hl-vocab\">eager to learn</span> and can <span class=\"hl-vocab\">adapt quickly to new environments</span>. I am confident that I can <span class=\"hl-vocab\">make a positive contribution</span> to your organization and perform my duties effectively.</p>\n                        <p><span class=\"hl-topic\">I would be grateful if you could consider my application. I am available for an interview at your convenience and look forward to hearing from you soon.</span></p>\n                        <p><span class=\"hl-topic\">Yours faithfully,</span></p>\n                    </div>\n                </div>\n\n                <!-- Bilingual View -->\n                <div class=\"sample-bilingual-view\" id=\"sampleBilingualView\">\n                    <div class=\"bilingual-container\">\n                        <div class=\"bilingual-row\">\n                            <div class=\"bilingual-col-en\">\n                                <div class=\"bilingual-header-tag\"><span>LỜI CHÀO</span><button class=\"sample-section-btn-audio\" onclick=\"speakText('Dear Sir/Madam,')\"><i class=\"fa-solid fa-volume-high\"></i></button></div>\n                                Dear Sir/Madam,\n                            </div>\n                            <div class=\"bilingual-col-vi\">\n                                <div class=\"bilingual-header-tag\"><span>TIẾNG VIỆT</span></div>\n                                Kính gửi Ban Giám đốc / Phòng Tuyển dụng,\n                            </div>\n                        </div>\n                        <div class=\"bilingual-row\">\n                            <div class=\"bilingual-col-en\">\n                                <div class=\"bilingual-header-tag\"><span>MỞ THƯ</span><button class=\"sample-section-btn-audio\" onclick=\"speakText('I am writing to apply for the position of Sales Assistant, which was advertised in the local newspaper. Currently, I am a second-year university student majoring in Business Administration, seeking a dynamic working environment to improve my interpersonal skills.')\"><i class=\"fa-solid fa-volume-high\"></i></button></div>\n                                I am writing to apply for the position of Sales Assistant, which was advertised in the local newspaper. Currently, I am a second-year university student majoring in Business Administration, seeking a dynamic working environment to improve my interpersonal skills.\n                            </div>\n                            <div class=\"bilingual-col-vi\">\n                                <div class=\"bilingual-header-tag\"><span>TIẾNG VIỆT</span></div>\n                                Tôi viết thư này để ứng tuyển vào vị trí Trợ lý Bán hàng, được quảng cáo trên tờ báo địa phương. Hiện tại, tôi là sinh viên năm thứ hai chuyên ngành Quản trị Kinh doanh, đang tìm kiếm một môi trường làm việc năng động để nâng cao kỹ năng giao tiếp của mình.\n                            </div>\n                        </div>\n                        <div class=\"bilingual-row\">\n                            <div class=\"bilingual-col-en\">\n                                <div class=\"bilingual-header-tag\"><span>LÝ DO HỨNG THÚ</span><button class=\"sample-section-btn-audio\" onclick=\"speakText('I am particularly interested in this position because it closely matches my interests and career goals. In addition, I have a strong interest in fashion and retail services, which motivates me to apply for this role. Therefore, I believe this job will give me a valuable opportunity to apply my knowledge and gain practical experience.')\"><i class=\"fa-solid fa-volume-high\"></i></button></div>\n                                I am particularly interested in this position because it closely matches my interests and career goals. In addition, I have a strong interest in fashion and retail services, which motivates me to apply for this role. Therefore, I believe this job will give me a valuable opportunity to apply my knowledge and gain practical experience.\n                            </div>\n                            <div class=\"bilingual-col-vi\">\n                                <div class=\"bilingual-header-tag\"><span>TIẾNG VIỆT</span></div>\n                                Tôi đặc biệt quan tâm đến vị trí này vì nó rất phù hợp với sở thích và mục tiêu nghề nghiệp của tôi. Ngoài ra, tôi có niềm đam mê mạnh mẽ với ngành thời trang và dịch vụ bán lẻ, điều này thúc đẩy tôi ứng tuyển vào vai trò này. Do đó, tôi tin rằng công việc này sẽ cho tôi một cơ hội quý báu để áp dụng kiến thức và tích lũy kinh nghiệm thực tế.\n                            </div>\n                        </div>\n                        <div class=\"bilingual-row\">\n                            <div class=\"bilingual-col-en\">\n                                <div class=\"bilingual-header-tag\"><span>KINH NGHIỆM ĐÃ CÓ</span><button class=\"sample-section-btn-audio\" onclick=\"speakText('Regarding my background, I worked part-time as a shop assistant at a local bookstore for six months. In this role, I was responsible for welcoming shoppers, advising them on book selections, and handling cashier transactions. This experience allowed me to develop important soft skills such as effective communication and problem-solving. It also gave me valuable hands-on experience and strengthened my ability to handle tasks efficiently under pressure.')\"><i class=\"fa-solid fa-volume-high\"></i></button></div>\n                                Regarding my background, I worked part-time as a shop assistant at a local bookstore for six months. In this role, I was responsible for welcoming shoppers, advising them on book selections, and handling cashier transactions. This experience allowed me to develop important soft skills such as effective communication and problem-solving. It also gave me valuable hands-on experience and strengthened my ability to handle tasks efficiently under pressure.\n                            </div>\n                            <div class=\"bilingual-col-vi\">\n                                <div class=\"bilingual-header-tag\"><span>TIẾNG VIỆT</span></div>\n                                Về lý lịch kinh nghiệm của tôi, tôi đã từng làm việc bán thời gian với tư cách nhân viên bán hàng tại một hiệu sách địa phương trong sáu tháng. Trong vai trò này, tôi chịu trách nhiệm đón tiếp khách mua hàng, tư vấn chọn sách và xử lý các giao dịch thu ngân. Kinh nghiệm này cho phép tôi phát triển các kỹ năng mềm quan trọng như giao tiếp hiệu quả và giải quyết vấn đề. Nó cũng mang lại cho tôi kinh nghiệm thực tế quý báu và tăng cường khả năng xử lý công việc hiệu quả dưới áp lực.\n                            </div>\n                        </div>\n                        <div class=\"bilingual-row\">\n                            <div class=\"bilingual-col-en\">\n                                <div class=\"bilingual-header-tag\"><span>KHẲNG ĐỊNH PHÙ HỢP</span><button class=\"sample-section-btn-audio\" onclick=\"speakText('I believe I would be a suitable candidate for this position because I am enthusiastic, honest, and reliable. Moreover, I am eager to learn and can adapt quickly to new environments. I am confident that I can make a positive contribution to your organization and perform my duties effectively.')\"><i class=\"fa-solid fa-volume-high\"></i></button></div>\n                                I believe I would be a suitable candidate for this position because I am enthusiastic, honest, and reliable. Moreover, I am eager to learn and can adapt quickly to new environments. I am confident that I can make a positive contribution to your organization and perform my duties effectively.\n                            </div>\n                            <div class=\"bilingual-col-vi\">\n                                <div class=\"bilingual-header-tag\"><span>TIẾNG VIỆT</span></div>\n                                Tôi tin rằng mình sẽ là một ứng viên phù hợp cho vị trí này vì tôi nhiệt tình, trung thực và đáng tin cậy. Hơn nữa, tôi rất ham học hỏi và có thể thích nghi nhanh chóng với môi trường mới. Tôi tự tin rằng mình có thể đóng góp tích cực cho tổ chức của ông/bà và thực hiện hiệu quả nhiệm vụ của mình.\n                            </div>\n                        </div>\n                        <div class=\"bilingual-row\">\n                            <div class=\"bilingual-col-en\">\n                                <div class=\"bilingual-header-tag\"><span>KẾT THƯ & KÝ TÊN</span><button class=\"sample-section-btn-audio\" onclick=\"speakText('I would be grateful if you could consider my application. I am available for an interview at your convenience and look forward to hearing from you soon. Yours faithfully,')\"><i class=\"fa-solid fa-volume-high\"></i></button></div>\n                                I would be grateful if you could consider my application. I am available for an interview at your convenience and look forward to hearing from you soon.<br><br><strong>Yours faithfully,</strong>\n                            </div>\n                            <div class=\"bilingual-col-vi\">\n                                <div class=\"bilingual-header-tag\"><span>TIẾNG VIỆT</span></div>\n                                Tôi sẽ rất biết ơn nếu ông/bà có thể xem xét hồ sơ ứng tuyển của tôi. Tôi sẵn sàng cho một cuộc phỏng vấn vào thời gian thuận tiện nhất của ông/bà và rất mong sớm nhận được phản hồi.<br><br><strong>Trân trọng,</strong>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"examiner-card\">\n                <div class=\"examiner-header\">\n                    <i class=\"fa-solid fa-award\"></i> BÍ QUYẾT GIÁM KHẢO: PHÂN TÍCH ĐIỂM CAO 4 TIÊU CHÍ VSTEP B2\n                </div>\n                <div class=\"examiner-grid\">\n                    <div class=\"examiner-item\">\n                        <div class=\"examiner-item-title\" style=\"color: #2563eb;\">\n                            <i class=\"fa-solid fa-bullseye\"></i> 1. Task Fulfillment (Hoàn thành nhiệm vụ)\n                        </div>\n                        <p class=\"examiner-item-desc\">Hoàn thành xuất sắc 3 tiêu chí đề: giới thiệu bản thân sinh viên ngành QTKD, giải thích đam mê thời trang bán lẻ, và nêu bật kinh nghiệm thực tế 6 tháng phục vụ khách hàng.</p>\n                    </div>\n                    <div class=\"examiner-item\">\n                        <div class=\"examiner-item-title\" style=\"color: #059669;\">\n                            <i class=\"fa-solid fa-link\"></i> 2. Coherence & Cohesion (Mạch lạc & Liên kết)\n                        </div>\n                        <p class=\"examiner-item-desc\">Bố cục bài xin việc chuẩn mực quốc tế: In addition, Therefore, Regarding my background, In this role, Moreover, I would be grateful if you could.</p>\n                    </div>\n                    <div class=\"examiner-item\">\n                        <div class=\"examiner-item-title\" style=\"color: #d97706;\">\n                            <i class=\"fa-solid fa-book-bookmark\"></i> 3. Lexical Resource (Vốn từ vựng B2)\n                        </div>\n                        <p class=\"examiner-item-desc\">Thuật ngữ tuyển dụng và năng lực vượt trội: dynamic working environment, interpersonal skills, career goals, valuable hands-on experience, handle tasks efficiently under pressure, eager to learn, adapt quickly, make a positive contribution.</p>\n                    </div>\n                    <div class=\"examiner-item\">\n                        <div class=\"examiner-item-title\" style=\"color: #dc2626;\">\n                            <i class=\"fa-solid fa-pen-ruler\"></i> 4. Grammatical Range (Ngữ pháp đa dạng)\n                        </div>\n                        <p class=\"examiner-item-desc\">Mệnh đề phân từ rút gọn (seeking a dynamic...), cấu trúc gián tiếp trang trọng (I would be grateful if you could...), mệnh đề quan hệ không xác định, kết hợp linh hoạt câu chủ động và bị động.</p>\n                    </div>\n                </div>\n            </div>\n        "
    }
];

const recitationQuestions = {
    "advice": [
        {
            "cue": "Viết lời chào mở đầu thân mật: 'Kính gửi [tên của người nhận],'",
            "target": "Dear [tên của người nhận],"
        },
        {
            "cue": "Viết câu mở thư cho lời khuyên: 'Cảm ơn vì đã viết thư cho tớ. Dạo này cậu thế nào? Sau khi đọc thư của cậu, tớ có một vài gợi ý mà cậu có thể cân nhắc.'",
            "target": "Thanks for writing to me. How have you been lately? After reading your letter, I have a few suggestions that you may want to consider."
        },
        {
            "cue": "Viết cấu trúc đưa ra lời khuyên 1: 'Tớ nghĩ cậu nên + Vo.'",
            "target": "I think you should + Vo."
        },
        {
            "cue": "Viết cấu trúc đưa ra lời khuyên 2: 'Cậu có thể muốn + Vo.'",
            "target": "You may want to + Vo."
        },
        {
            "cue": "Viết cấu trúc đưa ra lời khuyên 3: 'Đó sẽ là một ý kiến hay để + Vo.'",
            "target": "It would be a good idea to + Vo."
        },
        {
            "cue": "Viết cấu trúc đưa ra lời khuyên 4: 'Nếu tớ là cậu, tớ sẽ + Vo.'",
            "target": "If I were you, I would + Vo."
        },
        {
            "cue": "Viết cấu trúc đưa ra lời khuyên 5: 'Cậu có thể thử + Ving.'",
            "target": "You could try + Ving."
        },
        {
            "cue": "Viết cấu trúc đưa ra lời khuyên 6: 'Hãy nhớ + Vo. / Đừng quên + Vo.'",
            "target": "Remember to + Vo. / Don’t forget to + Vo."
        },
        {
            "cue": "Viết cấu trúc đưa ra lời khuyên 7 & 8: 'Có lẽ đáng để + Ving. / Cậu có thể cân nhắc + Ving.'",
            "target": "It might be worth + Ving. / You could consider + Ving."
        },
        {
            "cue": "Viết câu kết thư: 'Tớ hy vọng cậu thấy những gợi ý của tớ hữu ích. Cho tớ biết tình hình ra sao nhé. Viết thư lại sớm nhé.'",
            "target": "I hope you find my suggestions helpful. Let me know how things go. Write back soon."
        }
    ],
    "request": [
        {
            "cue": "Viết lời chào mở đầu trang trọng (không biết tên người nhận): 'Kính gửi Ông/Bà,'",
            "target": "Dear Sir/Madam,"
        },
        {
            "cue": "Viết câu mở thư yêu cầu trang trọng: 'Tôi viết thư này để yêu cầu thông tin về [thông tin cần hỏi]. Tôi sẽ rất cảm kích nếu ông/bà có thể trả lời một vài câu hỏi liên quan đến vấn đề này.'",
            "target": "I am writing this letter to request information about [thông tin cần hỏi]. I would appreciate it if you could answer a few questions regarding this matter."
        },
        {
            "cue": "Viết câu mở thư yêu cầu thân mật: 'Dạo này cậu thế nào? Tớ hy vọng mọi chuyện đều ổn. Tớ viết thư để hỏi xin một số thông tin về [thông tin cần hỏi].'",
            "target": "How have you been lately? I hope everything is going well. I’m writing to ask for some information about [thông tin cần hỏi]."
        },
        {
            "cue": "Viết cấu trúc hỏi thông tin 1: 'Ông/bà có thể vui lòng cho tôi biết [thông tin cần hỏi] được không?'",
            "target": "Could you please let me know [thông tin cần hỏi]?"
        },
        {
            "cue": "Viết cấu trúc hỏi thông tin 2: 'Tôi muốn hỏi liệu [thông tin cần hỏi] hay không.'",
            "target": "I would like to ask whether/if [thông tin cần hỏi]."
        },
        {
            "cue": "Viết cấu trúc hỏi thông tin 3: 'Tôi tự hỏi liệu ông/bà có thể cung cấp cho tôi thông tin chi tiết về [thông tin cần hỏi] không.'",
            "target": "I was wondering if you could provide me with details about [thông tin cần hỏi]."
        },
        {
            "cue": "Viết cấu trúc hỏi thông tin 4: 'Ông/bà có thể cũng cho tôi biết về [thông tin cần hỏi] được không?'",
            "target": "Could you also tell me about [thông tin cần hỏi]?"
        },
        {
            "cue": "Viết cấu trúc hỏi thông tin 5: 'Ông/bà có phiền cho tôi biết [thông tin cần hỏi] không?'",
            "target": "Would you mind letting me know [thông tin cần hỏi]?"
        },
        {
            "cue": "Viết cấu trúc hỏi thông tin 6: 'Tôi cũng sẽ rất biết ơn nếu ông/bà có thể làm rõ [thông tin cần hỏi].'",
            "target": "I would also be grateful if you could clarify [thông tin cần hỏi]."
        },
        {
            "cue": "Viết câu kết thư yêu cầu trang trọng: 'Xin cảm ơn trước sự giúp đỡ và thời gian của ông/bà. Tôi rất mong sớm nhận được phản hồi từ ông/bà vào thời điểm thuận tiện nhất.'",
            "target": "Thank you in advance for your time and assistance. I look forward to receiving your response at your earliest convenience."
        }
    ],
    "description": [
        {
            "cue": "Viết lời chào mở đầu thân mật: 'Kính gửi [tên của người nhận],'",
            "target": "Dear [tên của người nhận],"
        },
        {
            "cue": "Viết câu mở thư mô tả thân mật: 'Dạo này cậu thế nào? Tớ hy vọng mọi chuyện đều ổn. Trong thư trước cậu có hỏi tớ về [đối tượng], vì vậy tớ muốn chia sẻ một vài thông tin với cậu.'",
            "target": "How have you been lately? I hope everything is going well. In your letter, you asked me about [đối tượng cần mô tả], so I’d like to share some information with you."
        },
        {
            "cue": "Viết câu mở thư mô tả trang trọng: 'Tôi viết thư này để cung cấp cho ông/bà một bản mô tả chi tiết về [đối tượng], như đã được yêu cầu trong thư trước của ông/bà.'",
            "target": "I am writing to provide you with a detailed description of [đối tượng cần mô tả], as requested in your previous correspondence."
        },
        {
            "cue": "Viết cấu trúc mô tả tổng quan: 'Đầu tiên, [đối tượng] rất [tính từ mô tả tổng quan]. Đặc biệt là, [chi tiết cụ thể].'",
            "target": "To begin with, [đối tượng] is [tính từ mô tả tổng quan]. In particular, [chi tiết cụ thể]."
        },
        {
            "cue": "Viết cấu trúc mô tả điểm nổi bật: 'Ngoài ra, điều làm cho [đối tượng] thực sự nổi bật chính là [đặc điểm nổi bật]. Ví dụ như, [chi tiết minh chứng].'",
            "target": "In addition, what makes [đối tượng] truly stand out is [đặc điểm nổi bật]. For example, [ví dụ/chi tiết minh chứng]."
        },
        {
            "cue": "Viết cấu trúc mô tả ý nghĩa / trải nghiệm: 'Hơn nữa, [đối tượng] mang đến một cơ hội tuyệt vời để [hoạt động]. Theo ý kiến của tớ, [cảm nhận/đánh giá].'",
            "target": "Furthermore, [đối tượng] provides a wonderful opportunity to [hoạt động/ý nghĩa]. In my opinion, [cảm nhận/đánh giá]."
        },
        {
            "cue": "Viết câu kết thư mô tả thân mật: 'Tớ hy vọng điều này mang lại cho cậu một hình dung rõ ràng về [đối tượng]. Hãy cho tớ biết nếu cậu muốn biết thêm chi tiết nhé. Viết thư lại sớm nhé.'",
            "target": "I hope this gives you a clear picture of [đối tượng]. Let me know if you want more details. Write back soon."
        },
        {
            "cue": "Viết câu kết thư mô tả trang trọng: 'Tôi hy vọng thông tin trên hữu ích cho ông/bà. Xin vui lòng liên hệ với tôi nếu ông/bà cần thêm bất kỳ chi tiết nào.'",
            "target": "I hope the above information is useful to you. Please feel free to contact me if you require any further details."
        },
        {
            "cue": "Viết lời chào kết thúc thư thân mật: 'Chúc những điều tốt đẹp nhất,'",
            "target": "Best wishes,"
        },
        {
            "cue": "Viết lời chào kết thúc thư trang trọng: 'Trân trọng,'",
            "target": "Yours faithfully,"
        }
    ],
    "complaint": [
        {
            "cue": "Viết lời chào mở đầu trang trọng: 'Kính gửi Ông/Bà,'",
            "target": "Dear Sir/Madam,"
        },
        {
            "cue": "Viết câu mở thư phàn nàn: 'Tôi viết thư này để bày tỏ sự không hài lòng của mình với [sản phẩm/ dịch vụ/ tình huống]. Gần đây tôi đã sử dụng [cơ sở vật chất/ dịch vụ] của ông/bà, và tôi đã khá thất vọng với trải nghiệm này.'",
            "target": "I am writing to express my dissatisfaction with [sản phẩm/ dịch vụ/ tình huống không hài lòng]. I recently used your [sản phẩm/ dịch vụ/ cơ sở vật chất], and I was quite disappointed with the experience."
        },
        {
            "cue": "Viết cấu trúc dẫn dắt vấn đề chính số 1: 'Vấn đề chính mà tôi muốn nhấn mạnh là [vấn đề 1].'",
            "target": "The main issue that I would like to highlight is [vấn đề 1]."
        },
        {
            "cue": "Viết câu nêu chi tiết và sự bất tiện của vấn đề 1: 'Cụ thể là, [chi tiết vấn đề 1]. Điều này đã gây ra rất nhiều sự bất tiện cho tôi.'",
            "target": "Specifically, [chi tiết vấn đề 1]. This caused a great deal of inconvenience for me."
        },
        {
            "cue": "Viết câu chuyển ý sang vấn đề số 2 trầm trọng hơn: 'Hơn nữa, tồi tệ hơn nữa là, [vấn đề 2].'",
            "target": "Furthermore, to make matters worse, [vấn đề 2]."
        },
        {
            "cue": "Viết câu nhấn mạnh mức độ không thể chấp nhận được: 'Trên thực tế, [chi tiết vấn đề 2]. Điều này hoàn toàn không thể chấp nhận được xét theo danh tiếng của công ty ông/bà.'",
            "target": "In fact, [chi tiết vấn đề 2]. This was completely unacceptable given the reputation of your company."
        },
        {
            "cue": "Viết câu yêu cầu phương án giải quyết: 'Trước những hoàn cảnh này, tôi kỳ vọng ông/bà sẽ [hướng giải quyết].'",
            "target": "Given these circumstances, I expect you to [hướng giải quyết]."
        },
        {
            "cue": "Viết câu kết thư phàn nàn: 'Tôi hy vọng ông/bà sẽ giải quyết vấn đề này kịp thời. Tôi rất mong sớm nhận được phản hồi nhanh chóng và một giải pháp thỏa đáng từ ông/bà.'",
            "target": "I hope you will resolve this issue promptly. I look forward to receiving your prompt reply and a satisfactory solution."
        },
        {
            "cue": "Viết lời chào kết thúc thư trang trọng (không biết tên): 'Trân trọng,'",
            "target": "Yours faithfully,"
        },
        {
            "cue": "Viết lời chào kết thúc thư bán trang trọng (biết họ người nhận): 'Trân trọng,'",
            "target": "Yours sincerely,"
        }
    ],
    "feedback": [
        {
            "cue": "Viết câu mở thư phản hồi - đánh giá: 'Tôi viết thư này để đưa ra phản hồi về [vấn đề cần phản hồi]. Gần đây tôi đã sử dụng [sản phẩm/ dịch vụ/ cơ sở vật chất] của ông/bà và muốn chia sẻ trải nghiệm của mình.'",
            "target": "I am writing to provide feedback on [vấn đề cần phản hồi đánh giá]. I recently used your [sản phẩm/ dịch vụ/ cơ sở vật chất] and would like to share my experience."
        },
        {
            "cue": "Viết câu chuyển ý đánh giá tích cực tổng quan: 'Nhìn chung, tôi thấy [sản phẩm/ dịch vụ] của ông/bà khá thỏa đáng, mặc dù có một số khía cạnh có thể được cải thiện.'",
            "target": "Overall, I found your [sản phẩm/ dịch vụ/ cơ sở vật chất] quite satisfactory, although there are some aspects that could be improved."
        },
        {
            "cue": "Viết cấu trúc khen 1: 'Một khía cạnh tôi đánh giá cao là [điểm khen] bởi vì [lý do].'",
            "target": "One aspect I appreciated was [điểm khen] because [lý do]."
        },
        {
            "cue": "Viết cấu trúc khen 2: 'Chất lượng của [điểm khen] rất xuất sắc, điều này đã làm cho trải nghiệm của tôi thú vị hơn.'",
            "target": "The quality of [điểm khen] was excellent, which made my experience more enjoyable."
        },
        {
            "cue": "Viết câu chuyển ý sang các điểm cần cải thiện (chê): 'Tuy nhiên, cũng có một vài phương diện cần cải thiện.'",
            "target": "However, there were also several areas that required improvement."
        },
        {
            "cue": "Viết cấu trúc chê 1: 'Một vấn đề tôi gặp phải là [điểm chê] bởi vì [lý do].'",
            "target": "One issue that I encountered was [điểm chê] because [lý do]."
        },
        {
            "cue": "Viết cấu trúc chê 2: 'Chất lượng của [điểm chê] không tốt như tôi mong đợi, điều này đã không đáp ứng được kỳ vọng của tôi.'",
            "target": "The quality of [điểm chê] was not as good as I expected, which did not meet my expectations."
        },
        {
            "cue": "Viết câu dẫn dắt đề xuất giải pháp cải tiến: 'Để nâng cao chất lượng [sản phẩm/ dịch vụ] của ông/bà, tôi có một vài đề xuất.'",
            "target": "To enhance the quality of your [sản phẩm/ dịch vụ/ cơ sở vật chất], I have a few suggestions."
        },
        {
            "cue": "Viết cấu trúc đề xuất giải pháp: 'Tôi đề nghị rằng ông/bà [hành động - Vo]. / Sẽ tốt hơn nếu ông/bà có thể [hành động - Vo].'",
            "target": "I suggest that you [hành động – Vo]. / It would be better if you could [hành động – Vo]."
        },
        {
            "cue": "Viết câu kết thư phản hồi: 'Tôi hy vọng phản hồi của tôi sẽ hữu ích trong việc cải thiện [sản phẩm/ dịch vụ] của ông/bà. Xin vui lòng liên hệ với tôi nếu ông/bà có bất kỳ câu hỏi nào khác.'",
            "target": "I hope my feedback will be useful in improving your [sản phẩm/ dịch vụ/ cơ sở vật chất]. Please feel free to contact me if you have any further questions."
        }
    ],
    "apology": [
        {
            "cue": "Viết câu mở thư xin lỗi thân mật: 'Tớ thực sự xin lỗi vì [lỗi lầm]. Tớ cảm thấy rất tệ về những gì đã xảy ra, và tớ muốn giải thích tình huống này rõ ràng hơn.'",
            "target": "I’m really sorry for [lỗi lầm - Ving/N]. I feel terrible about what happened, and I’d like to explain the situation more clearly."
        },
        {
            "cue": "Viết câu mở thư xin lỗi trang trọng: 'Tôi viết thư này để chân thành xin lỗi vì [lỗi lầm]. Tôi vô cùng lấy làm tiếc về bất kỳ sự bất tiện hoặc phiền toái nào mà tình huống này có thể đã gây ra cho ông/bà.'",
            "target": "I am writing to sincerely apologize for [lỗi lầm - Ving/N]. I deeply regret any inconvenience or distress that this situation may have caused you."
        },
        {
            "cue": "Viết câu dẫn dắt lý do: 'Trước hết, đây là lý do cho việc này.'",
            "target": "First of all, here is the reason for this."
        },
        {
            "cue": "Viết cấu trúc giải thích lý do 1: 'Lý do tại sao tôi không thể [hành động - Vo] là vì [lý do].'",
            "target": "The reason why I could not [hành động – V0] is that [lý do]."
        },
        {
            "cue": "Viết cấu trúc giải thích lý do 2: 'Thật không may, tôi đã không thể [hành động - Vo] vì [lý do].'",
            "target": "Unfortunately, I could not [hành động – V0] because [lý do]."
        },
        {
            "cue": "Viết cấu trúc nêu hành động bù đắp thân mật: 'Hãy để tớ đền bù cho cậu bằng cách [hành động - Ving], và tớ sẽ đảm bảo điều này không xảy ra nữa.'",
            "target": "Let me make it up to you by [hành động – Ving], and I’ll make sure this does not happen again."
        },
        {
            "cue": "Viết cấu trúc nêu hành động bù đắp trang trọng: 'Để bù đắp cho sai sót của mình, tôi muốn [hành động - Vo]. Tôi sẽ đảm bảo điều này không tái diễn.'",
            "target": "To make up for my mistake, I would like to [hành động – V0]. I will ensure that this does not happen again."
        },
        {
            "cue": "Viết câu kết thư xin lỗi thân mật: 'Một lần nữa tớ thực sự xin lỗi. Tớ rất trân trọng sự thông cảm của cậu. Viết thư lại sớm nhé.'",
            "target": "I’m really sorry once again. I truly appreciate your understanding. Write back soon."
        },
        {
            "cue": "Viết câu kết thư xin lỗi trang trọng: 'Tôi muốn chân thành xin lỗi một lần nữa vì sự bất tiện này. Cảm ơn sự thông cảm của ông/bà. Tôi rất mong sớm nhận được phản hồi từ ông/bà.'",
            "target": "I would like to sincerely apologize once again for the inconvenience. Thank you for your understanding. I look forward to receiving your reply soon."
        },
        {
            "cue": "Viết lời chào kết thúc thư thân mật: 'Chúc những điều tốt đẹp nhất,'",
            "target": "Best wishes,"
        }
    ],
    "application": [
        {
            "cue": "Viết lời chào mở đầu trang trọng: 'Kính gửi Ông/Bà,'",
            "target": "Dear Sir/Madam,"
        },
        {
            "cue": "Viết câu mở thư ứng tuyển: 'Tôi viết thư này để ứng tuyển vào vị trí [vị trí công việc], được quảng cáo trên [nguồn tuyển dụng].'",
            "target": "I am writing to apply for the position of [vị trí công việc], which was advertised on/in [nguồn tuyển dụng]."
        },
        {
            "cue": "Viết cấu trúc trình bày lý do hứng thú với công việc 1: 'Tôi đặc biệt quan tâm đến vị trí này vì nó rất phù hợp với sở thích và mục tiêu nghề nghiệp của tôi.'",
            "target": "I am particularly interested in this position because it closely matches my interests and career goals."
        },
        {
            "cue": "Viết cấu trúc trình bày lý do hứng thú 2: 'Do đó, tôi tin rằng công việc này sẽ cho tôi một cơ hội quý báu để áp dụng kiến thức của mình và tích lũy kinh nghiệm thực tế.'",
            "target": "Therefore, I believe this job will give me a valuable opportunity to apply my knowledge and gain practical experience."
        },
        {
            "cue": "Viết cấu trúc trình bày kinh nghiệm làm việc đã có: 'Tôi đã từng làm việc bán thời gian với tư cách là [vị trí công việc] tại [nơi làm việc]. Trong vai trò này, tôi chịu trách nhiệm về [nhiệm vụ].'",
            "target": "I worked part-time as a [vị trí công việc] at [nơi làm việc]. In this role, I was responsible for [nhiệm vụ]."
        },
        {
            "cue": "Viết cấu trúc nêu các kỹ năng mềm đã phát triển: 'Kinh nghiệm này cho phép tôi phát triển các kỹ năng mềm quan trọng như [kỹ năng 1] và [kỹ năng 2].'",
            "target": "This experience allowed me to develop important soft skills such as [kỹ năng mềm 1] and [kỹ năng mềm 2]."
        },
        {
            "cue": "Viết cấu trúc khẳng định bản thân là ứng cử viên phù hợp: 'Tôi tin rằng mình sẽ là một ứng viên phù hợp cho vị trí này vì tôi là người [đặc điểm tính cách].'",
            "target": "I believe I would be a suitable candidate for this position because I am [đặc điểm tính cách]."
        },
        {
            "cue": "Viết cấu trúc nêu tinh thần học hỏi và thích nghi: 'Hơn nữa, tôi rất ham học hỏi và có thể thích nghi nhanh chóng với môi trường mới.'",
            "target": "Moreover, I am eager to learn and can adapt quickly to new environments."
        },
        {
            "cue": "Viết cấu trúc tự tin đóng góp tích cực: 'Tôi tự tin rằng mình có thể đóng góp tích cực cho tổ chức của ông/bà và thực hiện hiệu quả nhiệm vụ của mình.'",
            "target": "I am confident that I can make a positive contribution to your organization and perform my duties effectively."
        },
        {
            "cue": "Viết câu kết thư ứng tuyển trang trọng: 'Tôi sẽ rất biết ơn nếu ông/bà có thể xem xét hồ sơ ứng tuyển của tôi. Tôi sẵn sàng cho một cuộc phỏng vấn vào thời điểm thuận tiện cho ông/bà và rất mong sớm nhận được phản hồi.'",
            "target": "I would be grateful if you could consider my application. I am available for an interview at your convenience and look forward to hearing from you soon."
        }
    ]
};

const extraPracticeData = {
    "advice": {
        "title": "DẠNG 01: LETTER OF ADVICE (THƯ CHO LỜI KHUYÊN - B2 LEVEL)",
        "prompt": "You have received a letter from your friend, David. He is preparing to study abroad in England next semester but feels overwhelmed with the preparations. Write a letter to give him some suggestions. In your letter, you should suggest: how to improve English communication skills before departure, how to budget and manage living expenses, how to adapt to cultural differences, and how to maintain mental wellbeing. You should write at least 120 words. Do not include your name or address.",
        "analysis": {
            "recipient": "David (Bạn bè)",
            "purpose": "Đưa ra lời khuyên và kinh nghiệm chuẩn bị du học Anh Quốc",
            "style": "Thân mật (Informal Letter)",
            "requirements": "Kỹ năng tiếng Anh, quản lý chi tiêu, thích nghi văn hóa, chăm sóc sức khỏe tinh thần"
        },
        "hints": [
            {
                "title": "1. Lời chào & Mở thư",
                "type": "standard",
                "items": [
                    {
                        "en": "Dear David, Thanks for writing to me. How have you been lately? After reading your letter, I have a few suggestions that you may want to consider for your upcoming study journey in England.",
                        "vi": "David thân mến, cảm ơn vì đã viết thư cho tớ. Sau khi đọc thư của cậu, tớ có một vài gợi ý mà cậu có thể cân nhắc cho hành trình du học sắp tới.",
                        "reasonEn": "Establishes warm informal tone and clear purpose.",
                        "reasonVi": "Thiết lập văn phong thân mật và mục đích rõ ràng."
                    }
                ]
            },
            {
                "title": "2. Gợi ý 1: Nâng cao kỹ năng tiếng Anh (English Communication)",
                "type": "standard",
                "items": [
                    {
                        "en": "To begin with, you could consider practicing daily with native speakers through language exchange apps or listening to British podcasts. This will significantly boost your conversational confidence.",
                        "vi": "Đầu tiên, cậu có thể cân nhắc luyện tập hàng ngày với người bản xứ qua các ứng dụng trao đổi ngôn ngữ hoặc nghe podcast tiếng Anh.",
                        "reasonEn": "B2 Structure: you could consider + Ving, boost conversational confidence.",
                        "reasonVi": "Dùng cấu trúc consider + Ving và từ vựng B2."
                    }
                ]
            },
            {
                "title": "3. Gợi ý 2: Quản lý chi tiêu (Budgeting & Expenses)",
                "type": "standard",
                "items": [
                    {
                        "en": "Secondly, it would be a good idea to cook your own meals and take advantage of student discounts on public transportation to keep your living expenses within budget.",
                        "vi": "Thứ hai, sẽ là một ý kiến hay nếu tự nấu ăn và tận dụng giảm giá sinh viên khi đi lại để kiểm soát chi tiêu.",
                        "reasonEn": "B2 Structure: it would be a good idea to + Vo, take advantage of.",
                        "reasonVi": "Cấu trúc khuyên trang nhã và collocation take advantage of."
                    }
                ]
            },
            {
                "title": "4. Gợi ý 3: Thích nghi văn hóa & Sức khỏe tinh thần",
                "type": "standard",
                "items": [
                    {
                        "en": "Finally, if I were you, I would actively join international student clubs to make new friends and overcome culture shock. Remember to maintain regular exercise to keep your mind sharp.",
                        "vi": "Cuối cùng, nếu tớ là cậu, tớ sẽ tích cực tham gia các câu lạc bộ sinh viên quốc tế để kết bạn mới và vượt qua sốc văn hóa.",
                        "reasonEn": "Condition 2: If I were you, I would. Lexicon: overcome culture shock, mental wellbeing.",
                        "reasonVi": "Câu điều kiện loại 2 và từ vựng B2."
                    }
                ]
            },
            {
                "title": "5. Kết thư & Lời chúc",
                "type": "standard",
                "items": [
                    {
                        "en": "I hope you find my suggestions helpful. Let me know how things go. Write back soon. Best wishes,",
                        "vi": "Tớ hy vọng cậu thấy các gợi ý của tớ hữu ích. Cho tớ biết tình hình nhé. Chúc những điều tốt đẹp nhất,",
                        "reasonEn": "Standard warm sign-off.",
                        "reasonVi": "Kết thư chuẩn thân mật."
                    }
                ]
            }
        ],
        "sampleModel": "Dear David,\nThanks for writing to me. How have you been lately? After reading your letter, I have a few suggestions that you may want to consider for your upcoming study journey in England.\nTo begin with, you could consider practicing daily with native speakers through language exchange platforms or tuning in to British news podcasts. This will significantly sharpen your listening comprehension and boost your conversational confidence before departure. Secondly, it would be a good idea to cook meals at home and take full advantage of student discount cards on transportation and groceries, which helps keep living expenses manageable. Next, if I were you, I would actively participate in student societies and university orientation clubs. Engaging with diverse peers will allow you to adapt smoothly to the local culture and overcome homesickness. Finally, remember to maintain a healthy work-life balance and get sufficient sleep, as staying mentally resilient is crucial during your initial weeks.\nI hope you find my suggestions helpful. Let me know how things go. Write back soon.\nBest wishes,",
        "sampleModelVi": "David thân mến,\nCảm ơn bạn đã viết thư cho mình. Dạo này bạn khỏe không? Sau khi đọc thư của bạn, mình có một vài gợi ý mà bạn có thể cân nhắc cho chuyến du học sắp tới tại Anh.\nTrước hết, bạn có thể cân nhắc luyện tập hàng ngày với người bản xứ qua các nền tảng trao đổi ngôn ngữ hoặc nghe các kênh podcast tin tức của Anh. Điều này sẽ nâng cao đáng kể khả năng nghe hiểu và gia tăng sự tự tin khi giao tiếp của bạn trước ngày khởi hành. Thứ hai, bạn nên tự nấu ăn tại nhà và tận dụng tối đa thẻ giảm giá sinh viên khi đi lại và mua sắm thực phẩm, giúp chi phí sinh hoạt nằm trong tầm kiểm soát. Tiếp theo, nếu mình là bạn, mình sẽ tích cực tham gia các hội nhóm sinh viên và câu lạc bộ định hướng của trường đại học. Giao lưu với bạn bè đa dạng sẽ giúp bạn thích nghi suôn sẻ với văn hóa bản địa và vượt qua nỗi nhớ nhà. Cuối cùng, hãy nhớ duy trì sự cân bằng giữa học tập - cuộc sống và ngủ đủ giấc, bởi việc giữ tinh thần vững vàng là vô cùng quan trọng trong những tuần đầu tiên.\nMình hy vọng bạn thấy những lời khuyên này hữu ích. Hãy cho mình biết tình hình thế nào nhé. Viết thư lại cho mình sớm!\nChúc bạn mọi điều tốt đẹp nhất,",
        "sampleSolution": "Dear David,\nThanks for writing to me. How have you been lately? After reading your letter, I have a few suggestions that you may want to consider for your upcoming study journey in England.\nTo begin with, you could consider practicing daily with native speakers through language exchange platforms or tuning in to British news podcasts. This will significantly sharpen your listening comprehension and boost your conversational confidence before departure. Secondly, it would be a good idea to cook meals at home and take full advantage of student discount cards on transportation and groceries, which helps keep living expenses manageable. Next, if I were you, I would actively participate in student societies and university orientation clubs. Engaging with diverse peers will allow you to adapt smoothly to the local culture and overcome homesickness. Finally, remember to maintain a healthy work-life balance and get sufficient sleep, as staying mentally resilient is crucial during your initial weeks.\nI hope you find my suggestions helpful. Let me know how things go. Write back soon.\nBest wishes,"
    },
    "request": {
        "title": "DẠNG 02: LETTER OF REQUEST (THƯ YÊU CẦU - B2 LEVEL)",
        "prompt": "You are interested in attending a professional Data Analytics certificate course advertised by an international academy. Write a letter of request to the admissions coordinator. In your letter, you should ask about: the prerequisite qualifications, the course schedule and online learning options, the practical project opportunities, and whether career counseling services are provided. You should write at least 120 words. Do not include your name or address.",
        "analysis": {
            "recipient": "Admissions Coordinator (Điều phối viên tuyển sinh)",
            "purpose": "Hỏi thông tin chi tiết về khóa học chứng chỉ Phân tích Dữ liệu",
            "style": "Trang trọng (Formal Letter)",
            "requirements": "Điều kiện đầu vào, thời khóa biểu và học trực tuyến, dự án thực tế, dịch vụ tư vấn việc làm"
        },
        "hints": [
            {
                "title": "1. Lời chào & Mở thư",
                "type": "standard",
                "items": [
                    {
                        "en": "Dear Admissions Coordinator, I am writing this letter to request comprehensive information regarding the upcoming Data Analytics Certificate Course advertised on your website. I would appreciate it if you could answer several questions.",
                        "vi": "Kính gửi Điều phối viên tuyển sinh, tôi viết thư này để xin thông tin toàn diện về khóa học Phân tích Dữ liệu.",
                        "reasonEn": "Formal opening and clear inquiry purpose.",
                        "reasonVi": "Mở thư trang trọng và xác định mục đích rõ ràng."
                    }
                ]
            },
            {
                "title": "2. Câu hỏi 1: Điều kiện đầu vào & Lịch học",
                "type": "standard",
                "items": [
                    {
                        "en": "To begin with, could you please let me know whether there are specific prerequisite programming skills required for applicants, and what the exact weekly class schedule looks like?",
                        "vi": "Trước hết, xin vui lòng cho tôi biết liệu có yêu cầu kỹ năng lập trình tiên quyết nào không và lịch học cụ thể hàng tuần ra sao.",
                        "reasonEn": "Indirect question: could you please let me know whether...",
                        "reasonVi": "Câu hỏi gián tiếp lịch sự chuẩn B2."
                    }
                ]
            },
            {
                "title": "3. Câu hỏi 2: Dự án thực tế & Hỗ trợ nghề nghiệp",
                "type": "standard",
                "items": [
                    {
                        "en": "In addition, I was wondering if students will have the opportunity to work on real-world industry capstone projects. Furthermore, I would also be grateful if you could clarify what career counseling and internship placement assistance are offered.",
                        "vi": "Hơn nữa, tôi tự hỏi liệu học viên có cơ hội làm các dự án thực tế không và trung tâm có hỗ trợ kết nối việc làm/thực tập không.",
                        "reasonEn": "B2 Structures: I was wondering if..., I would also be grateful if you could clarify...",
                        "reasonVi": "Hai mẫu câu hỏi gián tiếp cao cấp."
                    }
                ]
            },
            {
                "title": "4. Kết thư trang trọng",
                "type": "standard",
                "items": [
                    {
                        "en": "Thank you in advance for your time and assistance. I look forward to receiving your response at your earliest convenience. Yours faithfully,",
                        "vi": "Xin cảm ơn trước thời gian và sự giúp đỡ của ông/bà. Rất mong sớm nhận được phản hồi. Trân trọng,",
                        "reasonEn": "Standard formal sign-off.",
                        "reasonVi": "Kết thúc thư trang trọng chuẩn mực."
                    }
                ]
            }
        ],
        "sampleModel": "Dear Admissions Coordinator,\nI am writing this letter to request detailed information regarding the professional Data Analytics Certificate Course advertised on your official website. As I am planning to enroll next month to accelerate my technical skill set, I would appreciate it if you could answer a few questions regarding this matter.\nTo begin with, could you please let me know what prerequisite qualifications or technical backgrounds are required for prospective applicants? In addition, I would like to ask whether distance learning options with recorded lectures are available for working professionals with tight schedules. Furthermore, I was wondering if students will have hands-on opportunities to work on practical capstone projects based on real-world datasets. Lastly, I would also be grateful if you could clarify whether your academy provides career mentorship services and job placement assistance upon graduation.\nThank you in advance for your time and assistance. I look forward to receiving your response at your earliest convenience.\nYours faithfully,",
        "sampleModelVi": "Kính gửi Điều phối viên Tuyển sinh,\nTôi viết thư này để yêu cầu cung cấp thông tin chi tiết về Khóa học Chứng chỉ Phân tích Dữ liệu chuyên nghiệp được quảng cáo trên trang web chính thức của học viện. Vì tôi dự định đăng ký học vào tháng tới nhằm nâng cao kỹ năng chuyên môn, tôi sẽ rất cảm kích nếu quý vị có thể giải đáp một vài thắc mắc liên quan đến vấn đề này.\nTrước hết, xin quý vị vui lòng cho tôi biết những điều kiện tiên quyết hoặc nền tảng kỹ thuật nào được yêu cầu đối với các ứng viên tiềm năng? Ngoài ra, tôi muốn hỏi liệu học viện có cung cấp hình thức học từ xa với các bài giảng ghi hình sẵn dành cho những người đi làm có lịch trình bận rộn hay không. Hơn nữa, tôi cũng băn khoăn liệu học viên có cơ hội thực hành thực tế trong các dự án tốt nghiệp dựa trên bộ dữ liệu thực tế hay không. Cuối cùng, tôi cũng rất biết ơn nếu quý vị làm rõ liệu học viện có cung cấp dịch vụ cố vấn nghề nghiệp và hỗ trợ giới thiệu việc làm sau khi tốt nghiệp hay không.\nXin chân thành cảm ơn thời gian và sự hỗ trợ của quý vị. Tôi rất mong nhận được phản hồi của quý vị trong thời gian sớm nhất có thể.\nTrân trọng,",
        "sampleSolution": "Dear Admissions Coordinator,\nI am writing this letter to request detailed information regarding the professional Data Analytics Certificate Course advertised on your official website. As I am planning to enroll next month to accelerate my technical skill set, I would appreciate it if you could answer a few questions regarding this matter.\nTo begin with, could you please let me know what prerequisite qualifications or technical backgrounds are required for prospective applicants? In addition, I would like to ask whether distance learning options with recorded lectures are available for working professionals with tight schedules. Furthermore, I was wondering if students will have hands-on opportunities to work on practical capstone projects based on real-world datasets. Lastly, I would also be grateful if you could clarify whether your academy provides career mentorship services and job placement assistance upon graduation.\nThank you in advance for your time and assistance. I look forward to receiving your response at your earliest convenience.\nYours faithfully,"
    },
    "description": {
        "title": "DẠNG 03: LETTER OF DESCRIPTION (THƯ MÔ TẢ - B2 LEVEL)",
        "prompt": "You have received a letter from your foreign friend, Tom, who is curious about traditional cultural festivals in Vietnam. Write a letter to describe the Mid-Autumn Festival (Tết Trung Thu) to him. In your letter, you should describe: when and where it takes place, the key customs and atmospheric street activities, the traditional foods prepared, and what the festival means to you and your family. You should write at least 120 words. Do not include your name or address.",
        "analysis": {
            "recipient": "Tom (Bạn bè quốc tế)",
            "purpose": "Miêu tả nét đẹp văn hóa và không khí Tết Trung Thu truyền thống",
            "style": "Thân mật (Informal Letter)",
            "requirements": "Thời gian & địa điểm, phong tục & hoạt động đường phố, ẩm thực đặc trưng (bánh trung thu), ý nghĩa đoàn viên"
        },
        "hints": [
            {
                "title": "1. Lời chào & Mở thư",
                "type": "standard",
                "items": [
                    {
                        "en": "Dear Tom, How have you been lately? I hope everything is going well. In your letter, you asked me about our traditional cultural festivals, so I’d love to tell you about the Mid-Autumn Festival.",
                        "vi": "Tom thân mến, dạo này cậu thế nào? Cậu có hỏi tớ về lễ hội truyền thống, nên tớ rất hào hứng kể cho cậu nghe về Tết Trung Thu.",
                        "reasonEn": "Warm informal opening with direct reference to previous letter.",
                        "reasonVi": "Mở đầu tự nhiên, bám sát đề."
                    }
                ]
            },
            {
                "title": "2. Thời gian, không khí & Hoạt động",
                "type": "standard",
                "items": [
                    {
                        "en": "To begin with, this festival takes place on the 15th day of the eighth lunar month nationwide. In particular, the streets are illuminated with vibrant red star lanterns, lively lion dances, and bustling night markets.",
                        "vi": "Đầu tiên, lễ hội diễn ra vào rằm tháng 8 âm lịch trên toàn quốc, phố phường rực rỡ với đèn ông sao, múa lân và chợ đêm náo nhiệt.",
                        "reasonEn": "Vivid imagery: illuminated with vibrant lanterns, lively lion dances.",
                        "reasonVi": "Miêu tả giàu hình ảnh và từ vựng B2."
                    }
                ]
            },
            {
                "title": "3. Ẩm thực & Ý nghĩa đoàn viên",
                "type": "standard",
                "items": [
                    {
                        "en": "In addition, what makes this celebration truly special is enjoying baked and sticky mooncakes with hot green tea. Furthermore, it symbolizes warmth, togetherness, and family reunion.",
                        "vi": "Ngoài ra, điều làm cho dịp lễ này thực sự đặc biệt là thưởng thức bánh nướng, bánh dẻo cùng trà xanh, tượng trưng cho sự đoàn viên sum họp gia đình.",
                        "reasonEn": "B2 Structure: what makes... truly special is... Lexicon: family reunion.",
                        "reasonVi": "Cấu trúc nhấn mạnh và từ vựng chủ đề văn hóa."
                    }
                ]
            },
            {
                "title": "4. Kết thư thân mật",
                "type": "standard",
                "items": [
                    {
                        "en": "I hope this gives you a vivid picture of our festival. Let me know if you would like to visit Vietnam to experience it firsthand. Write back soon. Best wishes,",
                        "vi": "Tớ hy vọng điều này cho cậu hình dung sống động. Hồi âm sớm nhé. Chúc những điều tốt đẹp nhất,",
                        "reasonEn": "Warm and inviting sign-off.",
                        "reasonVi": "Kết thư thân tình, gắn kết."
                    }
                ]
            }
        ],
        "sampleModel": "Dear Tom,\nHow have you been lately? I hope everything is going well. In your letter, you asked me about our traditional cultural celebrations, so I’d love to share some vivid details about the Mid-Autumn Festival with you.\nTo begin with, this festival takes place annually on the 15th day of the eighth lunar month across Vietnam. In particular, the city streets are brilliantly illuminated with colorful star lanterns, bustling night markets, and thrilling lion dance performances accompanied by energetic drumbeats. In addition, what makes this occasion truly unforgettable is indulging in traditional mooncakes, both baked and sticky varieties, which are customarily savored with fragrant hot lotus tea. Furthermore, the festival provides a cherished opportunity for family members to gather under the full moon, express gratitude, and share heartwarming stories. In my opinion, this celebration is extraordinarily meaningful to me because it reminds everyone of the core values of harmony, togetherness, and familial love.\nI hope this gives you a clear picture of our festive atmosphere. Let me know if you want to experience it firsthand someday. Write back soon.\nBest wishes,",
        "sampleModelVi": "Tom thân mến,\nDạo này bạn thế nào rồi? Mình hy vọng mọi việc vẫn diễn ra tốt đẹp. Trong bức thư trước, bạn có hỏi mình về những lễ hội văn hóa truyền thống, vì vậy mình rất vui được chia sẻ với bạn những nét đặc sắc về Tết Trung thu.\nTrước hết, lễ hội này diễn ra hàng năm vào ngày rằm tháng 8 âm lịch trên khắp đất nước Việt Nam. Đặc biệt, các đường phố được thắp sáng rực rỡ bởi những chiếc đèn lồng ông sao đầy màu sắc, những khu chợ đêm nhộn nhịp và các màn múa lân sôi động hòa trong tiếng trống rộn rã. Ngoài ra, điều khiến dịp này thực sự khó quên là việc thưởng thức những chiếc bánh trung thu truyền thống, bao gồm cả bánh nướng và bánh dẻo, thường được nhâm nhi cùng tách trà sen nóng ngát hương. Hơn nữa, lễ hội mang đến cơ hội quý báu để các thành viên trong gia đình quây quần dưới ánh trăng rằm, bày tỏ lòng biết ơn và sẻ chia những câu chuyện ấm áp. Theo mình, dịp lễ này vô cùng ý nghĩa vì nó nhắc nhở mọi người về các giá trị cốt lõi của sự hòa thuận, gắn kết và tình yêu thương gia đình.\nMình hy vọng bức thư này giúp bạn hình dung rõ ràng về không khí lễ hội nơi đây. Hãy cho mình biết nếu bạn muốn tự mình trải nghiệm vào một ngày nào đó nhé. Viết thư lại cho mình sớm!\nChúc bạn mọi điều tốt lành,",
        "sampleSolution": "Dear Tom,\nHow have you been lately? I hope everything is going well. In your letter, you asked me about our traditional cultural celebrations, so I’d love to share some vivid details about the Mid-Autumn Festival with you.\nTo begin with, this festival takes place annually on the 15th day of the eighth lunar month across Vietnam. In particular, the city streets are brilliantly illuminated with colorful star lanterns, bustling night markets, and thrilling lion dance performances accompanied by energetic drumbeats. In addition, what makes this occasion truly unforgettable is indulging in traditional mooncakes, both baked and sticky varieties, which are customarily savored with fragrant hot lotus tea. Furthermore, the festival provides a cherished opportunity for family members to gather under the full moon, express gratitude, and share heartwarming stories. In my opinion, this celebration is extraordinarily meaningful to me because it reminds everyone of the core values of harmony, togetherness, and familial love.\nI hope this gives you a clear picture of our festive atmosphere. Let me know if you want to experience it firsthand someday. Write back soon.\nBest wishes,"
    },
    "complaint": {
        "title": "DẠNG 04: LETTER OF COMPLAINT (THƯ PHÀN NÀN - B2 LEVEL)",
        "prompt": "You recently purchased a high-end laptop from an online electronics store, but it arrived two weeks later than scheduled with a severely cracked screen and a missing power adapter. Write a letter of complaint to the customer support manager. In your letter, you should: state the details of your order and explain why you are writing, describe the delivery delay and damaged condition in detail, explain the inconvenience it has caused to your work, and specify the resolution you demand (replacement or full refund). You should write at least 120 words. Do not include your name or address.",
        "analysis": {
            "recipient": "Customer Support Manager (Trưởng phòng chăm sóc khách hàng)",
            "purpose": "Khiếu nại về việc giao hàng trễ 2 tuần, màn hình laptop bị vỡ và thiếu sạc",
            "style": "Trang trọng (Formal Letter)",
            "requirements": "Chi tiết đơn hàng, miêu tả sự cố giao trễ & hỏng hóc, sự bất tiện trong công việc, yêu cầu đổi máy mới hoặc hoàn tiền ngay"
        },
        "hints": [
            {
                "title": "1. Mở thư trang trọng",
                "type": "standard",
                "items": [
                    {
                        "en": "Dear Sir/Madam, I am writing to express my profound dissatisfaction with the substandard service and defective product I received from your online store regarding order #LT-9021.",
                        "vi": "Kính gửi Ban Quản lý, tôi viết thư để bày tỏ sự bất mãn sâu sắc về dịch vụ kém và sản phẩm lỗi trong đơn hàng #LT-9021.",
                        "reasonEn": "Strong formal opening: profound dissatisfaction, substandard service, defective product.",
                        "reasonVi": "Từ vựng khiếu nại trang trọng và đĩnh đạc."
                    }
                ]
            },
            {
                "title": "2. Vấn đề 1: Giao hàng chậm trễ 2 tuần",
                "type": "standard",
                "items": [
                    {
                        "en": "The main issue that I would like to highlight is the unacceptable delivery delay. Specifically, despite paying for express delivery, the parcel arrived two weeks late without any tracking updates.",
                        "vi": "Vấn đề chính là sự chậm trễ không thể chấp nhận được, dù đã trả phí hỏa tốc nhưng gói hàng đến trễ 2 tuần không có cập nhật.",
                        "reasonEn": "Outline formula: The main issue that I would like to highlight is...",
                        "reasonVi": "Đúng công thức dàn ý B2."
                    }
                ]
            },
            {
                "title": "3. Vấn đề 2: Màn hình vỡ & Thiếu phụ kiện",
                "type": "standard",
                "items": [
                    {
                        "en": "Furthermore, to make matters worse, upon inspecting the package, I discovered that the screen was severely cracked and the charger was completely missing. This caused enormous disruption to my remote work deadlines.",
                        "vi": "Hơn nữa, tồi tệ hơn là khi mở gói hàng tôi thấy màn hình vỡ nghiêm trọng và mất sạc, gây gián đoạn lớn cho công việc.",
                        "reasonEn": "Outline formula: Furthermore, to make matters worse... Lexicon: enormous disruption.",
                        "reasonVi": "Đúng công thức dàn ý B2 và từ vựng cao cấp."
                    }
                ]
            },
            {
                "title": "4. Yêu cầu giải quyết & Kết thư",
                "type": "standard",
                "items": [
                    {
                        "en": "Given these circumstances, I expect an immediate replacement unit or a full refund within 48 hours. I look forward to receiving your prompt resolution. Yours faithfully,",
                        "vi": "Trước tình cảnh này, tôi yêu cầu đổi máy mới ngay hoặc hoàn tiền trong 48h. Rất mong phản hồi kịp thời. Trân trọng,",
                        "reasonEn": "Firm assertiveness and polite formal closing.",
                        "reasonVi": "Yêu cầu cương quyết và kết thư trang trọng."
                    }
                ]
            }
        ],
        "sampleModel": "Dear Sir/Madam,\nI am writing to express my profound dissatisfaction with the substandard service and defective goods I received regarding order #VN-8841. I purchased a high-end laptop from your online electronics store, and I was utterly disappointed with the entire experience.\nThe main issue that I would like to highlight is the inexcusable delivery delay. Specifically, although I opted for express two-day shipping, the package arrived more than two weeks late without any prior notification from your logistics department. Furthermore, to make matters worse, upon opening the parcel, I discovered that the laptop screen was severely cracked across the display, and the original power adapter was missing entirely. In fact, the packaging appeared carelessly crushed and lacked protective bubble wrap. This situation has caused immense inconvenience for me, as I missed critical project deadlines for my remote employment.\nGiven these unacceptable circumstances, I expect you to arrange an immediate courier replacement with an intact model or issue a full refund to my bank account within three business days.\nI hope you will resolve this issue promptly. I look forward to receiving your prompt reply and a satisfactory solution.\nYours faithfully,",
        "sampleModelVi": "Kính gửi Ông/Bà,\nTôi viết thư này để bày tỏ sự bất bình sâu sắc đối với dịch vụ kém chất lượng và sản phẩm bị lỗi mà tôi nhận được liên quan đến đơn hàng #VN-8841. Tôi đã mua một chiếc máy tính xách tay cao cấp từ cửa hàng điện tử trực tuyến của quý công ty, và tôi vô cùng thất vọng với toàn bộ trải nghiệm này.\nVấn đề chính mà tôi muốn nhấn mạnh là sự chậm trễ giao hàng không thể chấp nhận được. Cụ thể, dù tôi đã chọn dịch vụ giao hàng hỏa tốc trong 2 ngày, kiện hàng lại đến muộn hơn 2 tuần mà không hề có bất kỳ thông báo trước nào từ bộ phận vận chuyển của quý công ty. Hơn nữa, tồi tệ hơn là khi mở kiện hàng, tôi phát hiện màn hình laptop bị nứt vỡ nghiêm trọng trên toàn bộ màn hình, và bộ sạc nguồn chính hãng cũng hoàn toàn không có. Trên thực tế, bao bì đóng gói bị móp méo cẩu thả và thiếu lớp xốp bọc bảo vệ. Tình trạng này đã gây ra sự bất tiện to lớn cho tôi, vì tôi đã bị lỡ các hạn chót dự án quan trọng trong công việc làm từ xa.\nTrước những sự việc không thể chấp nhận này, tôi yêu cầu quý công ty thu xếp đổi ngay một sản phẩm nguyên vẹn qua đường chuyển phát nhanh hoặc hoàn trả toàn bộ số tiền vào tài khoản ngân hàng của tôi trong vòng 3 ngày làm việc.\nTôi hy vọng quý công ty sẽ giải quyết vấn đề này nhanh chóng. Tôi rất mong nhận được phản hồi sớm cùng phương án xử lý thỏa đáng.\nTrân trọng,",
        "sampleSolution": "Dear Sir/Madam,\nI am writing to express my profound dissatisfaction with the substandard service and defective goods I received regarding order #VN-8841. I purchased a high-end laptop from your online electronics store, and I was utterly disappointed with the entire experience.\nThe main issue that I would like to highlight is the inexcusable delivery delay. Specifically, although I opted for express two-day shipping, the package arrived more than two weeks late without any prior notification from your logistics department. Furthermore, to make matters worse, upon opening the parcel, I discovered that the laptop screen was severely cracked across the display, and the original power adapter was missing entirely. In fact, the packaging appeared carelessly crushed and lacked protective bubble wrap. This situation has caused immense inconvenience for me, as I missed critical project deadlines for my remote employment.\nGiven these unacceptable circumstances, I expect you to arrange an immediate courier replacement with an intact model or issue a full refund to my bank account within three business days.\nI hope you will resolve this issue promptly. I look forward to receiving your prompt reply and a satisfactory solution.\nYours faithfully,"
    },
    "feedback": {
        "title": "DẠNG 05: LETTER OF FEEDBACK (THƯ PHẢN HỒI - B2 LEVEL)",
        "prompt": "You recently participated in an intensive 3-day Business English Workshop organized by your university's language institute. Write an email to the program director to provide your feedback. In your email, you should: share what you found most beneficial and satisfying about the workshop, point out any limitations or areas that need improvement, and propose constructive suggestions for future workshops. You should write at least 120 words. Do not include your name or address.",
        "analysis": {
            "recipient": "Program Director (Giám đốc chương trình)",
            "purpose": "Đóng góp phản hồi, đánh giá khóa tập huấn tiếng Anh thương mại",
            "style": "Bán trang trọng / Trang trọng (Semi-formal / Formal)",
            "requirements": "Điểm tâm đắc (diễn giả, bài tập thực tế), điểm hạn chế (thời lượng, tài liệu), đề xuất cải tiến cho các khóa sau"
        },
        "hints": [
            {
                "title": "1. Mở thư phản hồi",
                "type": "standard",
                "items": [
                    {
                        "en": "Dear Program Director, I am writing to provide feedback on the 3-day Business English Workshop that concluded last Friday. I truly appreciated the opportunity to attend and would like to share my thoughts.",
                        "vi": "Kính gửi Giám đốc chương trình, tôi viết thư để đóng góp phản hồi về buổi tập huấn 3 ngày vừa qua.",
                        "reasonEn": "B2 Opening: I am writing to provide feedback on...",
                        "reasonVi": "Mở thư phản hồi chuẩn mực."
                    }
                ]
            },
            {
                "title": "2. Điểm tích cực [Khen]",
                "type": "standard",
                "items": [
                    {
                        "en": "Overall, I found the workshop highly rewarding. One aspect I appreciated was the practical negotiation simulations, which allowed participants to apply business vocabulary effectively.",
                        "vi": "Nhìn chung, tôi thấy khóa học rất bổ ích. Một khía cạnh tôi đánh giá cao là các bài tập mô phỏng đàm phán thực tế.",
                        "reasonEn": "Formula: Overall, I found... One aspect I appreciated was...",
                        "reasonVi": "Mẫu câu khen chuẩn B2."
                    }
                ]
            },
            {
                "title": "3. Điểm chưa hài lòng [Chê]",
                "type": "standard",
                "items": [
                    {
                        "en": "However, there were also areas that required improvement. One issue that I encountered was the congested schedule, leaving insufficient time for individual questions.",
                        "vi": "Tuy nhiên, cũng có khía cạnh cần cải thiện. Lịch trình quá dày khiến không đủ thời gian giải đáp thắc mắc cá nhân.",
                        "reasonEn": "Formula: However, there were also areas... One issue that I encountered was...",
                        "reasonVi": "Mẫu câu chê nhã nhặn, khách quan."
                    }
                ]
            },
            {
                "title": "4. Đề xuất giải pháp & Kết thư",
                "type": "standard",
                "items": [
                    {
                        "en": "To enhance future workshops, I would recommend extending the session breaks and providing digital lecture slides beforehand. I hope my feedback proves constructive. Yours sincerely,",
                        "vi": "Để nâng cao chất lượng khóa học sau, tôi đề xuất kéo dài giờ nghỉ và gửi trước bài giảng điện tử. Trân trọng,",
                        "reasonEn": "Recommendation structure: I would recommend + Ving / that you Vo.",
                        "reasonVi": "Cấu trúc đề xuất giải pháp."
                    }
                ]
            }
        ],
        "sampleModel": "Dear Program Director,\nI am writing to provide feedback on the intensive 3-day Business English Workshop that took place at your campus last week. I recently completed the course and would like to share my constructive impressions.\nOverall, I found the workshop exceptionally valuable and intellectually stimulating, although there are a few aspects that could be optimized. One aspect I appreciated was the instructors' exceptional expertise and engaging pedagogical style. In particular, the real-world case studies and interactive negotiation simulations gave participants practical insights into corporate communication.\nHowever, there were also several areas that required improvement. One issue that I encountered was the excessively dense timetable, which left little time for in-depth peer discussions. Furthermore, the venue was somewhat overcrowded, making group activities noisy and difficult to navigate.\nTo enhance the quality of future workshops, I have a few suggestions. I would recommend that you allocate longer question-and-answer periods and provide digital handouts prior to each session so that students can prepare thoroughly. It would also be better if you could limit cohort sizes to foster closer collaboration.\nI hope my feedback will be useful in refining future academic programs. Please feel free to contact me if you have any further questions.\nYours sincerely,",
        "sampleModelVi": "Kính gửi Giám đốc Chương trình,\nTôi viết thư này để đưa ra phản hồi về Khóa hội thảo Tiếng Anh Thương mại chuyên sâu kéo dài 3 ngày đã diễn ra tại cơ sở của quý viện vào tuần trước. Gần đây tôi đã hoàn thành khóa học và muốn chia sẻ những đánh giá mang tính xây dựng của mình.\nNhìn chung, tôi nhận thấy buổi hội thảo đặc biệt giá trị và kích thích tư duy, mặc dù vẫn còn một vài khía cạnh có thể được tối ưu hóa. Một điểm mà tôi đánh giá rất cao là chuyên môn xuất sắc cùng phương pháp giảng dạy lôi cuốn của đội ngũ giảng viên. Cụ thể, các tình huống nghiên cứu thực tế và các bài tập mô phỏng đàm phán tương tác đã mang lại cho người tham gia những hiểu biết thực tế sâu sắc về giao tiếp trong môi trường doanh nghiệp.\nTuy nhiên, vẫn còn một số điểm cần cải thiện. Một vấn đề tôi gặp phải là thời khóa biểu quá dày đặc, để lại rất ít thời gian cho các cuộc thảo luận chuyên sâu giữa các học viên. Hơn nữa, địa điểm tổ chức có phần quá đông đúc, khiến các hoạt động nhóm trở nên ồn ào và khó theo dõi.\nĐể nâng cao chất lượng các buổi hội thảo trong tương lai, tôi xin đưa ra một số đề xuất. Tôi khuyến nghị quý viện nên dành thêm thời gian cho phần hỏi đáp và cung cấp tài liệu kỹ thuật số trước mỗi buổi học để học viên có thể chuẩn bị kỹ lưỡng. Sẽ tốt hơn nếu quý viện giới hạn quy mô lớp học để thúc đẩy sự cộng tác chặt chẽ hơn.\nTôi hy vọng những phản hồi này sẽ hữu ích trong việc hoàn thiện các chương trình học thuật tiếp theo. Xin vui lòng liên hệ với tôi nếu quý vị có thêm câu hỏi nào.\nTrân trọng,",
        "sampleSolution": "Dear Program Director,\nI am writing to provide feedback on the intensive 3-day Business English Workshop that took place at your campus last week. I recently completed the course and would like to share my constructive impressions.\nOverall, I found the workshop exceptionally valuable and intellectually stimulating, although there are a few aspects that could be optimized. One aspect I appreciated was the instructors' exceptional expertise and engaging pedagogical style. In particular, the real-world case studies and interactive negotiation simulations gave participants practical insights into corporate communication.\nHowever, there were also several areas that required improvement. One issue that I encountered was the excessively dense timetable, which left little time for in-depth peer discussions. Furthermore, the venue was somewhat overcrowded, making group activities noisy and difficult to navigate.\nTo enhance the quality of future workshops, I have a few suggestions. I would recommend that you allocate longer question-and-answer periods and provide digital handouts prior to each session so that students can prepare thoroughly. It would also be better if you could limit cohort sizes to foster closer collaboration.\nI hope my feedback will be useful in refining future academic programs. Please feel free to contact me if you have any further questions.\nYours sincerely,"
    },
    "apology": {
        "title": "DẠNG 06: LETTER OF APOLOGY (THƯ XIN LỖI - B2 LEVEL)",
        "prompt": "You were scheduled to deliver an important presentation at an academic departmental meeting chaired by Professor Harrison, but you missed it without giving prior notice due to a sudden medical emergency. Write a formal letter of apology to Professor Harrison. In your letter, you should: apologize sincerely for your sudden absence, explain the medical situation that occurred and why you could not inform him earlier, attach your presentation slides, and respectfully request an opportunity to present your research at his next convenience. You should write at least 120 words. Do not include your name or address.",
        "analysis": {
            "recipient": "Professor Harrison (Giáo sư / Trưởng khoa)",
            "purpose": "Xin lỗi trang trọng vì vắng mặt đột xuất trong buổi thuyết trình khoa",
            "style": "Trang trọng (Formal Letter)",
            "requirements": "Xin lỗi chân thành, giải thích sự cố y tế khẩn cấp, đính kèm slide, đề xuất được trình bày lại vào buổi tiếp theo"
        },
        "hints": [
            {
                "title": "1. Mở thư trang trọng",
                "type": "standard",
                "items": [
                    {
                        "en": "Dear Professor Harrison, I am writing to sincerely apologize for my absence from the departmental presentation scheduled yesterday afternoon. I deeply regret any inconvenience or disruption caused.",
                        "vi": "Kính gửi Giáo sư Harrison, tôi viết thư này để chân thành xin lỗi về sự vắng mặt của mình trong buổi thuyết trình chiều qua.",
                        "reasonEn": "Formal formula: I am writing to sincerely apologize for... I deeply regret...",
                        "reasonVi": "Công thức mở thư trang trọng chuẩn B2."
                    }
                ]
            },
            {
                "title": "2. Giải thích lý do khẩn cấp",
                "type": "standard",
                "items": [
                    {
                        "en": "First of all, here is the reason for this. Unfortunately, I was rushed to the hospital due to acute food poisoning yesterday morning. Consequently, I was unable to contact you beforehand.",
                        "vi": "Trước hết, đây là lý do. Thật không may tôi phải nhập viện cấp cứu vì ngộ độc thực phẩm, do đó không thể liên lạc trước.",
                        "reasonEn": "Formula: First of all, here is the reason... Unfortunately, I was...",
                        "reasonVi": "Mẫu câu giải thích lý do chuẩn B2."
                    }
                ]
            },
            {
                "title": "3. Đính kèm tài liệu & Đề xuất trình bày lại",
                "type": "standard",
                "items": [
                    {
                        "en": "To make up for my mistake, I have attached my complete research slides and executive summary. I would be immensely grateful if I could deliver a brief presentation at your next available meeting.",
                        "vi": "Để bù đắp sai sót, tôi đã đính kèm toàn bộ bài trình bày và bản tóm tắt, rất biết ơn nếu được trình bày lại.",
                        "reasonEn": "Formula: To make up for my mistake, I would like to...",
                        "reasonVi": "Hành động bù đắp trang trọng."
                    }
                ]
            },
            {
                "title": "4. Kết thư trang trọng",
                "type": "standard",
                "items": [
                    {
                        "en": "I would like to sincerely apologize once again for the inconvenience. Thank you for your kind understanding. Yours sincerely,",
                        "vi": "Một lần nữa tôi chân thành xin lỗi vì sự bất tiện này. Cảm ơn sự thông cảm của Giáo sư. Trân trọng,",
                        "reasonEn": "Formal closing: I would like to sincerely apologize once again... Yours sincerely,",
                        "reasonVi": "Kết thúc thư xin lỗi trang trọng."
                    }
                ]
            }
        ],
        "sampleModel": "Dear Professor Harrison,\nI am writing to sincerely apologize for my sudden absence from yesterday's departmental academic meeting, where I was scheduled to deliver my research presentation. I deeply regret any inconvenience, disruption, or disappointment that my failure to attend may have caused you and my colleagues.\nFirst of all, here is the reason for this unavoidable situation. Unfortunately, I was rushed to the emergency room early yesterday morning due to severe acute food poisoning. As I was undergoing intensive medical examinations and medication throughout the day, I was completely incapacitated and unable to send a notification prior to the meeting. Fortunately, my condition has stabilized, and I was discharged this morning.\nTo make up for my unexpected absence, I have attached my complete presentation slide deck along with an executive summary of my findings to this email. Furthermore, I would be immensely grateful if you would grant me an opportunity to present my research during the upcoming departmental seminar or at your earliest convenience.\nI would like to sincerely apologize once again for the inconvenience. Thank you for your gracious understanding. I look forward to receiving your reply soon.\nYours sincerely,",
        "sampleModelVi": "Kính gửi Giáo sư Harrison,\nEm viết thư này để chân thành xin lỗi vì sự vắng mặt đột xuất của em trong cuộc họp học thuật của khoa ngày hôm qua, nơi em đã được xếp lịch để trình bày bài nghiên cứu của mình. Em vô cùng ân hận về bất kỳ sự bất tiện, gián đoạn hay thất vọng nào mà việc vắng mặt của em có thể đã gây ra cho Giáo sư và các đồng nghiệp.\nTrước hết, em xin giải thích lý do dẫn đến tình huống bất khả kháng này. Thật không may, sáng sớm hôm qua em đã phải nhập viện cấp cứu do ngộ độc thực phẩm cấp tính nghiêm trọng. Vì phải trải qua các xét nghiệm y tế và điều trị tích cực suốt cả ngày, em hoàn toàn mất khả năng vận động và không thể gửi thông báo trước cuộc họp. May mắn thay, sức khỏe của em hiện đã ổn định và em đã được xuất viện vào sáng nay.\nĐể bù đắp cho sự vắng mặt bất ngờ này, em đã đính kèm toàn bộ bài trình chiếu thuyết trình cùng bản tóm tắt kết quả nghiên cứu vào email này. Hơn nữa, em sẽ vô cùng biết ơn nếu Giáo sư có thể tạo cơ hội cho em được trình bày nghiên cứu của mình trong buổi hội thảo sắp tới của khoa hoặc vào bất kỳ thời gian thuận tiện nào của Giáo sư.\nEm xin được gửi lời xin lỗi chân thành một lần nữa vì sự bất tiện này. Cảm ơn Giáo sư đã rộng lòng thấu hiểu cho em. Em rất mong sớm nhận được hồi âm của Giáo sư.\nKính thư,",
        "sampleSolution": "Dear Professor Harrison,\nI am writing to sincerely apologize for my sudden absence from yesterday's departmental academic meeting, where I was scheduled to deliver my research presentation. I deeply regret any inconvenience, disruption, or disappointment that my failure to attend may have caused you and my colleagues.\nFirst of all, here is the reason for this unavoidable situation. Unfortunately, I was rushed to the emergency room early yesterday morning due to severe acute food poisoning. As I was undergoing intensive medical examinations and medication throughout the day, I was completely incapacitated and unable to send a notification prior to the meeting. Fortunately, my condition has stabilized, and I was discharged this morning.\nTo make up for my unexpected absence, I have attached my complete presentation slide deck along with an executive summary of my findings to this email. Furthermore, I would be immensely grateful if you would grant me an opportunity to present my research during the upcoming departmental seminar or at your earliest convenience.\nI would like to sincerely apologize once again for the inconvenience. Thank you for your gracious understanding. I look forward to receiving your reply soon.\nYours sincerely,"
    },
    "application": {
        "title": "DẠNG 07: LETTER OF APPLICATION (THƯ ỨNG TUYỂN - B2 LEVEL)",
        "prompt": "You saw a recruitment notice seeking an Administrative Assistant / Receptionist for an international educational conference taking place in your city next month. Write a formal application email to the organizing committee. In your email, you should: introduce yourself and your current situation, explain why you are interested in this temporary role, highlight your relevant communication skills and previous organizational experience, and state your availability for an interview. You should write at least 120 words. Do not include your name or address.",
        "analysis": {
            "recipient": "Organizing Committee (Ban tổ chức hội thảo quốc tế)",
            "purpose": "Ứng tuyển vị trí Trợ lý hành chính / Lễ tân cho hội thảo quốc tế",
            "style": "Trang trọng (Formal Letter)",
            "requirements": "Giới thiệu bản thân & thời gian rảnh, lý do hứng thú, kỹ năng giao tiếp & kinh nghiệm tổ chức sự kiện, sự sẵn sàng phỏng vấn"
        },
        "hints": [
            {
                "title": "1. Mở thư ứng tuyển",
                "type": "standard",
                "items": [
                    {
                        "en": "Dear Sir/Madam, I am writing to apply for the temporary position of Administrative Assistant for the International Education Conference, as advertised on your website.",
                        "vi": "Kính gửi Ban Tổ chức, tôi viết thư này để ứng tuyển vào vị trí Trợ lý hành chính tạm thời cho Hội thảo Giáo dục Quốc tế.",
                        "reasonEn": "Standard formal opening: I am writing to apply for the position of...",
                        "reasonVi": "Mở thư xin việc chuẩn B2."
                    }
                ]
            },
            {
                "title": "2. Lý do hứng thú",
                "type": "standard",
                "items": [
                    {
                        "en": "I am particularly interested in this role because it closely aligns with my career aspirations in cross-cultural communication and event coordination.",
                        "vi": "Tôi đặc biệt quan tâm đến vị trí này vì nó phù hợp chặt chẽ với định hướng nghề nghiệp trong giao tiếp đa văn hóa và tổ chức sự kiện.",
                        "reasonEn": "B2 Structure: closely aligns with my career aspirations.",
                        "reasonVi": "Collocation B2 ấn tượng."
                    }
                ]
            },
            {
                "title": "3. Kinh nghiệm & Kỹ năng phù hợp",
                "type": "standard",
                "items": [
                    {
                        "en": "Regarding my experience, I served as a volunteer coordinator at our university annual youth summit, where I managed delegate registration and resolved logistics challenges efficiently.",
                        "vi": "Về kinh nghiệm, tôi từng là điều phối viên tình nguyện tại hội nghị thanh niên thường niên, quản lý đăng ký đại biểu và xử lý hậu cần.",
                        "reasonEn": "Action verbs: managed delegate registration, resolved logistics challenges efficiently.",
                        "reasonVi": "Miêu tả kinh nghiệm cụ thể với động từ hành động."
                    }
                ]
            },
            {
                "title": "4. Kết thư & Sẵn sàng phỏng vấn",
                "type": "standard",
                "items": [
                    {
                        "en": "I would be grateful if you could consider my application. I am available for an interview at your convenience. Yours faithfully,",
                        "vi": "Tôi sẽ rất biết ơn nếu quý ban xem xét hồ sơ của tôi. Tôi sẵn sàng phỏng vấn bất cứ khi nào thuận tiện. Trân trọng,",
                        "reasonEn": "Formal sign-off: I would be grateful if you could consider...",
                        "reasonVi": "Kết thúc thư xin việc chuẩn quốc tế."
                    }
                ]
            }
        ],
        "sampleModel": "Dear Sir/Madam,\nI am writing to apply for the temporary position of Administrative Assistant for the upcoming International Education Conference, which was advertised on your official portal last Friday. Currently, I am a final-year undergraduate student majoring in English Linguistics and International Relations, and I am keen on contributing to prestigious academic events.\nI am particularly interested in this role because it closely aligns with my passion for cross-cultural communication and event management. Furthermore, I believe this position will offer me an invaluable opportunity to put my organizational expertise into practice while supporting international scholars and delegates.\nRegarding my previous background, I worked as a lead student coordinator for our university's Model United Nations conference last winter. In this capacity, I was responsible for welcoming international guests, preparing accreditation badges, managing plenary room logistics, and resolving attendee inquiries under tight schedules. This experience strengthened my interpersonal tact, problem-solving agility, and fluent English communication under pressure.\nI believe I would be an exemplary candidate for this role because I am diligent, highly adaptable, and detail-oriented. I am confident that I can execute all administrative responsibilities flawlessly.\nI would be grateful if you could consider my application. I am available for an interview at your earliest convenience and look forward to hearing from you soon.\nYours faithfully,",
        "sampleModelVi": "Kính gửi Ông/Bà,\nTôi viết thư này để ứng tuyển vào vị trí Trợ lý Hành chính thời vụ cho Hội nghị Giáo dục Quốc tế sắp tới, được đăng thông báo tuyển dụng trên cổng thông tin chính thức của quý cơ quan vào thứ Sáu tuần trước. Hiện tại, tôi là sinh viên năm cuối chuyên ngành Ngôn ngữ Anh và Quan hệ Quốc tế, và tôi rất khao khát được cống hiến cho các sự kiện học thuật danh giá.\nTôi đặc biệt quan tâm đến vai trò này vì nó rất phù hợp với niềm đam mê của tôi trong lĩnh vực giao tiếp liên văn hóa và quản lý sự kiện. Hơn nữa, tôi tin rằng vị trí này sẽ mang lại cho tôi cơ hội quý giá để vận dụng các kỹ năng tổ chức của mình vào thực tế, đồng thời hỗ trợ các học giả và đại biểu quốc tế.\nVề kinh nghiệm trước đây của tôi, tôi từng làm điều phối viên sinh viên chính cho Hội nghị Mô phỏng Liên Hợp Quốc của trường đại học vào mùa đông năm ngoái. Với cương vị này, tôi chịu trách nhiệm đón tiếp khách quốc tế, chuẩn bị thẻ đại biểu, điều phối hậu cần phòng họp toàn thể và giải quyết các thắc mắc của người tham dự dưới áp lực thời gian gấp gáp. Kinh nghiệm này đã củng cố sự khéo léo trong giao tiếp, sự linh hoạt trong giải quyết vấn đề và khả năng sử dụng tiếng Anh lưu loát dưới áp lực cao của tôi.\nTôi tin rằng mình sẽ là một ứng viên sáng giá cho vị trí này vì tôi là người chăm chỉ, có khả năng thích ứng cao và luôn tỉ mỉ, cẩn thận. Tôi tự tin rằng mình có thể hoàn thành xuất sắc mọi trách nhiệm hành chính được giao.\nTôi rất biết ơn nếu quý cơ quan có thể xem xét hồ sơ ứng tuyển của tôi. Tôi sẵn sàng tham gia phỏng vấn vào thời gian thuận tiện nhất của quý cơ quan và rất mong sớm nhận được hồi âm.\nTrân trọng,",
        "sampleSolution": "Dear Sir/Madam,\nI am writing to apply for the temporary position of Administrative Assistant for the upcoming International Education Conference, which was advertised on your official portal last Friday. Currently, I am a final-year undergraduate student majoring in English Linguistics and International Relations, and I am keen on contributing to prestigious academic events.\nI am particularly interested in this role because it closely aligns with my passion for cross-cultural communication and event management. Furthermore, I believe this position will offer me an invaluable opportunity to put my organizational expertise into practice while supporting international scholars and delegates.\nRegarding my previous background, I worked as a lead student coordinator for our university's Model United Nations conference last winter. In this capacity, I was responsible for welcoming international guests, preparing accreditation badges, managing plenary room logistics, and resolving attendee inquiries under tight schedules. This experience strengthened my interpersonal tact, problem-solving agility, and fluent English communication under pressure.\nI believe I would be an exemplary candidate for this role because I am diligent, highly adaptable, and detail-oriented. I am confident that I can execute all administrative responsibilities flawlessly.\nI would be grateful if you could consider my application. I am available for an interview at your earliest convenience and look forward to hearing from you soon.\nYours faithfully,"
    }
};

function renderExtraPracticePanel(typeId) {
    const container = document.getElementById('extraPracticePanel');
    if (!container) return;

    const data = extraPracticeData[typeId];
    if (!data) {
        container.innerHTML = `
            <div class="content-block" style="text-align: center; padding: 40px 20px;">
                <i class="fa-solid fa-clock" style="font-size: 42px; color: var(--primary-light); margin-bottom: 16px;"></i>
                <h3 style="font-size: 18px; margin-bottom: 8px;">Đang cập nhật đề luyện tập thêm cho dạng thư này</h3>
                <p style="color: var(--text-muted);">Vui lòng chọn từ <strong>Dạng 01</strong> đến <strong>Dạng 07</strong> để làm bài luyện tập.</p>
            </div>
        `;
        return;
    }

    let hintsHtml = '';

    if (data.applicationOutlineSections) {
        hintsHtml = data.applicationOutlineSections.map(sec => {
            let bodyHtml = '';

            if (sec.sectionNumber === "1") {
                let majorsHtml = sec.majors.map(m => `
                    <div style="margin-bottom: 4px; padding-left: 10px;">
                        <strong style="color: #1e293b;">• ${m.en}</strong>
                        <span style="color: var(--text-muted); font-size: 13.5px; font-style: italic;"> (${m.vi})</span>
                    </div>
                `).join('');

                let casesHtml = sec.cases.map(cs => {
                    let expandHtml = cs.expandSents.map(st => `
                        <div style="margin-bottom: 6px; padding-left: 12px;">
                            <p style="margin-bottom: 2px; color: var(--text-main); font-weight: 500;">• ${st.en}</p>
                            <p style="margin-bottom: 0; color: var(--text-muted); font-size: 13.5px; font-style: italic; padding-left: 8px;">(${st.vi})</p>
                        </div>
                    `).join('');

                    return `
                        <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px 16px; margin-bottom: 12px; box-shadow: 0 1px 3px rgba(0,0,0,0.03);">
                            <h5 style="color: ${sec.themeColor}; font-size: 15px; margin-bottom: 10px; font-weight: 700;">
                                ${cs.name}
                            </h5>
                            <div style="margin-bottom: 10px; padding-left: 4px;">
                                <span style="font-weight: 700; color: var(--text-main); font-size: 13.5px; display: block; margin-bottom: 3px;">
                                    <i class="fa-solid fa-star" style="color: #f59e0b; font-size: 12px;"></i> Câu chính:
                                </span>
                                <p style="margin-bottom: 2px; padding-left: 12px; font-weight: 600; color: #1e293b;">${cs.mainSent.en}</p>
                                <p style="margin-bottom: 0; padding-left: 12px; color: var(--text-muted); font-size: 13.5px; font-style: italic;">(${cs.mainSent.vi})</p>
                            </div>
                            <div style="padding-left: 4px; border-top: 1px dashed #e2e8f0; padding-top: 8px;">
                                <span style="font-weight: 700; color: var(--text-main); font-size: 13.5px; display: block; margin-bottom: 4px;">
                                    <i class="fa-solid fa-circle-info" style="color: ${sec.themeColor}; font-size: 12px;"></i> Câu mở rộng:
                                </span>
                                ${expandHtml}
                            </div>
                        </div>
                    `;
                }).join('');

                bodyHtml = `
                    <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 12px 16px; margin-bottom: 14px;">
                        <span style="font-weight: 700; color: var(--primary-color); display: block; margin-bottom: 6px; font-size: 14px;">
                            <i class="fa-solid fa-graduation-cap"></i> CHUYÊN NGÀNH PHÙ HỢP GỢI Ý:
                        </span>
                        ${majorsHtml}
                    </div>
                    ${casesHtml}
                `;
            } else if (sec.sectionNumber === "2") {
                let actHtml = sec.activities.map(a => `
                    <div style="display: inline-block; width: 48%; min-width: 280px; margin-bottom: 6px; padding-left: 6px; vertical-align: top;">
                        <strong style="color: #047857; font-size: 13.5px;">• ${a.en}</strong>
                        <div style="color: var(--text-muted); font-size: 12.5px; font-style: italic; padding-left: 10px;">(${a.vi})</div>
                    </div>
                `).join('');

                bodyHtml = `
                    <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px 16px; margin-bottom: 12px;">
                        <div style="margin-bottom: 12px;">
                            <span style="font-weight: 700; color: var(--text-main); font-size: 13.5px; display: block; margin-bottom: 3px;">
                                <i class="fa-solid fa-star" style="color: #f59e0b; font-size: 12px;"></i> Câu chính:
                            </span>
                            <p style="margin-bottom: 2px; padding-left: 12px; font-weight: 600; color: #1e293b;">${sec.mainSent.en}</p>
                            <p style="margin-bottom: 0; padding-left: 12px; color: var(--text-muted); font-size: 13.5px; font-style: italic;">(${sec.mainSent.vi})</p>
                        </div>

                        <div style="margin-bottom: 12px; padding: 12px 14px; background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px;">
                            <span style="font-weight: 700; color: #15803d; font-size: 13.5px; display: block; margin-bottom: 8px;">
                                <i class="fa-solid fa-list-check"></i> ${sec.expandIntro}
                            </span>
                            <div style="display: flex; flex-wrap: wrap;">
                                ${actHtml}
                            </div>
                        </div>

                        <div style="border-top: 1px dashed #e2e8f0; padding-top: 10px;">
                            <span style="font-weight: 700; color: var(--text-main); font-size: 13.5px; display: block; margin-bottom: 3px;">
                                <i class="fa-solid fa-flag-checkered" style="color: #059669; font-size: 12px;"></i> Câu kết đoạn:
                            </span>
                            <p style="margin-bottom: 2px; padding-left: 12px; font-weight: 600; color: #1e293b;">${sec.concludingSent.en}</p>
                            <p style="margin-bottom: 0; padding-left: 12px; color: var(--text-muted); font-size: 13.5px; font-style: italic;">(${sec.concludingSent.vi})</p>
                        </div>
                    </div>
                `;
            } else if (sec.sectionNumber === "3") {
                let dutiesHtml = sec.duties.map(d => `
                    <div style="margin-bottom: 6px; padding-left: 12px;">
                        <strong style="color: #b45309; font-size: 14px;">• ${d.en}</strong>
                        <div style="color: var(--text-muted); font-size: 13px; font-style: italic; padding-left: 10px;">(${d.vi})</div>
                    </div>
                `).join('');

                bodyHtml = `
                    <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px 16px; margin-bottom: 12px;">
                        <div style="margin-bottom: 12px;">
                            <span style="font-weight: 700; color: var(--text-main); font-size: 13.5px; display: block; margin-bottom: 3px;">
                                <i class="fa-solid fa-star" style="color: #f59e0b; font-size: 12px;"></i> Câu chính:
                            </span>
                            <p style="margin-bottom: 2px; padding-left: 12px; font-weight: 600; color: #1e293b;">${sec.mainSent.en}</p>
                            <p style="margin-bottom: 0; padding-left: 12px; color: var(--text-muted); font-size: 13.5px; font-style: italic;">(${sec.mainSent.vi})</p>
                        </div>

                        <div style="margin-bottom: 12px; padding: 12px 14px; background: #fffbeb; border: 1px solid #fde68a; border-radius: 8px;">
                            <span style="font-weight: 700; color: #b45309; font-size: 13.5px; display: block; margin-bottom: 8px;">
                                <i class="fa-solid fa-briefcase"></i> ${sec.expandIntro}
                            </span>
                            ${dutiesHtml}
                        </div>

                        <div style="border-top: 1px dashed #e2e8f0; padding-top: 10px;">
                            <span style="font-weight: 700; color: var(--text-main); font-size: 13.5px; display: block; margin-bottom: 3px;">
                                <i class="fa-solid fa-certificate" style="color: #d97706; font-size: 12px;"></i> Câu kết quả / Kỹ năng đạt được:
                            </span>
                            <p style="margin-bottom: 2px; padding-left: 12px; font-weight: 600; color: #1e293b;">${sec.resultSent.en}</p>
                            <p style="margin-bottom: 0; padding-left: 12px; color: var(--text-muted); font-size: 13.5px; font-style: italic;">(${sec.resultSent.vi})</p>
                        </div>
                    </div>
                `;
            } else if (sec.sectionNumber === "4") {
                let adjHtml = sec.adjectives.map(a => `
                    <span style="display: inline-block; background: #f3e8ff; border: 1px solid #d8b4fe; border-radius: 6px; padding: 4px 10px; margin: 3px; font-size: 13px;">
                        <strong style="color: #6b21a8;">${a.en}</strong> <span style="color: var(--text-muted); font-style: italic;">(${a.vi})</span>
                    </span>
                `).join('');

                let expandHtml = sec.expandSents.map(st => `
                    <div style="margin-bottom: 6px; padding-left: 12px;">
                        <p style="margin-bottom: 2px; color: var(--text-main); font-weight: 500;">• ${st.en}</p>
                        <p style="margin-bottom: 0; color: var(--text-muted); font-size: 13.5px; font-style: italic; padding-left: 8px;">(${st.vi})</p>
                    </div>
                `).join('');

                bodyHtml = `
                    <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px 16px; margin-bottom: 12px;">
                        <div style="margin-bottom: 12px;">
                            <span style="font-weight: 700; color: var(--text-main); font-size: 13.5px; display: block; margin-bottom: 3px;">
                                <i class="fa-solid fa-star" style="color: #f59e0b; font-size: 12px;"></i> Câu chính:
                            </span>
                            <p style="margin-bottom: 2px; padding-left: 12px; font-weight: 600; color: #1e293b;">${sec.mainSent.en}</p>
                            <p style="margin-bottom: 0; padding-left: 12px; color: var(--text-muted); font-size: 13.5px; font-style: italic;">(${sec.mainSent.vi})</p>
                        </div>

                        <div style="margin-bottom: 12px; padding: 10px 14px; background: #faf5ff; border: 1px solid #e9d5ff; border-radius: 8px;">
                            <span style="font-weight: 700; color: #7e22ce; font-size: 13.5px; display: block; margin-bottom: 6px;">
                                <i class="fa-solid fa-user-tag"></i> Tính từ tính cách gợi ý:
                            </span>
                            <div style="line-height: 1.8;">
                                ${adjHtml}
                            </div>
                        </div>

                        <div style="border-top: 1px dashed #e2e8f0; padding-top: 10px;">
                            <span style="font-weight: 700; color: var(--text-main); font-size: 13.5px; display: block; margin-bottom: 4px;">
                                <i class="fa-solid fa-circle-info" style="color: #8b5cf6; font-size: 12px;"></i> Câu mở rộng:
                            </span>
                            ${expandHtml}
                        </div>
                    </div>
                `;
            }

            return `
                <div class="outline-step" style="margin-bottom: 20px; border-left: 4px solid ${sec.themeColor};">
                    <h4 style="margin-bottom: 14px; color: ${sec.themeColor}; font-size: 16.5px; font-weight: 700;">
                        ${sec.sectionNumber}. ${sec.sectionTitle}
                    </h4>
                    ${bodyHtml}
                </div>
            `;
        }).join('');
    } else if (data.apologyOutlineSections) {
        hintsHtml = data.apologyOutlineSections.map(sec => {
            let bodyHtml = '';

            if (sec.type === 'phrase_list') {
                let phrasesHtml = sec.phrases.map(p => `
                    <div style="margin-bottom: 8px; padding-left: 12px;">
                        <span style="font-weight: 600; color: var(--text-main);">• ${p.en}</span>
                        <span style="color: var(--text-muted); font-size: 13.5px; font-style: italic;"> (${p.vi})</span>
                    </div>
                `).join('');

                bodyHtml = `
                    <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px 16px;">
                        <p style="font-weight: 600; color: var(--primary-color); margin-bottom: 10px; font-size: 14px;">
                            ${sec.description}
                        </p>
                        ${phrasesHtml}
                    </div>
                `;
            } else if (sec.type === 'scenario_list') {
                bodyHtml = sec.scenarios.map(sc => {
                    let explainHtml = sc.explainSents.map(st => `
                        <div style="margin-bottom: 6px; padding-left: 12px;">
                            <p style="margin-bottom: 2px; color: var(--text-main); font-weight: 500;">• ${st.en}</p>
                            <p style="margin-bottom: 0; color: var(--text-muted); font-size: 13.5px; font-style: italic; padding-left: 8px;">(${st.vi})</p>
                        </div>
                    `).join('');

                    return `
                        <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px 16px; margin-bottom: 12px; box-shadow: 0 1px 3px rgba(0,0,0,0.03);">
                            <h5 style="color: ${sec.themeColor}; font-size: 15px; margin-bottom: 10px; font-weight: 700;">
                                ${sc.name}
                            </h5>
                            <div style="margin-bottom: 10px; padding-left: 4px;">
                                <span style="font-weight: 700; color: var(--text-main); font-size: 13.5px; display: block; margin-bottom: 3px;">
                                    <i class="fa-solid fa-star" style="color: #f59e0b; font-size: 12px;"></i> Câu chính:
                                </span>
                                <p style="margin-bottom: 2px; padding-left: 12px; font-weight: 600; color: #1e293b;">${sc.mainSent.en}</p>
                                <p style="margin-bottom: 0; padding-left: 12px; color: var(--text-muted); font-size: 13.5px; font-style: italic;">(${sc.mainSent.vi})</p>
                            </div>
                            <div style="padding-left: 4px; border-top: 1px dashed #e2e8f0; padding-top: 8px;">
                                <span style="font-weight: 700; color: var(--text-main); font-size: 13.5px; display: block; margin-bottom: 4px;">
                                    <i class="fa-solid fa-circle-info" style="color: ${sec.themeColor}; font-size: 12px;"></i> Câu giải thích / mở rộng:
                                </span>
                                ${explainHtml}
                            </div>
                        </div>
                    `;
                }).join('');
            } else if (sec.type === 'case_list') {
                bodyHtml = sec.cases.map(cs => {
                    let expandHtml = cs.expandSents.map(st => `
                        <div style="margin-bottom: 6px; padding-left: 12px;">
                            <p style="margin-bottom: 2px; color: var(--text-main); font-weight: 500;">• ${st.en}</p>
                            <p style="margin-bottom: 0; color: var(--text-muted); font-size: 13.5px; font-style: italic; padding-left: 8px;">(${st.vi})</p>
                        </div>
                    `).join('');

                    return `
                        <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px 16px; margin-bottom: 12px; box-shadow: 0 1px 3px rgba(0,0,0,0.03);">
                            <h5 style="color: ${sec.themeColor}; font-size: 15px; margin-bottom: 10px; font-weight: 700;">
                                ${cs.name}
                            </h5>
                            <div style="margin-bottom: 10px; padding-left: 4px;">
                                <span style="font-weight: 700; color: var(--text-main); font-size: 13.5px; display: block; margin-bottom: 3px;">
                                    <i class="fa-solid fa-star" style="color: #f59e0b; font-size: 12px;"></i> Câu chính:
                                </span>
                                <p style="margin-bottom: 2px; padding-left: 12px; font-weight: 600; color: #1e293b;">${cs.mainSent.en}</p>
                                <p style="margin-bottom: 0; padding-left: 12px; color: var(--text-muted); font-size: 13.5px; font-style: italic;">(${cs.mainSent.vi})</p>
                            </div>
                            <div style="padding-left: 4px; border-top: 1px dashed #e2e8f0; padding-top: 8px;">
                                <span style="font-weight: 700; color: var(--text-main); font-size: 13.5px; display: block; margin-bottom: 4px;">
                                    <i class="fa-solid fa-circle-info" style="color: ${sec.themeColor}; font-size: 12px;"></i> Câu mở rộng:
                                </span>
                                ${expandHtml}
                            </div>
                        </div>
                    `;
                }).join('');
            }

            return `
                <div class="outline-step" style="margin-bottom: 20px; border-left: 4px solid ${sec.themeColor};">
                    <h4 style="margin-bottom: 14px; color: ${sec.themeColor}; font-size: 16.5px; font-weight: 700;">
                        ${sec.sectionNumber}. ${sec.sectionTitle}
                    </h4>
                    ${bodyHtml}
                </div>
            `;
        }).join('');
    } else if (data.feedbackSections) {
        hintsHtml = data.feedbackSections.map(sec => {
            let catCardsHtml = sec.categories.map(cat => {
                let reasonsHtml = cat.reasons.map(r => `
                    <div style="margin-bottom: 6px; padding-left: 12px;">
                        <p style="margin-bottom: 2px; color: var(--text-main); font-weight: 500;">• ${r.en}</p>
                        <p style="margin-bottom: 0; color: var(--text-muted); font-size: 13.5px; font-style: italic; padding-left: 10px;">(${r.vi})</p>
                    </div>
                `).join('');

                let solHtml = '';
                if (cat.solutions && cat.solutions.length > 0) {
                    let solItems = cat.solutions.map(s => `
                        <div style="margin-bottom: 4px; padding-left: 12px;">
                            <span style="color: #059669; font-weight: 600;">➔ ${s.en}</span>
                            <span style="color: var(--text-muted); font-size: 13px; font-style: italic;"> (${s.vi})</span>
                        </div>
                    `).join('');

                    solHtml = `
                        <div style="margin-top: 10px; padding-top: 8px; border-top: 1px dashed #e2e8f0;">
                            <span style="font-weight: 700; color: #059669; font-size: 13.5px; display: block; margin-bottom: 4px;">
                                <i class="fa-solid fa-lightbulb"></i> Giải pháp đề xuất:
                            </span>
                            ${solItems}
                        </div>
                    `;
                }

                return `
                    <div style="background: #ffffff; border: 1px solid ${sec.borderCol}; border-radius: 8px; padding: 14px 16px; margin-bottom: 12px; box-shadow: 0 1px 3px rgba(0,0,0,0.03);">
                        <h5 style="color: ${sec.themeColor}; font-size: 15.5px; margin-bottom: 8px; font-weight: 700;">
                            ${cat.name}
                        </h5>
                        <div style="margin-bottom: 4px;">
                            <span style="font-weight: 700; color: var(--text-main); font-size: 13.5px; display: block; margin-bottom: 4px;">
                                <i class="fa-solid fa-angles-right" style="color: ${sec.themeColor};"></i> Lý do:
                            </span>
                            ${reasonsHtml}
                        </div>
                        ${solHtml}
                    </div>
                `;
            }).join('');

            return `
                <div class="outline-step" style="margin-bottom: 22px; border-left: 4px solid ${sec.themeColor};">
                    <h4 style="margin-bottom: 14px; color: ${sec.themeColor}; font-size: 17px; display: flex; align-items: center; gap: 8px;">
                        <i class="${sec.icon}"></i> ${sec.sectionTitle}
                    </h4>
                    ${catCardsHtml}
                </div>
            `;
        }).join('');
    } else if (data.hints) {
        hintsHtml = data.hints.map((hint, idx) => {
            if (hint.type === "complaint_triplet") {
                let itemsHtml = hint.items.map((item, itemIdx) => `
                    <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px 16px; margin-bottom: 12px;">
                        <div style="margin-bottom: 8px;">
                            <span style="font-weight: 700; color: #dc2626; display: block; margin-bottom: 2px;">
                                ${itemIdx + 1}. Vấn đề phàn nàn:
                            </span>
                            <strong style="color: var(--text-main); font-size: 15px; padding-left: 12px; display: block;">${item.problemEn}</strong>
                            <span style="color: var(--text-muted); font-size: 13.5px; padding-left: 12px; display: block; font-style: italic;">(${item.problemVi})</span>
                        </div>

                        <div style="margin-bottom: 8px; padding-left: 12px; border-left: 3px solid #3b82f6; margin-left: 4px;">
                            <span style="font-weight: 700; color: #2563eb; display: block; margin-bottom: 2px;">
                                → Mô tả chi tiết:
                            </span>
                            <span style="color: var(--text-main); font-weight: 600; display: block;">${item.descEn}</span>
                            <span style="color: var(--text-muted); font-size: 13.5px; display: block; font-style: italic;">(${item.descVi})</span>
                        </div>

                        <div style="padding-left: 12px; border-left: 3px solid #10b981; margin-left: 4px;">
                            <span style="font-weight: 700; color: #059669; display: block; margin-bottom: 2px;">
                                → Đề xuất giải pháp:
                            </span>
                            <span style="color: #047857; font-weight: 600; display: block;">${item.solEn}</span>
                            <span style="color: var(--text-muted); font-size: 13.5px; display: block; font-style: italic;">(${item.solVi})</span>
                        </div>
                    </div>
                `).join('');

                return `
                    <div class="outline-step" style="margin-bottom: 18px;">
                        <h4 style="margin-bottom: 14px; color: var(--accent-red); font-size: 17px; display: flex; align-items: center; gap: 8px;">
                            <i class="fa-solid fa-circle-exclamation" style="color: #dc2626; font-size: 15px;"></i> ${hint.title}
                        </h4>
                        ${itemsHtml}
                    </div>
                `;
            } else if (hint.type === "custom_outline_choice") {
                let sentHtml = hint.sentences.map(st => `
                    <div style="margin-bottom: 10px; padding-left: 12px;">
                        <p style="margin-bottom: 2px;">• <strong>${st.en}</strong></p>
                        <p style="margin-bottom: 0; color: var(--text-muted); font-size: 13.5px;">(${st.vi})</p>
                    </div>
                `).join('');

                return `
                    <div class="outline-step" style="margin-bottom: 18px;">
                        <h4 style="margin-bottom: 12px; color: var(--accent-red); font-size: 17px;">${hint.title}</h4>
                        
                        <div style="margin-bottom: 14px; padding-left: 4px;">
                            <p style="font-weight: 700; color: var(--text-main); margin-bottom: 4px;">
                                Cấu trúc hỏi thông tin:
                            </p>
                            <p style="margin-bottom: 0; padding-left: 14px; color: var(--primary-color); font-style: italic; font-weight: 500;">
                                ↳ Tự chọn 1 cấu trúc ghép vô
                            </p>
                        </div>

                        <div style="padding-left: 4px;">
                            <p style="font-weight: 700; color: var(--text-main); margin-bottom: 8px;">
                                Câu mở rộng:
                            </p>
                            ${sentHtml}
                        </div>
                    </div>
                `;
            } else {
                let itemsHtml = hint.items.map(item => `
                    <div style="margin-bottom: 14px; padding-left: 6px;">
                        <p style="margin-bottom: 2px;">• <strong>${item.en}</strong> (${item.vi})</p>
                        <p style="margin-bottom: 2px; color: var(--primary-color); padding-left: 16px;">➔ <em>${item.reasonEn}</em></p>
                        <p style="margin-bottom: 0; color: var(--text-muted); font-size: 14px; padding-left: 16px;">(${item.reasonVi})</p>
                    </div>
                `).join('');

                return `
                    <div class="outline-step" style="margin-bottom: 16px;">
                        <h4 style="margin-bottom: 12px; color: var(--accent-red); font-size: 17px;">${hint.title}</h4>
                        ${itemsHtml}
                    </div>
                `;
            }
        }).join('');
    }

    const promptBullets = data.prompt.split('\n').filter(l => l.startsWith('•')).map(l => `<li>${l.replace('•', '').trim()}</li>`).join('');
    const promptIntro = data.prompt.substring(0, data.prompt.indexOf('•')).trim();

    container.innerHTML = `
        <!-- Extra Practice Header Card with 20-min Timer -->
        <div class="full-practice-header" style="margin-bottom: 20px;">
            <div class="full-practice-title-group">
                <h3><i class="fa-solid fa-book-open"></i> BÀI LUYỆN TẬP THÊM (CANH GIỜ 20 PHÚT)</h3>
                <p class="full-practice-subtitle"><i class="fa-solid fa-circle-info"></i> Luyện tập thêm một đề thi VSTEP mới cùng dạng. Canh giờ chuẩn 20 phút để rèn luyện tốc độ làm bài thực tế.</p>
            </div>
            <div class="full-practice-header-right" style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
                <div class="recitation-timer-badge timer-normal" id="extraPracticeTimerBadge" title="Thời gian làm bài: 20 phút">
                    <i class="fa-solid fa-stopwatch"></i>
                    <span class="timer-label">Thời gian:</span>
                    <span class="timer-countdown" id="extraPracticeCountdown">20:00</span>
                    <button class="btn-timer-action" id="btnToggleExtraPracticeTimer" type="button" onclick="toggleExtraPracticeTimer()" title="Tạm dừng / Tiếp tục đếm giờ">
                        <i class="fa-solid fa-pause" id="extraPracticeTimerIcon"></i>
                    </button>
                </div>
                <div class="word-counter-badge" id="extraPracticeWordBadge" title="Yêu cầu tối thiểu 120 từ">
                    <i class="fa-solid fa-pen-fancy"></i>
                    <span class="word-counter-label">Số từ:</span>
                    <span class="word-counter-count" id="extraPracticeWordCount">0</span> / 120 từ
                </div>
            </div>
        </div>

        <!-- Prompt Card (Using standard website style) -->
        <div class="sample-prompt-container">
            <div class="sample-prompt-header">
                <i class="fa-solid fa-file-circle-question"></i> ĐỀ BÀI (TOPIC PROMPT) - ${data.title}
            </div>
            <div class="sample-prompt-text">
                <p>${promptIntro.replace(/\n+/g, '<br>')}</p>
                <ul style="margin-top: 8px;">
                    ${promptBullets}
                </ul>
                <p style="margin-top: 10px; font-style: italic; color: var(--text-muted);">
                    <i class="fa-solid fa-triangle-exclamation" style="color: #f59e0b;"></i> You should write at least 120 words. Do not include your name or address. Your response will be evaluated in terms of Task Fulfillment, Organization, Vocabulary, and Grammar.
                </p>
            </div>
            <div class="sample-analysis-grid">
                <div class="sample-analysis-item">
                    <strong>Người nhận</strong>
                    <span>${data.analysis.recipient}</span>
                </div>
                <div class="sample-analysis-item">
                    <strong>Mục đích</strong>
                    <span>${data.analysis.purpose}</span>
                </div>
                <div class="sample-analysis-item">
                    <strong>Văn phong</strong>
                    <span>${data.analysis.style}</span>
                </div>
                <div class="sample-analysis-item">
                    <strong>Yêu cầu cốt lõi</strong>
                    <span>${data.analysis.requirements}</span>
                </div>
            </div>
        </div>

        <!-- Suggestions Collapsible Accordion (Bấm vào mới hiện) -->
        <div class="content-block" style="margin-top: 25px;">
            <div class="outline-step" style="cursor: pointer; display: flex; justify-content: space-between; align-items: center; padding: 18px 22px; transition: all 0.2s ease;" onclick="toggleExtraHints()">
                <h4 style="margin: 0; color: var(--accent-red); font-size: 17px; display: flex; align-items: center; gap: 10px;">
                    <i class="fa-solid fa-lightbulb" style="color: #f59e0b;"></i> GỢI Ý Ý TƯỞNG (BẤM ĐỂ XEM/ẨN GỢI Ý)
                </h4>
                <i class="fa-solid fa-chevron-down" id="extraHintsChevron" style="color: var(--primary-color); font-size: 16px; transition: transform 0.25s ease;"></i>
            </div>
            <div id="extraHintsContent" class="hidden" style="margin-top: 14px;">
                ${hintsHtml}
            </div>
        </div>

        <!-- Student Writing Area (Using standard editor style) -->
        <div class="content-block" style="margin-top: 25px;">
            <h3><i class="fa-solid fa-pen-nib"></i> BÀI LÀM CỦA HỌC VIÊN</h3>
            <div class="editor-area">
                <div class="editor-header" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; flex-wrap: wrap; gap: 10px;">
                    <span style="font-size: 14.5px; font-weight: 600; color: var(--text-main);"><i class="fa-solid fa-keyboard" style="color: var(--primary-color);"></i> Nhập bài viết tại đây (Yêu cầu ≥ 120 từ):</span>
                    <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
                        <div class="autosave-pill" id="extraAutoSavePill" title="Bản nháp được hệ thống tự động sao lưu liên tục">
                            <i class="fa-solid fa-cloud-check"></i>
                            <span id="extraAutoSaveText">Tự động sao lưu sẵn sàng</span>
                        </div>
                        <div class="recitation-timer-badge timer-normal" id="extraPracticeTimerBadgeSticky" title="Thời gian làm bài: 20 phút">
                            <i class="fa-solid fa-stopwatch"></i>
                            <span class="timer-label">Thời gian:</span>
                            <span class="timer-countdown" id="extraPracticeCountdownSticky">20:00</span>
                            <button class="btn-timer-action" id="btnToggleExtraPracticeTimerSticky" type="button" onclick="toggleExtraPracticeTimer()" title="Tạm dừng / Tiếp tục đếm giờ">
                                <i class="fa-solid fa-pause" id="extraPracticeTimerIconSticky"></i>
                            </button>
                        </div>
                        <div class="word-counter-badge" id="extraPracticeWordBadgeSticky" title="Yêu cầu tối thiểu 120 từ">
                            <i class="fa-solid fa-pen-fancy"></i>
                            <span class="word-counter-label">Số từ:</span>
                            <span class="word-counter-count" id="extraLiveWordCount">0</span> / 120 từ
                        </div>
                    </div>
                </div>
                <textarea id="extraWritingArea" placeholder="Dear Hiring Manager,&#10;&#10;I am writing to apply for the receptionist position..." rows="12" oncopy="return false;" onpaste="return false;" oncut="return false;" ondrop="return false;"></textarea>
                <div class="editor-actions">
                    <button class="btn btn-secondary" onclick="resetExtraPracticeArea()"><i class="fa-solid fa-rotate-left"></i> Viết lại (Đặt lại 20 phút)</button>
                    <button class="btn btn-primary" onclick="gradeExtraPractice('${typeId}')"><i class="fa-solid fa-circle-check"></i> Nộp bài & Chấm điểm VSTEP (30%)</button>
                    <button class="btn btn-secondary btn-download-file" onclick="downloadExtraPracticeEssay('${typeId}', false)" title="Tải bài viết về máy định dạng Word (.doc)"><i class="fa-solid fa-file-word" style="color: #2b579a;"></i> Tải bài viết (.doc)</button>
                    <button class="btn btn-secondary btn-clear-draft" onclick="clearExtraPracticeDraft('${typeId}')" title="Xóa bản nháp bài làm thêm"><i class="fa-solid fa-trash-can"></i> Xóa nháp</button>
                </div>
            </div>
        </div>

        <!-- Evaluation Results Area -->
        <div class="content-block hidden" id="extraResultCard" style="margin-top: 30px;">
            <!-- Filled on submission -->
        </div>
    `;

    currentExtraPracticeTypeId = typeId;
    resetExtraPracticeTimer();

    const writingArea = document.getElementById('extraWritingArea');
    if (writingArea) {
        writingArea.addEventListener('input', () => {
            updateExtraWordCount();
            saveExtraPracticeDraft(typeId);
        });
        if (typeof attachAntiCopyPasteToElement === 'function') {
            attachAntiCopyPasteToElement(writingArea, 'BÀI THỰC HÀNH THÊM');
        }
    }

    // Restore draft if saved
    loadExtraPracticeDraft(typeId);

    const panel = document.getElementById('extraPracticePanel');
    if (panel && panel.classList.contains('active')) {
        startExtraPracticeTimer();
    }
}

function toggleExtraHints() {
    const content = document.getElementById('extraHintsContent');
    const chevron = document.getElementById('extraHintsChevron');
    if (!content || !chevron) return;
    content.classList.toggle('hidden');
    chevron.classList.toggle('fa-chevron-up');
    chevron.classList.toggle('fa-chevron-down');
}

function updateExtraWordCount() {
    const writingArea = document.getElementById('extraWritingArea');
    const display = document.getElementById('extraLiveWordCount');
    const badgeCount = document.getElementById('extraPracticeWordCount');
    if (!writingArea) return 0;
    const text = writingArea.value.trim();
    const count = text === '' ? 0 : text.split(/\s+/).filter(w => w !== '').length;
    
    if (display) {
        display.textContent = count;
    }
    if (badgeCount) {
        badgeCount.textContent = count;
    }

    const badges = [
        document.getElementById('extraPracticeWordBadge'),
        document.getElementById('extraPracticeWordBadgeSticky')
    ];
    badges.forEach(b => {
        if (!b) return;
        b.classList.remove('word-count-pass', 'word-count-warn');
        if (count >= 120) {
            b.classList.add('word-count-pass');
        } else if (count > 0) {
            b.classList.add('word-count-warn');
        }
    });

    return count;
}

function resetExtraPracticeArea() {
    const writingArea = document.getElementById('extraWritingArea');
    const resultCard = document.getElementById('extraResultCard');
    if (!writingArea) return;
    if (confirm('Bạn có chắc muốn xóa bài làm hiện tại để viết lại và đặt lại đồng hồ 20 phút không?')) {
        writingArea.value = '';
        writingArea.disabled = false;
        updateExtraWordCount();
        if (resultCard) {
            resultCard.classList.add('hidden');
            resultCard.innerHTML = '';
        }
        resetExtraPracticeTimer();
        try {
            if (currentExtraPracticeTypeId) {
                localStorage.removeItem('vstep_draft_extra_practice_' + currentExtraPracticeTypeId);
            }
        } catch (e) {}
        updateExtraPracticeAutoSaveUI('Đã xóa bản nháp', false);
        const panel = document.getElementById('extraPracticePanel');
        if (panel && panel.classList.contains('active')) {
            startExtraPracticeTimer();
        }
        writingArea.focus();
    }
}

// --- Comprehensive Diagnostic Rules Engine ---
function diagnoseVstepErrors(rawText, promptData) {
    const errors = [];
    const lower = rawText.toLowerCase();

    // --- A. SALUTATION & GREETING ---
    if (/\bDear\s+[a-z]+/i.test(rawText)) {
        const m = rawText.match(/\bDear\s+([a-zA-Z]+)/);
        if (m && m[1][0] !== m[1][0].toUpperCase()) {
            errors.push({
                type: "Lời mở đầu (Chính tả)",
                category: "spelling",
                wrong: m[0],
                correct: `Dear ${m[1][0].toUpperCase() + m[1].slice(1)},`,
                reason: "Tên riêng của người nhận bắt buộc phải viết hoa chữ cái đầu và có dấu phẩy sau lời chào."
            });
        }
    }

    if (/\bThank\s+for\b/i.test(rawText) && !/\bThanks\s+for\b/i.test(rawText) && !/\bThank\s+you\s+for\b/i.test(rawText)) {
        errors.push({
            type: "Ngữ pháp / Lời mở đầu",
            category: "grammar",
            wrong: "Thank for your letter",
            correct: "Thanks for your letter / Thank you for your letter",
            reason: "Cụm từ cảm ơn mở thư đúng ngữ pháp phải có 's' ('Thanks for...') hoặc dùng 'Thank you for...'."
        });
    }

    if (/\bI('m| am)\s+write\b/i.test(rawText)) {
        errors.push({
            type: "Thì của động từ (Tenses)",
            category: "grammar",
            wrong: "I am write / I'm write",
            correct: "I am writing / I'm writing",
            reason: "Sau to be (am/is/are) trong thì hiện tại tiếp diễn phải dùng V-ing ('I am writing to...')."
        });
    }

    if (/\bhope\s+you\s+well\b/i.test(rawText) && !/\bhope\s+you\s+are\s+well\b/i.test(rawText) && !/\bhope\s+you\s+are\s+doing\s+well\b/i.test(rawText)) {
        errors.push({
            type: "Cấu trúc câu (Thiếu động từ)",
            category: "grammar",
            wrong: "hope you well",
            correct: "hope you are well / hope you are doing well",
            reason: "Thiếu to be 'are' hoặc trợ động từ: 'I hope you are well' hoặc 'I hope you are doing well'."
        });
    }

    if (/\bBest\s+wish\b/i.test(rawText) && !/\bBest\s+wishes\b/i.test(rawText)) {
        errors.push({
            type: "Lời chào kết thúc",
            category: "spelling",
            wrong: "Best wish",
            correct: "Best wishes,",
            reason: "Lời chào kết thư chuẩn là 'Best wishes,' (danh từ số nhiều có 'es' kèm dấu phẩy)."
        });
    }

    if (/\bYours\s+sincere\b/i.test(rawText)) {
        errors.push({
            type: "Lời chào kết thúc",
            category: "grammar",
            wrong: "Yours sincere",
            correct: "Yours sincerely,",
            reason: "Cần dùng trạng từ: 'Yours sincerely,'."
        });
    }

    // --- B. INDIRECT QUESTIONS (CÂU HỎI GIÁN TIẾP - ĐẶC TRƯNG THƯ REQUEST) ---
    const rIndirectInversion = /\b(tell\s+me|know|wondering|wonder)\s+(where\s+is|what\s+is|how\s+much\s+is|how\s+is|who\s+is)\s+([a-zA-Z\s]+?)([.?!,]|$)/gi;
    let mInd;
    while ((mInd = rIndirectInversion.exec(rawText)) !== null) {
        const lead = mInd[1];
        const whVerb = mInd[2].split(/\s+/);
        const whWord = whVerb[0];
        const verb = whVerb[1];
        const subject = mInd[3].trim();
        errors.push({
            type: "Cấu trúc câu hỏi gián tiếp",
            category: "grammar",
            wrong: mInd[0].trim(),
            correct: `${lead} ${whWord} ${subject} ${verb}`,
            reason: `Trong câu hỏi gián tiếp sau '${lead}', không đảo trợ động từ/to be lên trước chủ ngữ. Cấu trúc chuẩn là: '${whWord} + Chủ ngữ (${subject}) + Động từ (${verb})'.`
        });
    }

    // --- C. ARTICLES (A / AN / THE / ZERO ARTICLE) ---
    const rStayHotel = /\bstay\s+(in|at)\s+(hotel|homestay)\b/gi;
    let mStay;
    while ((mStay = rStayHotel.exec(rawText)) !== null) {
        errors.push({
            type: "Mạo từ (Articles)",
            category: "article",
            wrong: mStay[0],
            correct: `stay ${mStay[1]} a ${mStay[2]}`,
            reason: `Danh từ đếm được số ít '${mStay[2]}' bắt buộc phải có mạo từ 'a' phía trước.`
        });
    }

    const rSingularItems = /\b(wear|bring|take|buy|choose|visit|rent|book|join|take)\s+(ba\s*ba\s+shirt|shirt|dress|hat|jacket|camera|conical\s+hat|umbrella|raincoat|room|hotel|homestay|taxi|bus|boat|museum|market|temple|pagoda|course|center)\b/gi;
    let mSingular;
    while ((mSingular = rSingularItems.exec(rawText)) !== null) {
        const verb = mSingular[1];
        const noun = mSingular[2];
        const art = noun.toLowerCase().startsWith('u') ? 'an' : 'a';
        errors.push({
            type: "Mạo từ (Articles)",
            category: "article",
            wrong: mSingular[0],
            correct: `${verb} ${art} ${noun}`,
            reason: `Danh từ đếm được số ít '${noun}' cần mạo từ '${art}' phía trước (${verb} ${art} ${noun}).`
        });
    }

    const rAndSingular = /\b(and|or)\s+(umbrella|raincoat|camera|hat|jacket|shirt|conical\s+hat|map|guide)\b/gi;
    let mAnd;
    while ((mAnd = rAndSingular.exec(rawText)) !== null) {
        const conj = mAnd[1];
        const noun = mAnd[2];
        const art = noun.toLowerCase().startsWith('u') ? 'an' : 'a';
        errors.push({
            type: "Mạo từ (Articles)",
            category: "article",
            wrong: mAnd[0],
            correct: `${conj} ${art} ${noun}`,
            reason: `Danh từ đếm được số ít '${noun}' sau liên từ '${conj}' cần mạo từ '${art}' (${conj} ${art} ${noun}).`
        });
    }

    if (/\bin\s+city\s+center\b/gi.test(rawText) || /\bin\s+city\s+centre\b/gi.test(rawText)) {
        errors.push({
            type: "Mạo từ (Articles)",
            category: "article",
            wrong: "in city center",
            correct: "in the city center",
            reason: "Cụm từ chỉ trung tâm thành phố cần mạo từ xác định 'the': 'in the city center'."
        });
    }

    if (/\b(in\s+morning|in\s+afternoon|in\s+evening)\b/gi.test(rawText)) {
        const m = rawText.match(/\b(in\s+morning|in\s+afternoon|in\s+evening)\b/i);
        if (m) {
            errors.push({
                type: "Mạo từ (Articles)",
                category: "article",
                wrong: m[0],
                correct: m[0].replace('in ', 'in the '),
                reason: `Cụm từ chỉ buổi trong ngày cần mạo từ 'the' (${m[0].replace('in ', 'in the ')}).`
            });
        }
    }

    if (/\bby\s+a\s+(bus|taxi|car|train|plane|boat|motorbike)\b/gi.test(rawText)) {
        const m = rawText.match(/\bby\s+a\s+(bus|taxi|car|train|plane|boat|motorbike)\b/i);
        if (m) {
            errors.push({
                type: "Mạo từ (Articles)",
                category: "article",
                wrong: m[0],
                correct: m[0].replace('by a ', 'by '),
                reason: `Khi chỉ phương tiện đi lại bằng cấu trúc 'by + phương tiện', không dùng mạo từ 'a/an' (${m[0].replace('by a ', 'by ')}).`
            });
        }
    }

    // --- D. UNCOUNTABLE NOUNS ---
    if (/\b(advices|an\s+advice)\b/gi.test(rawText)) {
        const m = rawText.match(/\b(advices|an\s+advice)\b/i);
        errors.push({
            type: "Danh từ không đếm được",
            category: "grammar",
            wrong: m ? m[0] : "advices",
            correct: "some advice / a piece of advice",
            reason: "'advice' là danh từ không đếm được, không thêm 's' và không dùng mạo từ 'an'."
        });
    }

    if (/\b(informations|an\s+information)\b/gi.test(rawText)) {
        const m = rawText.match(/\b(informations|an\s+information)\b/i);
        errors.push({
            type: "Danh từ không đếm được",
            category: "grammar",
            wrong: m ? m[0] : "informations",
            correct: "some information / a piece of information",
            reason: "'information' là danh từ không đếm được, không có dạng số nhiều 'informations'."
        });
    }

    if (/\bclothings\b/gi.test(rawText)) {
        errors.push({
            type: "Danh từ không đếm được",
            category: "grammar",
            wrong: "clothings",
            correct: "clothes / clothing",
            reason: "'clothing' không đếm được (không có 's'). Nếu muốn chỉ quần áo nói chung, hãy dùng 'clothes'."
        });
    }

    // --- E. PARTS OF SPEECH & CONFUSING WORDS ---
    if (/\bexperience\s+teachers\b/gi.test(rawText)) {
        errors.push({
            type: "Từ loại (Part of Speech)",
            category: "vocab",
            wrong: "experience teachers",
            correct: "experienced teachers",
            reason: "Cần dùng tính từ 'experienced' (giàu kinh nghiệm) để bổ nghĩa cho danh từ 'teachers'."
        });
    }

    if (/\bthe\s+cultural\s+of\b/gi.test(rawText)) {
        errors.push({
            type: "Từ loại (Part of Speech)",
            category: "vocab",
            wrong: "the cultural of Can Tho",
            correct: "the culture of Can Tho / the cultural identity of Can Tho",
            reason: "'cultural' là tính từ. Đứng sau mạo từ 'the' và trước 'of' bắt buộc phải dùng danh từ 'culture'."
        });
    }

    if (/\bvery\s+beauty\b/gi.test(rawText)) {
        errors.push({
            type: "Từ loại (Part of Speech)",
            category: "vocab",
            wrong: "very beauty",
            correct: "very beautiful",
            reason: "Sau phó từ 'very' bổ nghĩa cho địa điểm/cảnh quan phải dùng tính từ 'beautiful', không dùng danh từ 'beauty'."
        });
    }

    if (/\b(give|give you)\s+some\s+advise\b/gi.test(rawText)) {
        errors.push({
            type: "Cặp từ dễ nhầm lẫn",
            category: "vocab",
            wrong: "give you some advise",
            correct: "give you some advice",
            reason: "'advise' là động từ (khuyên bảo). Danh từ 'lời khuyên' phải viết là 'advice' (đuôi -ce)."
        });
    }

    if (/\bNinh\s+Kieu\s+way\b/gi.test(rawText)) {
        errors.push({
            type: "Dùng từ / Địa danh",
            category: "vocab",
            wrong: "Ninh Kieu way",
            correct: "Ninh Kieu Wharf / Ninh Kieu Pedestrian Bridge",
            reason: "Địa danh Bến Ninh Kiều dùng 'Wharf', Cầu đi bộ dùng 'Pedestrian Bridge', không dùng 'way'."
        });
    }

    // --- F. PREPOSITIONS & COLLOCATIONS ---
    if (/\b(complain\s+with)\b/gi.test(rawText)) {
        errors.push({
            type: "Giới từ đi kèm động từ",
            category: "grammar",
            wrong: "complain with",
            correct: "complain about",
            reason: "Phàn nàn về điều gì dùng 'complain about', không dùng 'complain with'."
        });
    }

    if (/\b(was|were)\s+not\s+satisfy\b/gi.test(rawText)) {
        errors.push({
            type: "Từ loại / Thể bị động",
            category: "grammar",
            wrong: "was not satisfy",
            correct: "was not satisfied",
            reason: "Sau to be diễn tả cảm xúc/tình trạng không hài lòng phải dùng tính từ/quá khứ phân từ 'satisfied'."
        });
    }

    if (/\blook\s+forward\s+to\s+(hear|receive)\b/gi.test(rawText)) {
        const m = rawText.match(/\blook\s+forward\s+to\s+(hear|receive)\b/i);
        if (m) {
            errors.push({
                type: "Dạng động từ sau giới từ",
                category: "grammar",
                wrong: m[0],
                correct: m[0].replace(m[1], m[1] === 'hear' ? 'hearing' : 'receiving'),
                reason: "Sau cụm 'look forward to' (to là giới từ) bắt buộc phải dùng V-ing ('look forward to hearing/receiving...')."
            });
        }
    }

    if (/\bsuitable\s+with\b/gi.test(rawText)) {
        errors.push({
            type: "Giới từ đi kèm tính từ",
            category: "grammar",
            wrong: "suitable with",
            correct: "suitable for",
            reason: "'suitable' đi với giới từ 'for' (suitable for my budget / suitable for me)."
        });
    }

    if (/\bconvenient\s+with\s+me\b/gi.test(rawText)) {
        errors.push({
            type: "Giới từ đi kèm tính từ",
            category: "grammar",
            wrong: "convenient with me",
            correct: "convenient for me",
            reason: "'convenient' đi với giới từ 'for' (convenient for me)."
        });
    }

    if (/\bfocus\s+in\b/gi.test(rawText)) {
        errors.push({
            type: "Giới từ đi kèm động từ",
            category: "grammar",
            wrong: "focus in",
            correct: "focus on",
            reason: "Động từ 'focus' đi kèm giới từ 'on' (focus on skills)."
        });
    }

    if (/\b(on\s+December|at\s+December|on\s+January|on\s+February|on\s+June|on\s+July)\b/gi.test(rawText)) {
        const m = rawText.match(/\b(on|at)\s+(December|January|February|March|April|May|June|July|August|September|October|November)\b/i);
        if (m) {
            errors.push({
                type: "Giới từ chỉ thời gian",
                category: "grammar",
                wrong: m[0],
                correct: `in ${m[2]}`,
                reason: `Trước tháng (không có ngày cụ thể) bắt buộc phải dùng giới từ 'in' (ví dụ: in ${m[2]}).`
            });
        }
    }

    // --- G. VERB PATTERNS & ADVICE STRUCTURES ---
    if (/\bshould\s+to\s+[a-z]+\b/gi.test(rawText)) {
        const m = rawText.match(/\bshould\s+to\s+([a-z]+)\b/i);
        if (m) {
            errors.push({
                type: "Cấu trúc động từ khuyết thiếu",
                category: "grammar",
                wrong: m[0],
                correct: `should ${m[1]}`,
                reason: "Sau động từ khuyết thiếu 'should' là động từ nguyên thể không to (should + Vo)."
            });
        }
    }

    if (/\bwould\s+be\s+a\s+good\s+idea\s+(try|stay|visit|wear|bring|go|ask|join)\b/gi.test(rawText)) {
        const m = rawText.match(/\bwould\s+be\s+a\s+good\s+idea\s+([a-z]+)\b/i);
        if (m) {
            errors.push({
                type: "Cấu trúc khuyên bảo",
                category: "grammar",
                wrong: m[0],
                correct: `would be a good idea to ${m[1]}`,
                reason: "Cấu trúc chuẩn: 'It would be a good idea TO + Vo'."
            });
        }
    }

    if (/\bIf\s+I\s+was\s+you\b/gi.test(rawText)) {
        errors.push({
            type: "Câu điều kiện loại 2",
            category: "grammar",
            wrong: "If I was you",
            correct: "If I were you",
            reason: "Trong câu điều kiện loại 2 giả định lời khuyên, to be luôn dùng 'were' cho tất cả các ngôi."
        });
    }

    // --- H. SENTENCE STRUCTURE & CONJUNCTIONS ---
    if (/the weather in Can Tho can be very pleasant in December and an ideal time/i.test(rawText)) {
        errors.push({
            type: "Cấu trúc câu (Sentence Structure)",
            category: "grammar",
            wrong: "...because the weather in Can Tho can be very pleasant in December and an ideal time for tourism.",
            correct: "...because the weather in Can Tho is very pleasant in December, making it an ideal time for tourism (hoặc: and December is an ideal time for tourism).",
            reason: "Lỗi cấu trúc câu không song hành: 'weather' (thời tiết) không thể là 'an ideal time' (khoảng thời gian). Cần dùng mệnh đề phân từ 'making it an ideal time' hoặc tách mệnh đề."
        });
    }

    if (/\bAlthough\b[^.!?\n]+,\s*but\b/gi.test(rawText)) {
        errors.push({
            type: "Cấu trúc liên từ kép",
            category: "grammar",
            wrong: "Although ..., but ...",
            correct: "Although ... [không dùng 'but'] (hoặc chỉ dùng '... but ...')",
            reason: "Trong tiếng Anh không dùng song song 'Although' và 'but' trong cùng một câu."
        });
    }

    if (/\bBecause\b[^.!?\n]+,\s*so\b/gi.test(rawText)) {
        errors.push({
            type: "Cấu trúc liên từ kép",
            category: "grammar",
            wrong: "Because ..., so ...",
            correct: "Because ... [không dùng 'so'] (hoặc chỉ dùng '... so ...')",
            reason: "Trong tiếng Anh không dùng song song 'Because' và 'so' trong cùng một câu."
        });
    }

    // Missing comma after transition words
    const transitions = [
        "Firstly", "Secondly", "Finally", "Moreover", "Besides",
        "Furthermore", "In addition", "Therefore", "For example", "However", "First of all"
    ];
    transitions.forEach(tr => {
        const reg = new RegExp(`(^|[.!?]\\s+)${tr}\\s+([a-zA-Z])`, 'g');
        let match;
        while ((match = reg.exec(rawText)) !== null) {
            errors.push({
                type: "Dấu câu sau liên từ nối",
                category: "punctuation",
                wrong: `${tr} ${match[2]}...`,
                correct: `${tr}, ${match[2]}...`,
                reason: `Sau trạng từ/liên từ chuyển ý đứng đầu câu '${tr}' bắt buộc phải có dấu phẩy.`
            });
        }
    });

    // --- I. SUBJECT-VERB AGREEMENT & COMMON SPELLINGS ---
    if (/\b(places|dishes|clothes|teachers|skills|topics|lockers|showers|lights|hooks)\s+is\b/gi.test(rawText)) {
        const m = rawText.match(/\b(places|dishes|clothes|teachers|skills|topics|lockers|showers|lights|hooks)\s+is\b/i);
        if (m) {
            errors.push({
                type: "Hòa hợp Chủ - Vị",
                category: "grammar",
                wrong: m[0],
                correct: m[0].replace('is', 'are'),
                reason: `Chủ ngữ số nhiều '${m[1]}' phải đi kèm động từ to be 'are'.`
            });
        }
    }

    const rLowerI = /(^|\s)i\s+(am|hope|think|want|would|will|can|suggest|recommend|need|also)\b/g;
    let mLowerI;
    while ((mLowerI = rLowerI.exec(rawText)) !== null) {
        errors.push({
            type: "Chính tả / Viết hoa",
            category: "spelling",
            wrong: `i ${mLowerI[2]}`,
            correct: `I ${mLowerI[2]}`,
            reason: "Đại từ nhân xưng 'I' (tôi) luôn luôn phải viết hoa trong tiếng Anh."
        });
    }

    const spellingDict = {
        "recieve": "receive",
        "untill": "until",
        "beautifull": "beautiful",
        "restuarant": "restaurant",
        "resturant": "restaurant",
        "delicous": "delicious",
        "alot": "a lot",
        "convinient": "convenient",
        "unconvinient": "inconvenient",
        "differnt": "different",
        "informashun": "information",
        "tomorow": "tomorrow",
        "seperate": "separate",
        "truely": "truly",
        "writting": "writing",
        "succesful": "successful",
        "enviroment": "environment",
        "trafic": "traffic",
        "oppurtunity": "opportunity",
        "definitly": "definitely",
        "pleasent": "pleasant",
        "floting": "floating",
        "villige": "village",
        "tutition": "tuition",
        "tution": "tuition",
        "schedul": "schedule",
        "materiels": "materials",
        "curiculum": "curriculum",
        "accomodation": "accommodation",
        "necesary": "necessary",
        "neccessary": "necessary",
        "oppinion": "opinion",
        "freind": "friend",
        "sincerly": "sincerely",
        "intrested": "interested",
        "intresting": "interesting",
        "conveniance": "convenience",
        "begining": "beginning",
        "knowlege": "knowledge",
        "reccomend": "recommend"
    };

    Object.keys(spellingDict).forEach(wrongWord => {
        const rWord = new RegExp(`\\b${wrongWord}\\b`, 'gi');
        let mW;
        while ((mW = rWord.exec(rawText)) !== null) {
            errors.push({
                type: "Lỗi chính tả (Spelling)",
                category: "spelling",
                wrong: mW[0],
                correct: spellingDict[wrongWord],
                reason: `Viết sai chính tả từ '${mW[0]}'. Cách viết đúng là '${spellingDict[wrongWord]}'.`
            });
        }
    });

    // --- J. SENTENCE-START CAPITALIZATION (VIẾT HOA ĐẦU CÂU) ---
    const rStartSentenceLower = /([.!?]\s+)([a-z])([a-zA-Z]*)/g;
    let mStart;
    while ((mStart = rStartSentenceLower.exec(rawText)) !== null) {
        const punctSpace = mStart[1];
        const lowerChar = mStart[2];
        const restWord = mStart[3];
        const wrongWord = lowerChar + restWord;
        const correctWord = lowerChar.toUpperCase() + restWord;
        if (wrongWord !== 'eg' && wrongWord !== 'etc') {
            errors.push({
                type: "Viết hoa đầu câu (Capitalization)",
                category: "spelling",
                wrong: `${punctSpace}${wrongWord}`,
                correct: `${punctSpace}${correctWord}`,
                reason: `Chữ cái đầu câu sau dấu kết thúc câu (${punctSpace.trim()}) bắt buộc phải viết hoa: '${correctWord}'.`
            });
        }
    }

    // --- K. PROPER NOUNS CAPITALIZATION (VIẾT HOA DANH TỪ RIÊNG, THỨ, THÁNG, ĐỊA DANH) ---
    const properNouns = {
        "monday": "Monday",
        "tuesday": "Tuesday",
        "wednesday": "Wednesday",
        "thursday": "Thursday",
        "friday": "Friday",
        "saturday": "Saturday",
        "sunday": "Sunday",
        "january": "January",
        "february": "February",
        "march": "March",
        "april": "April",
        "june": "June",
        "july": "July",
        "august": "August",
        "september": "September",
        "october": "October",
        "november": "November",
        "december": "December",
        "can tho": "Can Tho",
        "ninh kieu": "Ninh Kieu",
        "cai rang": "Cai Rang",
        "vietnam": "Vietnam",
        "viet nam": "Viet Nam",
        "hanoi": "Hanoi",
        "ha noi": "Ha Noi",
        "saigon": "Saigon",
        "sai gon": "Sai Gon"
    };

    Object.keys(properNouns).forEach(pKey => {
        const rProper = new RegExp(`\\b${pKey}\\b`, 'g'); // Case-sensitive: only catches lowercase!
        let mP;
        while ((mP = rProper.exec(rawText)) !== null) {
            errors.push({
                type: "Viết hoa danh từ riêng (Proper Nouns)",
                category: "spelling",
                wrong: mP[0],
                correct: properNouns[pKey],
                reason: `Tên thứ trong tuần, tháng hoặc địa danh riêng '${properNouns[pKey]}' bắt buộc phải viết hoa chữ cái đầu.`
            });
        }
    });

    // --- L. PUNCTUATION RULES (QUY CÁCH DẤU CÂU) ---
    // Missing comma after salutation (e.g. Dear Helen without comma)
    if (/\bDear\s+[A-Za-z]+(?!\s*,)\s*(\n|$)/i.test(rawText)) {
        const mSal = rawText.match(/\bDear\s+[A-Za-z]+/i);
        if (mSal) {
            errors.push({
                type: "Dấu câu lời mở đầu (Punctuation)",
                category: "punctuation",
                wrong: mSal[0],
                correct: `${mSal[0]},`,
                reason: "Sau lời chào mở đầu thư (Dear + Tên người nhận) bắt buộc phải có dấu phẩy ','."
            });
        }
    }

    // Missing comma after sign-off (e.g. Best regards without comma)
    if (/\b(Best regards|Best wishes|Warm regards|Yours sincerely|Yours faithfully)(?!\s*,)\s*(\n|$)/i.test(rawText)) {
        const mClose = rawText.match(/\b(Best regards|Best wishes|Warm regards|Yours sincerely|Yours faithfully)\b/i);
        if (mClose) {
            errors.push({
                type: "Dấu câu kết thúc thư (Punctuation)",
                category: "punctuation",
                wrong: mClose[0],
                correct: `${mClose[0]},`,
                reason: `Sau lời chào kết thư '${mClose[0]}' bắt buộc phải có dấu phẩy ','.`
            });
        }
    }

    const punctSpacingErrors = rawText.match(/[a-zA-Z0-9]+[.,!?:;][a-zA-Z]+/g);
    if (punctSpacingErrors && punctSpacingErrors.length > 0) {
        punctSpacingErrors.forEach(pe => {
            errors.push({
                type: "Quy cách dấu câu",
                category: "punctuation",
                wrong: pe,
                correct: pe.replace(/([.,!?:;])/, '$1 '),
                reason: "Sau dấu câu bắt buộc phải có 1 khoảng trắng (dấu cách) trước khi viết từ tiếp theo."
            });
        });
    }

    const spaceBeforePunct = rawText.match(/[a-zA-Z0-9]+\s+[.,!?:;]/g);
    if (spaceBeforePunct && spaceBeforePunct.length > 0) {
        spaceBeforePunct.forEach(se => {
            errors.push({
                type: "Quy cách dấu câu",
                category: "punctuation",
                wrong: se,
                correct: se.replace(/\s+([.,!?:;])/, '$1'),
                reason: "Không đặt dấu cách trước các dấu chấm, phẩy, chấm hỏi, chấm than."
            });
        });
    }

    return errors;
}

// Construct inline annotated essay HTML
function buildAnnotatedEssayHtml(rawText, errors) {
    if (!rawText) return '';
    let annotated = rawText;

    const sortedErrors = [...errors].sort((a, b) => (b.wrong ? b.wrong.length : 0) - (a.wrong ? a.wrong.length : 0));

    sortedErrors.forEach(err => {
        if (!err.wrong || err.wrong.length < 2) return;
        const escaped = err.wrong.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const reg = new RegExp(escaped, 'gi');
        annotated = annotated.replace(reg, `<span class="annotated-box"><del class="annotated-wrong">${err.wrong}</del> <ins class="annotated-correct"><i class="fa-solid fa-arrow-right"></i> ${err.correct}</ins></span>`);
    });

    const paras = annotated.split(/\n+/).filter(p => p.trim() !== '');
    return paras.map(p => `<p class="annotated-para">${p.trim()}</p>`).join('');
}

// Grade and Evaluate Extra Practice Submission

// ==========================================================================
// VSTEP B2 WRITING TASK 1 - SENTENCE-BY-SENTENCE AUDIT & DIAGNOSTIC ENGINE
// ==========================================================================

function segmentLetterSentences(rawText) {
    if (!rawText) return [];
    let text = rawText.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
    
    // Protect common abbreviations from premature sentence splitting
    const abbrevs = ['mr\\.', 'mrs\\.', 'ms\\.', 'dr\\.', 'prof\\.', 'st\\.', 'e\\.g\\.', 'i\\.e\\.', 'etc\\.', 'vs\\.', 'a\\.m\\.', 'p\\.m\\.', 'no\\.'];
    abbrevs.forEach(abb => {
        const regex = new RegExp(`\\b${abb}`, 'gi');
        text = text.replace(regex, match => match.replace(/\./g, '\uE000'));
    });

    // Protect decimal numbers
    text = text.replace(/(\d+)\.(\d+)/g, '$1\uE000$2');

    // Split on sentence terminals (. ! ?) followed by whitespace or line break
    const rawSentences = text.split(/(?<=[.!?])\s+|\n+/);

    const sentences = [];
    rawSentences.forEach(s => {
        let clean = s.replace(/\uE000/g, '.').trim();
        if (clean.length > 0) {
            sentences.push(clean);
        }
    });

    return sentences;
}

function auditIndividualSentence(sentence, index, totalSentences, typeId, globalErrors = []) {
    const sTrim = sentence.trim();
    const sLower = sTrim.toLowerCase();

    // 1. Determine Section & Role
    let roleName = "Thân bài (Body)";
    let roleIcon = "fa-pencil";
    let isSalutation = false;
    let isSignOff = false;

    if (index === 0 && /^dear\s+[a-z]+/i.test(sTrim)) {
        roleName = "Lời chào mở đầu (Salutation)";
        roleIcon = "fa-envelope-open-text";
        isSalutation = true;
    } else if (index <= 2 && /(thanks?\s+for|hope\s+you|writing\s+this\s+letter|in\s+your\s+letter|how\s+are\s+you|glad\s+to\s+hear|i\s+am\s+writing)/i.test(sLower)) {
        roleName = "Mở đầu thư (Opening & Purpose)";
        roleIcon = "fa-book-open";
    } else if (index >= totalSentences - 2 && /(best\s+wishes|yours\s+(sincerely|faithfully)|warm\s+regards|love|cheers|sincerely)\b/i.test(sLower)) {
        roleName = "Lời chào kết thúc (Sign-off)";
        roleIcon = "fa-signature";
        isSignOff = true;
    } else if (index === totalSentences - 1 && sTrim.split(/\s+/).length <= 3 && !/[.!?]$/.test(sTrim)) {
        roleName = "Ký tên người gửi (Signature)";
        roleIcon = "fa-user-pen";
        isSignOff = true;
    } else if (index >= totalSentences - 3 && /(look\s+forward|hope\s+(my\s+advice|to\s+hear|you\s+can|this\s+helps)|let\s+me\s+know|see\s+you\s+soon|write\s+back)/i.test(sLower)) {
        roleName = "Câu kết thư (Closing)";
        roleIcon = "fa-paper-plane";
    }

    // 2. Identify sentence-specific errors
    const sentenceErrors = [];
    let rewrite = sTrim;

    // Check matched errors from global detector
    if (Array.isArray(globalErrors)) {
        globalErrors.forEach(err => {
            if (err.wrong && sLower.includes(err.wrong.toLowerCase())) {
                if (!sentenceErrors.some(e => e.wrong.toLowerCase() === err.wrong.toLowerCase())) {
                    sentenceErrors.push({
                        type: err.type || "Lỗi ngữ pháp",
                        wrong: err.wrong,
                        correct: err.correct,
                        reason: err.reason || "Cần điều chỉnh theo cấu trúc chuẩn."
                    });
                }
                const re = new RegExp(err.wrong.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
                rewrite = rewrite.replace(re, err.correct);
            }
        });
    }

    // Modal + V-ing or Modal + to V
    const modalRule = /\b(should|can|could|will|would|must|may|might)\s+(to\s+([a-z]+)|([a-z]+ing))\b/i;
    const mModal = sTrim.match(modalRule);
    if (mModal) {
        const full = mModal[0];
        const modal = mModal[1];
        let correctV = '';
        if (mModal[2].startsWith('to ')) {
            correctV = mModal[3];
        } else {
            correctV = mModal[4].replace(/ing$/, '');
            if (mModal[4] === 'staying') correctV = 'stay';
            else if (mModal[4] === 'trying') correctV = 'try';
            else if (mModal[4] === 'going') correctV = 'go';
            else if (mModal[4] === 'visiting') correctV = 'visit';
            else if (mModal[4] === 'taking') correctV = 'take';
            else if (mModal[4] === 'eating') correctV = 'eat';
            else if (mModal[4] === 'wearing') correctV = 'wear';
        }
        if (!sentenceErrors.some(e => e.wrong.toLowerCase() === full.toLowerCase())) {
            sentenceErrors.push({
                type: "Động từ khuyết thiếu (Modal Verb)",
                wrong: full,
                correct: `${modal} ${correctV}`,
                reason: `Sau động từ khuyết thiếu '${modal}', động từ luôn ở dạng nguyên mẫu không 'to' (V-bare), không dùng 'to V' hay 'V-ing'.`
            });
            rewrite = rewrite.replace(new RegExp(full, 'i'), `${modal} ${correctV}`);
        }
    }

    // Missing 'to be' before adjectives
    const adjMissingBe = /\b(it|this|that|they|weather|food|room)\s+(convenient|delicious|hot|warm|cold|cheap|affordable|expensive|dirty|noisy|quiet|clean|important|necessary)\b/i;
    const mAdj = sTrim.match(adjMissingBe);
    if (mAdj) {
        const subj = mAdj[1];
        const adj = mAdj[2];
        const be = (subj.toLowerCase() === 'they') ? 'are' : 'is';
        if (!sentenceErrors.some(e => e.wrong.toLowerCase() === mAdj[0].toLowerCase())) {
            sentenceErrors.push({
                type: "Cấu trúc câu (Thiếu động từ 'to be')",
                wrong: mAdj[0],
                correct: `${subj} ${be} ${adj}`,
                reason: `Sau chủ ngữ '${subj}' đi kèm tính từ '${adj}' bắt buộc phải có liên động từ '${be}'.`
            });
            rewrite = rewrite.replace(new RegExp(mAdj[0], 'i'), `${subj} ${be} ${adj}`);
        }
    }

    // "look forward to + Vo"
    if (/\blook\s+forward\s+to\s+([a-z]+)\b/i.test(sTrim) && !/\blook\s+forward\s+to\s+[a-z]+ing\b/i.test(sTrim)) {
        const mLF = sTrim.match(/\blook\s+forward\s+to\s+([a-z]+)\b/i);
        if (mLF && mLF[1] !== 'hearing' && mLF[1] !== 'seeing' && mLF[1] !== 'meeting' && mLF[1] !== 'receiving') {
            const wrongW = mLF[1];
            let correctW = wrongW.replace(/e$/, '') + 'ing';
            if (wrongW === 'see') correctW = 'seeing';
            const fullW = mLF[0];
            const fixedW = `look forward to ${correctW}`;
            if (!sentenceErrors.some(e => e.wrong.toLowerCase() === fullW.toLowerCase())) {
                sentenceErrors.push({
                    type: "Cấu trúc câu (Look forward to + V-ing)",
                    wrong: fullW,
                    correct: fixedW,
                    reason: "Sau cụm cố định 'look forward to', động từ theo sau luôn chia ở dạng V-ing."
                });
                rewrite = rewrite.replace(new RegExp(fullW, 'i'), fixedW);
            }
        }
    }

    // "Thank for" -> "Thanks for / Thank you for"
    if (/\bThank\s+for\b/i.test(sTrim) && !/\bThanks\s+for\b/i.test(sTrim) && !/\bThank\s+you\s+for\b/i.test(sTrim)) {
        if (!sentenceErrors.some(e => e.wrong.toLowerCase().includes('thank for'))) {
            sentenceErrors.push({
                type: "Ngữ pháp mở thư",
                wrong: "Thank for",
                correct: "Thanks for / Thank you for",
                reason: "Cụm từ cảm ơn đúng phải có 's' ('Thanks for...') hoặc đầy đủ 'Thank you for...'."
            });
            rewrite = rewrite.replace(/\bThank\s+for\b/i, 'Thank you for');
        }
    }

    // "I am write" -> "I am writing"
    if (/\bI\s+(am|'m)\s+write\b/i.test(sTrim)) {
        if (!sentenceErrors.some(e => e.wrong.toLowerCase().includes('write'))) {
            sentenceErrors.push({
                type: "Thì hiện tại tiếp diễn",
                wrong: "I am write",
                correct: "I am writing",
                reason: "Sau 'am/is/are' trong thì hiện tại tiếp diễn, động từ phải thêm đuôi -ing: 'I am writing'."
            });
            rewrite = rewrite.replace(/\bI\s+(am|'m)\s+write\b/i, 'I am writing');
        }
    }

    // Missing articles before singular places/items
    const mStayArt = sTrim.match(/\bstay\s+(in|at)\s+(hotel|homestay)\b/i);
    if (mStayArt) {
        if (!sentenceErrors.some(e => e.wrong.toLowerCase() === mStayArt[0].toLowerCase())) {
            sentenceErrors.push({
                type: "Mạo từ (Articles)",
                wrong: mStayArt[0],
                correct: `stay ${mStayArt[1]} a ${mStayArt[2]}`,
                reason: `Danh từ đếm được số ít '${mStayArt[2]}' cần có mạo từ 'a' phía trước.`
            });
            rewrite = rewrite.replace(new RegExp(mStayArt[0], 'i'), `stay ${mStayArt[1]} a ${mStayArt[2]}`);
        }
    }

    // Capitalization of first letter
    if (/^[a-z]/.test(sTrim)) {
        sentenceErrors.push({
            type: "Chính tả (Viết hoa đầu câu)",
            wrong: sTrim.slice(0, 1),
            correct: sTrim.slice(0, 1).toUpperCase(),
            reason: "Chữ cái đầu tiên của câu bắt buộc phải viết hoa."
        });
        rewrite = rewrite.charAt(0).toUpperCase() + rewrite.slice(1);
    }

    // Punctuation at end of sentence (skip salutation / signoff)
    if (!isSalutation && !isSignOff && !/[.!?]$/.test(sTrim)) {
        sentenceErrors.push({
            type: "Dấu câu (Thiếu dấu kết câu)",
            wrong: sTrim.slice(-5),
            correct: sTrim.slice(-5) + '.',
            reason: "Câu kết thúc hoàn chỉnh cần có dấu chấm câu (.)."
        });
        rewrite = rewrite + '.';
    }

    // Determine sentence status
    let status = "success";
    let statusLabel = "✓ Câu viết chuẩn xác";
    let statusBadgeClass = "badge-success";

    if (sentenceErrors.length > 0) {
        status = "warning";
        statusLabel = `⚠️ Có ${sentenceErrors.length} lỗi cần khắc phục`;
        statusBadgeClass = "badge-warning";
    } else {
        // If no errors, suggest stylistic upgrade
        if (roleName.includes("Opening") && sLower.includes("give you some advice")) {
            rewrite = "I am writing this letter to share some useful recommendations for your upcoming trip to Can Tho in December.";
            status = "upgrade";
            statusLabel = "💡 Gợi ý nâng cấp B2 tự nhiên hơn";
            statusBadgeClass = "badge-upgrade";
        } else if (roleName.includes("Closing") && sLower.includes("see you soon")) {
            rewrite = "I hope these suggestions are helpful, and I cannot wait to see you in Can Tho!";
            status = "upgrade";
            statusLabel = "💡 Gợi ý nâng cấp B2 ấn tượng hơn";
            statusBadgeClass = "badge-upgrade";
        } else if (sLower.includes("they are very delicious")) {
            rewrite = "Not only are these local dishes incredibly delicious, but they are also very affordable.";
            status = "upgrade";
            statusLabel = "💡 Gợi ý cấu trúc nâng Band (Đảo ngữ)";
            statusBadgeClass = "badge-upgrade";
        }
    }

    // Highlight errors in original text
    let highlightedHtml = escapeHtml(sTrim);
    sentenceErrors.forEach(err => {
        const re = new RegExp(`(${err.wrong.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
        highlightedHtml = highlightedHtml.replace(re, '<span class="audit-err-highlight">$1</span>');
    });

    return {
        sentenceIndex: index + 1,
        totalSentences,
        originalText: sTrim,
        highlightedHtml,
        roleName,
        roleIcon,
        status,
        statusLabel,
        statusBadgeClass,
        errors: sentenceErrors,
        rewrite: rewrite.trim()
    };
}

function renderSentenceAuditSectionHtml(sentenceAudits) {
    if (!sentenceAudits || sentenceAudits.length === 0) return '';

    const correctCount = sentenceAudits.filter(s => s.status === 'success').length;
    const warningCount = sentenceAudits.filter(s => s.status === 'warning').length;
    const upgradeCount = sentenceAudits.filter(s => s.status === 'upgrade').length;

    return `
        <div class="sentence-audit-wrapper" style="margin-top: 30px;">
            <div class="sentence-audit-header">
                <div class="sentence-audit-title">
                    <i class="fa-solid fa-list-check" style="color: var(--primary-color, #6366f1);"></i>
                    <span>BẢNG RÀ SOÁT CHI TIẾT TỪNG CÂU HỌC VIÊN ĐÃ VIẾT (${sentenceAudits.length} CÂU)</span>
                </div>
                <div class="sentence-audit-stats">
                    <span class="stat-pill success"><i class="fa-solid fa-circle-check"></i> ${correctCount} câu chuẩn</span>
                    ${warningCount > 0 ? `<span class="stat-pill warning"><i class="fa-solid fa-triangle-exclamation"></i> ${warningCount} câu có lỗi</span>` : ''}
                    ${upgradeCount > 0 ? `<span class="stat-pill upgrade"><i class="fa-solid fa-wand-magic-sparkles"></i> ${upgradeCount} câu gợi ý nâng Band</span>` : ''}
                </div>
            </div>
            <p class="sentence-audit-sub">
                Hệ thống bóc tách tỉ mỉ từng câu trong bài viết của bạn, đối chiếu ngữ pháp, chỉ ra lỗi cụ thể và cung cấp câu viết lại chuẩn B1/B2 để bạn học hỏi và cải thiện:
            </p>

            <div class="sentence-cards-list">
                ${sentenceAudits.map(s => `
                    <div class="sentence-audit-card ${s.status}">
                        <div class="sentence-card-head">
                            <div class="sentence-head-left">
                                <span class="sentence-index-badge">CÂU ${s.sentenceIndex}/${s.totalSentences}</span>
                                <span class="sentence-role-badge"><i class="fa-solid ${s.roleIcon}"></i> ${s.roleName}</span>
                            </div>
                            <span class="sentence-status-pill ${s.statusBadgeClass}">${s.statusLabel}</span>
                        </div>

                        <div class="sentence-card-content">
                            <div class="sentence-row original-row">
                                <span class="row-tag original-tag">Học viên viết:</span>
                                <div class="sentence-text original-text">"${s.highlightedHtml}"</div>
                            </div>

                            ${s.errors.length > 0 ? `
                                <div class="sentence-errors-box">
                                    <strong style="color: #dc2626; font-size: 13.5px;"><i class="fa-solid fa-circle-xmark"></i> Các lỗi cần khắc phục trong câu này:</strong>
                                    <ul class="sentence-error-items">
                                        ${s.errors.map(err => `
                                            <li>
                                                <span class="err-sub-type">[${escapeHtml(err.type)}]</span> 
                                                Viết sai: <span class="err-strike">"${escapeHtml(err.wrong)}"</span> 
                                                ➔ Sửa đúng: <strong class="err-fix">"${escapeHtml(err.correct)}"</strong>
                                                <div class="err-reason-note">💡 ${escapeHtml(err.reason)}</div>
                                            </li>
                                        `).join('')}
                                    </ul>
                                </div>
                            ` : ''}

                            <div class="sentence-row rewrite-row">
                                <span class="row-tag rewrite-tag"><i class="fa-solid fa-wand-magic-sparkles"></i> ${s.errors.length > 0 ? 'Viết lại đúng chuẩn:' : 'Gợi ý câu chuẩn B1/B2 mượt mà hơn:'}</span>
                                <div class="sentence-text rewrite-text">"${escapeHtml(s.rewrite)}"</div>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}


function gradeExtraPractice(typeId, isAutoTimeUp = false) {
    const writingArea = document.getElementById('extraWritingArea');
    const resultCard = document.getElementById('extraResultCard');
    if (!writingArea || !resultCard) return;

    const rawText = writingArea.value.trim();
    if (!rawText && !isAutoTimeUp) {
        alert('Vui lòng nhập bài viết của bạn trước khi nộp bài!');
        writingArea.focus();
        return;
    }

    const words = rawText ? rawText.split(/\s+/).filter(w => w !== '') : [];
    const wordCount = words.length;

    if (!isAutoTimeUp) {
        let confirmMsg = 'BẠN CÓ CHẮC CHẮN MUỐN NỘP BÀI LUYỆN TẬP THÊM KHÔNG?\n\n';
        if (wordCount < 120) {
            confirmMsg += `⚠️ Chú ý: Bài viết của bạn hiện có ${wordCount} từ (chưa đạt chuẩn tối thiểu 120 từ).\n\n`;
        } else {
            confirmMsg += `✓ Số từ đạt: ${wordCount} từ (đạt chuẩn độ dài VSTEP B2).\n\n`;
        }
        confirmMsg += 'Hệ thống sẽ chấm điểm chi tiết theo 4 tiêu chí VSTEP (30%) và hiển thị bản phân tích đối chiếu!';
        if (!confirm(confirmMsg)) return;
    }

    stopExtraPracticeTimer();
    isExtraPracticeInProgress = false;

    const timeSpentSeconds = Math.max(0, EXTRA_PRACTICE_TIME_LIMIT - extraPracticeTimeRemaining);
    const timeSpentStr = formatTimerString(timeSpentSeconds);

    // --- 1. TASK FULFILMENT (Thang 10) ---
    const lower = rawText.toLowerCase();
    let hasReq1 = false, hasReq2 = false, hasReq3 = false, hasReq4 = false;
    let reqLabels = [];

    if (typeId === 'application') {
        hasReq1 = /(apply|application|position|receptionist|student|major|graduate|advertis|looking|myself|degree)/i.test(lower);
        hasReq2 = /(interest|passion|reputation|hotel|inspire|career|environment|why|passion|communicat|helping|working\s+with|goal)/i.test(lower);
        hasReq3 = /(experience|work|worked|part-time|customer|guest|receptionist|hotel|greet|call|booking|reservation|responsib|serving)/i.test(lower);
        hasReq4 = /(suitable|candidate|skill|skills|fluent|english|computer|punctual|hard-working|cv|resume|interview|friendly|responsible|adapt)/i.test(lower);
        reqLabels = [
            hasReq1 ? '✓ Giới thiệu bản thân' : '✗ Giới thiệu bản thân',
            hasReq2 ? '✓ Lý do quan tâm' : '✗ Lý do quan tâm',
            hasReq3 ? '✓ Kinh nghiệm với khách hàng' : '✗ Kinh nghiệm với khách hàng',
            hasReq4 ? '✓ Giải thích độ phù hợp' : '✗ Giải thích độ phù hợp'
        ];
    } else if (typeId === 'apology') {
        hasReq1 = /(apologiz|apologise|sorry|apology|forgive|regret|excuse)/i.test(lower);
        hasReq2 = /(sick|ill|flu|fever|health|doctor|hospital|medical|break\s*down|broke\s*down|laptop|computer|error|accident|emergency|reason|because)/i.test(lower);
        hasReq3 = /(submit|send|email|portal|tomorrow|by|attach|certificate|hand\s+in|upload|tuesday|wednesday|pm)/i.test(lower);
        hasReq4 = true;
        reqLabels = [
            hasReq1 ? '✓ Lời xin lỗi chân thành' : '✗ Lời xin lỗi chân thành',
            hasReq2 ? '✓ Giải thích lý do chính đáng' : '✗ Giải thích lý do chính đáng',
            hasReq3 ? '✓ Nêu thời gian & cách thức nộp' : '✗ Nêu thời gian & cách thức nộp'
        ];
    } else if (typeId === 'feedback') {
        hasReq1 = /(satisf|dissatisf|overall|enjoy|opinion|pleas|feedback|impression|feel)/i.test(lower);
        hasReq2 = /(food|dish|dishes|fresh|delicious|atmosphere|music|decor|staff|wait|waiting|service|serve|dinner|restaurant|meal)/i.test(lower);
        hasReq3 = /(suggest|improve|service|hire|staff|waiter|faster|speed\s*up|menu|vegetarian|discount|loyalty|option|recommend|seasoning|clean)/i.test(lower);
        hasReq4 = true;
        reqLabels = [
            hasReq1 ? '✓ Mức độ hài lòng' : '✗ Mức độ hài lòng',
            hasReq2 ? '✓ Mô tả trải nghiệm' : '✗ Mô tả trải nghiệm',
            hasReq3 ? '✓ Đề xuất cải thiện dịch vụ' : '✗ Đề xuất cải thiện dịch vụ'
        ];
    } else if (typeId === 'complaint') {
        hasReq1 = /(problem|problems|room|condition|air\s*conditioner|ac|dirty|bathroom|shower|noise|noisy|broken|stained|towel|bed|sheet|water|wifi|tv)/i.test(lower);
        hasReq2 = /(feel|felt|disappoint|unhappy|annoyed|upset|ruin|ruined|terrible|bad\s*experience|frustrated|unpleasant|uncomfortable)/i.test(lower);
        hasReq3 = /(suggest|improvement|improve|repair|replace|clean|fix|refund|discount|compensation|service|better)/i.test(lower);
        hasReq4 = true;
        reqLabels = [
            hasReq1 ? '✓ Mô tả vấn đề của phòng' : '✗ Mô tả vấn đề của phòng',
            hasReq2 ? '✓ Bày tỏ cảm xúc' : '✗ Bày tỏ cảm xúc',
            hasReq3 ? '✓ Đề xuất cải thiện' : '✗ Đề xuất cải thiện'
        ];
    } else if (typeId === 'request' || typeId === 'description') {
        hasReq1 = /(address|location|where\s+(is\s+)?the\s+center|near\s+my\s+(house|home)|street|district|easy\s+to\s+(get|find)|located|tran\s+phu)/i.test(lower);
        hasReq2 = /(fee|tuition|cost|price|money|how\s+much|budget|discount|pay|million|vnd)/i.test(lower);
        hasReq3 = /(teacher|teachers|instructor|friendly|experienced|enthusiastic|native|teach|explain|helpful)/i.test(lower);
        hasReq4 = /(program|training|course|curriculum|skill|skills|schedule|length|study|practise|practice|topic|topics|activities)/i.test(lower);
        reqLabels = [
            hasReq1 ? '✓ Địa chỉ' : '✗ Địa chỉ',
            hasReq2 ? '✓ Học phí' : '✗ Học phí',
            hasReq3 ? '✓ Giáo viên' : '✗ Giáo viên',
            hasReq4 ? '✓ Chương trình đào tạo' : '✗ Chương trình đào tạo'
        ];
    } else {
        // Default: advice
        hasReq1 = /(stay|hotel|homestay|room|guest\s*house|resort|city\s*cent)/i.test(lower);
        hasReq2 = /(dish|dishes|food|pancake|banh\s*xeo|lau\s*mam|fish|fruit|fruits|eat|taste|try|specialt)/i.test(lower);
        hasReq3 = /(attraction|visit|place|market|ninh\s*kieu|cai\s*rang|floating|ancient\s*house|village|tourist|pagoda|temple)/i.test(lower);
        hasReq4 = /(wear|clothes|cloth|jacket|umbrella|hat|sunglass|shoes|sneaker|raincoat|t-shirt|shorts|dress)/i.test(lower);
        reqLabels = [
            hasReq1 ? '✓ Nơi ở' : '✗ Nơi ở',
            hasReq2 ? '✓ Món ăn' : '✗ Món ăn',
            hasReq3 ? '✓ Điểm tham quan' : '✗ Điểm tham quan',
            hasReq4 ? '✓ Trang phục' : '✗ Trang phục'
        ];
    }

    let bulletsCount = (hasReq1 ? 1 : 0) + (hasReq2 ? 1 : 0) + (hasReq3 ? 1 : 0) + (hasReq4 ? 1 : 0);
    const isCompletelyOffTopic = (bulletsCount === 0);
    const isPartiallyOffTopic = (bulletsCount === 1);

    let tfScore = 8.5;
    if (bulletsCount === 4) {
        tfScore = wordCount >= 120 ? 8.5 : 7.0;
    } else if (bulletsCount === 3) {
        tfScore = wordCount >= 120 ? 7.0 : 6.0;
    } else if (bulletsCount === 2) {
        tfScore = 5.5;
    } else if (bulletsCount === 1) {
        tfScore = wordCount >= 120 ? 4.0 : 3.0;
    } else {
        tfScore = 1.5; // Completely off-topic
    }

    // --- 2. ORGANIZATION (Thang 10) ---
    const hasGreeting = /^dear\s+[a-z]+/i.test(rawText.trim());
    const hasOpening = /(thanks?\s+for|hope\s+you|writing\s+to|how\s+are\s+you|in\s+your\s+letter|i\s+am\s+writing)/i.test(lower);
    const hasClosingSentence = /(hope\s+my\s+advice|write\s+back|let\s+me\s+know|look\s+forward|hope\s+you\s+(can\s+help|will\s+find|will\s+look)|thank\s+you\s+for|thank\s+you\s+for\s+your\s+time)/i.test(lower);
    const hasSignOff = /(best\s+wishes|yours|regards|love)/i.test(lower);

    const linkingWords = ["firstly", "secondly", "next", "finally", "moreover", "besides", "furthermore", "in addition", "therefore", "for example", "first of all", "also", "because"];
    let linkCount = 0;
    linkingWords.forEach(lw => {
        if (lower.includes(lw)) linkCount++;
    });

    let orgScore = 8.0;
    if (hasGreeting && hasOpening && hasClosingSentence && hasSignOff && linkCount >= 4) {
        orgScore = 8.5;
    } else if (linkCount >= 3) {
        orgScore = 7.5;
    } else if (linkCount >= 1) {
        orgScore = 6.5;
    } else {
        orgScore = 5.5;
    }

    // --- 3. DIAGNOSE ERRORS FOR VOCABULARY & GRAMMAR ---
    const errors = diagnoseVstepErrors(rawText, extraPracticeData[typeId]);
    const vocabErrors = errors.filter(e => e.category === 'vocab');
    const grammarErrors = errors.filter(e => e.category === 'grammar' || e.category === 'article');

    // --- 4. VOCABULARY (Thang 10) ---
    let vocScore = 7.5;
    if (vocabErrors.length >= 3) {
        vocScore = 5.5;
    } else if (vocabErrors.length === 2) {
        vocScore = 6.0;
    } else if (vocabErrors.length === 1) {
        vocScore = 6.5;
    } else {
        vocScore = 7.5;
    }

    // --- 5. GRAMMAR & ACCURACY (Thang 10) ---
    let gramScore = 7.0;
    const totalGrammarCount = grammarErrors.length + (errors.filter(e => e.category === 'punctuation' || e.category === 'spelling').length > 0 ? 1 : 0);

    if (totalGrammarCount >= 6) {
        gramScore = 5.5;
    } else if (totalGrammarCount >= 4) {
        gramScore = 6.0;
    } else if (totalGrammarCount >= 2) {
        gramScore = 6.5;
    } else if (totalGrammarCount === 1) {
        gramScore = 7.0;
    } else {
        gramScore = 8.5;
    }

    // Total VSTEP Band (Thang 10) & Quy đổi 30% bài thi Writing VSTEP (Thang 3.0 điểm)
    let overallBand = (tfScore + orgScore + vocScore + gramScore) / 4.0;
    overallBand = Math.round(overallBand * 10) / 10;

    let convertedScore = Math.round((overallBand / 10.0) * 3.0 * 100) / 100;

    let tfConv = Math.round((tfScore / 10.0) * 0.75 * 100) / 100;
    let orgConv = Math.round((orgScore / 10.0) * 0.75 * 100) / 100;
    let vocConv = Math.round((vocScore / 10.0) * 0.75 * 100) / 100;
    let gramConv = Math.round((gramScore / 10.0) * 0.75 * 100) / 100;

    let vstepLevel = "B2 LEVEL (ĐẠT CHUẨN)";
    let levelDesc = "Bài viết đáp ứng đầy đủ yêu cầu đề bài, cấu trúc đoạn rõ ràng. Tuy nhiên còn một số lỗi ngữ pháp, mạo từ và dùng từ cần lưu ý sửa chữa.";
    if (isCompletelyOffTopic) {
        vstepLevel = "LẠC ĐỀ HOÀN TOÀN (OFF-TOPIC)";
        levelDesc = "Cảnh báo nghiêm trọng: Bài viết hoàn toàn không bám sát yêu cầu đề bài! Bị chấm điểm liệt Task Fulfilment (1.5/10) và khống chế điểm toàn bài.";
    } else if (isPartiallyOffTopic) {
        vstepLevel = "NGUY CƠ LẠC ĐỀ (PARTIALLY OFF-TOPIC)";
        levelDesc = "Cảnh báo: Bài viết chỉ chạm vào 1 ý nhỏ và bỏ sót hầu hết các yêu cầu cốt lõi của đề bài. Điểm Task Fulfilment bị trừ rất nặng.";
    } else if (overallBand >= 8.5) {
        vstepLevel = "B2 LEVEL (XUẤT SẮC - VƯỢT CHUẨN)";
        levelDesc = "Bài viết rất ấn tượng! Bố cục chuẩn mực 5 bước, từ vựng và ngữ pháp đa dạng, hầu như không có lỗi sai.";
    } else if (overallBand < 6.0) {
        vstepLevel = "B1 LEVEL (CẦN CẢI THIỆN ĐỂ ĐẠT B2)";
        levelDesc = "Bài viết còn nhiều lỗi ngữ pháp hoặc chưa đủ số từ (yêu cầu ≥ 120 từ). Hãy xem kỹ bảng sửa lỗi và bài mẫu bên dưới nhé!";
    }

    const data = extraPracticeData[typeId];

    // Build Inline Annotated Essay HTML
    // Segment and audit every single sentence
    const segmentedSentences = segmentLetterSentences(rawText);
    const sentenceAudits = segmentedSentences.map((s, idx) => 
        auditIndividualSentence(s, idx, segmentedSentences.length, typeId, errors)
    );
    const sentenceAuditSectionHtml = renderSentenceAuditSectionHtml(sentenceAudits);

    const annotatedEssayHtml = buildAnnotatedEssayHtml(rawText, errors);

    // Build Error Table HTML
    let errorTableHtml = '';
    if (errors.length > 0) {
        let rowsHtml = errors.map((err, idx) => `
            <tr>
                <td style="font-weight: 700; color: var(--primary-color); text-align: center;">${idx + 1}</td>
                <td><span class="err-badge-type">${err.type}</span></td>
                <td><span class="err-text-wrong">${err.wrong}</span></td>
                <td><span class="err-text-correct"><i class="fa-solid fa-arrow-right"></i> ${err.correct}</span></td>
                <td style="font-size: 13.5px; color: var(--text-main); line-height: 1.5;">${err.reason}</td>
            </tr>
        `).join('');

        errorTableHtml = `
            <div class="extra-error-table-wrapper" style="margin-top: 25px;">
                <div class="error-table-title">
                    <i class="fa-solid fa-triangle-exclamation" style="color: #ef4444;"></i>
                    DANH SÁCH ${errors.length} LỖI CẦN SỬA CHI TIẾT (NGỮ PHÁP, MẠO TỪ, TỪ LOẠI, DÙNG TỪ, CHÍNH TẢ):
                </div>
                <div class="table-responsive">
                    <table class="error-table">
                        <thead>
                            <tr>
                                <th style="width: 40px; text-align: center;">#</th>
                                <th style="width: 170px;">Phân loại lỗi</th>
                                <th style="width: 190px;">Học viên viết</th>
                                <th style="width: 220px;">Đề xuất sửa đúng</th>
                                <th>Giải thích ngữ pháp chi tiết</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${rowsHtml}
                        </tbody>
                    </table>
                </div>
            </div>
        `;
    } else {
        errorTableHtml = `
            <div class="highlight-box" style="margin-top: 25px;">
                <p><i class="fa-solid fa-circle-check" style="color: #10b981;"></i> <strong>Không phát hiện lỗi ngữ pháp hay từ vựng đáng kể nào!</strong> Bài làm của bạn rất chuẩn chỉnh và mạch lạc.</p>
            </div>
        `;
    }

    // Build Off-Topic Alert Box
    let offTopicAlertHtml = '';
    if (isCompletelyOffTopic) {
        offTopicAlertHtml = `
            <div class="off-topic-alert-box" style="background: #fef2f2; border: 2.5px solid #ef4444; border-radius: 14px; padding: 20px 24px; margin-bottom: 24px; box-shadow: 0 4px 14px rgba(239, 68, 68, 0.15);">
                <div style="display: flex; align-items: center; gap: 12px; color: #b91c1c; font-size: 19px; font-weight: 800;">
                    <i class="fa-solid fa-triangle-exclamation" style="font-size: 26px; color: #ef4444;"></i>
                    <span>CẢNH BÁO NGUY HIỂM: BÀI VIẾT LẠC ĐỀ HOÀN TOÀN (OFF-TOPIC)!</span>
                </div>
                <p style="margin: 12px 0 8px 0; color: #991b1b; font-size: 15px; line-height: 1.6;">
                    ⚠️ Bài viết của bạn <strong>hoàn toàn không bám sát yêu cầu đề bài ${data ? data.title : ''}</strong>! Bạn không trả lời được ý nào trong các ý hỏi cốt lõi của đề bài. Theo quy định chấm thi VSTEP của Bộ GD&ĐT, bài viết lạc đề sẽ bị chấm điểm liệt (Band 1.0 - 2.0) ở tiêu chí Task Fulfilment và khống chế tối đa điểm toàn bài.
                </p>
                <div style="margin-top: 12px; background: rgba(239, 68, 68, 0.08); padding: 14px 18px; border-radius: 10px; font-size: 14px; color: #7f1d1d;">
                    <strong>Các yêu cầu cốt lõi đề bài bắt buộc phải có:</strong>
                    <ul style="margin: 8px 0 0 20px; line-height: 1.7;">
                        ${reqLabels.map(l => `<li>${l}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `;
    } else if (isPartiallyOffTopic) {
        offTopicAlertHtml = `
            <div class="off-topic-alert-box" style="background: #fffbeb; border: 2px solid #f59e0b; border-radius: 14px; padding: 18px 22px; margin-bottom: 24px;">
                <div style="display: flex; align-items: center; gap: 10px; color: #b45309; font-size: 18px; font-weight: 800;">
                    <i class="fa-solid fa-circle-exclamation" style="font-size: 24px; color: #f59e0b;"></i>
                    <span>CẢNH BÁO: BÀI VIẾT CÓ DẤU HIỆU LẠC ĐỀ / THIẾU Ý TRỌNG TÂM!</span>
                </div>
                <p style="margin: 10px 0 6px 0; color: #92400e; font-size: 14.5px; line-height: 1.6;">
                    ⚠️ Bài viết chỉ mới chạm vào <strong>1/${reqLabels.length} yêu cầu</strong> của đề bài và bỏ sót các trọng tâm còn lại. Điểm Task Fulfilment bị trừ rất nặng.
                </p>
                <div style="margin-top: 8px; font-size: 13.5px; color: #78350f;">
                    <strong>Kiểm tra lại các ý cần có trong bài:</strong>
                    <ul style="margin: 6px 0 0 20px; line-height: 1.7;">
                        ${reqLabels.map(l => `<li>${l}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `;
    }

    // Save evaluation state for Word export
    lastExtraPracticeEvaluationData[typeId] = {
        rawText,
        typeId,
        timeSpentStr,
        wordCount,
        tfScore,
        orgScore,
        vocScore,
        gramScore,
        overallBand,
        convertedScore,
        tfConv,
        orgConv,
        vocConv,
        gramConv,
        vstepLevel,
        errors,
        reqLabels,
        title: data ? data.title : 'Extra Practice',
        data
    };

    // Build Results HTML
    resultCard.innerHTML = `
        ${offTopicAlertHtml}

        <!-- Export Action Buttons -->
        <div style="display: flex; gap: 12px; margin-bottom: 20px; flex-wrap: wrap;">
            <button class="btn-success-export" onclick="downloadExtraPracticeEssay('${typeId}', true)">
                <i class="fa-solid fa-file-word"></i> Tải Bài viết & Phiếu chấm (.doc)
            </button>
            <button class="btn-download-file" onclick="downloadExtraPracticeEssay('${typeId}', false)">
                <i class="fa-solid fa-file-lines"></i> Chỉ tải bài làm học viên (.doc)
            </button>
        </div>

        <h3><i class="fa-solid fa-square-poll-vertical"></i> KẾT QUẢ ĐÁNH GIÁ & CHẤM ĐIỂM CHI TIẾT</h3>

        <div class="extra-score-banner">
            <div class="score-main-group">
                <div class="score-circle-badge">${convertedScore.toFixed(2)} <span style="font-size: 13px; display: block; font-weight: 500; opacity: 0.9;">/ 3.00</span></div>
                <div class="score-text-info">
                    <h4>${vstepLevel} • ${convertedScore.toFixed(2)} / 3.00 ĐIỂM (30% TỔNG BÀI THI WRITING)</h4>
                    <p>Tương đương <strong>Band ${overallBand.toFixed(1)} / 10</strong> theo khung chấm Task 1 VSTEP. (Độ dài: <strong>${wordCount} từ</strong> - ${levelDesc})</p>
                </div>
            </div>
            <div class="extra-b1-badge" style="background: #ffffff; color: var(--primary-color);">
                TASK 1 = 30% ĐIỂM WRITING
            </div>
        </div>

        <div style="display: flex; gap: 12px; align-items: center; margin: 14px 0 20px 0; flex-wrap: wrap;">
            <span class="sample-metric-chip" style="background: rgba(37, 99, 235, 0.08); color: var(--primary-color); border: 1.5px solid rgba(37, 99, 235, 0.25); font-weight: 700; font-size: 14px; padding: 7px 16px; border-radius: 20px;">
                <i class="fa-solid fa-stopwatch"></i> Thời gian làm bài: <strong>${timeSpentStr}</strong> / 20:00
            </span>
            <span class="sample-metric-chip" style="background: rgba(16, 185, 129, 0.08); color: var(--accent-green); border: 1.5px solid rgba(16, 185, 129, 0.25); font-weight: 700; font-size: 14px; padding: 7px 16px; border-radius: 20px;">
                <i class="fa-solid fa-file-word"></i> Tổng số từ: <strong>${wordCount} từ</strong> ${wordCount >= 120 ? '✓ Đạt chuẩn (≥120 từ)' : '⚠️ Chưa đủ 120 từ'}
            </span>
        </div>

        <!-- 4 Criteria Grid based on VSTEP SCORING GUIDE (Converted to 0.75 pts each) -->
        <div class="criteria-grid">
            <div class="criterion-card">
                <div class="criterion-name">
                    <span>Task Fulfilment (30%)</span>
                    <span class="criterion-score">${tfConv.toFixed(2)}/0.75 <small style="font-size: 11px; font-weight: normal; color: var(--text-muted);">(${tfScore.toFixed(1)}/10)</small></span>
                </div>
                <div class="criterion-desc">
                    ${reqLabels.join(' | ')}.
                    Độ dài: ${wordCount >= 120 ? 'Đạt chuẩn (≥120 từ)' : 'Chưa đủ từ'}.
                </div>
            </div>
            <div class="criterion-card">
                <div class="criterion-name">
                    <span>Organization (30%)</span>
                    <span class="criterion-score">${orgConv.toFixed(2)}/0.75 <small style="font-size: 11px; font-weight: normal; color: var(--text-muted);">(${orgScore.toFixed(1)}/10)</small></span>
                </div>
                <div class="criterion-desc">
                    Bố cục 5 phần hoàn chỉnh. Sử dụng linh hoạt các liên từ nối chuyển tiếp câu.
                </div>
            </div>
            <div class="criterion-card">
                <div class="criterion-name">
                    <span>Vocabulary (30%)</span>
                    <span class="criterion-score">${vocConv.toFixed(2)}/0.75 <small style="font-size: 11px; font-weight: normal; color: var(--text-muted);">(${vocScore.toFixed(1)}/10)</small></span>
                </div>
                <div class="criterion-desc">
                    Vốn từ vựng đúng chủ đề. ${vocabErrors.length > 0 ? `Bị trừ điểm do có ${vocabErrors.length} lỗi dùng từ/từ loại chưa chuẩn.` : 'Sử dụng từ vựng chính xác.'}
                </div>
            </div>
            <div class="criterion-card">
                <div class="criterion-name">
                    <span>Grammar & Accuracy (30%)</span>
                    <span class="criterion-score">${gramConv.toFixed(2)}/0.75 <small style="font-size: 11px; font-weight: normal; color: var(--text-muted);">(${gramScore.toFixed(1)}/10)</small></span>
                </div>
                <div class="criterion-desc">
                    Áp dụng tốt cấu trúc câu chuẩn B2. ${totalGrammarCount > 0 ? `Bị trừ điểm do mắc ${totalGrammarCount} lỗi ngữ pháp/mạo từ/câu ghép.` : 'Ngữ pháp chuẩn xác.'}
                </div>
            </div>
        </div>

        <!-- Section: Bản sửa lỗi trực tiếp trên bài viết của học viên -->
        <div class="annotated-essay-card">
            <div class="annotated-essay-header">
                <i class="fa-solid fa-pen-to-square"></i> BẢN SỬA LỖI TRỰC TIẾP TRÊN BÀI VIẾT CỦA BẠN (INLINE CORRECTIONS):
            </div>
            <div class="annotated-essay-body">
                ${annotatedEssayHtml}
            </div>
        </div>

        <!-- Detailed Error Table -->
        ${sentenceAuditSectionHtml}

            ${errorTableHtml}

        <!-- Unlocked Sample Model Letter -->
        ${(() => {
            const sampleEn = (data && (data.sampleModel || data.sampleSolution)) ? (data.sampleModel || data.sampleSolution) : '';
            const sampleVi = (data && (data.sampleModelVi || data.sampleSolutionVi)) ? (data.sampleModelVi || data.sampleSolutionVi) : '';
            if (!sampleEn) return '';
            return `
            <div class="content-block" style="margin-top: 35px;">
                <h3><i class="fa-solid fa-award"></i> BÀI VIẾT MẪU CHUẨN B2 THAM KHẢO (MODEL LETTER)</h3>
                <div class="sample-letter-box">
                    ${sampleEn.replace(/\n\n/g, '<br><br>').replace(/\n/g, '<br>')}
                </div>

                ${sampleVi ? `
                <h3 style="margin-top: 25px;">BẢN DỊCH CHI TIẾT</h3>
                <div class="translation-box" style="background-color: var(--bg-main); border: 1px solid var(--border-color); padding: 20px; border-radius: 12px; margin-top: 15px; font-family: var(--font-body); line-height: 1.8; color: var(--text-muted); font-style: italic;">
                    ${sampleVi.replace(/\n\n/g, '<br><br>').replace(/\n/g, '<br>')}
                </div>
                ` : ''}
            </div>`;
        })()}

        <!-- Action Buttons (Rewrite & Download) -->
        <div style="display: flex; justify-content: center; gap: 14px; margin-top: 30px; margin-bottom: 20px; flex-wrap: wrap;">
            <button class="btn btn-secondary" onclick="resetExtraPracticeArea()" style="padding: 12px 28px; font-weight: 700; border-radius: 10px; font-size: 15px;">
                <i class="fa-solid fa-rotate-left"></i> Viết lại bài này
            </button>
            <button class="btn-success-export" onclick="downloadExtraPracticeEssay('${typeId}', true)" style="padding: 12px 28px; font-weight: 700; border-radius: 10px; font-size: 15px;">
                <i class="fa-solid fa-file-word"></i> Tải Phiếu chấm & Bài viết (.doc)
            </button>
        </div>
    `;

    resultCard.classList.remove('hidden');
    resultCard.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // Send Form Report to Teacher
    const offTopicStatus = isCompletelyOffTopic ? '⚠️ LẠC ĐỀ HOÀN TOÀN' : (isPartiallyOffTopic ? '⚠️ NGUY CƠ LẠC ĐỀ' : '✓ ĐÚNG ĐỀ');
    sendExtraPracticeReport(typeId, wordCount, overallBand, convertedScore, errors.length, rawText, offTopicStatus);

    // Clear auto-save draft upon submission
    try {
        localStorage.removeItem('vstep_draft_extra_practice_' + typeId);
    } catch (e) {}
    updateExtraPracticeAutoSaveUI('Đã nộp bài', false);
}

function sendExtraPracticeReport(typeId, wordCount, bandScore, convertedScore, errorCount, studentText, offTopicStatus) {
    if (!currentStudentName || !currentStudentClass) return;

    const data = extraPracticeData[typeId];
    const typeTitle = data ? data.title : 'Bài Luyện Tập Thêm';
    const now = new Date().toLocaleString('vi-VN');
    const cleanSnippet = studentText.replace(/\s+/g, ' ').substring(0, 120);

    const reportPayload = `[BÀI LUYỆN TẬP THÊM - ${typeTitle.toUpperCase()}]: Học viên ${currentStudentName} (Lớp ${currentStudentClass}) | [CHỦ ĐỀ]: ${offTopicStatus || '✓ ĐÚNG ĐỀ'} | Điểm Task 1 (30%): ${convertedScore.toFixed(2)}/3.00 (Band ${bandScore.toFixed(1)}/10) | Số từ: ${wordCount} | Lỗi: ${errorCount} lỗi | Thời gian: ${now} | Bài làm: "${cleanSnippet}..."`;

    try {
        const formInput = document.getElementById('gform_hidden_input');
        const formEl = document.getElementById('gform_hidden_form');
        if (formInput && formEl) {
            formInput.value = reportPayload;
            formEl.submit();
        }
    } catch (e) {
        console.warn('Form post error:', e);
    }
}

// DOM Elements
let letterNav;
let mainTitle;
let welcomeScreen;
let letterContent;
let themeToggle;
let isDarkMode = false;
let lastFullPracticeEvaluationData = null;
let lastExtraPracticeEvaluationData = {};

// Auth & Student Information
const ALLOWED_CLASSES = ['B209', 'CB206', 'CB210', 'CB211', 'CB213', 'ONB103', 'B212', 'B2', 'GV'];
const BANNED_CLASSES = ['CB201', 'CB202', 'B220'];
const MANDATORY_PASSWORD = 'STUDYHARD';

const STUDENTS_BY_CLASS = {
    'CB206': [
        'Nguyễn Thị Vân Anh',
        'Nguyễn Thị Hồng Duyên',
        'Nguyễn Thị Thúy Hồng',
        'Trương Ngọc Nhi',
        'Nguyễn Phạm Như Quỳnh',
        'Trần Lê Quỳnh',
        'Thị Mỹ Tâm',
        'Ông Lê Thành',
        'Trần Nguyễn Thanh Thảo',
        'Phan Nhật Thiện',
        'Nguyễn Mỹ Tiên',
        'Trần Thị Cẩm Tiên',
        'Võ Trần Bảo Tính',
        'Trương Thanh Toàn',
        'Phạm Ngọc Trâm',
        'Nguyễn Võ Bảo Trân'
    ],
    'CB210': [
        'Lê Huỳnh Thanh Duy',
        'Nguyễn Cao Kỳ Duyên',
        'Nguyễn Võ Thành Đạt',
        'Đào Ngọc Hân',
        'Trần Văn Hữu',
        'Trần Văn Kim Khoa',
        'Nguyễn Thanh Nâng',
        'Huỳnh Kỳ Nguyên',
        'Võ Thị Kim Nguyên',
        'Võ Hùng Sanh',
        'Trần Thị Thanh Thảo',
        'Tiền Thị Thanh Thảo',
        'Đặng Thị Kim Thoa',
        'Trần Thị Tiên Tiên',
        'Lê Kim Tuyền'
    ],
    'CB211': [
        'Hồ Anh Quân',
        'Lê Thành Nghiệp',
        'Lê Khánh Lâm',
        'Huỳnh Thị Ngọc Thắm',
        'Mai Trần Xuân Mai',
        'Lê Thị Uyển Nhi',
        'Nguyễn Thụy Thanh Trúc'
    ],
    'CB213': [
        'Nguyễn Quốc Anh',
        'Hoàng Hợp Minh Châu',
        'Đặng Châu Gia Huy',
        'Trần Minh Tuệ Mẩn',
        'Đặng Thị Trúc Măng',
        'Trương Thị Kha My',
        'Ngô Diễm My',
        'Chiêm Chúc Ngân',
        'Huỳnh Thị Yến Nhi',
        'Phạm Nguyễn Tâm Như',
        'Phạm Nhựt Tiến',
        'Lê Thị Tú Trinh',
        'Trần Ngọc Vinh'
    ],
    'ONB103': [
        'Nguyễn Thị Duy',
        'Phạm Trần Mỹ Hân',
        'Trịnh Thị Thu Hiền',
        'Nguyễn Hoàng Kha',
        'Phạm Thị Út Lụa',
        'Lê Huỳnh Diễm My',
        'Nguyễn Thị Ngọc Mỹ',
        'Huỳnh Thị Kim Ngân',
        'Trần Thị Kim Ngân',
        'Nguyễn Thị Tiểu Phụng',
        'Trần Yến Phụng',
        'Phạm Ngọc Thạch',
        'Cao Thị Thu Trang',
        'Nguyễn Thị Thanh Tuyền',
        'Trần Phạm Phương Uyên',
        'Trần Ngô Mỹ Vy'
    ],
    'B212': [
        'Nguyễn Duy Hồng Anh',
        'Nguyễn Ngọc Minh Anh',
        'Nguyễn Lê Mỹ Hân',
        'Nguyễn Hồng Minh Huy',
        'Nguyễn Quốc Khải',
        'Đoàn Nguyễn Đình Khang',
        'Lê Nguyễn Gia Khánh',
        'Nguyễn Hữu Khánh',
        'Hồ Thị Ngọc Lan',
        'Trần Thị Hồng Lỉnh',
        'Trần Thị Hồng Lĩnh',
        'Võ Thị Triệu Minh',
        'Hứa Đình Nghi',
        'Võ Thị Bảo Ngọc',
        'Lê Tiến Phát',
        'Nguyễn Hoàng Thông',
        'Trần Hoàng Thông',
        'Nguyễn Kim Tiền',
        'Lê Thị Bảo Trân',
        'Võ Thị Diễm Trinh',
        'Nguyễn Tấn Trung',
        'Nguyễn Tiến Trung',
        'Trần Thị Ánh Tuyết',
        'Đặng Nguyễn Khánh Uyên',
        'Nguyễn Thị Chúc Yến'
    ],
    'B2': [
        'Gia Tuệ',
        'Gia Tuê',
        'Nguyễn Gia Tuệ',
        'Trần Gia Tuệ',
        'Lê Gia Tuệ'
    ]
};

const AUTHORIZED_STUDENTS = [
    ...STUDENTS_BY_CLASS['CB206'],
    ...STUDENTS_BY_CLASS['CB210'],
    ...STUDENTS_BY_CLASS['CB211'],
    ...STUDENTS_BY_CLASS['CB213'],
    ...STUDENTS_BY_CLASS['ONB103'],
    ...STUDENTS_BY_CLASS['B212'],
    ...STUDENTS_BY_CLASS['B2'],
    'PTMN'
];

function removeVietnameseTones(str) {
    if (!str) return '';
    return str
        .normalize('NFD')
        .replace(/[̀-ͯ]/g, '')
        .replace(/đ/g, 'd').replace(/Đ/g, 'D');
}

function normalizeVietnameseName(str) {
    if (!str) return '';
    return str.trim().toLowerCase().replace(/\s+/g, ' ');
}

function findStudentInfo(name) {
    if (!name) return null;
    const norm = normalizeVietnameseName(name);
    const noTone = removeVietnameseTones(norm);

    if (norm === 'ptmn' || noTone === 'ptmn') {
        return { name: 'Cô Nguyệt (PTMN)', class: 'GV', isTeacher: true };
    }

    for (const [cls, list] of Object.entries(STUDENTS_BY_CLASS)) {
        // Try exact match first
        let found = list.find(s => normalizeVietnameseName(s) === norm);
        // Try without tones if not found
        if (!found) {
            found = list.find(s => removeVietnameseTones(normalizeVietnameseName(s)) === noTone);
        }
        if (found) {
            return { name: found, class: cls, isTeacher: false };
        }
    }
    return null;
}

function isAuthorizedStudent(name) {
    return findStudentInfo(name) !== null;
}

const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdp8Lc1lEoZQDp1JwFVbj2itDrWnL9TRw0AY9he0vAbBHL4WA/formResponse";
const GOOGLE_FORM_ENTRY_ID = "entry.388968236";

let currentStudentName = '';
let currentStudentClass = '';

let loginModalOverlay;
let studentNameInput;
let studentClassInput;
let studentClassSelect;
let studentPasswordInput;
let btnLoginSubmit;
let loginErrorMsg;
let loginErrorText;

let studentProfileCard;
let studentNameDisplay;
let studentClassDisplay;
let btnEditStudent;

let questStudentGreeting;
let greetingStudentName;
let greetingStudentClass;

let reportStatusBox;
let reportStatusIcon;
let reportStatusText;
let btnResendReport;

// Recitation DOM Elements
let recitationInput;
let btnPrevQuestion;
let btnShowAnswer;
let btnCheckAnswer;
let btnNextQuestion;
let currentQuestionNum;
let totalQuestionsNum;
let progressBarFill;
let questionCueText;
let recitationFeedback;
let feedbackStatus;
let userDiffResult;
let correctTextResult;
let questionHintBox;
let questionHintText;

// Evaluation DOM Elements
let recitationQuizBox;
let recitationResultBox;
let scorePercentageVal;
let resultStatusVal;
let resultMessageVal;
let btnRestartRecitation;
let evaluationIcon;

// Recitation State & Tab Locking
let activeLetterTypeId = 'advice';
let currentQuestionIndex = 0;
let activeQuestions = [];
let questionScores = [];
let questionHintsUsed = [];
let isRecitationInProgress = false;
let btnSubmitRecitationEarly = null;

// Anti-Cheating & Violation Warning System for TRẢ BÀI
let recitationCheatAttempts = 0;
const MAX_RECITATION_CHEAT_ATTEMPTS = 3;
let isRecitationCheatModalOpen = false;
let hasLeftRecitationTab = false;
let recitationBlurTimer = null;

let cheatWarningModal = null;
let cheatWarningBadge = null;
let cheatWarningReason = null;
let cheatWarningConsequence = null;
let btnDismissCheatWarning = null;
let btnDisqualifyRecitation = null;
let recitationCheatCounterBadge = null;
let recitationCheatCountText = null;
let evaluationCheatRecord = null;
let evaluationCheatRecordText = null;

// Timer DOM Elements & State (20-minute Recitation Timer)
let recitationTimerBadge;
let recitationCountdown;
let timeSpentVal;
let evaluationTimeSpent;
let recitationTimerInterval = null;
const RECITATION_TIME_LIMIT = 20 * 60; // 20 minutes = 1200 seconds
let recitationTimeRemaining = RECITATION_TIME_LIMIT;
let isRecitationTimerRunning = false;

// Full Practice (THỰC HÀNH) DOM Elements & State
let fullPracticePanel;
let fullPracticeTimerBadge;
let fullPracticeCountdown;
let fullPracticeWordBadge;
let fullPracticeWordCount;
let fullPracticePromptBox;
let fullPracticeWritingBox;
let fullPracticeInput;
let btnSubmitFullPractice;
let btnSubmitFullPracticeEarly;
let fullPracticeResultBox;
let fullPracticeLockedBanner;

let isFullPracticeInProgress = false;
let fullPracticeTimerInterval = null;
const FULL_PRACTICE_TIME_LIMIT = 20 * 60; // 20 minutes = 1200 seconds
let fullPracticeTimeRemaining = FULL_PRACTICE_TIME_LIMIT;
let isFullPracticeTimerRunning = false;

// Extra Practice (BÀI LUYỆN TẬP THÊM) Timer State
let isExtraPracticeInProgress = false;
let extraPracticeTimerInterval = null;
const EXTRA_PRACTICE_TIME_LIMIT = 20 * 60; // 20 minutes = 1200 seconds
let extraPracticeTimeRemaining = EXTRA_PRACTICE_TIME_LIMIT;
let isExtraPracticeTimerRunning = false;
let currentExtraPracticeTypeId = 'advice';

function formatTimerString(totalSeconds) {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    const pad = (n) => (n < 10 ? '0' + n : n);
    return `${pad(mins)}:${pad(secs)}`;
}

function updateRecitationTimerDisplay() {
    if (recitationCountdown) {
        recitationCountdown.textContent = formatTimerString(recitationTimeRemaining);
    }

    if (recitationTimerBadge) {
        recitationTimerBadge.classList.remove('timer-normal', 'timer-warning', 'timer-urgent');
        if (recitationTimeRemaining > 300) {
            recitationTimerBadge.classList.add('timer-normal');
        } else if (recitationTimeRemaining > 60) {
            recitationTimerBadge.classList.add('timer-warning');
        } else {
            recitationTimerBadge.classList.add('timer-urgent');
        }
    }
}

function updateRecitationTimerDisplays() {
    updateRecitationTimerDisplay();
}

function startRecitationTimer() {
    if (isRecitationTimerRunning) return;
    if (recitationTimeRemaining <= 0) {
        recitationTimeRemaining = RECITATION_TIME_LIMIT;
    }
    isRecitationTimerRunning = true;
    updateRecitationTimerDisplay();

    if (recitationTimerInterval) clearInterval(recitationTimerInterval);
    recitationTimerInterval = setInterval(() => {
        if (recitationTimeRemaining > 0) {
            recitationTimeRemaining--;
            updateRecitationTimerDisplay();
        } else {
            handleRecitationTimeUp();
        }
    }, 1000);
}

function stopRecitationTimer() {
    if (recitationTimerInterval) {
        clearInterval(recitationTimerInterval);
        recitationTimerInterval = null;
    }
    isRecitationTimerRunning = false;
}

function resetRecitationTimer() {
    stopRecitationTimer();
    recitationTimeRemaining = RECITATION_TIME_LIMIT;
    updateRecitationTimerDisplay();
}

function handleRecitationTimeUp() {
    stopRecitationTimer();
    if (recitationInput) recitationInput.disabled = true;

    // Check current question if student typed something but hasn't submitted yet
    const userAns = recitationInput ? recitationInput.value.trim() : '';
    if (userAns && (!recitationFeedback || recitationFeedback.classList.contains('hidden'))) {
        const q = activeQuestions[currentQuestionIndex];
        if (q) {
            const diffResult = diffWords(userAns, q.target);
            questionScores[currentQuestionIndex] = diffResult.accuracy;
        }
    }

    alert('⏰ ĐÃ HẾT THỜI GIAN 20 PHÚT LÀM BÀI!\nHệ thống tự động nộp bài và hiển thị kết quả đánh giá trả bài của bạn.');
    showEvaluationResult();
}

// Toast Notification System
let toastNoticeTimeout = null;
function showToastNotice(message, iconClass = 'fa-solid fa-lock') {
    let toast = document.getElementById('antiCopyToast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'antiCopyToast';
        toast.className = 'anti-copy-toast';
        toast.innerHTML = `<i id="antiCopyToastIcon" class="${iconClass}"></i> <span id="antiCopyToastMsg"></span>`;
        document.body.appendChild(toast);
    }

    const msgSpan = document.getElementById('antiCopyToastMsg');
    const iconEl = toast.querySelector('i') || document.getElementById('antiCopyToastIcon');
    if (msgSpan) {
        msgSpan.textContent = message;
    }
    if (iconEl && iconClass) {
        iconEl.className = iconClass;
    }

    toast.classList.add('show');

    if (toastNoticeTimeout) clearTimeout(toastNoticeTimeout);
    toastNoticeTimeout = setTimeout(() => {
        toast.classList.remove('show');
    }, 2800);
}

function showAntiCopyToast(message) {
    showToastNotice(message || 'Không được phép Sao chép hoặc Dán (Copy/Paste)! Vui lòng tự gõ phím để rèn luyện.', 'fa-solid fa-ban');
}

// Unified Navigation Locking System for TRẢ BÀI & THỰC HÀNH
function applyNavigationLock(activeTab) {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        if (btn.dataset.tab !== activeTab) {
            btn.classList.add('tab-locked');
            btn.setAttribute('title', 'Đã bị khóa trong lúc làm bài');
        } else {
            btn.classList.remove('tab-locked');
            btn.removeAttribute('title');
        }
    });

    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.add('nav-locked');
        item.setAttribute('title', 'Đã bị khóa trong lúc làm bài');
    });

    if (btnEditStudent) btnEditStudent.classList.add('btn-locked');
    const btnReset = document.getElementById('btnResetProgress');
    if (btnReset) btnReset.classList.add('btn-locked');
}

function removeNavigationLock() {
    if (!isRecitationInProgress && !isFullPracticeInProgress) {
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('tab-locked');
            btn.removeAttribute('title');
        });

        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('nav-locked');
            item.removeAttribute('title');
        });

        if (btnEditStudent) btnEditStudent.classList.remove('btn-locked');
        const btnReset = document.getElementById('btnResetProgress');
        if (btnReset) btnReset.classList.remove('btn-locked');
    }
}

// Lock / Unlock Navigation during Recitation (TRẢ BÀI)
function lockNavigationDuringRecitation() {
    isRecitationInProgress = true;
    applyNavigationLock('writingPractice');

    const banner = document.getElementById('recitationLockedBanner');
    if (banner) banner.classList.remove('hidden');
}

function unlockNavigationAfterRecitation() {
    isRecitationInProgress = false;
    const banner = document.getElementById('recitationLockedBanner');
    if (banner) banner.classList.add('hidden');

    removeNavigationLock();
}

// ==========================================================================
// ANTI-CHEATING & VIOLATION WARNING SYSTEM (TRẢ BÀI)
// ==========================================================================

function playCheatingAlertSound() {
    try {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (!AudioContextClass) return;
        const ctx = new AudioContextClass();
        if (ctx.state === 'suspended') {
            ctx.resume();
        }
        const now = ctx.currentTime;
        
        // Urgent 3-tone siren beep
        const tones = [
            { f: 880, start: 0, dur: 0.15 },
            { f: 659.25, start: 0.18, dur: 0.15 },
            { f: 880, start: 0.36, dur: 0.22 }
        ];

        tones.forEach(t => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(t.f, now + t.start);
            gain.gain.setValueAtTime(0.2, now + t.start);
            gain.gain.exponentialRampToValueAtTime(0.001, now + t.start + t.dur);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(now + t.start);
            osc.stop(now + t.start + t.dur);
        });
    } catch (e) {
        // Silently handled if audio policy blocks sound
    }
}

function triggerRecitationCheatWarning(actionDescription) {
    if (!isRecitationInProgress) return;
    if (isRecitationCheatModalOpen) return;

    recitationCheatAttempts++;
    isRecitationCheatModalOpen = true;

    // Flash screen red alert effect
    document.body.classList.add('cheat-flashing');
    setTimeout(() => {
        document.body.classList.remove('cheat-flashing');
    }, 1200);

    // Audio siren
    playCheatingAlertSound();

    // Update Header Badge
    if (recitationCheatCounterBadge && recitationCheatCountText) {
        recitationCheatCounterBadge.classList.remove('hidden');
        recitationCheatCountText.textContent = `${recitationCheatAttempts}/${MAX_RECITATION_CHEAT_ATTEMPTS}`;
    }

    // Update Modal UI
    if (cheatWarningModal && cheatWarningBadge && cheatWarningReason && cheatWarningConsequence) {
        cheatWarningBadge.className = 'cheat-warning-badge';

        if (recitationCheatAttempts === 1) {
            cheatWarningBadge.classList.add('badge-warn-1');
            cheatWarningBadge.innerHTML = `<i class="fa-solid fa-shield-halved"></i> CẢNH BÁO GIAN LẬN • LẦN 1/${MAX_RECITATION_CHEAT_ATTEMPTS}`;
            cheatWarningReason.innerHTML = `Hệ thống ghi nhận bạn vừa có hành vi: <strong style="color: #ef4444;">${actionDescription}</strong> trong lúc đang trả bài!`;
            cheatWarningConsequence.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> <span>Đây là <strong>cảnh báo lần thứ 1</strong>. Bạn còn <strong>2 lần cảnh báo</strong> nữa trước khi hệ thống tự động đình chỉ bài thi.</span>`;
            if (btnDismissCheatWarning) {
                btnDismissCheatWarning.classList.remove('hidden');
                btnDismissCheatWarning.innerHTML = `<i class="fa-solid fa-rotate-left"></i> Tôi đã hiểu & Quay lại làm bài`;
            }
            if (btnDisqualifyRecitation) btnDisqualifyRecitation.classList.add('hidden');
        } else if (recitationCheatAttempts === 2) {
            cheatWarningBadge.classList.add('badge-warn-2');
            cheatWarningBadge.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> CẢNH BÁO NGUY HIỂM • LẦN 2/${MAX_RECITATION_CHEAT_ATTEMPTS}`;
            cheatWarningReason.innerHTML = `<strong>CẢNH BÁO CUỐI CÙNG:</strong> Bạn tiếp tục tái phạm hành vi: <strong style="color: #ef4444;">${actionDescription}</strong>!`;
            cheatWarningConsequence.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> <span>⚠️ <strong>CỰC KỲ NGUY HIỂM:</strong> Nếu bạn vi phạm thêm <strong>1 lần nữa</strong>, hệ thống sẽ <strong>LẬP TỨC THU BÀI VÀ CHO 0 ĐIỂM (ĐÌNH CHỈ)</strong>!</span>`;
            if (btnDismissCheatWarning) {
                btnDismissCheatWarning.classList.remove('hidden');
                btnDismissCheatWarning.innerHTML = `<i class="fa-solid fa-shield-virus"></i> Tôi cam kết không tái phạm & Làm tiếp`;
            }
            if (btnDisqualifyRecitation) btnDisqualifyRecitation.classList.add('hidden');
        } else {
            // Level 3+ -> Disqualification
            cheatWarningBadge.classList.add('badge-disqualified');
            cheatWarningBadge.innerHTML = `<i class="fa-solid fa-ban"></i> ĐÃ BỊ ĐÌNH CHỈ • LẦN ${recitationCheatAttempts}/${MAX_RECITATION_CHEAT_ATTEMPTS}`;
            cheatWarningReason.innerHTML = `Bạn đã vi phạm quy chế chuyển tab quá <strong>${MAX_RECITATION_CHEAT_ATTEMPTS} lần</strong> trong phiên trả bài này!`;
            cheatWarningConsequence.innerHTML = `<i class="fa-solid fa-gavel"></i> <span>🚨 <strong>BÀI LÀM ĐÃ BỊ HỦY BỎ:</strong> Bạn bị tính <strong>0 ĐIỂM</strong> do vi phạm nghiêm trọng quy chế thi. Kết quả vi phạm đã được ghi nhận vào hệ thống giáo viên!</span>`;
            if (btnDismissCheatWarning) btnDismissCheatWarning.classList.add('hidden');
            if (btnDisqualifyRecitation) {
                btnDisqualifyRecitation.classList.remove('hidden');
                btnDisqualifyRecitation.innerHTML = `<i class="fa-solid fa-arrow-right"></i> Xem kết quả xử lý vi phạm`;
            }
        }

        cheatWarningModal.classList.remove('hidden');
    }
}

function dismissRecitationCheatWarning() {
    if (cheatWarningModal) cheatWarningModal.classList.add('hidden');
    isRecitationCheatModalOpen = false;
    hasLeftRecitationTab = false;
    if (recitationInput && !recitationInput.disabled) {
        recitationInput.focus();
    }
}

function disqualifyRecitationForCheating() {
    stopRecitationTimer();
    unlockNavigationAfterRecitation();

    // Reset scores to 0
    questionScores = new Array(activeQuestions.length).fill(0);

    const timeSpentSeconds = Math.max(0, RECITATION_TIME_LIMIT - recitationTimeRemaining);
    if (timeSpentVal) {
        timeSpentVal.textContent = formatTimerString(timeSpentSeconds);
    }
    if (scorePercentageVal) {
        scorePercentageVal.textContent = 0;
    }
    if (resultStatusVal) {
        resultStatusVal.textContent = 'ĐÌNH CHỈ';
    }
    if (resultMessageVal) {
        resultMessageVal.textContent = `Bài trả bài bị đình chỉ do vi phạm quy chế chuyển tab ${recitationCheatAttempts} lần. Bạn cần ôn lại bài thật kỹ và tự giác làm bài trung thực!`;
    }
    if (evaluationIcon) {
        evaluationIcon.innerHTML = '<i class="fa-solid fa-ban" style="color: #ef4444;"></i>';
    }

    const evalCard = document.querySelector('.evaluation-card');
    if (evalCard) {
        evalCard.classList.remove('passed');
        evalCard.classList.add('failed', 'disqualified');
    }

    if (evaluationCheatRecord && evaluationCheatRecordText) {
        evaluationCheatRecord.classList.remove('hidden');
        evaluationCheatRecordText.innerHTML = `Phát hiện học viên đã chuyển tab/rời bài <strong>${recitationCheatAttempts} lần</strong> vi phạm!`;
    }

    // Hide quiz box and progress, show result box
    if (recitationQuizBox) recitationQuizBox.classList.add('hidden');
    if (recitationFeedback) recitationFeedback.classList.add('hidden');
    const recitationHeader = document.querySelector('.recitation-header');
    if (recitationHeader) recitationHeader.classList.add('hidden');
    const progressWrapper = document.querySelector('.recitation-progress-wrapper');
    if (progressWrapper) progressWrapper.style.display = 'none';
    if (recitationResultBox) recitationResultBox.classList.remove('hidden');

    // Report Disqualification to Google Form
    const name = currentStudentName || localStorage.getItem('vstep_student_name') || 'Học viên';
    const cls = currentStudentClass || localStorage.getItem('vstep_student_class') || 'Chưa rõ';
    const typeData = letterTypes.find(t => t.id === activeLetterTypeId);
    const letterTitle = typeData ? `${typeData.titleEn} (${typeData.titleVi})` : 'VSTEP Task 1';
    const now = new Date().toLocaleString('vi-VN');
    const timeSpentStr = formatTimerString(timeSpentSeconds);

    const cheatPayload = `[HỌC VIÊN]: ${name} | [LỚP]: ${cls} | [DẠNG BÀI]: ${letterTitle} | [ĐIỂM]: 0% (ĐÌNH CHỈ GIAN LẬN) | [VI PHẠM]: Cố tình chuyển tab ${recitationCheatAttempts} lần | [THỜI GIAN LÀM]: ${timeSpentStr}/20:00 | [THỜI ĐIỂM NỘP]: ${now}`;
    reportResultToGoogleForm(cheatPayload);
}

function initRecitationAntiCheatingEvents() {
    document.addEventListener('visibilitychange', () => {
        if (isRecitationInProgress && !isRecitationCheatModalOpen) {
            if (document.visibilityState === 'hidden') {
                hasLeftRecitationTab = true;
            } else if (document.visibilityState === 'visible' && hasLeftRecitationTab) {
                hasLeftRecitationTab = false;
                triggerRecitationCheatWarning('chuyển sang tab khác của trình duyệt hoặc rời khỏi màn hình làm bài');
            }
        }
    });

    window.addEventListener('blur', () => {
        if (isRecitationInProgress && !isRecitationCheatModalOpen) {
            if (recitationBlurTimer) clearTimeout(recitationBlurTimer);
            recitationBlurTimer = setTimeout(() => {
                if (isRecitationInProgress && !isRecitationCheatModalOpen) {
                    if (!document.hasFocus() || document.hidden) {
                        hasLeftRecitationTab = true;
                    }
                }
            }, 2000);
        }
    });

    window.addEventListener('focus', () => {
        if (recitationBlurTimer) {
            clearTimeout(recitationBlurTimer);
            recitationBlurTimer = null;
        }
        if (isRecitationInProgress && hasLeftRecitationTab && !isRecitationCheatModalOpen) {
            hasLeftRecitationTab = false;
            triggerRecitationCheatWarning('rời khỏi cửa sổ bài làm hoặc chuyển sang ứng dụng khác');
        }
    });
}

// Lock / Unlock Navigation during Full Practice (THỰC HÀNH)
function lockNavigationDuringFullPractice() {
    isFullPracticeInProgress = true;
    applyNavigationLock('fullPractice');

    const banner = document.getElementById('fullPracticeLockedBanner');
    if (banner) banner.classList.remove('hidden');
}

function unlockNavigationAfterFullPractice() {
    isFullPracticeInProgress = false;
    const banner = document.getElementById('fullPracticeLockedBanner');
    if (banner) banner.classList.add('hidden');

    removeNavigationLock();
}

// Audio chime on time up
function playTimeUpSound() {
    try {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (!AudioContextClass) return;
        const ctx = new AudioContextClass();
        if (ctx.state === 'suspended') {
            ctx.resume();
        }
        const now = ctx.currentTime;
        const notes = [
            { f: 523.25, start: 0, dur: 0.22 },
            { f: 659.25, start: 0.22, dur: 0.22 },
            { f: 783.99, start: 0.44, dur: 0.50 }
        ];
        notes.forEach(n => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(n.f, now + n.start);
            gain.gain.setValueAtTime(0, now + n.start);
            gain.gain.linearRampToValueAtTime(0.35, now + n.start + 0.04);
            gain.gain.exponentialRampToValueAtTime(0.001, now + n.start + n.dur);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(now + n.start);
            osc.stop(now + n.start + n.dur);
        });
    } catch (e) {
        // AudioContext not supported
    }
}

// Full Practice Timer
function updateFullPracticeTimerDisplay() {
    const timeStr = formatTimerString(fullPracticeTimeRemaining);
    const countdowns = [
        fullPracticeCountdown,
        document.getElementById('fullPracticeCountdownSticky')
    ];
    countdowns.forEach(el => {
        if (el) el.textContent = timeStr;
    });

    const badges = [
        fullPracticeTimerBadge,
        document.getElementById('fullPracticeTimerBadgeSticky')
    ];
    badges.forEach(b => {
        if (!b) return;
        b.classList.remove('timer-normal', 'timer-warning', 'timer-urgent');
        if (fullPracticeTimeRemaining > 300) {
            b.classList.add('timer-normal');
        } else if (fullPracticeTimeRemaining > 60) {
            b.classList.add('timer-warning');
        } else {
            b.classList.add('timer-urgent');
        }
    });

    updateFullPracticeTimerControls();
}

function updateFullPracticeTimerControls() {
    const icon1 = document.getElementById('fullPracticeTimerIcon');
    const icon2 = document.getElementById('fullPracticeTimerIconSticky');
    const iconClass = isFullPracticeTimerRunning ? 'fa-solid fa-pause' : 'fa-solid fa-play';
    if (icon1) icon1.className = iconClass;
    if (icon2) icon2.className = iconClass;
}

function toggleFullPracticeTimer() {
    if (isFullPracticeTimerRunning) {
        stopFullPracticeTimer();
        showToastNotice('⏸️ Đã tạm dừng đếm giờ thực hành viết bài.', 'fa-solid fa-pause');
    } else {
        startFullPracticeTimer();
        showToastNotice('▶️ Tiếp tục đếm giờ thực hành viết bài (20 phút).', 'fa-solid fa-play');
    }
}

function startFullPracticeTimer() {
    if (isFullPracticeTimerRunning) return;
    if (fullPracticeTimeRemaining <= 0) {
        fullPracticeTimeRemaining = FULL_PRACTICE_TIME_LIMIT;
    }
    isFullPracticeTimerRunning = true;
    updateFullPracticeTimerDisplay();

    if (fullPracticeTimerInterval) clearInterval(fullPracticeTimerInterval);
    fullPracticeTimerInterval = setInterval(() => {
        if (fullPracticeTimeRemaining > 0) {
            fullPracticeTimeRemaining--;
            updateFullPracticeTimerDisplay();
        } else {
            handleFullPracticeTimeUp();
        }
    }, 1000);
}

function stopFullPracticeTimer() {
    if (fullPracticeTimerInterval) {
        clearInterval(fullPracticeTimerInterval);
        fullPracticeTimerInterval = null;
    }
    isFullPracticeTimerRunning = false;
    updateFullPracticeTimerControls();
}

function resetFullPracticeTimer() {
    stopFullPracticeTimer();
    fullPracticeTimeRemaining = FULL_PRACTICE_TIME_LIMIT;
    updateFullPracticeTimerDisplay();
}

function handleFullPracticeTimeUp() {
    stopFullPracticeTimer();
    playTimeUpSound();
    alert('⏰ ĐÃ HẾT THỜI GIAN 20 PHÚT LÀM BÀI!\nHệ thống tự động nộp bài thực hành viết thư của bạn và mở khóa các tab để bạn đối chiếu với bài mẫu.');
    submitFullPractice(true);
}

// Extra Practice (BÀI LUYỆN TẬP THÊM) 20-minute Timer System
function updateExtraPracticeTimerDisplay() {
    const timeStr = formatTimerString(extraPracticeTimeRemaining);
    const countdowns = [
        document.getElementById('extraPracticeCountdown'),
        document.getElementById('extraPracticeCountdownSticky')
    ];
    countdowns.forEach(el => {
        if (el) el.textContent = timeStr;
    });

    const badges = [
        document.getElementById('extraPracticeTimerBadge'),
        document.getElementById('extraPracticeTimerBadgeSticky')
    ];
    badges.forEach(b => {
        if (!b) return;
        b.classList.remove('timer-normal', 'timer-warning', 'timer-urgent');
        if (extraPracticeTimeRemaining > 300) {
            b.classList.add('timer-normal');
        } else if (extraPracticeTimeRemaining > 60) {
            b.classList.add('timer-warning');
        } else {
            b.classList.add('timer-urgent');
        }
    });

    updateExtraPracticeTimerControls();
}

function updateExtraPracticeTimerControls() {
    const icon1 = document.getElementById('extraPracticeTimerIcon');
    const icon2 = document.getElementById('extraPracticeTimerIconSticky');
    const iconClass = isExtraPracticeTimerRunning ? 'fa-solid fa-pause' : 'fa-solid fa-play';
    if (icon1) icon1.className = iconClass;
    if (icon2) icon2.className = iconClass;
}

function toggleExtraPracticeTimer() {
    if (isExtraPracticeTimerRunning) {
        stopExtraPracticeTimer();
        showToastNotice('⏸️ Đã tạm dừng đếm giờ bài luyện tập thêm.', 'fa-solid fa-pause');
    } else {
        startExtraPracticeTimer();
        showToastNotice('▶️ Tiếp tục đếm giờ bài luyện tập thêm (20 phút).', 'fa-solid fa-play');
    }
}

function startExtraPracticeTimer() {
    if (isExtraPracticeTimerRunning) return;
    if (extraPracticeTimeRemaining <= 0) {
        extraPracticeTimeRemaining = EXTRA_PRACTICE_TIME_LIMIT;
    }
    isExtraPracticeTimerRunning = true;
    isExtraPracticeInProgress = true;
    updateExtraPracticeTimerDisplay();

    if (extraPracticeTimerInterval) clearInterval(extraPracticeTimerInterval);
    extraPracticeTimerInterval = setInterval(() => {
        if (extraPracticeTimeRemaining > 0) {
            extraPracticeTimeRemaining--;
            updateExtraPracticeTimerDisplay();
        } else {
            handleExtraPracticeTimeUp();
        }
    }, 1000);
}

function stopExtraPracticeTimer() {
    if (extraPracticeTimerInterval) {
        clearInterval(extraPracticeTimerInterval);
        extraPracticeTimerInterval = null;
    }
    isExtraPracticeTimerRunning = false;
    updateExtraPracticeTimerControls();
}

function resetExtraPracticeTimer() {
    stopExtraPracticeTimer();
    extraPracticeTimeRemaining = EXTRA_PRACTICE_TIME_LIMIT;
    isExtraPracticeInProgress = false;
    updateExtraPracticeTimerDisplay();
}

function handleExtraPracticeTimeUp() {
    stopExtraPracticeTimer();
    isExtraPracticeInProgress = false;
    playTimeUpSound();
    alert('⏰ ĐÃ HẾT THỜI GIAN 20 PHÚT LÀM BÀI!\nHệ thống tự động nộp bài luyện tập thêm của bạn để chấm điểm theo 4 tiêu chí VSTEP (30%).');
    gradeExtraPractice(currentExtraPracticeTypeId, true);
}

function submitRecitationEarly() {
    if (!isRecitationInProgress) return;

    const confirmEarly = confirm(
        '⚠️ BẠN CÓ CHẮC CHẮN MUỐN NỘP BÀI SỚM KHÔNG?\n\n' +
        '• Các câu hỏi chưa làm sẽ được tính 0 điểm.\n' +
        '• Hệ thống sẽ tự động tổng kết điểm và MỞ KHÓA lại các tab cho bạn.\n\n' +
        'Bấm OK để nộp bài sớm ngay, hoặc Hủy để tiếp tục làm bài.'
    );

    if (!confirmEarly) return;

    clearRecitationDraft(activeLetterTypeId);

    // Grade current question if user entered something
    const userAns = recitationInput ? recitationInput.value.trim() : '';
    if (userAns && (!recitationFeedback || recitationFeedback.classList.contains('hidden'))) {
        const q = activeQuestions[currentQuestionIndex];
        if (q) {
            const diffResult = diffWords(userAns, q.target);
            const hintUsed = questionHintsUsed[currentQuestionIndex];
            const finalScore = hintUsed ? Math.round(diffResult.accuracy * 0.5) : diffResult.accuracy;
            questionScores[currentQuestionIndex] = finalScore;
        }
    }

    showEvaluationResult();
}

// Generate subtle hint: triggers recall with starting phrases without being overly revealing
function getHintText(target) {
    if (!target) return '';
    target = target.trim();

    // Handle alternative structure targets like 'Remember to + Vo. / Don’t forget to + Vo.'
    if (target.includes(' / ') && (target.includes('+ Vo') || target.includes('+ Ving') || target.includes('Don’t forget'))) {
        const options = target.split(' / ');
        const hintOpts = options.map(opt => getHintText(opt));
        return hintOpts.join(' / ');
    }

    if (/^dear\s+sir\s*\/\s*madam/i.test(target)) {
        return 'Dear S...,';
    }
    if (/^dear\s+mr\b/i.test(target) && target.includes('Ms.') && target.includes('Mrs.')) {
        return 'Dear M... [họ...]';
    }

    const targetClean = target
        .replace(/\s*\/\s*quite unhappy/i, '')
        .replace(/on\/in/g, 'on/in');

    const sentences = targetClean.split(/(?<=[.?!;])\s+/);
    const cues = [];

    for (const s of sentences) {
        const sTrim = s.trim();
        if (!sTrim) continue;

        const hasVo = /\+\s*vo\b/i.test(sTrim);
        const hasVing = /\+\s*ving\b/i.test(sTrim);

        // Replace bracket descriptions with subtle placeholder [tên...]
        const sDisplay = sTrim.replace(/\[([^\]\s]+)[^\]]*\]/g, '[$1...]');
        const words = sDisplay.split(/\s+/);

        if (words.length <= 2) {
            if (words[0].toLowerCase() === 'best' && words.length >= 2) {
                cues.push(`${words[0]} ${words[1][0]}...,`);
            } else if (words[0].toLowerCase() === 'yours' && words.length >= 2) {
                cues.push(`${words[0]} ${words[1][0]}...,`);
            } else if (words[0].toLowerCase() === 'dear' && words.length >= 2) {
                if (words[1].startsWith('[')) {
                    cues.push(`${words[0]} ${words[1]}`);
                } else {
                    cues.push(`${words[0]} ${words[1][0]}...,`);
                }
            } else {
                cues.push(words.join(' '));
            }
        } else {
            const lowerS = sTrim.toLowerCase();
            let num = 2;
            if (lowerS.startsWith('i would like to')) {
                num = 5; // e.g. "I would like to know..." / "I would like to inquire..."
            } else if (lowerS.startsWith('could you') || lowerS.startsWith('can you')) {
                num = 4; // e.g. "Could you provide me..." / "Can you give me..."
            } else if (lowerS.startsWith('i want to') || lowerS.startsWith('i want more')) {
                num = 4; // e.g. "I want to know..." / "I want more information..."
            } else if (lowerS.startsWith('the quality of') || lowerS.startsWith('one thing that') || lowerS.startsWith('to enhance the')) {
                num = 4;
            } else if (words.length >= 7) {
                num = 3;
            } else {
                num = 2;
            }

            let prefix = words.slice(0, num).join(' ');
            prefix = prefix.replace(/[,.?!…]+$/, '');

            let suffix = '';
            if (hasVo && !prefix.includes('+ Vo')) {
                suffix = ' (+ Vo.)';
            } else if (hasVing && !prefix.includes('+ Ving')) {
                suffix = ' (+ Ving)';
            }

            cues.push(prefix + '...' + suffix);
        }
    }

    return cues.join(' / ');
}

function countWords(str) {
    if (!str) return 0;
    const words = str.trim().split(/\s+/).filter(w => w.length > 0);
    return words.length;
}

function escapeHtml(str) {
    if (!str) return '';
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

// Word-by-word diff algorithm using LCS with flexible bracket placeholder support
function diffWords(userText, targetText) {
    const isPunctOrSignOnly = (w) => /^[+\-–—−.,!?;:()\[\]\s]+$/.test(w);

    const preProcess = (t) => t
        .replace(/…/g, '...')
        .replace(/\.\s*\.\s*\./g, '...')
        .replace(/[’‘]/g, "'")
        .replace(/[“”]/g, '"')
        // Strip leading bullet marks (+, -, *, etc.)
        .replace(/^[\s+\-–—−*•]+/, '')
        // Normalize V-ing and V-o notation variations first
        .replace(/(^|[^a-zA-Z0-9])([vV])\s*[-_–—−]\s*(ing\b|[0oO]\b)/gi, '$1$2$3')
        // Normalize hành động slot delimiters (+, -, –, —, :, /, or space)
        .replace(/(hành\s*động)\s*([+\-:–—−/]|->)?\s*/gi, '$1 ')
        // Normalize hyphens between English words (e.g. part-time -> part time)
        .replace(/([a-zA-Z0-9])\s*[-–—−]\s*([a-zA-Z0-9])/g, '$1 $2')
        .replace(/[–—−]/g, '-')
        .replace(/\s*\+\s*/g, ' + ')
        .replace(/\s*-\s*/g, ' - ');
        
    const clean = (w) => {
        let s = w.toLowerCase().trim();
        s = s.replace(/^[.,!?;:()+\[\]\s\-–—−/]+|[.,!?;:()+\[\]\s\-–—−/]+$/g, '');
        s = s.replace(/^[vV]\s*[-_]?ing$/i, 'ving');
        s = s.replace(/^[vV]\s*[-_]?[0oO]$/i, 'vo');
        return s;
    };

    // Special handling for salutation Dear Sir/Madam, (accept Dear Sir,, Dear Madam,, Dear Sir/Madam,)
    if (/^dear\s+sir\s*\/\s*madam/i.test(targetText)) {
        const altTargets = [
            'Dear Sir/Madam,',
            'Dear Sir,',
            'Dear Madam,'
        ];
        let bestDiff = null;
        for (const alt of altTargets) {
            const curDiff = diffWordsSingle(userText, alt, preProcess, clean, isPunctOrSignOnly);
            if (!bestDiff || curDiff.accuracy > bestDiff.accuracy) {
                bestDiff = curDiff;
            }
        }
        return bestDiff;
    }

    // Special handling for semi-formal salutation Dear Mr. / Ms. / Mrs. [họ của người nhận],
    if (/^dear\s+mr\b/i.test(targetText) && targetText.includes('Ms.') && targetText.includes('Mrs.')) {
        const altTargets = [
            targetText,
            'Dear Mr. [họ của người nhận],',
            'Dear Ms. [họ của người nhận],',
            'Dear Mrs. [họ của người nhận],',
            'Dear Mr./Ms./Mrs. [họ của người nhận],'
        ];
        let bestDiff = null;
        for (const alt of altTargets) {
            const curDiff = diffWordsSingle(userText, alt, preProcess, clean, isPunctOrSignOnly);
            if (!bestDiff || curDiff.accuracy > bestDiff.accuracy) {
                bestDiff = curDiff;
            }
        }
        return bestDiff;
    }

    // If target has alternate options separated by ' / ' (e.g. 'Remember to + Vo. / Don’t forget to + Vo.')
    if (targetText.includes(' / ') && (targetText.includes('+ Vo') || targetText.includes('+ Ving') || targetText.includes('Don’t forget') || targetText.includes('quite unhappy'))) {
        const altTargets = targetText.split(' / ');
        let bestDiff = null;
        for (const alt of altTargets) {
            const curDiff = diffWordsSingle(userText, alt.trim(), preProcess, clean, isPunctOrSignOnly);
            if (!bestDiff || curDiff.accuracy > bestDiff.accuracy) {
                bestDiff = curDiff;
            }
        }
        // Also compare against full targetText
        const fullDiff = diffWordsSingle(userText, targetText, preProcess, clean, isPunctOrSignOnly);
        if (fullDiff.accuracy > bestDiff.accuracy) {
            bestDiff = fullDiff;
        }
        return bestDiff;
    }

    return diffWordsSingle(userText, targetText, preProcess, clean, isPunctOrSignOnly);
}

function diffWordsSingle(userText, targetText, preProcess, clean, isPunctOrSignOnly) {
    if (!isPunctOrSignOnly) {
        isPunctOrSignOnly = (w) => /^[+\-–—−.,!?;:()\[\]\s]+$/.test(w);
    }
    const rawUser = preProcess(userText).trim();
    const rawTarget = preProcess(targetText).trim();

    // If target has "+ Vo", "- Vo", or "Vo", or "+ Ving", "- Ving", or "Ving" without brackets, treat as bracket slot [+ Vo] or [+ Ving]
    // This allows template matching to accept any user notation (+/-, V-ing, ving, + Ving, (+ Ving), actual verb, etc.)
    let adjustedTarget = rawTarget;
    if (!adjustedTarget.includes('[') && !adjustedTarget.includes(']')) {
        adjustedTarget = adjustedTarget.replace(/(^|[^a-zA-Z0-9])[+\-–—−]?\s*Vo\b/g, '$1[+ Vo]');
        adjustedTarget = adjustedTarget.replace(/(^|[^a-zA-Z0-9])[+\-–—−]?\s*Ving\b/g, '$1[+ Ving]');
    }

    // Check if target has bracketed slots [ ... ]
    const slotMatches = [...adjustedTarget.matchAll(/\[([^\]]+)\]/g)];

    if (slotMatches.length > 0) {
        const slots = slotMatches.map(m => m[1]);
        const parts = adjustedTarget.split(/\[[^\]]+\]/);

        // 1. Try template regex match (English skeleton matches + slots filled with any text)
        let pattern = '^\\s*';
        for (let i = 0; i < slots.length; i++) {
            const pStr = parts[i].trim();
            if (pStr) {
                const words = pStr.split(/\s+/).filter(w => !isPunctOrSignOnly(w) || w === '.' || w === '!' || w === '?').map(w => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
                pattern += words.join('[\\s+\\-–—−]*') + '[\\s+\\-–—−]*(.+?)[\\s+\\-–—−]*';
            } else {
                pattern += '(.+?)[\\s+\\-–—−]*';
            }
        }
        const pLast = parts[parts.length - 1].trim();
        if (pLast) {
            const lastWords = pLast.split(/\s+/).filter(w => !isPunctOrSignOnly(w) || w === '.' || w === '!' || w === '?').map(w => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
            if (/^[.,!?;:]+$/.test(pLast)) {
                pattern += '(?:[\\s+\\-–—−]*[' + pLast.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '])?';
            } else {
                pattern += lastWords.join('[\\s+\\-–—−]*');
            }
        }
        pattern += '\\s*$';

        const templateRegex = new RegExp(pattern, 'i');
        const tm = rawUser.match(templateRegex);

        if (tm) {
            // Perfect match! Every slot is filled and all English words match!
            const diff = [];
            for (let i = 0; i < slots.length; i++) {
                const pWords = parts[i].trim().split(/\s+/).filter(w => w);
                for (const pw of pWords) {
                    diff.push({ word: pw, targetWord: pw, type: 'match' });
                }
                const userSlotVal = tm[i + 1].trim();
                const targetSlotDisplay = slots[i].startsWith('+ ') ? slots[i] : `[${slots[i]}]`;
                diff.push({
                    word: userSlotVal,
                    targetWord: targetSlotDisplay,
                    type: 'match'
                });
            }
            const pLastWords = parts[parts.length - 1].trim().split(/\s+/).filter(w => w);
            for (const pw of pLastWords) {
                diff.push({ word: pw, targetWord: pw, type: 'match' });
            }

            return {
                diff,
                accuracy: 100,
                isPerfect: true
            };
        }

        // 2. Fallback: normalize slots into unique tokens for LCS alignment
        let uNorm = rawUser;
        let tNorm = adjustedTarget;
        const slotValues = {};

        // Check if user explicitly used brackets
        const userBrackets = [...rawUser.matchAll(/\[([^\]]+)\]/g)].map(m => m[1]);
        if (userBrackets.length === slots.length) {
            for (let i = 0; i < slots.length; i++) {
                const tok = `__SLOT_${i}__`;
                uNorm = uNorm.replace(`[${userBrackets[i]}]`, ` ${tok} `);
                tNorm = tNorm.replace(`[${slots[i]}]`, ` ${tok} `);
                slotValues[tok] = {
                    user: `[${userBrackets[i]}]`,
                    target: slots[i].startsWith('+ ') ? slots[i] : `[${slots[i]}]`
                };
            }
        } else {
            // Anchor-based slot extraction
            for (let i = 0; i < slots.length; i++) {
                const tok = `__SLOT_${i}__`;
                tNorm = tNorm.replace(`[${slots[i]}]`, ` ${tok} `);

                const beforeWords = parts[i].trim().split(/\s+/).filter(w => w);
                const afterWords = parts[i + 1].trim().split(/\s+/).filter(w => w);
                const anchorB = beforeWords.length > 0 ? beforeWords[beforeWords.length - 1].replace(/[.*+?^${}()|[\]\\]/g, '\\$&') : '';
                const anchorA = afterWords.length > 0 ? afterWords[0].replace(/[.*+?^${}()|[\]\\]/g, '\\$&') : '';

                let extractedUserSlot = '';
                if (anchorB && anchorA) {
                    const subReg = new RegExp(`(\\b${anchorB}\\b\\s*)(.+?)(\\s*${anchorA})`, 'i');
                    const sm = uNorm.match(subReg);
                    if (sm && sm[2].trim()) {
                        extractedUserSlot = sm[2].trim();
                        uNorm = uNorm.replace(subReg, `$1 ${tok} $3`);
                    }
                } else if (anchorB) {
                    const subReg = new RegExp(`(\\b${anchorB}\\b\\s*)(.+?)(\\s*[,.!?]|$)`, 'i');
                    const sm = uNorm.match(subReg);
                    if (sm && sm[2].trim()) {
                        extractedUserSlot = sm[2].trim();
                        uNorm = uNorm.replace(subReg, `$1 ${tok} $3`);
                    }
                }

                slotValues[tok] = {
                    user: extractedUserSlot || (slots[i].startsWith('+ ') ? slots[i] : `[${slots[i]}]`),
                    target: slots[i].startsWith('+ ') ? slots[i] : `[${slots[i]}]`
                };
            }
        }

        // Run LCS on normalized strings
        const uWords = uNorm.trim().split(/\s+/).filter(w => w !== '');
        const tWords = tNorm.trim().split(/\s+/).filter(w => w !== '');

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
                const uW = uWords[i - 1];
                const tW = tWords[j - 1];
                if (slotValues[tW]) {
                    diff.unshift({
                        word: slotValues[tW].user,
                        targetWord: slotValues[tW].target,
                        type: 'match'
                    });
                } else {
                    diff.unshift({ word: uW, targetWord: tW, type: 'match' });
                }
                i--;
                j--;
            } else if (j > 0 && (i === 0 || dp[i][j - 1] >= dp[i - 1][j])) {
                const tW = tWords[j - 1];
                diff.unshift({
                    word: slotValues[tW] ? slotValues[tW].target : tW,
                    targetWord: slotValues[tW] ? slotValues[tW].target : tW,
                    type: 'missing'
                });
                j--;
            } else {
                const uW = uWords[i - 1];
                diff.unshift({
                    word: slotValues[uW] ? slotValues[uW].user : uW,
                    type: 'extra'
                });
                i--;
            }
        }

        const meaningfulUserWords = uWords.filter(w => !isPunctOrSignOnly(w));
        const meaningfulTargetWords = tWords.filter(w => !isPunctOrSignOnly(w));
        const matchCount = diff.filter(d => d.type === 'match' && !isPunctOrSignOnly(d.word)).length;
        const maxWords = Math.max(meaningfulTargetWords.length, meaningfulUserWords.length);
        const accuracy = maxWords > 0 ? Math.round((matchCount / maxWords) * 100) : 0;

        return {
            diff,
            accuracy,
            isPerfect: matchCount === meaningfulTargetWords.length && meaningfulUserWords.length === meaningfulTargetWords.length
        };
    }

    // Standard LCS for targets without brackets
    const uWords = rawUser.split(/\s+/).filter(w => w !== '');
    const tWords = rawTarget.split(/\s+/).filter(w => w !== '');
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
            diff.unshift({ word: uWords[i - 1], targetWord: tWords[j - 1], type: 'match' });
            i--;
            j--;
        } else if (j > 0 && (i === 0 || dp[i][j - 1] >= dp[i - 1][j])) {
            diff.unshift({ word: tWords[j - 1], targetWord: tWords[j - 1], type: 'missing' });
            j--;
        } else {
            diff.unshift({ word: uWords[i - 1], type: 'extra' });
            i--;
        }
    }

    const meaningfulUserWords = uWords.filter(w => !isPunctOrSignOnly(w));
    const meaningfulTargetWords = tWords.filter(w => !isPunctOrSignOnly(w));
    const matchCount = diff.filter(d => d.type === 'match' && !isPunctOrSignOnly(d.word)).length;
    const maxWords = Math.max(meaningfulTargetWords.length, meaningfulUserWords.length);
    const accuracy = maxWords > 0 ? Math.round((matchCount / maxWords) * 100) : 0;

    return {
        diff,
        accuracy,
        isPerfect: matchCount === meaningfulTargetWords.length && meaningfulUserWords.length === meaningfulTargetWords.length
    };
}

// =========================================================================
// REAL-TIME AUTO-SAVE & PROGRESS BACKUP SYSTEM (v58.0)
// =========================================================================

// --- Full Practice Draft Auto-Save ---
let fullPracticeAutoSaveTimer = null;

function saveFullPracticeDraft() {
    if (!activeLetterTypeId) return;
    const text = fullPracticeInput ? fullPracticeInput.value : '';
    const key = 'vstep_draft_full_practice_' + activeLetterTypeId;

    updateFullPracticeAutoSaveUI('Đang sao lưu...', true);

    if (fullPracticeAutoSaveTimer) clearTimeout(fullPracticeAutoSaveTimer);
    fullPracticeAutoSaveTimer = setTimeout(() => {
        if (!text || !text.trim()) {
            try { localStorage.removeItem(key); } catch (e) {}
            updateFullPracticeAutoSaveUI('Tự động sao lưu sẵn sàng', false);
            return;
        }

        const now = new Date();
        const timeStr = now.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        const draftData = {
            text: text,
            letterTypeId: activeLetterTypeId,
            savedAt: timeStr,
            timestamp: Date.now()
        };

        try {
            localStorage.setItem(key, JSON.stringify(draftData));
            updateFullPracticeAutoSaveUI(`Đã sao lưu lúc ${timeStr}`, false);
        } catch (e) {
            console.error('Error auto-saving full practice draft', e);
        }
    }, 350);
}

function loadFullPracticeDraft(letterId) {
    if (!letterId) return false;
    try {
        const raw = localStorage.getItem('vstep_draft_full_practice_' + letterId);
        if (!raw) {
            updateFullPracticeAutoSaveUI('Tự động sao lưu sẵn sàng', false);
            return false;
        }
        const data = JSON.parse(raw);
        if (data && typeof data.text === 'string' && data.text.trim().length > 0) {
            if (fullPracticeInput) {
                fullPracticeInput.value = data.text;
                updateFullPracticeWordCount();
                updateFullPracticeAutoSaveUI(`Đã khôi phục nháp (${data.savedAt || 'trước đó'})`, false);
                return true;
            }
        }
    } catch (e) {
        console.error('Error loading full practice draft', e);
    }
    updateFullPracticeAutoSaveUI('Tự động sao lưu sẵn sàng', false);
    return false;
}

function clearFullPracticeDraft() {
    if (!activeLetterTypeId) return;
    const key = 'vstep_draft_full_practice_' + activeLetterTypeId;
    const hasText = fullPracticeInput && fullPracticeInput.value.trim().length > 0;
    const hasDraft = !!localStorage.getItem(key);

    if (!hasText && !hasDraft) {
        showToastNotice('ℹ️ Hiện không có bản nháp nào cần xóa.', 'fa-solid fa-circle-info');
        return;
    }

    if (confirm('Bạn có chắc chắn muốn xóa toàn bộ bản nháp của dạng thư này để viết lại từ đầu không?')) {
        try { localStorage.removeItem(key); } catch (e) {}
        if (fullPracticeInput) {
            fullPracticeInput.value = '';
            updateFullPracticeWordCount();
        }
        resetFullPracticeTimer();
        updateFullPracticeAutoSaveUI('Đã xóa bản nháp', false);
        showToastNotice('🗑️ Đã xóa bản nháp bài thực hành.', 'fa-solid fa-trash-can');
    }
}

function updateFullPracticeAutoSaveUI(text, isSaving) {
    const pill = document.getElementById('fullPracticeAutoSavePill');
    const label = document.getElementById('fullPracticeAutoSaveText');
    if (!pill || !label) return;

    label.textContent = text;
    if (isSaving) {
        pill.classList.add('saving');
        pill.innerHTML = `<i class="fa-solid fa-arrows-rotate fa-spin"></i> <span id="fullPracticeAutoSaveText">${text}</span>`;
    } else {
        pill.classList.remove('saving');
        pill.innerHTML = `<i class="fa-solid fa-cloud-check"></i> <span id="fullPracticeAutoSaveText">${text}</span>`;
    }
}

// --- Extra Practice Draft Auto-Save ---
let extraPracticeAutoSaveTimer = null;

function saveExtraPracticeDraft(typeId) {
    const tid = typeId || currentExtraPracticeTypeId;
    if (!tid) return;
    const writingArea = document.getElementById('extraWritingArea');
    const text = writingArea ? writingArea.value : '';
    const key = 'vstep_draft_extra_practice_' + tid;

    updateExtraPracticeAutoSaveUI('Đang sao lưu...', true);

    if (extraPracticeAutoSaveTimer) clearTimeout(extraPracticeAutoSaveTimer);
    extraPracticeAutoSaveTimer = setTimeout(() => {
        if (!text || !text.trim()) {
            try { localStorage.removeItem(key); } catch (e) {}
            updateExtraPracticeAutoSaveUI('Tự động sao lưu sẵn sàng', false);
            return;
        }

        const now = new Date();
        const timeStr = now.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        const draftData = {
            text: text,
            typeId: tid,
            savedAt: timeStr,
            timestamp: Date.now()
        };

        try {
            localStorage.setItem(key, JSON.stringify(draftData));
            updateExtraPracticeAutoSaveUI(`Đã sao lưu lúc ${timeStr}`, false);
        } catch (e) {
            console.error('Error auto-saving extra practice draft', e);
        }
    }, 350);
}

function loadExtraPracticeDraft(typeId) {
    const tid = typeId || currentExtraPracticeTypeId;
    if (!tid) return false;
    try {
        const raw = localStorage.getItem('vstep_draft_extra_practice_' + tid);
        if (!raw) {
            updateExtraPracticeAutoSaveUI('Tự động sao lưu sẵn sàng', false);
            return false;
        }
        const data = JSON.parse(raw);
        if (data && typeof data.text === 'string' && data.text.trim().length > 0) {
            const writingArea = document.getElementById('extraWritingArea');
            if (writingArea) {
                writingArea.value = data.text;
                updateExtraWordCount();
                updateExtraPracticeAutoSaveUI(`Đã khôi phục nháp (${data.savedAt || 'trước đó'})`, false);
                return true;
            }
        }
    } catch (e) {
        console.error('Error loading extra practice draft', e);
    }
    updateExtraPracticeAutoSaveUI('Tự động sao lưu sẵn sàng', false);
    return false;
}

function clearExtraPracticeDraft(typeId) {
    const tid = typeId || currentExtraPracticeTypeId;
    if (!tid) return;
    const key = 'vstep_draft_extra_practice_' + tid;
    const writingArea = document.getElementById('extraWritingArea');
    const hasText = writingArea && writingArea.value.trim().length > 0;
    const hasDraft = !!localStorage.getItem(key);

    if (!hasText && !hasDraft) {
        showToastNotice('ℹ️ Hiện không có bản nháp nào cần xóa.', 'fa-solid fa-circle-info');
        return;
    }

    if (confirm('Bạn có chắc chắn muốn xóa bản nháp bài luyện tập thêm này để viết lại không?')) {
        try { localStorage.removeItem(key); } catch (e) {}
        if (writingArea) {
            writingArea.value = '';
            updateExtraWordCount();
        }
        resetExtraPracticeTimer();
        updateExtraPracticeAutoSaveUI('Đã xóa bản nháp', false);
        showToastNotice('🗑️ Đã xóa bản nháp bài luyện tập thêm.', 'fa-solid fa-trash-can');
    }
}

function updateExtraPracticeAutoSaveUI(text, isSaving) {
    const pill = document.getElementById('extraAutoSavePill');
    const label = document.getElementById('extraAutoSaveText');
    if (!pill || !label) return;

    label.textContent = text;
    if (isSaving) {
        pill.classList.add('saving');
        pill.innerHTML = `<i class="fa-solid fa-arrows-rotate fa-spin"></i> <span id="extraAutoSaveText">${text}</span>`;
    } else {
        pill.classList.remove('saving');
        pill.innerHTML = `<i class="fa-solid fa-cloud-check"></i> <span id="extraAutoSaveText">${text}</span>`;
    }
}

// --- Recitation Progress Draft Auto-Save ---
function saveRecitationDraft(letterId) {
    const lid = letterId || activeLetterTypeId;
    if (!lid) return;
    try {
        const payload = {
            questionIndex: currentQuestionIndex,
            questionScores: questionScores,
            questionHintsUsed: questionHintsUsed,
            cheatAttempts: recitationCheatAttempts,
            timeRemaining: recitationTimeRemaining,
            savedAt: new Date().toLocaleTimeString('vi-VN'),
            timestamp: Date.now()
        };
        localStorage.setItem('vstep_draft_recitation_' + lid, JSON.stringify(payload));
    } catch (e) {
        console.error('Error saving recitation draft', e);
    }
}

function clearRecitationDraft(letterId) {
    const lid = letterId || activeLetterTypeId;
    if (!lid) return;
    try {
        localStorage.removeItem('vstep_draft_recitation_' + lid);
    } catch (e) {}
}

function loadRecitationDraft(letterId) {
    const lid = letterId || activeLetterTypeId;
    if (!lid) return null;
    try {
        const raw = localStorage.getItem('vstep_draft_recitation_' + lid);
        if (!raw) return null;
        return JSON.parse(raw);
    } catch (e) {
        return null;
    }
}

// --- Recitation Results Storage & Persistence (v59.0) ---
function getRecitationResults() {
    try {
        const saved = localStorage.getItem('vstep_recitation_results');
        return saved ? JSON.parse(saved) : {};
    } catch (e) {
        return {};
    }
}

function getRecitationResult(letterId) {
    const results = getRecitationResults();
    return results[letterId] || null;
}

function saveRecitationResult(letterId, resultData) {
    if (!letterId || !resultData) return;
    try {
        const allResults = getRecitationResults();
        allResults[letterId] = resultData;
        localStorage.setItem('vstep_recitation_results', JSON.stringify(allResults));
    } catch (e) {
        console.error('Error saving recitation result', e);
    }
}

function clearRecitationResult(letterId) {
    if (!letterId) return;
    try {
        const allResults = getRecitationResults();
        delete allResults[letterId];
        localStorage.setItem('vstep_recitation_results', JSON.stringify(allResults));
    } catch (e) {
        console.error('Error clearing recitation result', e);
    }
}

function displaySavedRecitationResult(letterId) {
    const result = getRecitationResult(letterId);
    if (!result) return false;

    const typeData = letterTypes.find(t => t.id === letterId);
    const letterTitleEn = typeData ? typeData.titleEn : 'Letter';

    // Hide quiz box and feedback panel
    if (recitationQuizBox) recitationQuizBox.classList.add('hidden');
    if (recitationFeedback) recitationFeedback.classList.add('hidden');
    
    // Hide header and progress bar wrapper during evaluation results
    const recitationHeader = document.querySelector('.recitation-header');
    if (recitationHeader) recitationHeader.classList.add('hidden');
    
    const progressWrapper = document.querySelector('.recitation-progress-wrapper');
    if (progressWrapper) progressWrapper.style.display = 'none';

    stopRecitationTimer();
    unlockNavigationAfterRecitation();

    // Fill score and status
    if (scorePercentageVal) scorePercentageVal.textContent = result.averageScore;
    if (resultStatusVal) resultStatusVal.textContent = result.status;
    if (timeSpentVal) timeSpentVal.textContent = result.timeSpent || '00:00';

    const evalCard = document.querySelector('.evaluation-card');
    if (result.status === 'ĐẠT' || result.averageScore >= 90) {
        if (evaluationIcon) evaluationIcon.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        if (evalCard) {
            evalCard.classList.remove('failed');
            evalCard.classList.add('passed');
        }
        if (resultMessageVal) {
            resultMessageVal.textContent = `🎉 Chúc mừng bạn đã chinh phục được ${letterTitleEn}! Kết quả trả bài đã được sao lưu an toàn (${result.completedAtFormatted || ''}).`;
        }
    } else {
        if (evaluationIcon) evaluationIcon.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i>';
        if (evalCard) {
            evalCard.classList.remove('passed');
            evalCard.classList.add('failed');
        }
        if (resultMessageVal) {
            resultMessageVal.textContent = `Kết quả trả bài trước đó: ${result.averageScore}% (Lưu lúc: ${result.completedAtFormatted || ''}). Bạn có thể bấm nút "Làm lại từ đầu" bên dưới để luyện tập lại nhé!`;
        }
    }

    // Display cheat warning count if any occurred
    if (evaluationCheatRecord && evaluationCheatRecordText) {
        if (result.cheatAttempts > 0) {
            evaluationCheatRecord.classList.remove('hidden');
            evaluationCheatRecordText.innerHTML = `⚠️ Lưu ý: Bài làm này ghi nhận <strong>${result.cheatAttempts} lần</strong> có hành vi chuyển tab / rời bài.`;
        } else {
            evaluationCheatRecord.classList.add('hidden');
        }
    }

    if (reportStatusBox) {
        reportStatusBox.classList.remove('hidden');
        const reportText = document.getElementById('reportStatusText');
        if (reportText) {
            reportText.innerHTML = `💾 <strong>Kết quả đã được sao lưu an toàn</strong> • Hoàn thành: ${result.completedAtFormatted || ''} • Học viên: <strong>${result.studentName || 'Bạn'}</strong> (${result.studentClass || ''})`;
        }
    }

    if (recitationResultBox) recitationResultBox.classList.remove('hidden');
    return true;
}

// --- Progress Backup (Export) & Restore (Import) Files ---
function exportProgressBackup() {
    try {
        const studentName = currentStudentName || localStorage.getItem('vstep_student_name') || 'Học viên';
        const studentClass = currentStudentClass || localStorage.getItem('vstep_student_class') || 'Chưa rõ';
        const completedLetters = getCompletedLetters();

        // Collect all drafts across all letter types
        const fullPracticeDrafts = {};
        const extraPracticeDrafts = {};
        const recitationDrafts = {};

        letterTypes.forEach(t => {
            const fp = localStorage.getItem('vstep_draft_full_practice_' + t.id);
            if (fp) {
                try { fullPracticeDrafts[t.id] = JSON.parse(fp); } catch (e) {}
            }
            const ep = localStorage.getItem('vstep_draft_extra_practice_' + t.id);
            if (ep) {
                try { extraPracticeDrafts[t.id] = JSON.parse(ep); } catch (e) {}
            }
            const rec = localStorage.getItem('vstep_draft_recitation_' + t.id);
            if (rec) {
                try { recitationDrafts[t.id] = JSON.parse(rec); } catch (e) {}
            }
        });

        const backupData = {
            system: 'VSTEP_WRITING_B1_TASK1',
            version: '59.0',
            exportedAt: new Date().toISOString(),
            exportedAtFormatted: new Date().toLocaleString('vi-VN'),
            student: {
                name: studentName,
                class: studentClass
            },
            completedLetters: completedLetters,
            completedCount: completedLetters.length,
            totalLetters: letterTypes.length,
            progressPercentage: letterTypes.length > 0 ? Math.round((completedLetters.length / letterTypes.length) * 100) : 0,
            recitationResults: getRecitationResults(),
            drafts: {
                fullPractice: fullPracticeDrafts,
                extraPractice: extraPracticeDrafts,
                recitation: recitationDrafts
            }
        };

        const jsonStr = JSON.stringify(backupData, null, 2);
        const blob = new Blob([jsonStr], { type: 'application/json;charset=utf-8' });
        const safeName = (studentName || 'HocVien').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-zA-Z0-9]/g, '_');
        const now = new Date();
        const dateStr = `${now.getFullYear()}${String(now.getMonth()+1).padStart(2,'0')}${String(now.getDate()).padStart(2,'0')}_${String(now.getHours()).padStart(2,'0')}${String(now.getMinutes()).padStart(2,'0')}`;
        const fileName = `VSTEP_B1_TIEN_DO_${safeName}_${dateStr}.json`;

        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(link.href);

        showToastNotice(`✅ Đã xuất tệp sao lưu tiến độ: ${fileName}`, 'fa-solid fa-cloud-arrow-down');
    } catch (err) {
        console.error('Export backup error', err);
        alert('Có lỗi xảy ra khi sao lưu tiến độ: ' + err.message);
    }
}

// ============================================================================
// MICROSOFT WORD (.DOC) EXPORT FOR ESSAYS & EVALUATIONS
// ============================================================================
function downloadWordDoc(filename, htmlBody) {
    const fullHtml = `
<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
<head>
  <meta charset='utf-8'>
  <title>${escapeHtml(filename)}</title>
  <style>
    @page {
      margin: 1in;
      size: A4 portrait;
    }
    body {
      font-family: 'Times New Roman', Times, serif;
      font-size: 13pt;
      line-height: 1.6;
      color: #111827;
    }
    h1 {
      font-size: 18pt;
      text-align: center;
      color: #1e3a8a;
      margin-bottom: 2pt;
      text-transform: uppercase;
      font-weight: bold;
    }
    .sub-title {
      font-size: 14pt;
      text-align: center;
      color: #0284c7;
      font-weight: bold;
      margin-top: 0;
      margin-bottom: 12pt;
    }
    .info-table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 16pt;
    }
    .info-table td {
      padding: 4pt 8pt;
      font-size: 11pt;
      border-bottom: 1px dashed #cbd5e1;
    }
    .section-title {
      font-size: 13pt;
      font-weight: bold;
      color: #1e3a8a;
      background: #f1f5f9;
      padding: 6pt 10pt;
      border-left: 4pt solid #2563eb;
      margin-top: 14pt;
      margin-bottom: 8pt;
    }
    .prompt-box {
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      padding: 10pt;
      font-size: 11.5pt;
      font-style: italic;
      color: #334155;
      margin-bottom: 12pt;
    }
    .student-essay-box {
      border: 1.5px solid #94a3b8;
      background: #ffffff;
      padding: 14pt;
      font-size: 13pt;
      line-height: 1.7;
      white-space: pre-wrap;
      text-align: justify;
      margin-bottom: 14pt;
    }
    .score-table {
      width: 100%;
      border-collapse: collapse;
      margin: 10pt 0 16pt 0;
    }
    .score-table th, .score-table td {
      border: 1px solid #cbd5e1;
      padding: 6pt 8pt;
      font-size: 11pt;
      text-align: left;
    }
    .score-table th {
      background: #e2e8f0;
      font-weight: bold;
      color: #0f172a;
    }
    .badge-pass {
      color: #15803d;
      font-weight: bold;
    }
  </style>
</head>
<body>
${htmlBody}
</body>
</html>`;

    const blob = new Blob(['\ufeff', fullHtml], { type: 'application/msword;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename.replace(/[\/\\?%*:|"<>]/g, '_');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    if (typeof showToastNotice === 'function') {
        showToastNotice(`📥 Đã tải file Word: ${link.download}`, 'fa-solid fa-file-word');
    }
}

function downloadFullPracticeEssay(isWithEvaluation = false) {
    const userText = fullPracticeInput ? fullPracticeInput.value.trim() : '';
    const typeData = letterTypes.find(t => t.id === activeLetterTypeId) || letterTypes[0];
    const letterTitle = typeData ? `${typeData.titleEn} (${typeData.titleVi})` : 'VSTEP Task 1';
    const studentName = currentStudentName || localStorage.getItem('vstep_student_name') || 'Học viên';
    const studentClass = currentStudentClass || localStorage.getItem('vstep_student_class') || 'Chưa rõ';
    const now = new Date();
    const dateStr = now.toLocaleDateString('vi-VN') + ' ' + now.toLocaleTimeString('vi-VN');
    const safeStudentName = (studentName || 'HocVien').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-zA-Z0-9]/g, '_');
    const safeDate = `${now.getFullYear()}${String(now.getMonth()+1).padStart(2,'0')}${String(now.getDate()).padStart(2,'0')}`;

    let textToExport = userText;
    const evalData = lastFullPracticeEvaluationData;

    if (isWithEvaluation && evalData && evalData.rawText) {
        textToExport = evalData.rawText;
    }

    if (!textToExport) {
        alert('⚠️ Chưa có nội dung bài viết để tải về! Vui lòng nhập bài viết vào khung trước khi tải.');
        if (fullPracticeInput) fullPracticeInput.focus();
        return;
    }

    const words = textToExport.split(/\s+/).filter(w => w !== '').length;

    let promptHtml = '';
    if (typeData) {
        promptHtml = typeData.examPrompt || typeData.fullPracticeTopic || typeData.identifyingSigns || '';
    }

    let evaluationSectionHtml = '';
    if (isWithEvaluation && evalData) {
        let errorsRows = '';
        if (evalData.errors && evalData.errors.length > 0) {
            errorsRows = evalData.errors.map((err, idx) => `
                <tr>
                    <td style="text-align: center;">${idx + 1}</td>
                    <td><strong>${escapeHtml(err.type || '')}</strong></td>
                    <td style="color: #b91c1c; text-decoration: line-through;">${escapeHtml(err.wrong || '')}</td>
                    <td style="color: #15803d; font-weight: bold;">${escapeHtml(err.correct || '')}</td>
                    <td>${escapeHtml(err.reason || '')}</td>
                </tr>
            `).join('');
        }

        evaluationSectionHtml = `
            <div class="section-title">KẾT QUẢ ĐÁNH GIÁ VSTEP (30% ĐIỂM THI VIẾT)</div>
            <table class="score-table">
                <tr>
                    <th style="width: 25%;">ĐIỂM TỔNG KẾT (30%)</th>
                    <th style="width: 25%;">BAND ĐIỂM (THANG 10)</th>
                    <th style="width: 25%;">ĐÁNH GIÁ CHUẨN</th>
                    <th style="width: 25%;">THỜI GIAN LÀM BÀI</th>
                </tr>
                <tr>
                    <td style="font-size: 14pt; font-weight: bold; color: #1e3a8a; text-align: center;">${evalData.convertedScore.toFixed(2)} / 3.00 điểm</td>
                    <td style="font-size: 14pt; font-weight: bold; color: #0284c7; text-align: center;">Band ${evalData.overallBand.toFixed(1)} / 10</td>
                    <td style="text-align: center;"><span class="badge-pass">${evalData.vstepLevel}</span></td>
                    <td style="text-align: center;">${evalData.timeSpentStr} / 20:00</td>
                </tr>
            </table>

            <table class="score-table">
                <tr>
                    <th>Tiêu chí chấm điểm</th>
                    <th>Điểm thành phần (30%)</th>
                    <th>Thang 10</th>
                    <th>Nội dung đánh giá</th>
                </tr>
                <tr>
                    <td><strong>1. Task Fulfilment</strong></td>
                    <td style="font-weight: bold; text-align: center;">${evalData.tfConv.toFixed(2)} / 0.75</td>
                    <td style="text-align: center;">${evalData.tfScore.toFixed(1)} / 10</td>
                    <td>${evalData.reqLabels ? evalData.reqLabels.join(' | ') : 'Đáp ứng yêu cầu đề bài'}</td>
                </tr>
                <tr>
                    <td><strong>2. Organization</strong></td>
                    <td style="font-weight: bold; text-align: center;">${evalData.orgConv.toFixed(2)} / 0.75</td>
                    <td style="text-align: center;">${evalData.orgScore.toFixed(1)} / 10</td>
                    <td>Bố cục chuẩn 5 phần, liên kết câu và đoạn văn mạch lạc</td>
                </tr>
                <tr>
                    <td><strong>3. Vocabulary</strong></td>
                    <td style="font-weight: bold; text-align: center;">${evalData.vocConv.toFixed(2)} / 0.75</td>
                    <td style="text-align: center;">${evalData.vocScore.toFixed(1)} / 10</td>
                    <td>Vốn từ vựng học thuật, độ chính xác từ loại và ngữ cảnh</td>
                </tr>
                <tr>
                    <td><strong>4. Grammar & Accuracy</strong></td>
                    <td style="font-weight: bold; text-align: center;">${evalData.gramConv.toFixed(2)} / 0.75</td>
                    <td style="text-align: center;">${evalData.gramScore.toFixed(1)} / 10</td>
                    <td>Cấu trúc ngữ pháp, mạo từ, giới từ, dấu câu và chính tả</td>
                </tr>
            </table>

            ${errorsRows ? `
            <div class="section-title">CHI TIẾT ${evalData.errors.length} LỖI CẦN SỬA (NGỮ PHÁP, DÙNG TỪ, MẠO TỪ, CHÍNH TẢ)</div>
            <table class="score-table">
                <thead>
                    <tr>
                        <th style="width: 35px; text-align: center;">#</th>
                        <th style="width: 130px;">Phân loại lỗi</th>
                        <th>Học viên viết</th>
                        <th>Đề xuất sửa đúng</th>
                        <th>Giải thích chi tiết</th>
                    </tr>
                </thead>
                <tbody>
                    ${errorsRows}
                </tbody>
            </table>
            ` : '<p style="color: #15803d; font-weight: bold;">✓ Không phát hiện lỗi ngữ pháp hay từ vựng đáng kể nào!</p>'}
        `;
    }

    let modelSampleHtml = '';
    if (typeData && typeData.sampleWriting) {
        modelSampleHtml = `
            <div class="section-title">BÀI THƯ MẪU THAM KHẢO CHUẨN B2 (BAND CAO)</div>
            <div style="background: #f8fafc; border: 1px solid #cbd5e1; padding: 12pt; line-height: 1.7; font-size: 12pt; text-align: justify;">
                ${typeData.sampleWriting}
            </div>
        `;
    }

    const htmlBody = `
        <h1>ENGLISH WITH MISS NGUYET</h1>
        <div class="sub-title">PHÒNG ÔN TẬP THƯ B2 - BÀI THỰC HÀNH VIẾT TOÀN BÀI</div>
        
        <table class="info-table">
            <tr>
                <td style="width: 50%;"><strong>Họ và tên học viên:</strong> ${escapeHtml(studentName)}</td>
                <td style="width: 50%;"><strong>Mã lớp học:</strong> ${escapeHtml(studentClass)}</td>
            </tr>
            <tr>
                <td><strong>Dạng bài viết thư:</strong> ${escapeHtml(letterTitle)}</td>
                <td><strong>Thời điểm xuất file:</strong> ${dateStr}</td>
            </tr>
            <tr>
                <td><strong>Tổng số từ đã viết:</strong> ${words} từ ${words >= 120 ? '(✓ Đạt chuẩn ≥120 từ)' : '(⚠️ Chưa đủ 120 từ)'}</td>
                <td><strong>Trạng thái:</strong> ${isWithEvaluation ? 'Đã chấm điểm & kiểm toán' : 'Bản làm bài của học viên'}</td>
            </tr>
        </table>

        ${promptHtml ? `
        <div class="section-title">ĐỀ BÀI (PROMPT):</div>
        <div class="prompt-box">
            ${promptHtml}
        </div>
        ` : ''}

        <div class="section-title">BÀI LÀM CỦA HỌC VIÊN:</div>
        <div class="student-essay-box">
${escapeHtml(textToExport)}
        </div>

        ${evaluationSectionHtml}

        ${modelSampleHtml}

        <hr style="border: none; border-top: 1px dashed #cbd5e1; margin-top: 24pt; margin-bottom: 8pt;">
        <p style="text-align: center; font-size: 10pt; color: #64748b; font-style: italic;">
            Hệ thống tự động ôn tập và đánh giá VSTEP Writing Task 01 (B2 LEVEL) - English with Miss Nguyet
        </p>
    `;

    const fileName = isWithEvaluation
        ? `PHIEU_CHAM_B2_${safeStudentName}_THUC_HANH_${typeData.id.toUpperCase()}_${safeDate}.doc`
        : `BAI_VIET_B2_${safeStudentName}_THUC_HANH_${typeData.id.toUpperCase()}_${safeDate}.doc`;

    downloadWordDoc(fileName, htmlBody);
}

function downloadExtraPracticeEssay(typeId, isWithEvaluation = false) {
    const data = extraPracticeData[typeId];
    const writingArea = document.getElementById('extraWritingArea');
    const userText = writingArea ? writingArea.value.trim() : '';
    const studentName = currentStudentName || localStorage.getItem('vstep_student_name') || 'Học viên';
    const studentClass = currentStudentClass || localStorage.getItem('vstep_student_class') || 'Chưa rõ';
    const now = new Date();
    const dateStr = now.toLocaleDateString('vi-VN') + ' ' + now.toLocaleTimeString('vi-VN');
    const safeStudentName = (studentName || 'HocVien').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-zA-Z0-9]/g, '_');
    const safeDate = `${now.getFullYear()}${String(now.getMonth()+1).padStart(2,'0')}${String(now.getDate()).padStart(2,'0')}`;

    let textToExport = userText;
    const evalData = lastExtraPracticeEvaluationData[typeId];

    if (isWithEvaluation && evalData && evalData.rawText) {
        textToExport = evalData.rawText;
    }

    if (!textToExport) {
        alert('⚠️ Chưa có nội dung bài viết để tải về! Vui lòng nhập bài viết vào khung trước khi tải.');
        if (writingArea) writingArea.focus();
        return;
    }

    const words = textToExport.split(/\s+/).filter(w => w !== '').length;
    const topicTitle = data ? (data.title || 'Luyện tập thêm') : 'Bài Luyện Tập Thêm';

    let evaluationSectionHtml = '';
    if (isWithEvaluation && evalData) {
        let errorsRows = '';
        if (evalData.errors && evalData.errors.length > 0) {
            errorsRows = evalData.errors.map((err, idx) => `
                <tr>
                    <td style="text-align: center;">${idx + 1}</td>
                    <td><strong>${escapeHtml(err.type || '')}</strong></td>
                    <td style="color: #b91c1c; text-decoration: line-through;">${escapeHtml(err.wrong || '')}</td>
                    <td style="color: #15803d; font-weight: bold;">${escapeHtml(err.correct || '')}</td>
                    <td>${escapeHtml(err.reason || '')}</td>
                </tr>
            `).join('');
        }

        evaluationSectionHtml = `
            <div class="section-title">KẾT QUẢ ĐÁNH GIÁ VSTEP (30% ĐIỂM THI VIẾT)</div>
            <table class="score-table">
                <tr>
                    <th style="width: 25%;">ĐIỂM TỔNG KẾT (30%)</th>
                    <th style="width: 25%;">BAND ĐIỂM (THANG 10)</th>
                    <th style="width: 25%;">ĐÁNH GIÁ CHUẨN</th>
                    <th style="width: 25%;">THỜI GIAN LÀM BÀI</th>
                </tr>
                <tr>
                    <td style="font-size: 14pt; font-weight: bold; color: #1e3a8a; text-align: center;">${evalData.convertedScore.toFixed(2)} / 3.00 điểm</td>
                    <td style="font-size: 14pt; font-weight: bold; color: #0284c7; text-align: center;">Band ${evalData.overallBand.toFixed(1)} / 10</td>
                    <td style="text-align: center;"><span class="badge-pass">${evalData.vstepLevel}</span></td>
                    <td style="text-align: center;">${evalData.timeSpentStr} / 20:00</td>
                </tr>
            </table>

            <table class="score-table">
                <tr>
                    <th>Tiêu chí chấm điểm</th>
                    <th>Điểm thành phần (30%)</th>
                    <th>Thang 10</th>
                    <th>Nội dung đánh giá</th>
                </tr>
                <tr>
                    <td><strong>1. Task Fulfilment</strong></td>
                    <td style="font-weight: bold; text-align: center;">${evalData.tfConv.toFixed(2)} / 0.75</td>
                    <td style="text-align: center;">${evalData.tfScore.toFixed(1)} / 10</td>
                    <td>${evalData.reqLabels ? evalData.reqLabels.join(' | ') : 'Đáp ứng yêu cầu đề bài'}</td>
                </tr>
                <tr>
                    <td><strong>2. Organization</strong></td>
                    <td style="font-weight: bold; text-align: center;">${evalData.orgConv.toFixed(2)} / 0.75</td>
                    <td style="text-align: center;">${evalData.orgScore.toFixed(1)} / 10</td>
                    <td>Bố cục chuẩn 5 phần, liên kết câu và đoạn văn mạch lạc</td>
                </tr>
                <tr>
                    <td><strong>3. Vocabulary</strong></td>
                    <td style="font-weight: bold; text-align: center;">${evalData.vocConv.toFixed(2)} / 0.75</td>
                    <td style="text-align: center;">${evalData.vocScore.toFixed(1)} / 10</td>
                    <td>Vốn từ vựng học thuật, độ chính xác từ loại và ngữ cảnh</td>
                </tr>
                <tr>
                    <td><strong>4. Grammar & Accuracy</strong></td>
                    <td style="font-weight: bold; text-align: center;">${evalData.gramConv.toFixed(2)} / 0.75</td>
                    <td style="text-align: center;">${evalData.gramScore.toFixed(1)} / 10</td>
                    <td>Cấu trúc ngữ pháp, mạo từ, giới từ, dấu câu và chính tả</td>
                </tr>
            </table>

            ${errorsRows ? `
            <div class="section-title">CHI TIẾT ${evalData.errors.length} LỖI CẦN SỬA (NGỮ PHÁP, DÙNG TỪ, MẠO TỪ, CHÍNH TẢ)</div>
            <table class="score-table">
                <thead>
                    <tr>
                        <th style="width: 35px; text-align: center;">#</th>
                        <th style="width: 130px;">Phân loại lỗi</th>
                        <th>Học viên viết</th>
                        <th>Đề xuất sửa đúng</th>
                        <th>Giải thích chi tiết</th>
                    </tr>
                </thead>
                <tbody>
                    ${errorsRows}
                </tbody>
            </table>
            ` : '<p style="color: #15803d; font-weight: bold;">✓ Không phát hiện lỗi ngữ pháp hay từ vựng đáng kể nào!</p>'}
        `;
    }

    let modelSampleHtml = '';
    if (data && data.sampleModel) {
        modelSampleHtml = `
            <div class="section-title">BÀI THƯ MẪU THAM KHẢO CHUẨN B2 (MODEL LETTER)</div>
            <div style="background: #f8fafc; border: 1px solid #cbd5e1; padding: 12pt; line-height: 1.7; font-size: 12pt; text-align: justify; white-space: pre-wrap;">
${escapeHtml(data.sampleModel)}
            </div>
            ${data.sampleModelVi ? `
            <div class="section-title" style="margin-top: 14pt;">BẢN DỊCH CHI TIẾT SANG TIẾNG VIỆT</div>
            <div style="background: #f8fafc; border: 1px solid #e2e8f0; padding: 12pt; line-height: 1.7; font-size: 11pt; font-style: italic; color: #475569; white-space: pre-wrap;">
${escapeHtml(data.sampleModelVi)}
            </div>
            ` : ''}
        `;
    }

    const htmlBody = `
        <h1>ENGLISH WITH MISS NGUYET</h1>
        <div class="sub-title">PHÒNG ÔN TẬP THƯ B2 - BÀI LUYỆN TẬP THÊM</div>
        
        <table class="info-table">
            <tr>
                <td style="width: 50%;"><strong>Họ và tên học viên:</strong> ${escapeHtml(studentName)}</td>
                <td style="width: 50%;"><strong>Mã lớp học:</strong> ${escapeHtml(studentClass)}</td>
            </tr>
            <tr>
                <td><strong>Chủ đề luyện tập:</strong> ${escapeHtml(topicTitle)}</td>
                <td><strong>Thời điểm xuất file:</strong> ${dateStr}</td>
            </tr>
            <tr>
                <td><strong>Tổng số từ đã viết:</strong> ${words} từ ${words >= 120 ? '(✓ Đạt chuẩn ≥120 từ)' : '(⚠️ Chưa đủ 120 từ)'}</td>
                <td><strong>Trạng thái:</strong> ${isWithEvaluation ? 'Đã chấm điểm & sửa lỗi' : 'Bản làm bài của học viên'}</td>
            </tr>
        </table>

        ${data && data.prompt ? `
        <div class="section-title">ĐỀ BÀI (PROMPT):</div>
        <div class="prompt-box">
            ${escapeHtml(data.prompt).replace(/\n/g, '<br>')}
        </div>
        ` : ''}

        <div class="section-title">BÀI LÀM CỦA HỌC VIÊN:</div>
        <div class="student-essay-box">
${escapeHtml(textToExport)}
        </div>

        ${evaluationSectionHtml}

        ${modelSampleHtml}

        <hr style="border: none; border-top: 1px dashed #cbd5e1; margin-top: 24pt; margin-bottom: 8pt;">
        <p style="text-align: center; font-size: 10pt; color: #64748b; font-style: italic;">
            Hệ thống tự động ôn tập và đánh giá VSTEP Writing Task 01 (B2 LEVEL) - English with Miss Nguyet
        </p>
    `;

    const fileName = isWithEvaluation
        ? `PHIEU_CHAM_B2_${safeStudentName}_LUYEN_TAP_THEM_${typeId.toUpperCase()}_${safeDate}.doc`
        : `BAI_VIET_B2_${safeStudentName}_LUYEN_TAP_THEM_${typeId.toUpperCase()}_${safeDate}.doc`;

    downloadWordDoc(fileName, htmlBody);
}

function downloadRecitationDoc() {
    const typeData = letterTypes.find(t => t.id === activeLetterTypeId) || letterTypes[0];
    const letterTitle = typeData ? `${typeData.titleEn} (${typeData.titleVi})` : 'VSTEP Task 1';
    const studentName = currentStudentName || localStorage.getItem('vstep_student_name') || 'Học viên';
    const studentClass = currentStudentClass || localStorage.getItem('vstep_student_class') || 'Chưa rõ';
    const now = new Date();
    const dateStr = now.toLocaleDateString('vi-VN') + ' ' + now.toLocaleTimeString('vi-VN');
    const safeStudentName = (studentName || 'HocVien').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-zA-Z0-9]/g, '_');
    const safeDate = `${now.getFullYear()}${String(now.getMonth()+1).padStart(2,'0')}${String(now.getDate()).padStart(2,'0')}`;

    const score = scorePercentageVal ? scorePercentageVal.textContent : '0';
    const status = resultStatusVal ? resultStatusVal.textContent : '';
    const timeSpent = timeSpentVal ? timeSpentVal.textContent : '00:00';

    let questionsRows = '';
    if (activeQuestions && activeQuestions.length > 0) {
        questionsRows = activeQuestions.map((q, idx) => {
            const sc = (questionScores && questionScores[idx] !== undefined) ? questionScores[idx] : 0;
            return `
                <tr>
                    <td style="text-align: center; font-weight: bold;">Câu ${idx + 1}</td>
                    <td>${escapeHtml(q.questionVi || q.questionEn || '')}</td>
                    <td style="background: #f8fafc; font-weight: 500;">${escapeHtml(q.correctSentence || '')}</td>
                    <td style="text-align: center; font-weight: bold; color: ${sc >= 90 ? '#15803d' : '#b91c1c'};">${sc}%</td>
                </tr>
            `;
        }).join('');
    }

    const htmlBody = `
        <h1>ENGLISH WITH MISS NGUYET</h1>
        <div class="sub-title">PHÒNG ÔN TẬP THƯ B2 - KẾT QUẢ HỌC THUỘC LÒNG (RECITATION)</div>
        
        <table class="info-table">
            <tr>
                <td style="width: 50%;"><strong>Họ và tên học viên:</strong> ${escapeHtml(studentName)}</td>
                <td style="width: 50%;"><strong>Mã lớp học:</strong> ${escapeHtml(studentClass)}</td>
            </tr>
            <tr>
                <td><strong>Dạng bài viết thư:</strong> ${escapeHtml(letterTitle)}</td>
                <td><strong>Thời điểm xuất file:</strong> ${dateStr}</td>
            </tr>
            <tr>
                <td><strong>Điểm thuộc bài trung bình:</strong> <span style="font-size: 13pt; font-weight: bold; color: ${parseInt(score) >= 90 ? '#15803d' : '#b91c1c'};">${score}% (${status})</span></td>
                <td><strong>Thời gian làm bài:</strong> ${timeSpent} / 20:00</td>
            </tr>
        </table>

        <div class="section-title">CHI TIẾT 10 CÂU HỎI THỰC HÀNH HỌC THUỘC LÒNG:</div>
        <table class="score-table">
            <thead>
                <tr>
                    <th style="width: 60px; text-align: center;">STT</th>
                    <th style="width: 35%;">Yêu cầu câu hỏi (Gợi ý Tiếng Việt)</th>
                    <th style="width: 45%;">Câu mẫu chuẩn VSTEP (Tiếng Anh)</th>
                    <th style="width: 70px; text-align: center;">Độ chính xác</th>
                </tr>
            </thead>
            <tbody>
                ${questionsRows}
            </tbody>
        </table>

        <hr style="border: none; border-top: 1px dashed #cbd5e1; margin-top: 24pt; margin-bottom: 8pt;">
        <p style="text-align: center; font-size: 10pt; color: #64748b; font-style: italic;">
            Hệ thống tự động ôn tập và đánh giá VSTEP Writing Task 01 (B2 LEVEL) - English with Miss Nguyet
        </p>
    `;

    const fileName = `HOC_THUOC_LONG_B2_${safeStudentName}_${typeData.id.toUpperCase()}_${safeDate}.doc`;
    downloadWordDoc(fileName, htmlBody);
}

function importProgressBackup(file) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const data = JSON.parse(e.target.result);
            if (!data || (!data.completedLetters && !data.student && !data.system)) {
                alert('Tệp sao lưu không đúng định dạng VSTEP Writing Task 1!');
                return;
            }

            const studentName = (data.student && data.student.name) ? data.student.name : 'Học viên';
            const completedCount = Array.isArray(data.completedLetters) ? data.completedLetters.length : 0;
            const confirmMsg = `XÁC NHẬN KHÔI PHỤC TIẾN ĐỘ HỌC TẬP:\n\n` +
                `• Học viên: ${studentName} (${(data.student && data.student.class) || 'Chưa rõ'})\n` +
                `• Dạng thư đã đạt: ${completedCount}/7 dạng thư\n` +
                `• Thời gian sao lưu: ${data.exportedAtFormatted || 'Không rõ'}\n\n` +
                `Bạn có chắc chắn muốn khôi phục tiến độ từ tệp này không?\nDữ liệu hiện tại trên trình duyệt sẽ được cập nhật đồng bộ.`;

            if (!confirm(confirmMsg)) {
                return;
            }

            // Restore student profile
            if (data.student && data.student.name) {
                currentStudentName = data.student.name;
                currentStudentClass = data.student.class || '';
                try {
                    localStorage.setItem('vstep_student_name', currentStudentName);
                    localStorage.setItem('vstep_student_class', currentStudentClass);
                } catch (e) {}
                updateStudentProfileUI(currentStudentName, currentStudentClass);
            }

            // Restore completed letters
            if (Array.isArray(data.completedLetters)) {
                try {
                    localStorage.setItem('vstep_completed_letters', JSON.stringify(data.completedLetters));
                } catch (e) {}
            }

            // Restore recitation results (v59.0)
            if (data.recitationResults && typeof data.recitationResults === 'object') {
                try {
                    localStorage.setItem('vstep_recitation_results', JSON.stringify(data.recitationResults));
                } catch (e) {}
            }

            // Restore drafts
            if (data.drafts) {
                if (data.drafts.fullPractice) {
                    Object.keys(data.drafts.fullPractice).forEach(k => {
                        try {
                            localStorage.setItem('vstep_draft_full_practice_' + k, JSON.stringify(data.drafts.fullPractice[k]));
                        } catch (e) {}
                    });
                }
                if (data.drafts.extraPractice) {
                    Object.keys(data.drafts.extraPractice).forEach(k => {
                        try {
                            localStorage.setItem('vstep_draft_extra_practice_' + k, JSON.stringify(data.drafts.extraPractice[k]));
                        } catch (e) {}
                    });
                }
                if (data.drafts.recitation) {
                    Object.keys(data.drafts.recitation).forEach(k => {
                        try {
                            localStorage.setItem('vstep_draft_recitation_' + k, JSON.stringify(data.drafts.recitation[k]));
                        } catch (e) {}
                    });
                }
            }

            // Refresh UI
            updateGlobalProgress();
            renderNav();

            if (activeLetterTypeId) {
                loadFullPracticeDraft(activeLetterTypeId);
                loadExtraPracticeDraft(activeLetterTypeId);
                resetRecitationUI(false);
            }

            showToastNotice(`🎉 Đã khôi phục thành công tiến độ của ${studentName}! (${completedCount}/7 dạng thư)`, 'fa-solid fa-cloud-arrow-up');
        } catch (err) {
            console.error('Import backup error', err);
            alert('Lỗi đọc tệp sao lưu: Tệp có thể bị hỏng hoặc không đúng định dạng JSON.');
        }
    };
    reader.readAsText(file, 'UTF-8');
}

// Global Learning Progress Management
function getCompletedLetters() {
    try {
        const saved = localStorage.getItem('vstep_completed_letters');
        return saved ? JSON.parse(saved) : [];
    } catch (e) {
        return [];
    }
}

function markLetterCompleted(letterId) {
    let completed = getCompletedLetters();
    if (!completed.includes(letterId)) {
        completed.push(letterId);
        try {
            localStorage.setItem('vstep_completed_letters', JSON.stringify(completed));
        } catch (e) {
            console.error('Error saving completed letters', e);
        }
    }
    updateGlobalProgress();
    renderNav();
}

function resetLearningProgress() {
    if (isRecitationInProgress) {
        triggerRecitationCheatWarning('làm mới tiến độ học tập trong lúc trả bài');
        return;
    }
    if (isFullPracticeInProgress) {
        showToastNotice('🔒 Đang trong thời gian làm bài thực hành! Không thể làm mới tiến độ lúc này.', 'fa-solid fa-lock');
        return;
    }
    if (confirm('Bạn có chắc chắn muốn làm mới toàn bộ tiến độ học tập không?')) {
        try {
            localStorage.removeItem('vstep_completed_letters');
            localStorage.removeItem('vstep_recitation_results');
            letterTypes.forEach(t => {
                localStorage.removeItem('vstep_draft_full_practice_' + t.id);
                localStorage.removeItem('vstep_draft_extra_practice_' + t.id);
                localStorage.removeItem('vstep_draft_recitation_' + t.id);
            });
        } catch (e) {
            console.error('Error clearing progress', e);
        }
        updateGlobalProgress();
        renderNav();
        if (activeLetterTypeId) {
            resetFullPracticeUI();
            resetRecitationUI(true);
        }
        showToastNotice('🔄 Đã làm mới toàn bộ tiến độ học tập, kết quả trả bài và bản nháp.', 'fa-solid fa-rotate-left');
    }
}

function updateGlobalProgress() {
    const completed = getCompletedLetters();
    const total = letterTypes.length;
    const count = completed.length;
    const percentage = total > 0 ? Math.round((count / total) * 100) : 0;

    // Sidebar Progress
    const sidebarText = document.getElementById('sidebarProgressText');
    const sidebarFill = document.getElementById('sidebarProgressFill');
    if (sidebarText) sidebarText.textContent = `${count}/${total} ĐẠT`;
    if (sidebarFill) sidebarFill.style.width = `${percentage}%`;

    // Dashboard Card Progress
    const dashPercent = document.getElementById('dashboardProgressPercent');
    const dashFill = document.getElementById('dashboardProgressFill');
    const dashStatus = document.getElementById('dashboardProgressStatus');
    
    if (dashPercent) dashPercent.textContent = `${percentage}%`;
    if (dashFill) dashFill.style.width = `${percentage}%`;
    if (dashStatus) {
        if (count === 0) {
            dashStatus.textContent = 'Chưa hoàn thành dạng thư nào. Hãy bắt đầu học tập!';
        } else if (count < total) {
            dashStatus.textContent = `Đã hoàn thành ${count}/${total} dạng thư. Tiếp tục phát huy!`;
        } else {
            dashStatus.textContent = '🎉 Xuất sắc! Bạn đã chinh phục toàn bộ 7 dạng thư VSTEP Task 01!';
        }
    }

    // Dashboard Recitation Scores Summary (v59.0)
    const recSummary = document.getElementById('dashboardRecitationSummary');
    const recResults = getRecitationResults();
    const resultKeys = Object.keys(recResults);
    if (recSummary) {
        if (resultKeys.length > 0) {
            recSummary.classList.remove('hidden');
            let pillsHtml = '<div class="recitation-summary-title"><i class="fa-solid fa-clipboard-check"></i> Kết quả trả bài đã sao lưu:</div><div class="recitation-summary-pills">';
            letterTypes.forEach(t => {
                const r = recResults[t.id];
                if (r) {
                    const isPassed = r.status === 'ĐẠT' || r.averageScore >= 90;
                    pillsHtml += `<span class="rec-summary-pill ${isPassed ? 'passed' : 'failed'}" title="${t.titleEn}: ${r.averageScore}% (${r.status}) - Làm lúc: ${r.completedAtFormatted || ''}">
                        <strong>${t.titleEn}</strong>: ${r.averageScore}% ${isPassed ? '✓ ĐẠT' : '✗'}
                    </span>`;
                }
            });
            pillsHtml += '</div>';
            recSummary.innerHTML = pillsHtml;
        } else {
            recSummary.classList.add('hidden');
            recSummary.innerHTML = '';
        }
    }
}

// Reset recitation UI
function resetRecitationUI(forceFresh = false) {
    // Check if there is already a saved recitation result for this letter type
    if (!forceFresh) {
        const savedResult = getRecitationResult(activeLetterTypeId);
        if (savedResult) {
            displaySavedRecitationResult(activeLetterTypeId);
            return;
        }
    }

    currentQuestionIndex = 0;
    activeQuestions = recitationQuestions[activeLetterTypeId] || [];
    questionScores = new Array(activeQuestions.length).fill(0);
    questionHintsUsed = new Array(activeQuestions.length).fill(false);

    // Reset Anti-Cheat Violation Tracker
    recitationCheatAttempts = 0;
    isRecitationCheatModalOpen = false;
    hasLeftRecitationTab = false;
    if (cheatWarningModal) cheatWarningModal.classList.add('hidden');
    if (recitationCheatCounterBadge) recitationCheatCounterBadge.classList.add('hidden');
    if (recitationCheatCountText) recitationCheatCountText.textContent = `0/${MAX_RECITATION_CHEAT_ATTEMPTS}`;
    if (evaluationCheatRecord) evaluationCheatRecord.classList.add('hidden');
    const evalCard = document.querySelector('.evaluation-card');
    if (evalCard) evalCard.classList.remove('disqualified');

    if (totalQuestionsNum) totalQuestionsNum.textContent = activeQuestions.length;

    // Reset Recitation 20-minute Timer
    resetRecitationTimer();

    // Check if there is an unfinished recitation draft to resume
    if (!forceFresh) {
        const savedDraft = loadRecitationDraft(activeLetterTypeId);
        if (savedDraft && savedDraft.questionIndex > 0 && savedDraft.questionIndex < activeQuestions.length) {
            currentQuestionIndex = savedDraft.questionIndex;
            if (Array.isArray(savedDraft.questionScores)) questionScores = savedDraft.questionScores;
            if (Array.isArray(savedDraft.questionHintsUsed)) questionHintsUsed = savedDraft.questionHintsUsed;
            if (typeof savedDraft.cheatAttempts === 'number') {
                recitationCheatAttempts = savedDraft.cheatAttempts;
                if (recitationCheatCounterBadge && recitationCheatAttempts > 0) {
                    recitationCheatCounterBadge.classList.remove('hidden');
                    if (recitationCheatCountText) recitationCheatCountText.textContent = `${recitationCheatAttempts}/${MAX_RECITATION_CHEAT_ATTEMPTS}`;
                }
            }
            if (typeof savedDraft.timeRemaining === 'number') {
                recitationTimeRemaining = savedDraft.timeRemaining;
                updateRecitationTimerDisplay();
            }
            showToastNotice(`💾 Đã tự động khôi phục tiến độ trả bài (Câu ${currentQuestionIndex + 1}/${activeQuestions.length})`, 'fa-solid fa-clock-rotate-left');
        }
    }

    const practicePanel = document.getElementById('writingPracticePanel');
    if (practicePanel && practicePanel.classList.contains('active')) {
        lockNavigationDuringRecitation();
        startRecitationTimer();
    } else {
        unlockNavigationAfterRecitation();
    }

    // Reset UI Visibility
    if (recitationQuizBox) recitationQuizBox.classList.remove('hidden');
    if (recitationFeedback) recitationFeedback.classList.add('hidden');
    if (recitationResultBox) recitationResultBox.classList.add('hidden');
    if (reportStatusBox) reportStatusBox.classList.add('hidden');
    
    // Restore header and progress bar
    const recitationHeader = document.querySelector('.recitation-header');
    if (recitationHeader) recitationHeader.classList.remove('hidden');
    
    const progressWrapper = document.querySelector('.recitation-progress-wrapper');
    if (progressWrapper) progressWrapper.style.display = 'flex';

    showRecitationQuestion();
}

// Display active recitation question
function showRecitationQuestion() {
    if (activeQuestions.length === 0) return;

    const q = activeQuestions[currentQuestionIndex];
    if (currentQuestionNum) currentQuestionNum.textContent = currentQuestionIndex + 1;
    
    // Update progress bar
    const progressPct = ((currentQuestionIndex + 1) / activeQuestions.length) * 100;
    if (progressBarFill) progressBarFill.style.width = `${progressPct}%`;

    if (questionCueText) questionCueText.textContent = q.cue;
    if (recitationInput) {
        recitationInput.value = '';
        recitationInput.disabled = false;
        recitationInput.focus();
    }

    // Reset feedback and hint box
    if (recitationFeedback) recitationFeedback.classList.add('hidden');
    if (questionHintBox) questionHintBox.classList.add('hidden');
    if (questionHintText) questionHintText.textContent = '';

    // If hint was already used on this question, restore it
    if (questionHintsUsed[currentQuestionIndex]) {
        if (questionHintText) questionHintText.textContent = getHintText(q.target);
        if (questionHintBox) questionHintBox.classList.remove('hidden');
    }

    // Button states
    if (btnPrevQuestion) btnPrevQuestion.disabled = (currentQuestionIndex === 0);
    if (btnShowAnswer) btnShowAnswer.classList.remove('hidden');
    if (btnCheckAnswer) btnCheckAnswer.classList.remove('hidden');
    if (btnNextQuestion) btnNextQuestion.classList.add('hidden');
}

// Check user recitation answer
function checkRecitationAnswer() {
    if (activeQuestions.length === 0) return;
    const q = activeQuestions[currentQuestionIndex];
    const userAns = recitationInput ? recitationInput.value.trim() : '';

    if (!userAns) {
        alert('Vui lòng nhập câu trả lời của bạn trước khi kiểm tra!');
        return;
    }

    const diffResult = diffWords(userAns, q.target);
    const hintUsed = questionHintsUsed[currentQuestionIndex] || false;
    
    // Apply 50% penalty if hint was used
    let finalScore = diffResult.accuracy;
    if (hintUsed) {
        finalScore = Math.round(diffResult.accuracy * 0.5);
    }
    questionScores[currentQuestionIndex] = finalScore;

    // Build diff HTML for User Diff Result
    if (userDiffResult) {
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
    }

    // Build diff HTML for Correct Text Result
    if (correctTextResult) {
        correctTextResult.innerHTML = '';
        diffResult.diff.forEach(d => {
            if (d.type === 'match') {
                const span = document.createElement('span');
                span.className = 'diff-word-match';
                span.textContent = (d.targetWord || d.word) + ' ';
                correctTextResult.appendChild(span);
            } else if (d.type === 'missing') {
                const span = document.createElement('span');
                span.className = 'diff-word-mismatch';
                span.textContent = (d.targetWord || d.word) + ' ';
                correctTextResult.appendChild(span);
            }
        });
    }

    // Show Feedback Status
    if (feedbackStatus) {
        if (diffResult.isPerfect) {
            feedbackStatus.className = 'feedback-status status-success';
            if (hintUsed) {
                feedbackStatus.innerHTML = `<i class="fa-solid fa-circle-check"></i> <strong>Chính xác tuyệt đối!</strong> (Độ khớp: 100% - Điểm tính: 50% do dùng gợi ý)`;
            } else {
                feedbackStatus.innerHTML = `<i class="fa-solid fa-circle-check"></i> <strong>Chính xác tuyệt đối!</strong> (Độ chính xác: 100%)`;
            }
        } else {
            feedbackStatus.className = 'feedback-status status-error';
            if (hintUsed) {
                feedbackStatus.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> <strong>Chưa chính xác!</strong> (Độ khớp: ${diffResult.accuracy}% - Điểm tính: ${finalScore}% do dùng gợi ý). Xem chi tiết bên dưới.`;
            } else {
                feedbackStatus.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> <strong>Chưa chính xác! Độ chính xác: ${diffResult.accuracy}%. Xem so sánh bên dưới.</strong>`;
            }
        }
    }

    if (recitationFeedback) recitationFeedback.classList.remove('hidden');
    if (btnCheckAnswer) btnCheckAnswer.classList.add('hidden');
    if (btnNextQuestion) btnNextQuestion.classList.remove('hidden');
    if (recitationInput) recitationInput.disabled = true;

    // Auto-save recitation progress
    saveRecitationDraft(activeLetterTypeId);
}

// Show hint inline
function showRecitationAnswer() {
    if (activeQuestions.length === 0) return;
    const q = activeQuestions[currentQuestionIndex];
    
    // Mark as hint used for this question
    questionHintsUsed[currentQuestionIndex] = true;
    
    // Generate masked hint text
    const hintText = getHintText(q.target);
    
    if (questionHintText) {
        questionHintText.textContent = hintText;
    }
    if (questionHintBox) {
        questionHintBox.classList.remove('hidden');
    }
}

// Next recitation question
function nextRecitationQuestion() {
    if (currentQuestionIndex < activeQuestions.length - 1) {
        currentQuestionIndex++;
        saveRecitationDraft(activeLetterTypeId);
        showRecitationQuestion();
    } else {
        clearRecitationDraft(activeLetterTypeId);
        showEvaluationResult();
    }
}

// Show evaluation result screen
function showEvaluationResult() {
    // Clear recitation draft once completed
    clearRecitationDraft(activeLetterTypeId);

    // Hide quiz box and feedback panel
    if (recitationQuizBox) recitationQuizBox.classList.add('hidden');
    if (recitationFeedback) recitationFeedback.classList.add('hidden');
    
    // Hide header and progress bar wrapper during evaluation results
    const recitationHeader = document.querySelector('.recitation-header');
    if (recitationHeader) recitationHeader.classList.add('hidden');
    
    const progressWrapper = document.querySelector('.recitation-progress-wrapper');
    if (progressWrapper) progressWrapper.style.display = 'none';
    
    // Stop 20-minute countdown timer and compute time spent
    stopRecitationTimer();
    unlockNavigationAfterRecitation();
    const timeSpentSeconds = Math.max(0, RECITATION_TIME_LIMIT - recitationTimeRemaining);
    if (timeSpentVal) {
        timeSpentVal.textContent = formatTimerString(timeSpentSeconds);
    }

    // Calculate average score
    const totalQuestions = activeQuestions.length;
    const totalScore = questionScores.reduce((sum, s) => sum + s, 0);
    const averageScore = totalQuestions > 0 ? Math.round(totalScore / totalQuestions) : 0;
    
    // Update score text
    if (scorePercentageVal) scorePercentageVal.textContent = averageScore;
    
    // Get active letter type data for dynamic title
    const typeData = letterTypes.find(t => t.id === activeLetterTypeId);
    const letterTitleEn = typeData ? typeData.titleEn : 'Letter of Advice';
    
    const evalCard = document.querySelector('.evaluation-card');
    let statusText = 'KHÔNG ĐẠT';
    
    if (averageScore >= 90) {
        // Passed state
        statusText = 'ĐẠT';
        if (resultStatusVal) {
            resultStatusVal.textContent = 'ĐẠT';
        }
        if (resultMessageVal) {
            const questNames = {
                advice: 'NHIỆM VỤ HỆ THỐNG ĐẦU TIÊN',
                request: 'NHIỆM VỤ HỆ THỐNG THỨ HAI',
                description: 'NHIỆM VỤ HỆ THỐNG THỨ BA',
                complaint: 'NHIỆM VỤ HỆ THỐNG THỨ TƯ',
                feedback: 'NHIỆM VỤ HỆ THỐNG THỨ NĂM',
                apology: 'NHIỆM VỤ HỆ THỐNG THỨ SÁU',
                application: 'NHIỆM VỤ HỆ THỐNG THỨ BẢY'
            };
            const questName = questNames[activeLetterTypeId] || 'NHIỆM VỤ HỆ THỐNG';
            resultMessageVal.textContent = `Chúc mừng bạn đã chinh phục được ${letterTitleEn}. ${questName} đã được hoàn thành, hãy tiếp tục với nhiệm vụ tiếp theo.`;
        }
        if (evaluationIcon) {
            evaluationIcon.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        }
        if (evalCard) {
            evalCard.classList.remove('failed');
            evalCard.classList.add('passed');
        }
        markLetterCompleted(activeLetterTypeId);
    } else {
        // Failed state
        statusText = 'KHÔNG ĐẠT';
        if (resultStatusVal) {
            resultStatusVal.textContent = 'KHÔNG ĐẠT';
        }
        if (resultMessageVal) {
            resultMessageVal.textContent = 'Xin vui lòng ôn lại bài thật kỹ và trả bài lại một lần nữa.';
        }
        if (evaluationIcon) {
            evaluationIcon.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i>';
        }
        if (evalCard) {
            evalCard.classList.remove('passed');
            evalCard.classList.add('failed');
        }
    }

    // Display cheat warning count if any occurred during the test
    if (evaluationCheatRecord && evaluationCheatRecordText) {
        if (recitationCheatAttempts > 0) {
            evaluationCheatRecord.classList.remove('hidden');
            evaluationCheatRecordText.innerHTML = `⚠️ Lưu ý: Hệ thống ghi nhận <strong>${recitationCheatAttempts} lần</strong> có hành vi chuyển tab / rời bài trong phiên trả bài này.`;
        } else {
            evaluationCheatRecord.classList.add('hidden');
        }
    }
    
    // Save Recitation Result to LocalStorage (v59.0)
    const now = new Date();
    const resultRecord = {
        letterId: activeLetterTypeId,
        averageScore: averageScore,
        status: statusText,
        timeSpent: formatTimerString(timeSpentSeconds),
        timeSpentSeconds: timeSpentSeconds,
        cheatAttempts: recitationCheatAttempts,
        questionScores: [...questionScores],
        totalQuestions: totalQuestions,
        studentName: currentStudentName || localStorage.getItem('vstep_student_name') || 'Học viên',
        studentClass: currentStudentClass || localStorage.getItem('vstep_student_class') || 'Chưa rõ',
        completedAt: now.toISOString(),
        completedAtFormatted: now.toLocaleString('vi-VN')
    };
    saveRecitationResult(activeLetterTypeId, resultRecord);

    // Update saved result status display
    if (reportStatusBox) {
        reportStatusBox.classList.remove('hidden');
        const reportText = document.getElementById('reportStatusText');
        if (reportText) {
            reportText.innerHTML = `💾 <strong>Kết quả đã được sao lưu an toàn</strong> trên máy & báo cáo lên giáo viên (${now.toLocaleTimeString('vi-VN')}).`;
        }
    }
    
    // Show result box
    if (recitationResultBox) recitationResultBox.classList.remove('hidden');

    // Update navigation and global progress
    renderNav();
    updateGlobalProgress();

    // Automatically report result to Google Form
    reportResultToGoogleForm();
}

// Prev recitation question
function prevRecitationQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showRecitationQuestion();
    }
}

// Show Welcome Screen
function showWelcomeScreen() {
    if (isRecitationInProgress) {
        triggerRecitationCheatWarning('rời khỏi bài để về Trang chủ');
        return;
    }
    if (isFullPracticeInProgress) {
        showToastNotice('🔒 Đang trong thời gian thực hành viết bài (20 phút)! Bạn không thể rời khỏi bài cho đến khi nộp bài.', 'fa-solid fa-lock');
        return;
    }
    activeLetterTypeId = null;
    
    // Update active nav
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    const homeItem = document.querySelector('.home-nav-item');
    if (homeItem) homeItem.classList.add('active');

    // Show welcome, hide content
    if (welcomeScreen) welcomeScreen.style.display = 'flex';
    if (letterContent) letterContent.classList.add('hidden');

    // Reset Title
    if (mainTitle) {
        mainTitle.innerHTML = `
            <div class="main-title-en placeholder-blink">Chọn một dạng thư để bắt đầu NHIỆM VỤ HỆ THỐNG của bạn!</div>
        `;
    }
}

// Render Navigation
function renderNav() {
    if (!letterNav) return;
    letterNav.innerHTML = ''; // Clear existing
    
    // Add Home button first
    const homeItem = document.createElement('div');
    homeItem.className = 'nav-item home-nav-item active';
    homeItem.innerHTML = `
        <i class="fa-solid fa-house"></i>
        <div class="nav-text">
            <div class="nav-title-en" style="font-weight: bold;">TRANG CHỦ</div>
            <div class="nav-title-vi">Màn hình khởi đầu</div>
        </div>
    `;
    homeItem.addEventListener('click', showWelcomeScreen);
    letterNav.appendChild(homeItem);

    const completed = getCompletedLetters();
    const recitationResults = getRecitationResults();

    letterTypes.forEach(type => {
        const isCompleted = completed.includes(type.id);
        const recResult = recitationResults[type.id];
        let scoreBadgeHtml = '';
        if (recResult && typeof recResult.averageScore === 'number') {
            const isPassed = recResult.status === 'ĐẠT' || recResult.averageScore >= 90;
            scoreBadgeHtml = `<span class="nav-score-badge ${isPassed ? 'passed' : 'failed'}" title="Kết quả trả bài: ${recResult.averageScore}% (${recResult.status})">${recResult.averageScore}%</span>`;
        }

        const navItem = document.createElement('div');
        navItem.className = 'nav-item';
        navItem.dataset.id = type.id;
        navItem.innerHTML = `
            <i class="fa-solid ${type.icon}"></i>
            <div class="nav-text">
                <div class="nav-title-en">${type.titleEn}</div>
                <div class="nav-title-vi">${type.titleVi}</div>
            </div>
            ${scoreBadgeHtml}
            ${isCompleted ? '<span class="nav-completed-badge" title="Đã chinh phục"><i class="fa-solid fa-circle-check"></i></span>' : ''}
        `;
        
        navItem.addEventListener('click', () => selectLetterType(type.id));
        letterNav.appendChild(navItem);
    });
}

// Select a Letter Type
function selectLetterType(id) {
    if (typeof stopSampleAudio === 'function') stopSampleAudio();
    if (isRecitationInProgress) {
        triggerRecitationCheatWarning('chuyển sang dạng thư khác trên thanh điều hướng');
        return;
    }
    if (isFullPracticeInProgress) {
        showToastNotice('🔒 Đang trong thời gian thực hành viết bài (20 phút)! Bạn không thể rời khỏi bài cho đến khi nộp bài.', 'fa-solid fa-lock');
        return;
    }
    activeLetterTypeId = id;
    
    // Update active nav
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
        if (item.dataset.id === id) item.classList.add('active');
    });

    const typeData = letterTypes.find(t => t.id === id);
    if (!typeData) return;

    // Hide welcome, show content
    if (welcomeScreen) welcomeScreen.style.display = 'none';
    if (letterContent) letterContent.classList.remove('hidden');

    // Set Title
    if (mainTitle) {
        mainTitle.innerHTML = `
            <div class="main-title-en">${typeData.titleEn}</div>
            <div class="main-title-vi">${typeData.titleVi}</div>
        `;
    }

    // Populate Content
    const basicInfoPanel = document.getElementById('basicInfoPanel');
    const identifyingSignsPanel = document.getElementById('identifyingSignsPanel');
    const detailedOutlinePanel = document.getElementById('detailedOutlinePanel');
    const sampleWritingPanel = document.getElementById('sampleWritingPanel');

    if (basicInfoPanel) basicInfoPanel.innerHTML = typeData.basicInfo;
    if (identifyingSignsPanel) identifyingSignsPanel.innerHTML = typeData.identifyingSigns;
    if (detailedOutlinePanel) {
        detailedOutlinePanel.innerHTML = typeData.detailedOutline.replace(/\[([^\]]+)\]/g, '[<strong>$1</strong>]');
    }
    if (sampleWritingPanel) sampleWritingPanel.innerHTML = typeData.sampleWriting;

    // Render Extra Practice
    renderExtraPracticePanel(id);

    // Render Full Practice Panel
    renderFullPracticePanel(id);

    // Reset recitation for this type
    resetRecitationUI();

    // Reset tabs to first tab
    const firstTab = document.querySelector('.tab-btn[data-tab="basicInfo"]');
    if (firstTab) firstTab.click();
}

// --- Full Practice (THỰC HÀNH) System ---
function renderFullPracticePanel(letterId) {
    const typeData = letterTypes.find(t => t.id === letterId);
    if (!typeData) return;

    const promptBox = document.getElementById('fullPracticePromptBox');
    if (promptBox) {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = typeData.sampleWriting;
        const promptContainer = tempDiv.querySelector('.sample-prompt-container');
        if (promptContainer) {
            promptBox.innerHTML = promptContainer.outerHTML;
        } else {
            promptBox.innerHTML = `<div class="sample-prompt-container"><div class="sample-prompt-header"><i class="fa-solid fa-file-circle-question"></i> ĐỀ BÀI (TOPIC PROMPT)</div><div class="sample-prompt-text"><p>${typeData.practicePrompt || ''}</p></div></div>`;
        }
    }

    resetFullPracticeUI();
    loadFullPracticeDraft(letterId);
}

function updateFullPracticeWordCount() {
    const text = fullPracticeInput ? fullPracticeInput.value : '';
    const count = countWords(text);
    if (fullPracticeWordCount) fullPracticeWordCount.textContent = count;
    const stickyWordCount = document.getElementById('fullPracticeWordCountSticky');
    if (stickyWordCount) stickyWordCount.textContent = count;

    const badges = [
        fullPracticeWordBadge,
        document.getElementById('fullPracticeWordBadgeSticky')
    ];
    badges.forEach(b => {
        if (!b) return;
        b.classList.remove('word-count-pass', 'word-count-warn');
        if (count >= 120) {
            b.classList.add('word-count-pass');
        } else if (count > 0) {
            b.classList.add('word-count-warn');
        }
    });
    return count;
}

function resetFullPracticeUI() {
    resetFullPracticeTimer();

    if (fullPracticeInput) {
        fullPracticeInput.value = '';
        fullPracticeInput.disabled = false;
    }
    updateFullPracticeWordCount();

    if (fullPracticeWritingBox) fullPracticeWritingBox.classList.remove('hidden');
    if (fullPracticeResultBox) {
        fullPracticeResultBox.classList.add('hidden');
        fullPracticeResultBox.innerHTML = '';
    }

    const panel = document.getElementById('fullPracticePanel');
    if (panel && panel.classList.contains('active')) {
        lockNavigationDuringFullPractice();
        startFullPracticeTimer();
    } else {
        unlockNavigationAfterFullPractice();
    }
}

// =========================================================================
// OFFICIAL VSTEP WRITING TASK 1 SCORING GUIDE & EVALUATION ENGINE
// (Based on Ministry of Education and Training Rating Scale - media_1787637818545.jpg)
// =========================================================================

const VSTEP_OFFICIAL_RUBRIC = {
    taskFulfilment: {
        10: {
            en: "Covers all the requirements of the task effectively; effectively fulfills all communicative purpose(s), with tone consistent and appropriate; fully develops key points with all the details relevant.",
            vi: "Đáp ứng xuất sắc và toàn diện mọi yêu cầu của đề bài; đạt trọn vẹn mục đích giao tiếp với văn phong hoàn toàn nhất quán, phù hợp; phát triển đầy đủ các ý chính với chi tiết xác đáng."
        },
        9: {
            en: "Covers all the requirements of the task effectively; effectively fulfills all communicative purpose(s), with tone consistent and appropriate; fully develops key points with all the details generally relevant.",
            vi: "Đáp ứng hiệu quả tất cả yêu cầu của đề; thực hiện tốt mục đích giao tiếp, văn phong nhất quán và chuẩn mực; phát triển đầy đủ các ý chính với các chi tiết nhìn chung rất phù hợp."
        },
        8: {
            en: "Covers all the requirements of the task; presents generally clear communicative purpose(s), with one or two minor inconsistencies and inappropriacies in tone; develops key points with most of the detail generally relevant; one/two of the points could be more fully extended.",
            vi: "Đáp ứng đầy đủ các yêu cầu của đề; mục đích giao tiếp rõ ràng, chỉ có 1-2 điểm nhỏ chưa hoàn toàn nhất quán về giọng văn; phát triển các ý chính với chi tiết phù hợp."
        },
        7: {
            en: "Covers all the requirements of the tasks; the format may be inappropriate in places; presents generally clear communicative purpose(s), with some inconsistencies and inappropriacies in tone; adequately presents key points, but one or two details may be inappropriate.",
            vi: "Bao quát được các yêu cầu của đề; thể thức có thể chưa thật chuẩn ở một vài chỗ; mục đích giao tiếp tương đối rõ ràng; trình bày đầy đủ các ý chính nhưng có thể có 1-2 chi tiết chưa tối ưu."
        },
        6: {
            en: "Covers almost all the requirements of the tasks; the format may be inappropriate in places; presents generally clear communicative purpose(s), with some inconsistencies and inappropriacies in tone; adequately presents key points, but a few details may be inappropriate.",
            vi: "Đáp ứng hầu hết các yêu cầu của đề; mục đích giao tiếp cơ bản rõ ràng nhưng văn phong còn đôi chỗ chưa chuẩn; nêu được các ý chính nhưng một vài chi tiết chưa thật sát."
        },
        5: {
            en: "Partially covers the requirements of the tasks; presents communicative purpose(s), which are unclear in places; there are some inconsistencies and inappropriacies in tone; inadequately presents key points; there may be a tendency to focus on details.",
            vi: "Chỉ đáp ứng được một phần yêu cầu của đề; mục đích giao tiếp chưa rõ ràng ở một số vị trí; chưa phát triển đầy đủ các ý chính hoặc tập trung quá nhiều vào chi tiết phụ."
        },
        4: {
            en: "Partially covers the requirements of the tasks; fails to clearly presents communicative purpose(s); the tone may be inappropriate; may confuse key points; some parts may be unclear, irrelevant or repetitive.",
            vi: "Chỉ giải quyết được một phần đề; chưa làm rõ mục đích giao tiếp; giọng văn chưa phù hợp; các ý chính bị nhầm lẫn hoặc lặp ý, thiếu mạch lạc."
        },
        3: {
            en: "Does not address any part of the task; presents limited ideas which may be largely irrelevant/repetitive.",
            vi: "Hầu như không giải quyết được yêu cầu đề bài; ý tưởng rất hạn chế, lặp lại hoặc lạc đề."
        },
        2: {
            en: "Does not address any part of the task.",
            vi: "Không giải quyết được phần nào của đề bài."
        },
        1: {
            en: "Answer is totally irrelevant or incomprehensible.",
            vi: "Bài viết hoàn toàn lạc đề hoặc không thể hiểu được."
        },
        0: {
            en: "Does not attend the exam / does not write any words / writes only a memorized response.",
            vi: "Không làm bài / không có nội dung hoặc chỉ chép lại đoạn văn học vẹt không liên quan."
        }
    },
    organization: {
        10: {
            en: "Organizes information and ideas logically; uses a variety as well as a range of cohesive devices and organizational patterns flexibly; uses paragraphing sufficiently and appropriately.",
            vi: "Tổ chức thông tin và ý tưởng hoàn toàn logic; sử dụng đa dạng và linh hoạt các phương tiện liên kết và mô thức tổ chức đoạn; phân đoạn chuẩn mực, hợp lý."
        },
        9: {
            en: "Organizes information and ideas coherently; uses a variety as well as a range of cohesive devices and organizational patterns effectively; uses paragraphing sufficiently and appropriately.",
            vi: "Tổ chức thông tin mạch lạc, rõ ràng; vận dụng hiệu quả nhiều phương tiện liên kết và cấu trúc đoạn; phân chia đoạn văn hợp lý."
        },
        8: {
            en: "Organizes information and ideas coherently; uses a range of linking words and cohesive devices appropriately, though there may be some under/over use.",
            vi: "Tổ chức ý tưởng mạch lạc; sử dụng tương đối tốt các từ nối và phương tiện liên kết, dù đôi khi còn dùng hơi ít hoặc hơi lạm dụng."
        },
        7: {
            en: "Organizes information and ideas coherently; uses a variety of linking words appropriately and a number of cohesive devices accurately within and across sentences, but there may be occasional inappropriacies.",
            vi: "Bố cục mạch lạc; sử dụng chuẩn xác nhiều từ nối trong câu và giữa các câu, dù đôi khi còn một vài liên từ dùng chưa tự nhiên."
        },
        6: {
            en: "Organizes information and ideas generally coherently; uses linking words and a limited number of cohesive devices within and across sentences accurately, but there are some inappropriacies.",
            vi: "Ý tưởng nhìn chung có tính liên kết; sử dụng được các từ nối cơ bản trong và giữa các câu, nhưng số lượng từ liên kết còn hạn chế."
        },
        5: {
            en: "Organizes information and ideas fairly coherently; uses linking words and some familiar cohesive devices within and across sentences accurately, though there may be inaccuracies.",
            vi: "Bố cục tương đối mạch lạc; sử dụng một số từ nối quen thuộc nhưng đôi chỗ còn thiếu chính xác hoặc thiếu tự nhiên."
        },
        4: {
            en: "Presents information and ideas with some organization; uses linking words accurately and attempts a few familiar cohesive devices within and across sentences though there are repetitions and inaccuracies.",
            vi: "Có cố gắng tổ chức ý nhưng còn rời rạc; từ nối dùng lặp lại nhiều lần hoặc chưa chuẩn xác."
        },
        3: {
            en: "Presents information and ideas in a series of simple sentences linked by only basic, high frequency linking words.",
            vi: "Trình bày thông tin dưới dạng các câu đơn rời rạc, chỉ dùng các từ nối quá cơ bản (and, but, so)."
        },
        2: {
            en: "Has very little control of organizational features.",
            vi: "Rất ít hoặc không kiểm soát được cấu trúc và bố cục bài viết."
        },
        1: {
            en: "Has no organizational features.",
            vi: "Hoàn toàn không có tính tổ chức hay bố cục đoạn."
        },
        0: {
            en: "Does not attend / no response.",
            vi: "Không có bài làm."
        }
    },
    vocabulary: {
        10: {
            en: "Uses a wide range of vocabulary including some less common lexis precisely and flexibly; shows full control of style and collocation, but there may be occasional inaccuracies; errors are very rare with just one or two minor slips.",
            vi: "Vốn từ rất phong phú, sử dụng chính xác và linh hoạt các từ vựng nâng cao; kiểm soát tốt phong cách và kết hợp từ (collocations); lỗi sai cực kỳ hiếm gặp."
        },
        9: {
            en: "Uses a wide range of vocabulary including some less common lexis precisely; shows good control of style and collocation, but there may be some inaccuracies; errors, if present, are non-systematic and non-impeding.",
            vi: "Vốn từ rộng, dùng chính xác từ vựng theo chủ đề; kiểm soát tốt kết hợp từ; nếu có lỗi thì chỉ là lỗi nhỏ, không mang tính hệ thống và không cản trở việc hiểu."
        },
        8: {
            en: "Uses a good range of vocabulary including some less common lexis appropriately; shows some control of style and collocation; errors, if present, are non-systematic and non-impeding.",
            vi: "Sử dụng vốn từ tốt, dùng đúng ngữ cảnh một số từ vựng nâng cao; có kiểm soát phong cách từ; lỗi từ vựng không gây khó hiểu cho người đọc."
        },
        7: {
            en: "Uses a sufficient range of vocabulary; attempts less common lexis with occasional inappropriacies; errors do not impede communication.",
            vi: "Vốn từ đầy đủ đáp ứng yêu cầu đề; có nỗ lực dùng từ vựng theo chủ đề dù đôi khi còn dùng chưa chuẩn; các lỗi từ vựng không cản trở giao tiếp."
        },
        6: {
            en: "Uses a sufficient range of vocabulary; attempts less common lexis but most are faulty; errors do not impede communication.",
            vi: "Vốn từ đủ dùng cho B1; có thử dùng từ nâng cao nhưng phần lớn chưa chính xác; tuy vậy lỗi không cản trở việc truyền đạt thông điệp chính."
        },
        5: {
            en: "Uses an adequate range of vocabulary but tends to overuse certain lexical items; errors occur and may impede comprehension at times.",
            vi: "Vốn từ ở mức vừa phải nhưng lặp từ nhiều; mắc một số lỗi dùng từ đôi khi làm người đọc khó hiểu."
        },
        4: {
            en: "Uses basic vocabulary and acceptable control; errors are noticeable and impede comprehension at times.",
            vi: "Chỉ dùng từ vựng sơ cấp; lỗi dùng từ và chính tả xuất hiện rõ rệt, cản trở việc đọc hiểu ở nhiều chỗ."
        },
        3: {
            en: "Uses a limited range of basic vocabulary; errors are frequent and distort the meaning.",
            vi: "Vốn từ rất hạn hẹp; lỗi từ vựng xuất hiện liên tục và làm sai lệch ý nghĩa muốn diễn đạt."
        },
        2: {
            en: "Uses a very limited range of words and phrases; errors are dominant and distort the meaning.",
            vi: "Vốn từ cực kỳ nghèo nàn; lỗi sai chiếm ưu thế và làm sai lệch hoàn toàn nội dung."
        },
        1: {
            en: "Uses only a few isolated words.",
            vi: "Chỉ viết được một vài từ rời rạc."
        },
        0: {
            en: "Does not attend / no response.",
            vi: "Không có bài làm."
        }
    },
    grammar: {
        10: {
            en: "Uses a wide range of simple and complex structures precisely and flexibly; errors are very rare with just one or two minor slips.",
            vi: "Sử dụng rất đa dạng, chính xác và linh hoạt cả câu đơn và câu phức; lỗi ngữ pháp cực kỳ hiếm, chỉ là sơ suất nhỏ."
        },
        9: {
            en: "Uses a wide range of simple and complex structures precisely; the majority of the sentences are error-free; errors, if present, are non-systematic and non-impeding.",
            vi: "Vận dụng chuẩn xác nhiều cấu trúc câu đơn và câu phức; phần lớn các câu hoàn toàn không có lỗi; nếu có lỗi chỉ là không đáng kể."
        },
        8: {
            en: "Uses a variety of simple and complex structures with good control; the majority of the sentences are error-free; errors, if present, are non-systematic and non-impeding.",
            vi: "Kết hợp tốt câu đơn và câu phức; đa số các câu đúng ngữ pháp; các lỗi nhỏ không mang tính hệ thống và không cản trở việc hiểu."
        },
        7: {
            en: "Uses both simple and complex structures in a relatively effective way; errors occur but they rarely lead to misunderstanding.",
            vi: "Sử dụng tương đối hiệu quả cả câu đơn và câu phức; có lỗi ngữ pháp xuất hiện nhưng hiếm khi gây hiểu lầm."
        },
        6: {
            en: "Uses simple structures and attempts some complex structures; errors occur but they rarely lead to misunderstanding.",
            vi: "Kiểm soát tốt câu đơn và có cố gắng viết câu phức; có mắc lỗi ngữ pháp nhưng nhìn chung không cản trở việc hiểu nội dung."
        },
        5: {
            en: "Shows good control of simple structures; attempts complex structures, but most are faulty; errors occur but normally they do not impede comprehension.",
            vi: "Kiểm soát tốt các câu đơn giản; có thử viết câu phức nhưng hầu hết bị sai cấu trúc; lỗi không cản trở hoàn toàn việc đọc hiểu."
        },
        4: {
            en: "Shows adequate control of simple structures; attempts complex structures, but unsuccessfully; errors occur frequently and impede comprehension at times.",
            vi: "Chỉ kiểm soát được câu đơn giản ở mức vừa phải; câu phức hầu như thất bại; lỗi ngữ pháp xuất hiện thường xuyên, đôi khi gây khó hiểu."
        },
        3: {
            en: "Uses some simple structures correctly; frequently makes basic errors that distort the meaning.",
            vi: "Chỉ đúng được một vài câu đơn giản; thường xuyên mắc các lỗi ngữ pháp cơ bản làm bóp méo ý nghĩa."
        },
        2: {
            en: "Can only use some memorized structures; errors are dominant and distort the meaning.",
            vi: "Chỉ dùng được một vài mẫu câu học vẹt; lỗi ngữ pháp bao trùm bài viết và làm sai lệch ý nghĩa."
        },
        1: {
            en: "Cannot use sentence forms at all.",
            vi: "Hoàn toàn không thể tạo thành câu hoàn chỉnh."
        },
        0: {
            en: "Does not attend / no response.",
            vi: "Không có bài làm."
        }
    }
};

function getRubricDescriptor(criterion, bandScore) {
    const bandInt = Math.max(0, Math.min(10, Math.round(bandScore)));
    const critObj = VSTEP_OFFICIAL_RUBRIC[criterion];
    if (!critObj) return { en: "", vi: "" };
    return critObj[bandInt] || critObj[0];
}

// Function to render full comprehensive VSTEP evaluation

// ==========================================================================
// VSTEP B2 WRITING TASK 1 - SENTENCE-BY-SENTENCE AUDIT & DIAGNOSTIC ENGINE
// ==========================================================================

function segmentLetterSentences(rawText) {
    if (!rawText) return [];
    let text = rawText.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
    
    // Protect common abbreviations from premature sentence splitting
    const abbrevs = ['mr\\.', 'mrs\\.', 'ms\\.', 'dr\\.', 'prof\\.', 'st\\.', 'e\\.g\\.', 'i\\.e\\.', 'etc\\.', 'vs\\.', 'a\\.m\\.', 'p\\.m\\.', 'no\\.'];
    abbrevs.forEach(abb => {
        const regex = new RegExp(`\\b${abb}`, 'gi');
        text = text.replace(regex, match => match.replace(/\./g, '\uE000'));
    });

    // Protect decimal numbers
    text = text.replace(/(\d+)\.(\d+)/g, '$1\uE000$2');

    // Split on sentence terminals (. ! ?) followed by whitespace or line break
    const rawSentences = text.split(/(?<=[.!?])\s+|\n+/);

    const sentences = [];
    rawSentences.forEach(s => {
        let clean = s.replace(/\uE000/g, '.').trim();
        if (clean.length > 0) {
            sentences.push(clean);
        }
    });

    return sentences;
}

function auditIndividualSentence(sentence, index, totalSentences, typeId, globalErrors = []) {
    const sTrim = sentence.trim();
    const sLower = sTrim.toLowerCase();

    // 1. Determine Section & Role
    let roleName = "Thân bài (Body)";
    let roleIcon = "fa-pencil";
    let isSalutation = false;
    let isSignOff = false;

    if (index === 0 && /^dear\s+[a-z]+/i.test(sTrim)) {
        roleName = "Lời chào mở đầu (Salutation)";
        roleIcon = "fa-envelope-open-text";
        isSalutation = true;
    } else if (index <= 2 && /(thanks?\s+for|hope\s+you|writing\s+this\s+letter|in\s+your\s+letter|how\s+are\s+you|glad\s+to\s+hear|i\s+am\s+writing)/i.test(sLower)) {
        roleName = "Mở đầu thư (Opening & Purpose)";
        roleIcon = "fa-book-open";
    } else if (index >= totalSentences - 2 && /(best\s+wishes|yours\s+(sincerely|faithfully)|warm\s+regards|love|cheers|sincerely)\b/i.test(sLower)) {
        roleName = "Lời chào kết thúc (Sign-off)";
        roleIcon = "fa-signature";
        isSignOff = true;
    } else if (index === totalSentences - 1 && sTrim.split(/\s+/).length <= 3 && !/[.!?]$/.test(sTrim)) {
        roleName = "Ký tên người gửi (Signature)";
        roleIcon = "fa-user-pen";
        isSignOff = true;
    } else if (index >= totalSentences - 3 && /(look\s+forward|hope\s+(my\s+advice|to\s+hear|you\s+can|this\s+helps)|let\s+me\s+know|see\s+you\s+soon|write\s+back)/i.test(sLower)) {
        roleName = "Câu kết thư (Closing)";
        roleIcon = "fa-paper-plane";
    }

    // 2. Identify sentence-specific errors
    const sentenceErrors = [];
    let rewrite = sTrim;

    // Check matched errors from global detector
    if (Array.isArray(globalErrors)) {
        globalErrors.forEach(err => {
            if (err.wrong && sLower.includes(err.wrong.toLowerCase())) {
                if (!sentenceErrors.some(e => e.wrong.toLowerCase() === err.wrong.toLowerCase())) {
                    sentenceErrors.push({
                        type: err.type || "Lỗi ngữ pháp",
                        wrong: err.wrong,
                        correct: err.correct,
                        reason: err.reason || "Cần điều chỉnh theo cấu trúc chuẩn."
                    });
                }
                const re = new RegExp(err.wrong.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
                rewrite = rewrite.replace(re, err.correct);
            }
        });
    }

    // Modal + V-ing or Modal + to V
    const modalRule = /\b(should|can|could|will|would|must|may|might)\s+(to\s+([a-z]+)|([a-z]+ing))\b/i;
    const mModal = sTrim.match(modalRule);
    if (mModal) {
        const full = mModal[0];
        const modal = mModal[1];
        let correctV = '';
        if (mModal[2].startsWith('to ')) {
            correctV = mModal[3];
        } else {
            correctV = mModal[4].replace(/ing$/, '');
            if (mModal[4] === 'staying') correctV = 'stay';
            else if (mModal[4] === 'trying') correctV = 'try';
            else if (mModal[4] === 'going') correctV = 'go';
            else if (mModal[4] === 'visiting') correctV = 'visit';
            else if (mModal[4] === 'taking') correctV = 'take';
            else if (mModal[4] === 'eating') correctV = 'eat';
            else if (mModal[4] === 'wearing') correctV = 'wear';
        }
        if (!sentenceErrors.some(e => e.wrong.toLowerCase() === full.toLowerCase())) {
            sentenceErrors.push({
                type: "Động từ khuyết thiếu (Modal Verb)",
                wrong: full,
                correct: `${modal} ${correctV}`,
                reason: `Sau động từ khuyết thiếu '${modal}', động từ luôn ở dạng nguyên mẫu không 'to' (V-bare), không dùng 'to V' hay 'V-ing'.`
            });
            rewrite = rewrite.replace(new RegExp(full, 'i'), `${modal} ${correctV}`);
        }
    }

    // Missing 'to be' before adjectives
    const adjMissingBe = /\b(it|this|that|they|weather|food|room)\s+(convenient|delicious|hot|warm|cold|cheap|affordable|expensive|dirty|noisy|quiet|clean|important|necessary)\b/i;
    const mAdj = sTrim.match(adjMissingBe);
    if (mAdj) {
        const subj = mAdj[1];
        const adj = mAdj[2];
        const be = (subj.toLowerCase() === 'they') ? 'are' : 'is';
        if (!sentenceErrors.some(e => e.wrong.toLowerCase() === mAdj[0].toLowerCase())) {
            sentenceErrors.push({
                type: "Cấu trúc câu (Thiếu động từ 'to be')",
                wrong: mAdj[0],
                correct: `${subj} ${be} ${adj}`,
                reason: `Sau chủ ngữ '${subj}' đi kèm tính từ '${adj}' bắt buộc phải có liên động từ '${be}'.`
            });
            rewrite = rewrite.replace(new RegExp(mAdj[0], 'i'), `${subj} ${be} ${adj}`);
        }
    }

    // "look forward to + Vo"
    if (/\blook\s+forward\s+to\s+([a-z]+)\b/i.test(sTrim) && !/\blook\s+forward\s+to\s+[a-z]+ing\b/i.test(sTrim)) {
        const mLF = sTrim.match(/\blook\s+forward\s+to\s+([a-z]+)\b/i);
        if (mLF && mLF[1] !== 'hearing' && mLF[1] !== 'seeing' && mLF[1] !== 'meeting' && mLF[1] !== 'receiving') {
            const wrongW = mLF[1];
            let correctW = wrongW.replace(/e$/, '') + 'ing';
            if (wrongW === 'see') correctW = 'seeing';
            const fullW = mLF[0];
            const fixedW = `look forward to ${correctW}`;
            if (!sentenceErrors.some(e => e.wrong.toLowerCase() === fullW.toLowerCase())) {
                sentenceErrors.push({
                    type: "Cấu trúc câu (Look forward to + V-ing)",
                    wrong: fullW,
                    correct: fixedW,
                    reason: "Sau cụm cố định 'look forward to', động từ theo sau luôn chia ở dạng V-ing."
                });
                rewrite = rewrite.replace(new RegExp(fullW, 'i'), fixedW);
            }
        }
    }

    // "Thank for" -> "Thanks for / Thank you for"
    if (/\bThank\s+for\b/i.test(sTrim) && !/\bThanks\s+for\b/i.test(sTrim) && !/\bThank\s+you\s+for\b/i.test(sTrim)) {
        if (!sentenceErrors.some(e => e.wrong.toLowerCase().includes('thank for'))) {
            sentenceErrors.push({
                type: "Ngữ pháp mở thư",
                wrong: "Thank for",
                correct: "Thanks for / Thank you for",
                reason: "Cụm từ cảm ơn đúng phải có 's' ('Thanks for...') hoặc đầy đủ 'Thank you for...'."
            });
            rewrite = rewrite.replace(/\bThank\s+for\b/i, 'Thank you for');
        }
    }

    // "I am write" -> "I am writing"
    if (/\bI\s+(am|'m)\s+write\b/i.test(sTrim)) {
        if (!sentenceErrors.some(e => e.wrong.toLowerCase().includes('write'))) {
            sentenceErrors.push({
                type: "Thì hiện tại tiếp diễn",
                wrong: "I am write",
                correct: "I am writing",
                reason: "Sau 'am/is/are' trong thì hiện tại tiếp diễn, động từ phải thêm đuôi -ing: 'I am writing'."
            });
            rewrite = rewrite.replace(/\bI\s+(am|'m)\s+write\b/i, 'I am writing');
        }
    }

    // Missing articles before singular places/items
    const mStayArt = sTrim.match(/\bstay\s+(in|at)\s+(hotel|homestay)\b/i);
    if (mStayArt) {
        if (!sentenceErrors.some(e => e.wrong.toLowerCase() === mStayArt[0].toLowerCase())) {
            sentenceErrors.push({
                type: "Mạo từ (Articles)",
                wrong: mStayArt[0],
                correct: `stay ${mStayArt[1]} a ${mStayArt[2]}`,
                reason: `Danh từ đếm được số ít '${mStayArt[2]}' cần có mạo từ 'a' phía trước.`
            });
            rewrite = rewrite.replace(new RegExp(mStayArt[0], 'i'), `stay ${mStayArt[1]} a ${mStayArt[2]}`);
        }
    }

    // Capitalization of first letter
    if (/^[a-z]/.test(sTrim)) {
        sentenceErrors.push({
            type: "Chính tả (Viết hoa đầu câu)",
            wrong: sTrim.slice(0, 1),
            correct: sTrim.slice(0, 1).toUpperCase(),
            reason: "Chữ cái đầu tiên của câu bắt buộc phải viết hoa."
        });
        rewrite = rewrite.charAt(0).toUpperCase() + rewrite.slice(1);
    }

    // Punctuation at end of sentence (skip salutation / signoff)
    if (!isSalutation && !isSignOff && !/[.!?]$/.test(sTrim)) {
        sentenceErrors.push({
            type: "Dấu câu (Thiếu dấu kết câu)",
            wrong: sTrim.slice(-5),
            correct: sTrim.slice(-5) + '.',
            reason: "Câu kết thúc hoàn chỉnh cần có dấu chấm câu (.)."
        });
        rewrite = rewrite + '.';
    }

    // Determine sentence status
    let status = "success";
    let statusLabel = "✓ Câu viết chuẩn xác";
    let statusBadgeClass = "badge-success";

    if (sentenceErrors.length > 0) {
        status = "warning";
        statusLabel = `⚠️ Có ${sentenceErrors.length} lỗi cần khắc phục`;
        statusBadgeClass = "badge-warning";
    } else {
        // If no errors, suggest stylistic upgrade
        if (roleName.includes("Opening") && sLower.includes("give you some advice")) {
            rewrite = "I am writing this letter to share some useful recommendations for your upcoming trip to Can Tho in December.";
            status = "upgrade";
            statusLabel = "💡 Gợi ý nâng cấp B2 tự nhiên hơn";
            statusBadgeClass = "badge-upgrade";
        } else if (roleName.includes("Closing") && sLower.includes("see you soon")) {
            rewrite = "I hope these suggestions are helpful, and I cannot wait to see you in Can Tho!";
            status = "upgrade";
            statusLabel = "💡 Gợi ý nâng cấp B2 ấn tượng hơn";
            statusBadgeClass = "badge-upgrade";
        } else if (sLower.includes("they are very delicious")) {
            rewrite = "Not only are these local dishes incredibly delicious, but they are also very affordable.";
            status = "upgrade";
            statusLabel = "💡 Gợi ý cấu trúc nâng Band (Đảo ngữ)";
            statusBadgeClass = "badge-upgrade";
        }
    }

    // Highlight errors in original text
    let highlightedHtml = escapeHtml(sTrim);
    sentenceErrors.forEach(err => {
        const re = new RegExp(`(${err.wrong.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
        highlightedHtml = highlightedHtml.replace(re, '<span class="audit-err-highlight">$1</span>');
    });

    return {
        sentenceIndex: index + 1,
        totalSentences,
        originalText: sTrim,
        highlightedHtml,
        roleName,
        roleIcon,
        status,
        statusLabel,
        statusBadgeClass,
        errors: sentenceErrors,
        rewrite: rewrite.trim()
    };
}

function renderSentenceAuditSectionHtml(sentenceAudits) {
    if (!sentenceAudits || sentenceAudits.length === 0) return '';

    const correctCount = sentenceAudits.filter(s => s.status === 'success').length;
    const warningCount = sentenceAudits.filter(s => s.status === 'warning').length;
    const upgradeCount = sentenceAudits.filter(s => s.status === 'upgrade').length;

    return `
        <div class="sentence-audit-wrapper" style="margin-top: 30px;">
            <div class="sentence-audit-header">
                <div class="sentence-audit-title">
                    <i class="fa-solid fa-list-check" style="color: var(--primary-color, #6366f1);"></i>
                    <span>BẢNG RÀ SOÁT CHI TIẾT TỪNG CÂU HỌC VIÊN ĐÃ VIẾT (${sentenceAudits.length} CÂU)</span>
                </div>
                <div class="sentence-audit-stats">
                    <span class="stat-pill success"><i class="fa-solid fa-circle-check"></i> ${correctCount} câu chuẩn</span>
                    ${warningCount > 0 ? `<span class="stat-pill warning"><i class="fa-solid fa-triangle-exclamation"></i> ${warningCount} câu có lỗi</span>` : ''}
                    ${upgradeCount > 0 ? `<span class="stat-pill upgrade"><i class="fa-solid fa-wand-magic-sparkles"></i> ${upgradeCount} câu gợi ý nâng Band</span>` : ''}
                </div>
            </div>
            <p class="sentence-audit-sub">
                Hệ thống bóc tách tỉ mỉ từng câu trong bài viết của bạn, đối chiếu ngữ pháp, chỉ ra lỗi cụ thể và cung cấp câu viết lại chuẩn B1/B2 để bạn học hỏi và cải thiện:
            </p>

            <div class="sentence-cards-list">
                ${sentenceAudits.map(s => `
                    <div class="sentence-audit-card ${s.status}">
                        <div class="sentence-card-head">
                            <div class="sentence-head-left">
                                <span class="sentence-index-badge">CÂU ${s.sentenceIndex}/${s.totalSentences}</span>
                                <span class="sentence-role-badge"><i class="fa-solid ${s.roleIcon}"></i> ${s.roleName}</span>
                            </div>
                            <span class="sentence-status-pill ${s.statusBadgeClass}">${s.statusLabel}</span>
                        </div>

                        <div class="sentence-card-content">
                            <div class="sentence-row original-row">
                                <span class="row-tag original-tag">Học viên viết:</span>
                                <div class="sentence-text original-text">"${s.highlightedHtml}"</div>
                            </div>

                            ${s.errors.length > 0 ? `
                                <div class="sentence-errors-box">
                                    <strong style="color: #dc2626; font-size: 13.5px;"><i class="fa-solid fa-circle-xmark"></i> Các lỗi cần khắc phục trong câu này:</strong>
                                    <ul class="sentence-error-items">
                                        ${s.errors.map(err => `
                                            <li>
                                                <span class="err-sub-type">[${escapeHtml(err.type)}]</span> 
                                                Viết sai: <span class="err-strike">"${escapeHtml(err.wrong)}"</span> 
                                                ➔ Sửa đúng: <strong class="err-fix">"${escapeHtml(err.correct)}"</strong>
                                                <div class="err-reason-note">💡 ${escapeHtml(err.reason)}</div>
                                            </li>
                                        `).join('')}
                                    </ul>
                                </div>
                            ` : ''}

                            <div class="sentence-row rewrite-row">
                                <span class="row-tag rewrite-tag"><i class="fa-solid fa-wand-magic-sparkles"></i> ${s.errors.length > 0 ? 'Viết lại đúng chuẩn:' : 'Gợi ý câu chuẩn B1/B2 mượt mà hơn:'}</span>
                                <div class="sentence-text rewrite-text">"${escapeHtml(s.rewrite)}"</div>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}


function renderFullPracticeEvaluationResult(rawText, typeId, timeSpentStr) {
    if (!fullPracticeResultBox) fullPracticeResultBox = document.getElementById('fullPracticeResultBox');
    if (!fullPracticeResultBox) return;

    const words = rawText ? rawText.split(/\s+/).filter(w => w !== '') : [];
    const wordCount = words.length;
    const lower = rawText ? rawText.toLowerCase() : '';

    const typeData = letterTypes.find(t => t.id === typeId) || letterTypes[0];
    const letterTitle = typeData ? `${typeData.titleEn} (${typeData.titleVi})` : 'VSTEP Task 1';

    // Model sample letter extraction
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = typeData ? typeData.sampleWriting : '';
    const sampleContent = tempDiv.querySelector('.content-block') ? tempDiv.querySelector('.content-block').innerHTML : (typeData ? typeData.sampleWriting : '');

    if (wordCount === 0) {
        fullPracticeResultBox.innerHTML = `
            <div class="practice-summary-card">
                <div class="practice-summary-header" style="color: #ef4444;">
                    <i class="fa-solid fa-triangle-exclamation"></i> BÀI NỘP CHƯA CÓ NỘI DUNG
                </div>
                <p style="color: var(--text-muted); font-size: 15px;">Bạn chưa nhập nội dung bài viết trước khi nộp bài. Vui lòng bấm nút bên dưới để viết bài!</p>
                <div style="margin-top: 20px;">
                    <button class="btn btn-primary" id="btnRestartFullPractice" style="padding: 12px 32px; font-weight: 700; border-radius: 10px;">
                        <i class="fa-solid fa-rotate-left"></i> Viết lại bài này
                    </button>
                </div>
            </div>
        `;
        const btnRestart = document.getElementById('btnRestartFullPractice');
        if (btnRestart) btnRestart.addEventListener('click', resetFullPracticeUI);
        return;
    }

    // --- 1. TASK FULFILMENT (0 - 10) ---
    let hasReq1 = false, hasReq2 = false, hasReq3 = false, hasReq4 = false;
    let reqLabels = [];

    if (typeId === 'advice') {
        hasReq1 = /(stay|hotel|homestay|room|guest\s*house|resort|city\s*cent|old\s*quarter)/i.test(lower);
        hasReq2 = /(dish|dishes|food|pancake|pho|banh\s*mi|bun\s*cha|spring\s*roll|fruit|eat|taste|try|specialt|noodle)/i.test(lower);
        hasReq3 = /(attraction|visit|place|places|lake|hoan\s*kiem|temple|literature|old\s*quarter|museum|market|cai\s*rang|ninh\s*kieu)/i.test(lower);
        hasReq4 = /(wear|clothes|cloth|jacket|umbrella|hat|sunglass|shoes|sneaker|raincoat|t-shirt|shorts|dress|weather|hot|warm)/i.test(lower);
        reqLabels = [
            hasReq1 ? '✓ Nơi ở (Where to stay)' : '✗ Nơi ở (Where to stay)',
            hasReq2 ? '✓ Món ăn nên thử (What dishes to try)' : '✗ Món ăn nên thử (What dishes to try)',
            hasReq3 ? '✓ Địa điểm tham quan (Places to visit)' : '✗ Địa điểm tham quan (Places to visit)',
            hasReq4 ? '✓ Trang phục phù hợp (What to wear)' : '✗ Trang phục phù hợp (What to wear)'
        ];
    } else if (typeId === 'request') {
        hasReq1 = /(address|location|where\s+(is\s+)?the\s+center|near\s+my\s+(house|home)|street|district|located)/i.test(lower);
        hasReq2 = /(fee|tuition|cost|price|money|how\s+much|budget|pay|discount|million|vnd)/i.test(lower);
        hasReq3 = /(teacher|teachers|instructor|friendly|experienced|enthusiastic|native|teach|helpful)/i.test(lower);
        hasReq4 = /(program|training|course|curriculum|skill|schedule|length|study|practise|practice|topic)/i.test(lower);
        reqLabels = [
            hasReq1 ? '✓ Địa chỉ trung tâm (Address)' : '✗ Địa chỉ trung tâm (Address)',
            hasReq2 ? '✓ Học phí khóa học (Tuition fee)' : '✗ Học phí khóa học (Tuition fee)',
            hasReq3 ? '✓ Đội ngũ giáo viên (Teachers)' : '✗ Đội ngũ giáo viên (Teachers)',
            hasReq4 ? '✓ Chương trình đào tạo (Training program)' : '✗ Chương trình đào tạo (Training program)'
        ];
    } else if (typeId === 'description') {
        hasReq1 = /(kind|friendly|helpful|nice|polite|humorous|cheerful|personality|honest|generous|sociable)/i.test(lower);
        hasReq2 = /(hobby|hobbies|free\s*time|leisure|reading|books|cooking|music|sport|sports|swimming|singing)/i.test(lower);
        hasReq3 = /(study|studying|work|working|university|college|student|business|major|job|company)/i.test(lower);
        hasReq4 = /(fit|get\s*on|stay\s*with|live\s*with|adapt|tidy|clean|responsible|family)/i.test(lower);
        reqLabels = [
            hasReq1 ? '✓ Tính cách (Personality)' : '✗ Tính cách (Personality)',
            hasReq2 ? '✓ Sở thích (Hobbies)' : '✗ Sở thích (Hobbies)',
            hasReq3 ? '✓ Việc học/làm hiện tại (Current work/study)' : '✗ Việc học/làm hiện tại (Current work/study)',
            hasReq4 ? '✓ Khả năng hòa nhập gia đình (Fit in family)' : '✗ Khả năng hòa nhập gia đình (Fit in family)'
        ];
    } else if (typeId === 'complaint') {
        hasReq1 = /(problem|problems|room|condition|floor|dirty|wet|locker|lockers|broken|shower|showers|water|ac|air\s*con|facility)/i.test(lower);
        hasReq2 = /(feel|felt|disappoint|unhappy|annoyed|upset|ruin|terrible|bad\s*experience|frustrated|dangerous)/i.test(lower);
        hasReq3 = /(suggest|improve|repair|replace|clean|fix|solution|facility|better|manager)/i.test(lower);
        hasReq4 = true;
        reqLabels = [
            hasReq1 ? '✓ Mô tả sự cố/vấn đề (Problems)' : '✗ Mô tả sự cố/vấn đề (Problems)',
            hasReq2 ? '✓ Cảm xúc của bản thân (Feelings)' : '✗ Cảm xúc của bản thân (Feelings)',
            hasReq3 ? '✓ Đề xuất biện pháp cải thiện (Suggestions)' : '✗ Đề xuất biện pháp cải thiện (Suggestions)'
        ];
    } else if (typeId === 'feedback') {
        hasReq1 = /(satisf|dissatisf|overall|enjoy|opinion|pleas|feedback|impression|feel|experience)/i.test(lower);
        hasReq2 = /(food|dish|room|service|staff|atmosphere|decor|view|breakfast|stay|hotel|restaurant)/i.test(lower);
        hasReq3 = /(suggest|improve|service|staff|speed\s*up|faster|clean|price|discount|training)/i.test(lower);
        hasReq4 = true;
        reqLabels = [
            hasReq1 ? '✓ Mức độ hài lòng (Satisfaction)' : '✗ Mức độ hài lòng (Satisfaction)',
            hasReq2 ? '✓ Mô tả trải nghiệm thực tế (Experience)' : '✗ Mô tả trải nghiệm thực tế (Experience)',
            hasReq3 ? '✓ Gợi ý cải tiến chất lượng (Improvement)' : '✗ Gợi ý cải tiến chất lượng (Improvement)'
        ];
    } else if (typeId === 'apology') {
        hasReq1 = /(apologiz|apologise|sorry|apology|forgive|regret|excuse)/i.test(lower);
        hasReq2 = /(busy|exam|work|sick|ill|situation|finish|finished|reading|book|reason|because)/i.test(lower);
        hasReq3 = /(return|give\s*back|send|meet|tomorrow|next\s*week|by\s*hand|post)/i.test(lower);
        hasReq4 = true;
        reqLabels = [
            hasReq1 ? '✓ Lời xin lỗi chân thành (Apology)' : '✗ Lời xin lỗi chân thành (Apology)',
            hasReq2 ? '✓ Giải thích tình huống & tình trạng đọc sách' : '✗ Giải thích tình huống & tình trạng đọc sách',
            hasReq3 ? '✓ Thời gian và cách thức trả sách (When & How)' : '✗ Thời gian và cách thức trả sách (When & How)'
        ];
    } else if (typeId === 'application') {
        hasReq1 = /(apply|application|position|sales\s*assistant|job|advertis|student|myself)/i.test(lower);
        hasReq2 = /(interest|interested|passion|clothing|store|fashion|career|environment|why)/i.test(lower);
        hasReq3 = /(experience|work|worked|part-time|customer|customers|friendly|communicat|skills|suit)/i.test(lower);
        hasReq4 = true;
        reqLabels = [
            hasReq1 ? '✓ Giới thiệu bản thân & Vị trí ứng tuyển' : '✗ Giới thiệu bản thân & Vị trí ứng tuyển',
            hasReq2 ? '✓ Lý do quan tâm công việc' : '✗ Lý do quan tâm công việc',
            hasReq3 ? '✓ Kinh nghiệm làm việc với khách hàng' : '✗ Kinh nghiệm làm việc với khách hàng'
        ];
    } else {
        hasReq1 = true; hasReq2 = true; hasReq3 = true; hasReq4 = true;
        reqLabels = ['✓ Đáp ứng đầy đủ các yêu cầu cốt lõi'];
    }

    let coveredCount = [hasReq1, hasReq2, hasReq3, hasReq4].filter(Boolean).length;
    const isCompletelyOffTopic = (coveredCount === 0);
    const isPartiallyOffTopic = (coveredCount === 1);

    let tfScore = 8.5;
    if (coveredCount === 4) {
        tfScore = wordCount >= 140 ? 9.0 : (wordCount >= 120 ? 8.5 : 7.5);
    } else if (coveredCount === 3) {
        tfScore = wordCount >= 120 ? 7.5 : 6.5;
    } else if (coveredCount === 2) {
        tfScore = 5.5;
    } else if (coveredCount === 1) {
        tfScore = wordCount >= 120 ? 4.0 : 3.0;
    } else {
        tfScore = 1.5; // Completely off-topic (0 bullet points met)
    }
    if (wordCount < 100 && !isCompletelyOffTopic) tfScore = Math.max(2.0, tfScore - 2.0);
    if (wordCount < 60 && !isCompletelyOffTopic) tfScore = Math.max(1.0, tfScore - 3.0);

    // --- 2. ORGANIZATION (0 - 10) ---
    const hasGreeting = /^dear\s+[a-z]+/i.test(rawText.trim()) || /dear\s+(mr|ms|mrs|sir|madam)/i.test(rawText.trim());
    const hasOpening = /(thanks?\s+for|hope\s+you|writing\s+to|how\s+are\s+you|in\s+your\s+letter|i\s+am\s+writing)/i.test(lower);
    const hasClosing = /(hope\s+(my\s+advice|you\s+can|you\s+will|this\s+helps)|write\s+back|let\s+me\s+know|look\s+forward|thank\s+you\s+for\s+your\s+time)/i.test(lower);
    const hasSignoff = /(best\s+wishes|yours\s+(sincerely|faithfully)|warm\s+regards|love)/i.test(lower);

    const linkingWordsList = [
        "firstly", "secondly", "next", "finally", "moreover", "besides",
        "furthermore", "in addition", "therefore", "however", "for example", "first of all", "also", "because"
    ];
    let linkCount = 0;
    linkingWordsList.forEach(lw => {
        if (lower.includes(lw)) linkCount++;
    });

    const hasParagraphs = (rawText.split(/\n+/).filter(p => p.trim() !== '').length) >= 3;

    let orgScore = 8.0;
    let orgPartsCount = [hasGreeting, hasOpening, hasClosing, hasSignoff].filter(Boolean).length;
    if (orgPartsCount === 4 && linkCount >= 4 && hasParagraphs) {
        orgScore = 9.0;
    } else if (orgPartsCount === 4 && linkCount >= 3) {
        orgScore = 8.0;
    } else if (orgPartsCount >= 3 && linkCount >= 2) {
        orgScore = 7.0;
    } else if (orgPartsCount >= 2) {
        orgScore = 5.5;
    } else {
        orgScore = 4.0;
    }

    // --- 3. DIAGNOSE ERRORS (VOCABULARY & GRAMMAR) ---
    const promptDummyData = { bulletPoints: [] };
    const errors = (typeof diagnoseVstepErrors === 'function') 
        ? diagnoseVstepErrors(rawText, promptDummyData)
        : [];

    const vocabErrors = errors.filter(e => e.category === 'vocab' || e.category === 'word_form');
    const grammarErrors = errors.filter(e => e.category === 'grammar' || e.category === 'article' || e.category === 'preposition');
    const mechanicsErrors = errors.filter(e => e.category === 'punctuation' || e.category === 'spelling');

    // --- 4. VOCABULARY (0 - 10) ---
    let vocScore = 8.5;
    if (vocabErrors.length >= 3) {
        vocScore = 6.0;
    } else if (vocabErrors.length === 2) {
        vocScore = 6.5;
    } else if (vocabErrors.length === 1) {
        vocScore = 7.5;
    }
    if (wordCount < 120) vocScore = Math.max(4.0, vocScore - 1.0);

    // --- 5. GRAMMAR & ACCURACY (0 - 10) ---
    let gramScore = 8.5;
    const totalGrammarImpact = grammarErrors.length + (mechanicsErrors.length > 0 ? 1 : 0);
    if (totalGrammarImpact >= 6) {
        gramScore = 5.5;
    } else if (totalGrammarImpact >= 4) {
        gramScore = 6.0;
    } else if (totalGrammarImpact >= 2) {
        gramScore = 7.0;
    } else if (totalGrammarImpact === 1) {
        gramScore = 8.0;
    }

    // --- TOTAL VSTEP SCORES & 30% EXAM CONVERSION ---
    let overallBand = (tfScore + orgScore + vocScore + gramScore) / 4.0;
    overallBand = Math.round(overallBand * 10) / 10;

    // Converted to 30% of VSTEP Writing exam (Max 3.00 points)
    let convertedScore = Math.round((overallBand / 10.0) * 3.0 * 100) / 100;

    // 4 Criteria converted to 0.75 points each (0.75 x 4 = 3.00 points)
    let tfConv = Math.round((tfScore / 10.0) * 0.75 * 100) / 100;
    let orgConv = Math.round((orgScore / 10.0) * 0.75 * 100) / 100;
    let vocConv = Math.round((vocScore / 10.0) * 0.75 * 100) / 100;
    let gramConv = Math.round((gramScore / 10.0) * 0.75 * 100) / 100;

    let vstepLevel = "B2 LEVEL (ĐẠT CHUẨN)";
    let levelBadgeStyle = "background: #10b981; color: #ffffff;";
    let levelSummary = "Bài viết đạt chuẩn yêu cầu VSTEP B2. Bố cục đầy đủ và nội dung bám sát đề thi. Cần xem lại các lỗi nhỏ được đánh dấu bên dưới để tối ưu điểm số.";

    if (isCompletelyOffTopic) {
        vstepLevel = "LẠC ĐỀ HOÀN TOÀN (OFF-TOPIC)";
        levelBadgeStyle = "background: #dc2626; color: #ffffff;";
        levelSummary = "Cảnh báo nghiêm trọng: Bài viết hoàn toàn không bám sát yêu cầu đề bài! Bị chấm điểm liệt Task Fulfilment (1.5/10) và khống chế điểm toàn bài.";
    } else if (isPartiallyOffTopic) {
        vstepLevel = "NGUY CƠ LẠC ĐỀ (PARTIALLY OFF-TOPIC)";
        levelBadgeStyle = "background: #d97706; color: #ffffff;";
        levelSummary = "Cảnh báo: Bài viết chỉ chạm vào 1 ý nhỏ và bỏ sót hầu hết các yêu cầu cốt lõi của đề bài. Điểm Task Fulfilment bị trừ rất nặng.";
    } else if (overallBand >= 8.5) {
        vstepLevel = "B2 LEVEL (XUẤT SẮC - VƯỢT CHUẨN)";
        levelBadgeStyle = "background: #6366f1; color: #ffffff;";
        levelSummary = "Bài viết xuất sắc! Độ hoàn thành cao, câu văn tự nhiên, từ vựng phong phú và cấu trúc chuẩn mực B2.";
    } else if (overallBand < 6.0) {
        vstepLevel = "B1 LEVEL (CẦN CẢI THIỆN ĐỂ ĐẠT B2)";
        levelBadgeStyle = "background: #ef4444; color: #ffffff;";
        levelSummary = "Bài viết còn nhiều lỗi ngữ pháp hoặc chưa đủ độ dài quy định (tối thiểu 120 từ). Hãy nghiên cứu kỹ bài mẫu và bảng sửa lỗi bên dưới nhé!";
    }

    // Official Rubric Descriptors Lookup
    const tfDesc = getRubricDescriptor('taskFulfilment', tfScore);
    const orgDesc = getRubricDescriptor('organization', orgScore);
    const vocDesc = getRubricDescriptor('vocabulary', vocScore);
    const gramDesc = getRubricDescriptor('grammar', gramScore);

    // Build Inline Annotated Essay HTML
    // Segment and audit every single sentence
    const segmentedSentences = segmentLetterSentences(rawText);
    const sentenceAudits = segmentedSentences.map((s, idx) => 
        auditIndividualSentence(s, idx, segmentedSentences.length, typeId, errors)
    );
    const sentenceAuditSectionHtml = renderSentenceAuditSectionHtml(sentenceAudits);

    const annotatedEssayHtml = (typeof buildAnnotatedEssayHtml === 'function')
        ? buildAnnotatedEssayHtml(rawText, errors)
        : escapeHtml(rawText);

    // Build Error Table HTML
    let errorTableHtml = '';
    if (errors.length > 0) {
        let rowsHtml = errors.map((err, idx) => `
            <tr>
                <td style="font-weight: 700; color: var(--primary-color); text-align: center;">${idx + 1}</td>
                <td><span class="err-badge-type">${err.type}</span></td>
                <td><span class="err-text-wrong">${err.wrong}</span></td>
                <td><span class="err-text-correct"><i class="fa-solid fa-arrow-right"></i> ${err.correct}</span></td>
                <td style="font-size: 13.5px; color: var(--text-main); line-height: 1.5;">${err.reason}</td>
            </tr>
        `).join('');

        errorTableHtml = `
            <div class="extra-error-table-wrapper" style="margin-top: 25px;">
                <div class="error-table-title">
                    <i class="fa-solid fa-triangle-exclamation" style="color: #ef4444;"></i>
                    DANH SÁCH ${errors.length} LỖI CẦN SỬA CHI TIẾT (NGỮ PHÁP, MẠO TỪ, TỪ LOẠI, DÙNG TỪ, CHÍNH TẢ, DẤU CÂU):
                </div>
                <div class="table-responsive">
                    <table class="error-table">
                        <thead>
                            <tr>
                                <th style="width: 40px; text-align: center;">#</th>
                                <th style="width: 170px;">Phân loại lỗi</th>
                                <th style="width: 190px;">Học viên viết</th>
                                <th style="width: 220px;">Đề xuất sửa đúng</th>
                                <th>Giải thích ngữ pháp chi tiết</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${rowsHtml}
                        </tbody>
                    </table>
                </div>
            </div>
        `;
    } else {
        errorTableHtml = `
            <div class="highlight-box" style="margin-top: 25px;">
                <p><i class="fa-solid fa-circle-check" style="color: #10b981;"></i> <strong>Không phát hiện lỗi ngữ pháp hay từ vựng đáng kể nào!</strong> Bài làm của bạn rất chuẩn chỉnh và mạch lạc.</p>
            </div>
        `;
    }

    // Build Off-Topic Alert Box if essay fails core prompts
    let offTopicAlertHtml = '';
    if (isCompletelyOffTopic) {
        offTopicAlertHtml = `
            <div class="off-topic-alert-box" style="background: #fef2f2; border: 2.5px solid #ef4444; border-radius: 14px; padding: 20px 24px; margin-bottom: 24px; box-shadow: 0 4px 14px rgba(239, 68, 68, 0.15);">
                <div style="display: flex; align-items: center; gap: 12px; color: #b91c1c; font-size: 19px; font-weight: 800;">
                    <i class="fa-solid fa-triangle-exclamation" style="font-size: 26px; color: #ef4444;"></i>
                    <span>CẢNH BÁO NGUY HIỂM: BÀI VIẾT LẠC ĐỀ HOÀN TOÀN (OFF-TOPIC)!</span>
                </div>
                <p style="margin: 12px 0 8px 0; color: #991b1b; font-size: 15px; line-height: 1.6;">
                    ⚠️ Bài viết của bạn <strong>hoàn toàn không bám sát yêu cầu đề bài ${letterTitle}</strong>! Bạn không trả lời được ý nào trong 4 ý hỏi cốt lõi của đề bài. Theo quy định chấm thi VSTEP của Bộ GD&ĐT, bài viết lạc đề sẽ bị chấm điểm liệt (Band 1.0 - 2.0) ở tiêu chí Task Fulfilment và khống chế tối đa điểm toàn bài.
                </p>
                <div style="margin-top: 12px; background: rgba(239, 68, 68, 0.08); padding: 14px 18px; border-radius: 10px; font-size: 14px; color: #7f1d1d;">
                    <strong>Các yêu cầu cốt lõi đề bài bắt buộc phải có:</strong>
                    <ul style="margin: 8px 0 0 20px; line-height: 1.7;">
                        ${reqLabels.map(l => `<li>${l}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `;
    } else if (isPartiallyOffTopic) {
        offTopicAlertHtml = `
            <div class="off-topic-alert-box" style="background: #fffbeb; border: 2px solid #f59e0b; border-radius: 14px; padding: 18px 22px; margin-bottom: 24px;">
                <div style="display: flex; align-items: center; gap: 10px; color: #b45309; font-size: 18px; font-weight: 800;">
                    <i class="fa-solid fa-circle-exclamation" style="font-size: 24px; color: #f59e0b;"></i>
                    <span>CẢNH BÁO: BÀI VIẾT CÓ DẤU HIỆU LẠC ĐỀ / THIẾU Ý TRỌNG TÂM!</span>
                </div>
                <p style="margin: 10px 0 6px 0; color: #92400e; font-size: 14.5px; line-height: 1.6;">
                    ⚠️ Bài viết chỉ mới chạm vào <strong>1/${reqLabels.length} yêu cầu</strong> của đề bài và bỏ sót các trọng tâm còn lại. Điểm Task Fulfilment bị trừ rất nặng.
                </p>
                <div style="margin-top: 8px; font-size: 13.5px; color: #78350f;">
                    <strong>Kiểm tra lại các ý cần có trong bài:</strong>
                    <ul style="margin: 6px 0 0 20px; line-height: 1.7;">
                        ${reqLabels.map(l => `<li>${l}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `;
    }

    // Save evaluation state for Word export
    lastFullPracticeEvaluationData = {
        rawText,
        typeId,
        timeSpentStr,
        wordCount,
        tfScore,
        orgScore,
        vocScore,
        gramScore,
        overallBand,
        convertedScore,
        tfConv,
        orgConv,
        vocConv,
        gramConv,
        vstepLevel,
        errors,
        reqLabels,
        letterTitle
    };

    // Render HTML in fullPracticeResultBox
    fullPracticeResultBox.innerHTML = `
        ${offTopicAlertHtml}

        <!-- Export Action Buttons -->
        <div style="display: flex; gap: 12px; margin-bottom: 20px; flex-wrap: wrap;">
            <button class="btn-success-export" onclick="downloadFullPracticeEssay(true)">
                <i class="fa-solid fa-file-word"></i> Tải Bài viết & Phiếu chấm (.doc)
            </button>
            <button class="btn-download-file" onclick="downloadFullPracticeEssay(false)">
                <i class="fa-solid fa-file-lines"></i> Chỉ tải bài làm học viên (.doc)
            </button>
        </div>

        <!-- VSTEP Overall Score Banner -->
        <div class="extra-score-banner">
            <div class="score-main-group">
                <div class="score-circle-badge">
                    ${convertedScore.toFixed(2)}
                    <span style="font-size: 13px; display: block; font-weight: 500; opacity: 0.9;">/ 3.00</span>
                </div>
                <div class="score-text-info">
                    <h4>${vstepLevel} • ${convertedScore.toFixed(2)} / 3.00 ĐIỂM (30% BÀI THI WRITING)</h4>
                    <p>Tương đương <strong>Band ${overallBand.toFixed(1)} / 10.0</strong> theo khung chấm chuẩn VSTEP Writing Task 1 của Bộ GD&ĐT.</p>
                    <div style="margin-top: 6px; font-size: 13.5px; opacity: 0.95;">
                        <span><i class="fa-solid fa-user-graduate"></i> ${currentStudentName || 'Học viên'} (Lớp ${currentStudentClass || 'CB206'})</span> • 
                        <span><i class="fa-solid fa-pen-nib"></i> ${wordCount} từ (${wordCount >= 120 ? '✓ Đạt độ dài' : '⚠️ Chưa đủ từ'})</span> • 
                        <span><i class="fa-solid fa-clock"></i> Thời gian: ${timeSpentStr} / 20:00</span>
                    </div>
                </div>
            </div>
            <div class="extra-b1-badge" style="background: #ffffff; color: var(--primary-color); font-weight: 800;">
                TASK 1 = 30% ĐIỂM WRITING
            </div>
        </div>

        <div class="recitation-report-status" style="margin-top: 15px; margin-bottom: 20px; background: #ecfdf5; border: 1.5px solid #10b981; border-radius: 12px; padding: 14px 18px; color: #065f46;">
            <i class="fa-solid fa-circle-check report-status-icon" style="color: #10b981; font-size: 18px;"></i>
            <span><strong>BẢN ĐÁNH GIÁ VÀ SỬA BÀI CHI TIẾT DÀNH CHO HỌC VIÊN:</strong> Dưới đây là điểm số 4 tiêu chí chuẩn VSTEP, bản sửa lỗi từng câu từ trên bài viết của bạn và bài mẫu đối chiếu để bạn học hỏi và cải thiện ngay lập tức! (Đồng thời kết quả cũng đã tự động gửi lưu về hệ thống quản lý của giáo viên).</span>
        </div>

        <!-- 4 Criteria Rubric Grid based on VSTEP SCORING GUIDE (media_1787637818545.jpg) -->
        <div style="margin-top: 25px; margin-bottom: 12px; font-weight: 800; font-size: 17px; color: var(--text-main); display: flex; align-items: center; gap: 8px;">
            <i class="fa-solid fa-scale-balanced" style="color: var(--primary-color);"></i>
            ĐÁNH GIÁ CHI TIẾT THEO 4 TIÊU CHÍ (RATING SCALE FOR VSTEP WRITING TASK 1):
        </div>

        <div class="criteria-grid">
            <!-- 1. Task Fulfilment -->
            <div class="criterion-card">
                <div class="criterion-name">
                    <span>Task Fulfilment (30%)</span>
                    <span class="criterion-score">${tfConv.toFixed(2)}/0.75 <small style="font-size: 11px; font-weight: normal; color: var(--text-muted);">(${tfScore.toFixed(1)}/10)</small></span>
                </div>
                <div class="criterion-desc">
                    <div style="margin-bottom: 6px; font-weight: 600; color: var(--text-main);">
                        ${reqLabels.join(' | ')}.
                    </div>
                    <div>Độ dài: <strong>${wordCount} từ</strong> (${wordCount >= 120 ? 'Đạt chuẩn ≥120 từ' : 'Chưa đủ độ dài'}).</div>
                </div>
                <div class="vstep-official-descriptor-box">
                    <span class="descriptor-tag"><i class="fa-solid fa-stamp"></i> Chuẩn VSTEP Band ${Math.round(tfScore)}:</span>
                    <p class="descriptor-text">"${tfDesc.en}"</p>
                    <p style="margin: 4px 0 0 0; font-size: 12px; color: var(--text-muted);">↳ <em>${tfDesc.vi}</em></p>
                </div>
            </div>

            <!-- 2. Organization -->
            <div class="criterion-card">
                <div class="criterion-name">
                    <span>Organization (30%)</span>
                    <span class="criterion-score">${orgConv.toFixed(2)}/0.75 <small style="font-size: 11px; font-weight: normal; color: var(--text-muted);">(${orgScore.toFixed(1)}/10)</small></span>
                </div>
                <div class="criterion-desc">
                    <div style="margin-bottom: 6px; font-weight: 600; color: var(--text-main);">
                        Bố cục 5 phần chuẩn mực (${orgPartsCount}/4 phần cốt lõi: Greeting, Opening, Closing, Sign-off).
                    </div>
                    <div>Sử dụng <strong>${linkCount} liên từ nối</strong> chuyển tiếp câu mạch lạc.</div>
                </div>
                <div class="vstep-official-descriptor-box">
                    <span class="descriptor-tag"><i class="fa-solid fa-stamp"></i> Chuẩn VSTEP Band ${Math.round(orgScore)}:</span>
                    <p class="descriptor-text">"${orgDesc.en}"</p>
                    <p style="margin: 4px 0 0 0; font-size: 12px; color: var(--text-muted);">↳ <em>${orgDesc.vi}</em></p>
                </div>
            </div>

            <!-- 3. Vocabulary -->
            <div class="criterion-card">
                <div class="criterion-name">
                    <span>Vocabulary (30%)</span>
                    <span class="criterion-score">${vocConv.toFixed(2)}/0.75 <small style="font-size: 11px; font-weight: normal; color: var(--text-muted);">(${vocScore.toFixed(1)}/10)</small></span>
                </div>
                <div class="criterion-desc">
                    <div style="margin-bottom: 6px; font-weight: 600; color: var(--text-main);">
                        Vốn từ vựng theo chủ đề ${letterTitle}.
                    </div>
                    <div>${vocabErrors.length > 0 ? `Bị trừ điểm do mắc <strong>${vocabErrors.length} lỗi</strong> từ vựng / từ loại.` : 'Sử dụng từ vựng chính xác, linh hoạt.'}</div>
                </div>
                <div class="vstep-official-descriptor-box">
                    <span class="descriptor-tag"><i class="fa-solid fa-stamp"></i> Chuẩn VSTEP Band ${Math.round(vocScore)}:</span>
                    <p class="descriptor-text">"${vocDesc.en}"</p>
                    <p style="margin: 4px 0 0 0; font-size: 12px; color: var(--text-muted);">↳ <em>${vocDesc.vi}</em></p>
                </div>
            </div>

            <!-- 4. Grammar & Accuracy -->
            <div class="criterion-card">
                <div class="criterion-name">
                    <span>Grammar & Accuracy (30%)</span>
                    <span class="criterion-score">${gramConv.toFixed(2)}/0.75 <small style="font-size: 11px; font-weight: normal; color: var(--text-muted);">(${gramScore.toFixed(1)}/10)</small></span>
                </div>
                <div class="criterion-desc">
                    <div style="margin-bottom: 6px; font-weight: 600; color: var(--text-main);">
                        Cấu trúc câu đơn & câu phức B1.
                    </div>
                    <div>${totalGrammarImpact > 0 ? `Bị trừ điểm do phát hiện <strong>${grammarErrors.length} lỗi</strong> ngữ pháp/mạo từ và lỗi dấu câu/chính tả.` : 'Ngữ pháp chuẩn xác, câu văn trôi chảy.'}</div>
                </div>
                <div class="vstep-official-descriptor-box">
                    <span class="descriptor-tag"><i class="fa-solid fa-stamp"></i> Chuẩn VSTEP Band ${Math.round(gramScore)}:</span>
                    <p class="descriptor-text">"${gramDesc.en}"</p>
                    <p style="margin: 4px 0 0 0; font-size: 12px; color: var(--text-muted);">↳ <em>${gramDesc.vi}</em></p>
                </div>
            </div>
        </div>

        <!-- Section: Bản sửa lỗi trực tiếp trên bài viết của học viên -->
        <div class="annotated-essay-card" style="margin-top: 30px;">
            <div class="annotated-essay-header">
                <i class="fa-solid fa-pen-to-square"></i> BẢN SỬA LỖI TRỰC TIẾP TRÊN BÀI VIẾT CỦA BẠN (INLINE CORRECTIONS):
            </div>
            <div class="annotated-essay-body">
                ${annotatedEssayHtml}
            </div>
        </div>

        ${sentenceAuditSectionHtml}

        <!-- Detailed Error Table -->
        ${errorTableHtml}

        <!-- Side-by-Side Comparison with Model Letter -->
        <div class="practice-comparison-section" style="margin-top: 35px;">
            <div class="practice-comparison-col">
                <div class="practice-col-header student-col">
                    <i class="fa-solid fa-user-pen"></i> BÀI VIẾT GỐC CỦA BẠN (${wordCount} TỪ)
                </div>
                <div class="practice-paper-view">${escapeHtml(rawText)}</div>
            </div>
            <div class="practice-comparison-col">
                <div class="practice-col-header sample-col">
                    <i class="fa-solid fa-file-circle-check"></i> BÀI MẪU CHUẨN THAM KHẢO & DỊCH NGHĨA
                </div>
                <div class="sample-model-wrapper">
                    ${sampleContent}
                </div>
            </div>
        </div>

        <!-- Restart & Download Buttons -->
        <div style="display: flex; justify-content: center; gap: 14px; margin-top: 30px; margin-bottom: 20px; flex-wrap: wrap;">
            <button class="btn btn-primary" id="btnRestartFullPractice" style="padding: 12px 30px; font-weight: 700; border-radius: 10px; font-size: 15px;">
                <i class="fa-solid fa-rotate-left"></i> Viết lại bài này
            </button>
            <button class="btn-success-export" onclick="downloadFullPracticeEssay(true)" style="padding: 12px 28px; font-weight: 700; border-radius: 10px; font-size: 15px;">
                <i class="fa-solid fa-file-word"></i> Tải Phiếu chấm & Bài viết (.doc)
            </button>
        </div>
    `;

    // Attach restart listener
    const btnRestart = document.getElementById('btnRestartFullPractice');
    if (btnRestart) btnRestart.addEventListener('click', resetFullPracticeUI);

    // Send Google Form report to Teacher
    const now = new Date().toLocaleString('vi-VN');
    const excerpt = rawText.length > 200 ? rawText.substring(0, 200) + '...' : rawText;
    const offTopicStatusStr = isCompletelyOffTopic ? '⚠️ LẠC ĐỀ HOÀN TOÀN (0/4 ý)' : (isPartiallyOffTopic ? '⚠️ NGUY CƠ LẠC ĐỀ (1/4 ý)' : '✓ ĐÚNG ĐỀ');
    const payload = `[THỰC HÀNH VIẾT BÀI]: Học viên: ${currentStudentName || 'Học viên'} | Lớp: ${currentStudentClass || 'CB206'} | Dạng bài: ${letterTitle} | [CHỦ ĐỀ]: ${offTopicStatusStr} | Điểm 30%: ${convertedScore.toFixed(2)}/3.00 (Band ${overallBand.toFixed(1)}/10) | TF: ${tfConv.toFixed(2)}/0.75 | ORG: ${orgConv.toFixed(2)}/0.75 | VOC: ${vocConv.toFixed(2)}/0.75 | GRAM: ${gramConv.toFixed(2)}/0.75 | Lỗi: ${errors.length} | Số từ: ${wordCount} | Thời gian: ${timeSpentStr}/20:00 | Thời điểm: ${now} | Trích đoạn: "${excerpt}"`;

    reportResultToGoogleForm(payload);
}

function submitFullPractice(isAutoTimeUp = false) {
    const userText = fullPracticeInput ? fullPracticeInput.value.trim() : '';
    const wordCount = countWords(userText);

    if (!isAutoTimeUp) {
        let confirmMsg = 'BẠN CÓ CHẮC CHẮN MUỐN NỘP BÀI THỰC HÀNH KHÔNG?\n\n';
        if (wordCount < 120) {
            confirmMsg += `⚠️ Chú ý: Bài viết của bạn hiện có ${wordCount} từ (chưa đạt chuẩn tối thiểu 120 từ).\n\n`;
        } else {
            confirmMsg += `✓ Số từ đạt: ${wordCount} từ (đạt chuẩn độ dài VSTEP B2).\n\n`;
        }
        confirmMsg += 'Hệ thống sẽ chấm điểm chi tiết theo 4 tiêu chí VSTEP (30%), chỉ ra từng lỗi sai ngữ pháp, và hiển thị bài mẫu đối chiếu trực tiếp trên màn hình của bạn!';
        if (!confirm(confirmMsg)) return;
    }

    stopFullPracticeTimer();
    unlockNavigationAfterFullPractice();

    const timeSpentSeconds = Math.max(0, FULL_PRACTICE_TIME_LIMIT - fullPracticeTimeRemaining);
    const timeSpentStr = formatTimerString(timeSpentSeconds);

    if (fullPracticeWritingBox) fullPracticeWritingBox.classList.add('hidden');
    if (fullPracticeResultBox) {
        fullPracticeResultBox.classList.remove('hidden');
        renderFullPracticeEvaluationResult(userText, activeLetterTypeId, timeSpentStr);
        setTimeout(() => {
            fullPracticeResultBox.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    }

    // Clear auto-save draft upon submission
    try {
        localStorage.removeItem('vstep_draft_full_practice_' + activeLetterTypeId);
    } catch (e) {}
    updateFullPracticeAutoSaveUI('Đã nộp bài', false);
}

function submitFullPracticeEarly() {
    if (!isFullPracticeInProgress) return;
    submitFullPractice(false);
}

// --- Authentication & Student Profile Management ---
function initAuthSystem() {
    const savedName = localStorage.getItem('vstep_student_name');
    const savedClass = localStorage.getItem('vstep_student_class');

    if (savedName && findStudentInfo(savedName)) {
        const studentInfo = findStudentInfo(savedName);
        if (studentInfo.isTeacher) {
            currentStudentName = 'Cô Nguyệt (PTMN)';
            currentStudentClass = savedClass || 'GV';
        } else {
            currentStudentName = studentInfo.name;
            currentStudentClass = studentInfo.class;
        }
        updateStudentProfileUI(currentStudentName, currentStudentClass);
        if (loginModalOverlay) loginModalOverlay.classList.add('hidden');
    } else {
        currentStudentName = '';
        currentStudentClass = '';
        updateStudentProfileUI('', '');
        openLoginModal();
    }
}

function openLoginModal() {
    if (isRecitationInProgress) {
        triggerRecitationCheatWarning('chỉnh sửa thông tin học viên trong lúc trả bài');
        return;
    }
    if (isFullPracticeInProgress) {
        showToastNotice('🔒 Đang trong thời gian làm bài! Không thể chỉnh sửa thông tin lúc này.', 'fa-solid fa-lock');
        return;
    }
    if (!loginModalOverlay) return;
    if (studentNameInput) studentNameInput.value = currentStudentName || '';
    if (studentClassInput) studentClassInput.value = currentStudentClass || '';
    if (studentClassSelect) studentClassSelect.value = currentStudentClass || '';
    if (studentPasswordInput) studentPasswordInput.value = '';
    if (loginErrorMsg) loginErrorMsg.classList.add('hidden');
    loginModalOverlay.classList.remove('hidden');
    setTimeout(() => {
        if (studentNameInput) studentNameInput.focus();
    }, 150);
}

function handleLoginSubmit() {
    const nameVal = studentNameInput ? studentNameInput.value.trim() : '';
    const classEl = studentClassInput || studentClassSelect;
    const classVal = classEl ? classEl.value.trim().toUpperCase().replace(/\s+/g, '') : '';
    const passVal = studentPasswordInput ? studentPasswordInput.value.trim() : '';

    if (!nameVal || nameVal.length < 2) {
        showLoginError('Vui lòng nhập đầy đủ Họ và tên học viên / Giáo viên.');
        if (studentNameInput) studentNameInput.focus();
        return;
    }

    const normName = nameVal.toUpperCase();
    const isTeacher = (normName === 'PTMN' && (classVal === 'GV' || !classVal)) || (normName === 'CÔ NGUYỆT' || normName === 'CO NGUYET');
    const studentInfo = findStudentInfo(nameVal);

    if (isTeacher || (studentInfo && studentInfo.isTeacher)) {
        currentStudentName = 'Cô Nguyệt (PTMN)';
        currentStudentClass = classVal || 'GV';
        try {
            localStorage.setItem('vstep_student_name', currentStudentName);
            localStorage.setItem('vstep_student_class', currentStudentClass);
            localStorage.setItem('vstep_b2_student_info', currentStudentName + ' - ' + currentStudentClass);
        } catch (e) {}
    } else {
        if (classVal === 'GV') {
            showLoginError('Mã lớp GV chỉ dành riêng cho tài khoản Giáo viên (PTMN)!');
            if (classEl) classEl.focus();
            return;
        }

        if (BANNED_CLASSES.includes(classVal)) {
            showLoginError('Lớp ' + classVal + ' đã kết thúc khóa học và không được phép đăng nhập!');
            if (classEl) classEl.focus();
            return;
        }

        if (!ALLOWED_CLASSES.includes(classVal)) {
            showLoginError('Lớp học không hợp lệ. Chỉ chấp nhận các lớp: ' + ALLOWED_CLASSES.filter(c => c !== 'GV').join(', ') + '.');
            if (classEl) classEl.focus();
            return;
        }

        const isGiaTue = removeVietnameseTones(nameVal.toLowerCase()).includes('gia tue');
        if (studentInfo && studentInfo.class && classVal !== studentInfo.class) {
            if (isGiaTue && (classVal === 'B212' || classVal === 'B2')) {
                // Cho phép Gia Tuệ đăng nhập với mã lớp B212 hoặc B2
            } else {
                showLoginError('Lớp học không đúng! Học viên ' + studentInfo.name + ' thuộc lớp ' + studentInfo.class + '.');
                if (classEl) classEl.focus();
                return;
            }
        }

        // Check password - accept both STUDYHARD and VSTEPSEPTEMBER
        const passNorm = passVal.toUpperCase();
        if (passNorm !== 'STUDYHARD' && passNorm !== 'VSTEPSEPTEMBER') {
            showLoginError('Mật khẩu không chính xác! Vui lòng kiểm tra lại.');
            if (studentPasswordInput) {
                studentPasswordInput.value = '';
                studentPasswordInput.focus();
            }
            return;
        }

        currentStudentName = studentInfo ? studentInfo.name : nameVal;
        currentStudentClass = classVal;
        try {
            localStorage.setItem('vstep_student_name', currentStudentName);
            localStorage.setItem('vstep_student_class', currentStudentClass);
            localStorage.setItem('vstep_b2_student_info', currentStudentName + ' - ' + currentStudentClass);
        } catch (e) {}
    }

    updateStudentProfileUI(currentStudentName, currentStudentClass);

    if (loginErrorMsg) loginErrorMsg.classList.add('hidden');
    if (loginModalOverlay) loginModalOverlay.classList.add('hidden');
}

function showLoginError(msg) {
    if (loginErrorText) loginErrorText.textContent = msg;
    if (loginErrorMsg) loginErrorMsg.classList.remove('hidden');
}

function toggleLoginPassword() {
    const pwdInput = document.getElementById('studentPasswordInput');
    const icon = document.getElementById('togglePwdIcon');
    if (!pwdInput) return;
    if (pwdInput.type === 'password') {
        pwdInput.type = 'text';
        if (icon) {
            icon.innerHTML = '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line>';
        }
    } else {
        pwdInput.type = 'password';
        if (icon) {
            icon.innerHTML = '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>';
        }
    }
}
window.toggleLoginPassword = toggleLoginPassword;

function updateStudentProfileUI(name, cls) {
    const isTeacher = (cls === 'GV' || (name && name.includes('PTMN')));
    if (studentNameDisplay) studentNameDisplay.textContent = name || 'Chưa đăng nhập';
    if (studentClassDisplay) studentClassDisplay.textContent = isTeacher ? 'Giáo viên (GV)' : (cls ? `Lớp: ${cls}` : 'Lớp: --');

    if (greetingStudentName) greetingStudentName.textContent = name || 'Bạn';
    if (greetingStudentClass) greetingStudentClass.textContent = isTeacher ? 'Giáo viên' : (cls ? `Lớp ${cls}` : 'Lớp --');
}

// --- Google Form Reporting System ---
function reportResultToGoogleForm(customPayload) {
    const name = currentStudentName || localStorage.getItem('vstep_student_name') || 'Học viên';
    const cls = currentStudentClass || localStorage.getItem('vstep_student_class') || 'Chưa rõ';

    let payload = customPayload;
    if (!payload) {
        const typeData = letterTypes.find(t => t.id === activeLetterTypeId);
        const letterTitle = typeData ? `${typeData.titleEn} (${typeData.titleVi})` : 'VSTEP Task 1';
        const score = scorePercentageVal ? scorePercentageVal.textContent : '0';
        const status = resultStatusVal ? resultStatusVal.textContent : '';
        const now = new Date().toLocaleString('vi-VN');
        const timeSpentSeconds = Math.max(0, RECITATION_TIME_LIMIT - recitationTimeRemaining);
        const timeSpentStr = formatTimerString(timeSpentSeconds);

        let cheatInfo = '';
        if (recitationCheatAttempts > 0) {
            cheatInfo = ` | [VI PHẠM CHUYỂN TAB]: ${recitationCheatAttempts} lần`;
        }

        payload = `[HỌC VIÊN]: ${name} | [LỚP]: ${cls} | [DẠNG BÀI]: ${letterTitle} | [ĐIỂM]: ${score}% (${status})${cheatInfo} | [THỜI GIAN LÀM]: ${timeSpentStr}/20:00 | [THỜI ĐIỂM NỘP]: ${now}`;
    }

    console.log("Submitting result report to Google Form:", payload);

    if (reportStatusBox) reportStatusBox.classList.remove('hidden');
    if (reportStatusIcon) {
        reportStatusIcon.className = 'fa-solid fa-spinner fa-spin report-status-icon';
    }
    if (reportStatusText) {
        reportStatusText.textContent = 'Đang gửi kết quả lên hệ thống của giáo viên...';
    }

    // Method 1: Fetch POST (no-cors)
    try {
        const formData = new URLSearchParams();
        formData.append(GOOGLE_FORM_ENTRY_ID, payload);

        fetch(GOOGLE_FORM_ACTION_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formData.toString()
        }).catch(err => console.log('Handled fetch status:', err));
    } catch (e) {
        console.log('Fetch exception:', e);
    }

    // Method 2: Hidden iframe fallback
    try {
        let iframe = document.getElementById('gform_hidden_iframe');
        if (!iframe) {
            iframe = document.createElement('iframe');
            iframe.id = 'gform_hidden_iframe';
            iframe.name = 'gform_hidden_iframe';
            iframe.style.display = 'none';
            document.body.appendChild(iframe);
        }

        let form = document.getElementById('gform_hidden_form');
        if (!form) {
            form = document.createElement('form');
            form.id = 'gform_hidden_form';
            form.action = GOOGLE_FORM_ACTION_URL;
            form.method = 'POST';
            form.target = 'gform_hidden_iframe';
            form.style.display = 'none';

            const input = document.createElement('input');
            input.type = 'hidden';
            input.name = GOOGLE_FORM_ENTRY_ID;
            input.id = 'gform_hidden_input';
            form.appendChild(input);
            document.body.appendChild(form);
        }

        const input = document.getElementById('gform_hidden_input');
        if (input) {
            input.value = payload;
            form.submit();
        }
    } catch (e) {
        console.log('Iframe submit error:', e);
    }

    setTimeout(() => {
        if (reportStatusIcon) {
            reportStatusIcon.className = 'fa-solid fa-circle-check report-status-icon';
        }
        if (reportStatusText) {
            reportStatusText.innerHTML = `Đã tự động báo cáo kết quả của học viên <strong>${name}</strong> (<strong>${cls}</strong>) lên hệ thống!`;
        }
    }, 700);
}

// Initialize application on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    // Query DOM Elements
    letterNav = document.getElementById('letterNav');
    mainTitle = document.getElementById('mainTitle');
    welcomeScreen = document.getElementById('welcomeScreen');
    letterContent = document.getElementById('letterContent');
    themeToggle = document.getElementById('themeToggle');

    // Query Auth Elements
    loginModalOverlay = document.getElementById('loginModalOverlay');
    studentNameInput = document.getElementById('studentNameInput');
    studentClassInput = document.getElementById('studentClassInput');
    studentClassSelect = document.getElementById('studentClassSelect');
    studentPasswordInput = document.getElementById('studentPasswordInput');
    btnLoginSubmit = document.getElementById('btnLoginSubmit');
    loginErrorMsg = document.getElementById('loginErrorMsg');
    loginErrorText = document.getElementById('loginErrorText');

    studentProfileCard = document.getElementById('studentProfileCard');
    studentNameDisplay = document.getElementById('studentNameDisplay');
    studentClassDisplay = document.getElementById('studentClassDisplay');
    btnEditStudent = document.getElementById('btnEditStudent');

    questStudentGreeting = document.getElementById('questStudentGreeting');
    greetingStudentName = document.getElementById('greetingStudentName');
    greetingStudentClass = document.getElementById('greetingStudentClass');

    reportStatusBox = document.getElementById('reportStatusBox');
    reportStatusIcon = document.getElementById('reportStatusIcon');
    reportStatusText = document.getElementById('reportStatusText');
    btnResendReport = document.getElementById('btnResendReport');

    // Query Full Practice Elements
    fullPracticePanel = document.getElementById('fullPracticePanel');
    fullPracticeTimerBadge = document.getElementById('fullPracticeTimerBadge');
    fullPracticeCountdown = document.getElementById('fullPracticeCountdown');
    fullPracticeWordBadge = document.getElementById('fullPracticeWordBadge');
    fullPracticeWordCount = document.getElementById('fullPracticeWordCount');
    fullPracticePromptBox = document.getElementById('fullPracticePromptBox');
    fullPracticeWritingBox = document.getElementById('fullPracticeWritingBox');
    fullPracticeInput = document.getElementById('fullPracticeInput');
    btnSubmitFullPractice = document.getElementById('btnSubmitFullPractice');
    btnSubmitFullPracticeEarly = document.getElementById('btnSubmitFullPracticeEarly');
    fullPracticeResultBox = document.getElementById('fullPracticeResultBox');
    fullPracticeLockedBanner = document.getElementById('fullPracticeLockedBanner');

    // Query Recitation Elements
    btnSubmitRecitationEarly = document.getElementById('btnSubmitRecitationEarly');
    recitationTimerBadge = document.getElementById('recitationTimerBadge');
    recitationCountdown = document.getElementById('recitationCountdown');
    evaluationTimeSpent = document.getElementById('evaluationTimeSpent');
    timeSpentVal = document.getElementById('timeSpentVal');
    recitationInput = document.getElementById('recitationInput');
    btnPrevQuestion = document.getElementById('btnPrevQuestion');
    btnShowAnswer = document.getElementById('btnShowAnswer');
    btnCheckAnswer = document.getElementById('btnCheckAnswer');
    btnNextQuestion = document.getElementById('btnNextQuestion');
    currentQuestionNum = document.getElementById('currentQuestionNum');
    totalQuestionsNum = document.getElementById('totalQuestionsNum');
    progressBarFill = document.getElementById('progressBarFill');
    questionCueText = document.getElementById('questionCueText');
    recitationFeedback = document.getElementById('recitationFeedback');
    feedbackStatus = document.getElementById('feedbackStatus');
    userDiffResult = document.getElementById('userDiffResult');
    correctTextResult = document.getElementById('correctTextResult');
    questionHintBox = document.getElementById('questionHintBox');
    questionHintText = document.getElementById('questionHintText');

    // Query Evaluation Elements
    recitationQuizBox = document.getElementById('recitationQuizBox');
    recitationResultBox = document.getElementById('recitationResultBox');
    scorePercentageVal = document.getElementById('scorePercentageVal');
    resultStatusVal = document.getElementById('resultStatusVal');
    resultMessageVal = document.getElementById('resultMessageVal');
    btnRestartRecitation = document.getElementById('btnRestartRecitation');
    evaluationIcon = document.getElementById('evaluationIcon');

    // Query Anti-Cheating Elements
    cheatWarningModal = document.getElementById('cheatWarningModal');
    cheatWarningBadge = document.getElementById('cheatWarningBadge');
    cheatWarningReason = document.getElementById('cheatWarningReason');
    cheatWarningConsequence = document.getElementById('cheatWarningConsequence');
    btnDismissCheatWarning = document.getElementById('btnDismissCheatWarning');
    btnDisqualifyRecitation = document.getElementById('btnDisqualifyRecitation');
    recitationCheatCounterBadge = document.getElementById('recitationCheatCounterBadge');
    recitationCheatCountText = document.getElementById('recitationCheatCountText');
    evaluationCheatRecord = document.getElementById('evaluationCheatRecord');
    evaluationCheatRecordText = document.getElementById('evaluationCheatRecordText');

    if (btnDismissCheatWarning) {
        btnDismissCheatWarning.addEventListener('click', dismissRecitationCheatWarning);
    }
    if (btnDisqualifyRecitation) {
        btnDisqualifyRecitation.addEventListener('click', () => {
            if (cheatWarningModal) cheatWarningModal.classList.add('hidden');
            isRecitationCheatModalOpen = false;
            disqualifyRecitationForCheating();
        });
    }

    // Initialize Anti-Cheating tab/window event listeners
    initRecitationAntiCheatingEvents();

    // Render navigation
    renderNav();

    // Update global progress on load
    updateGlobalProgress();

    // Initialize Student Authentication
    initAuthSystem();

    // Auth Listeners
    if (btnLoginSubmit) btnLoginSubmit.addEventListener('click', handleLoginSubmit);
    if (btnEditStudent) btnEditStudent.addEventListener('click', openLoginModal);
    if (studentNameInput) {
        studentNameInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') handleLoginSubmit();
        });
    }
    if (studentClassInput) {
        studentClassInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') handleLoginSubmit();
        });
    }
    if (studentPasswordInput) {
        studentPasswordInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') handleLoginSubmit();
        });
    }

// Reset progress button listener
    const btnResetProgress = document.getElementById('btnResetProgress');
    if (btnResetProgress) btnResetProgress.addEventListener('click', resetLearningProgress);

    // Handle Tabs
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            if (typeof stopSampleAudio === 'function') stopSampleAudio();
            const tabId = e.currentTarget.dataset.tab;

            // Anti-cheating check: Block tab switching if recitation is currently in progress
            if (isRecitationInProgress && tabId !== 'writingPractice') {
                e.preventDefault();
                e.stopPropagation();
                const tabNames = {
                    basicInfo: 'THÔNG TIN CƠ BẢN',
                    identifyingSigns: 'DẤU HIỆU NHẬN BIẾT',
                    detailedOutline: 'DÀN Ý CHI TIẾT',
                    sampleWriting: 'BÀI MẪU',
                    fullPractice: 'THỰC HÀNH',
                    extraPractice: 'BÀI LUYỆN TẬP THÊM'
                };
                const targetTabName = tabNames[tabId] || tabId;
                triggerRecitationCheatWarning(`chuyển sang tab "${targetTabName}" trên website`);
                return false;
            }

            // Block tab switching if full practice is currently in progress
            if (isFullPracticeInProgress && tabId !== 'fullPractice') {
                e.preventDefault();
                e.stopPropagation();
                showToastNotice('🔒 Đang trong thời gian thực hành viết bài (20 phút)! Bạn không thể chuyển sang tab khác cho đến khi nộp bài.', 'fa-solid fa-lock');
                return false;
            }

            // Remove active class from all buttons and panels
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));

            // Add active class to clicked button
            e.currentTarget.classList.add('active');

            // Show corresponding panel
            const panel = document.getElementById(`${tabId}Panel`);
            if (panel) panel.classList.add('active');

            // Handle 20-minute timer and tab locking for TRẢ BÀI
            if (tabId === 'writingPractice') {
                const savedResult = getRecitationResult(activeLetterTypeId);
                if (savedResult) {
                    displaySavedRecitationResult(activeLetterTypeId);
                } else {
                    const isResultShown = recitationResultBox && !recitationResultBox.classList.contains('hidden');
                    if (!isResultShown) {
                        lockNavigationDuringRecitation();
                        startRecitationTimer();
                    }
                }
            } else {
                stopRecitationTimer();
            }

            // Handle 20-minute timer and tab locking for THỰC HÀNH
            if (tabId === 'fullPractice') {
                const isFullResultShown = fullPracticeResultBox && !fullPracticeResultBox.classList.contains('hidden');
                if (!isFullResultShown) {
                    lockNavigationDuringFullPractice();
                    startFullPracticeTimer();
                    if (fullPracticeInput && !fullPracticeInput.value) {
                        loadFullPracticeDraft(activeLetterTypeId);
                    }
                }
            } else {
                stopFullPracticeTimer();
            }

            // Handle 20-minute timer for BÀI LUYỆN TẬP THÊM
            if (tabId === 'extraPractice') {
                const extraResult = document.getElementById('extraResultCard');
                const isExtraResultShown = extraResult && !extraResult.classList.contains('hidden');
                if (!isExtraResultShown) {
                    startExtraPracticeTimer();
                    loadExtraPracticeDraft(currentExtraPracticeTypeId);
                }
            } else {
                stopExtraPracticeTimer();
            }
        });
    });

    // Recitation Button Listeners
    if (btnPrevQuestion) btnPrevQuestion.addEventListener('click', prevRecitationQuestion);
    if (btnShowAnswer) btnShowAnswer.addEventListener('click', showRecitationAnswer);
    if (btnCheckAnswer) btnCheckAnswer.addEventListener('click', checkRecitationAnswer);
    if (btnNextQuestion) btnNextQuestion.addEventListener('click', nextRecitationQuestion);
    if (btnRestartRecitation) {
        btnRestartRecitation.addEventListener('click', () => {
            const savedResult = getRecitationResult(activeLetterTypeId);
            let confirmMsg = 'Bạn có chắc chắn muốn làm lại bài kiểm tra Trả bài không?';
            if (savedResult) {
                confirmMsg = `Bài này đã có kết quả sao lưu: ${savedResult.averageScore}% (${savedResult.status}) lúc ${savedResult.completedAtFormatted || ''}.\n\nBạn có chắc chắn muốn làm lại từ đầu để cải thiện điểm số không?`;
            }
            if (confirm(confirmMsg)) {
                clearRecitationDraft(activeLetterTypeId);
                resetRecitationUI(true);
            }
        });
    }
    if (btnSubmitRecitationEarly) btnSubmitRecitationEarly.addEventListener('click', submitRecitationEarly);

    // Full Practice Listeners
    if (fullPracticeInput) {
        fullPracticeInput.addEventListener('input', () => {
            updateFullPracticeWordCount();
            saveFullPracticeDraft();
        });
    }
    if (btnSubmitFullPractice) {
        btnSubmitFullPractice.addEventListener('click', () => submitFullPractice(false));
    }
    if (btnSubmitFullPracticeEarly) {
        btnSubmitFullPracticeEarly.addEventListener('click', submitFullPracticeEarly);
    }
    const btnClearFullPracticeDraft = document.getElementById('btnClearFullPracticeDraft');
    if (btnClearFullPracticeDraft) {
        btnClearFullPracticeDraft.addEventListener('click', clearFullPracticeDraft);
    }

    // Backup & Restore Progress Listeners
    const btnExportProgress = document.getElementById('btnExportProgress');
    const btnImportProgress = document.getElementById('btnImportProgress');
    const btnMiniBackup = document.getElementById('btnMiniBackup');
    const btnMiniRestore = document.getElementById('btnMiniRestore');
    const inputRestoreProgressFile = document.getElementById('inputRestoreProgressFile');

    if (btnExportProgress) btnExportProgress.addEventListener('click', exportProgressBackup);
    if (btnMiniBackup) btnMiniBackup.addEventListener('click', exportProgressBackup);

    if (btnImportProgress && inputRestoreProgressFile) {
        btnImportProgress.addEventListener('click', () => inputRestoreProgressFile.click());
    }
    if (btnMiniRestore && inputRestoreProgressFile) {
        btnMiniRestore.addEventListener('click', () => inputRestoreProgressFile.click());
    }
    if (inputRestoreProgressFile) {
        inputRestoreProgressFile.addEventListener('change', function() {
            if (this.files && this.files[0]) {
                importProgressBackup(this.files[0]);
                this.value = '';
            }
        });
    }

    // Theme Toggle
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            isDarkMode = !isDarkMode;
            if (isDarkMode) {
                document.documentElement.setAttribute('data-theme', 'dark');
                themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
            } else {
                document.documentElement.removeAttribute('data-theme');
                themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
            }
        });
    }

    // Initialize Anti-Copy / Anti-Paste Protection
    initAntiCopyProtection();
});

// --- Anti Copy/Paste Protection System ---
function getWritingZone(el) {
    if (!el) el = document.activeElement;
    if (!el) return 'general';
    if (el.id === 'recitationInput' || (el.closest && el.closest('#recitationSection, #recitationPanel'))) {
        return 'TRẢ BÀI';
    }
    if (el.id === 'fullPracticeInput' || (el.closest && el.closest('#fullPracticePanel, #fullPracticeSection, .full-practice-writing-box'))) {
        return 'THỰC HÀNH';
    }
    if (el.id === 'extraWritingArea' || el.id === 'extraWritingInput' || (el.closest && el.closest('#extraPracticePanel, #extraPracticeSection, .extra-practice-container'))) {
        return 'BÀI THỰC HÀNH THÊM';
    }
    return 'general';
}

function isLoginInput(el) {
    if (!el) el = document.activeElement;
    return el && (el.id === 'studentNameInput' || el.id === 'studentClassInput');
}

function attachAntiCopyPasteToElement(el, zoneName) {
    if (!el) return;
    ['copy', 'cut', 'paste', 'drop', 'contextmenu'].forEach(evtType => {
        el.addEventListener(evtType, (e) => {
            e.preventDefault();
            e.stopPropagation();
            if (evtType === 'paste' || evtType === 'drop') {
                showAntiCopyToast(`Không được phép Dán (Paste) ở phần ${zoneName}! Vui lòng tự gõ phím.`);
            } else if (evtType === 'copy' || evtType === 'cut') {
                showAntiCopyToast(`Không được phép Sao chép (Copy) ở phần ${zoneName}!`);
            } else if (evtType === 'contextmenu') {
                showAntiCopyToast(`Chuột phải đã bị vô hiệu hóa ở phần ${zoneName}!`);
            }
        });
    });
    el.addEventListener('beforeinput', (e) => {
        if (e.inputType === 'insertFromPaste' || e.inputType === 'insertFromDrop') {
            e.preventDefault();
            e.stopPropagation();
            showAntiCopyToast(`Không được phép Dán (Paste) ở phần ${zoneName}! Vui lòng tự gõ phím.`);
        }
    });
}

function initAntiCopyProtection() {
    // Warn before leaving page during active recitation or full practice
    window.addEventListener('beforeunload', (e) => {
        if (isRecitationInProgress || isFullPracticeInProgress || isExtraPracticeInProgress) {
            e.preventDefault();
            e.returnValue = 'Bạn đang trong quá trình làm bài! Nếu rời khỏi trang, nội dung bài làm sẽ bị hủy.';
            return e.returnValue;
        }
    });

    // Attach to existing elements immediately
    const recitInput = document.getElementById('recitationInput');
    if (recitInput) attachAntiCopyPasteToElement(recitInput, 'TRẢ BÀI');

    const fullPracticeInput = document.getElementById('fullPracticeInput');
    if (fullPracticeInput) attachAntiCopyPasteToElement(fullPracticeInput, 'THỰC HÀNH');

    // Block Copy Event everywhere on site, with specific messaging for writing zones
    document.addEventListener('copy', (e) => {
        e.preventDefault();
        const zone = getWritingZone(e.target || document.activeElement);
        if (zone !== 'general') {
            showAntiCopyToast(`Không được phép Sao chép (Copy) ở phần ${zone}! Vui lòng tự gõ phím.`);
        } else {
            showAntiCopyToast('Chức năng Sao chép (Copy) đã bị khóa trên hệ thống!');
        }
    });

    // Block Cut Event everywhere on site
    document.addEventListener('cut', (e) => {
        e.preventDefault();
        const zone = getWritingZone(e.target || document.activeElement);
        if (zone !== 'general') {
            showAntiCopyToast(`Không được phép Cắt (Cut) ở phần ${zone}! Vui lòng tự gõ phím.`);
        } else {
            showAntiCopyToast('Chức năng Cắt (Cut) đã bị khóa trên hệ thống!');
        }
    });

    // Block Paste Event (allowed only in login name/class inputs)
    document.addEventListener('paste', (e) => {
        const targetEl = e.target || document.activeElement;
        if (isLoginInput(targetEl)) {
            return;
        }
        e.preventDefault();
        const zone = getWritingZone(targetEl);
        if (zone !== 'general') {
            showAntiCopyToast(`Không được phép Dán (Paste) ở phần ${zone}! Vui lòng tự gõ phím để rèn luyện kỹ năng.`);
        } else {
            showAntiCopyToast('Không được phép Dán (Paste)! Vui lòng tự gõ phím.');
        }
    });

    // Block Context Menu (Right Click)
    document.addEventListener('contextmenu', (e) => {
        const targetEl = e.target || document.activeElement;
        if (isLoginInput(targetEl)) {
            return;
        }
        e.preventDefault();
        const zone = getWritingZone(targetEl);
        if (zone !== 'general') {
            showAntiCopyToast(`Chuột phải đã bị vô hiệu hóa ở phần ${zone}! Không được phép copy/paste bài làm.`);
        } else {
            showAntiCopyToast('Chuột phải đã bị vô hiệu hóa để bảo vệ nội dung học tập!');
        }
    });

    // Block Drag and Drop text
    document.addEventListener('dragstart', (e) => {
        if (!isLoginInput(e.target)) {
            e.preventDefault();
        }
    });
    document.addEventListener('drop', (e) => {
        const targetEl = e.target || document.activeElement;
        if (isLoginInput(targetEl)) {
            return;
        }
        e.preventDefault();
        const zone = getWritingZone(targetEl);
        if (zone !== 'general') {
            showAntiCopyToast(`Không được phép kéo thả nội dung vào ô làm bài ${zone}! Vui lòng tự gõ phím.`);
        }
    });

    // Block Keyboard Shortcuts (Ctrl/Cmd+C, Ctrl/Cmd+V, Ctrl/Cmd+X, Shift+Insert, Ctrl+Insert, Shift+Delete)
    document.addEventListener('keydown', (e) => {
        const isCtrlOrCmd = e.ctrlKey || e.metaKey;
        const key = e.key ? e.key.toLowerCase() : '';
        const targetEl = e.target || document.activeElement;

        const isShiftInsert = e.shiftKey && (e.key === 'Insert' || e.keyCode === 45);
        const isCtrlInsert = isCtrlOrCmd && (e.key === 'Insert' || e.keyCode === 45);
        const isShiftDelete = e.shiftKey && (e.key === 'Delete' || e.keyCode === 46);

        const isPaste = (isCtrlOrCmd && key === 'v') || isShiftInsert;
        const isCopy = (isCtrlOrCmd && key === 'c') || isCtrlInsert;
        const isCut = (isCtrlOrCmd && key === 'x') || isShiftDelete;

        if (isPaste) {
            if (isLoginInput(targetEl)) return;
            e.preventDefault();
            e.stopPropagation();
            const zone = getWritingZone(targetEl);
            if (zone !== 'general') {
                showAntiCopyToast(`Không được phép Dán (Paste) ở phần ${zone}! Vui lòng tự gõ phím.`);
            } else {
                showAntiCopyToast('Chức năng Dán (Paste) đã bị vô hiệu hóa! Vui lòng tự gõ bài viết.');
            }
            return false;
        }

        if (isCopy || isCut) {
            if (isLoginInput(targetEl)) return;
            e.preventDefault();
            e.stopPropagation();
            const zone = getWritingZone(targetEl);
            const action = isCut ? 'Cắt (Cut)' : 'Sao chép (Copy)';
            if (zone !== 'general') {
                showAntiCopyToast(`Không được phép ${action} ở phần ${zone}! Vui lòng tự gõ phím.`);
            } else {
                showAntiCopyToast(`Chức năng ${action} đã bị khóa trên hệ thống!`);
            }
            return false;
        }

        if (isCtrlOrCmd && ['u', 's', 'p'].includes(key)) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        }
    }, true);

    // Block beforeinput (insertFromPaste / insertFromDrop) for mobile and extensions
    document.addEventListener('beforeinput', (e) => {
        const targetEl = e.target || document.activeElement;
        if (isLoginInput(targetEl)) return;
        if (e.inputType === 'insertFromPaste' || e.inputType === 'insertFromDrop') {
            e.preventDefault();
            e.stopPropagation();
            const zone = getWritingZone(targetEl);
            if (zone !== 'general') {
                showAntiCopyToast(`Không được phép Dán (Paste) ở phần ${zone}! Vui lòng tự gõ phím.`);
            } else {
                showAntiCopyToast('Chức năng Dán (Paste) đã bị vô hiệu hóa!');
            }
        }
    }, true);
}

// ===================================================
// --- INTERACTIVE SAMPLE WRITING CONTROLLER ---
// ===================================================
let currentSampleUtterance = null;
let currentSampleSpeechRate = 1.0;

function switchSampleView(viewId, btnEl) {
    const parent = btnEl.closest('.content-block');
    if (!parent) return;

    if (typeof stopSampleAudio === 'function') stopSampleAudio();

    // Toggle Tab Buttons
    parent.querySelectorAll('.sample-view-tab-btn').forEach(b => b.classList.remove('active'));
    btnEl.classList.add('active');

    // Toggle View Panels
    const panels = parent.querySelectorAll('.sample-view-content');
    panels.forEach(p => {
        if (p.id === viewId) {
            p.classList.add('active');
            p.style.display = 'block';
        } else {
            p.classList.remove('active');
            p.style.display = 'none';
        }
    });
}

function toggleSampleHighlight(type) {
    const container = document.getElementById('sampleViewAnnotated');
    if (!container) return;

    const eventTarget = window.event ? window.event.currentTarget : null;

    if (type === 'connectors') {
        const isHidden = container.classList.toggle('hide-connectors');
        if (eventTarget) {
            eventTarget.classList.toggle('dimmed', isHidden);
            const icon = eventTarget.querySelector('i');
            if (icon) icon.className = isHidden ? 'fa-solid fa-xmark' : 'fa-solid fa-check';
        }
    } else if (type === 'structures') {
        const isHidden = container.classList.toggle('hide-structures');
        if (eventTarget) {
            eventTarget.classList.toggle('dimmed', isHidden);
            const icon = eventTarget.querySelector('i');
            if (icon) icon.className = isHidden ? 'fa-solid fa-xmark' : 'fa-solid fa-check';
        }
    } else if (type === 'vocabs') {
        const isHidden = container.classList.toggle('hide-vocabs');
        if (eventTarget) {
            eventTarget.classList.toggle('dimmed', isHidden);
            const icon = eventTarget.querySelector('i');
            if (icon) icon.className = isHidden ? 'fa-solid fa-xmark' : 'fa-solid fa-check';
        }
    }
}

function speakText(text) {
    if (!('speechSynthesis' in window)) {
        if (typeof showToastNotice === 'function') {
            showToastNotice('Trình duyệt không hỗ trợ Web Speech API!', 'fa-solid fa-circle-exclamation');
        } else {
            alert('Trình duyệt không hỗ trợ Web Speech API!');
        }
        return;
    }

    stopSampleAudio();

    const cleanText = text.replace(/<[^>]*>/g, '').trim();
    if (!cleanText) return;

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = 'en-US';
    utterance.rate = currentSampleSpeechRate || 1.0;

    const voices = window.speechSynthesis.getVoices();
    const enVoice = voices.find(v => v.lang.startsWith('en') && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Samantha') || v.name.includes('Daniel') || v.name.includes('US') || v.name.includes('GB'))) || voices.find(v => v.lang.startsWith('en'));
    if (enVoice) utterance.voice = enVoice;

    currentSampleUtterance = utterance;
    window.speechSynthesis.speak(utterance);
}

function playCurrentSampleLetter() {
    if (!('speechSynthesis' in window)) {
        if (typeof showToastNotice === 'function') {
            showToastNotice('Trình duyệt không hỗ trợ Web Speech API!', 'fa-solid fa-circle-exclamation');
        } else {
            alert('Trình duyệt không hỗ trợ Web Speech API!');
        }
        return;
    }

    stopSampleAudio();

    const cleanBox = document.querySelector('#sampleViewClean .sample-letter-box');
    let fullText = '';
    if (cleanBox) {
        fullText = cleanBox.innerText;
    } else {
        const typeData = (typeof letterTypes !== 'undefined') ? letterTypes.find(t => t.id === activeLetterTypeId) : null;
        if (typeData && typeData.sampleWriting) {
            const tmp = document.createElement('div');
            tmp.innerHTML = typeData.sampleWriting;
            const cb = tmp.querySelector('.sample-letter-box');
            if (cb) fullText = cb.innerText;
        }
    }

    if (!fullText) return;

    const utterance = new SpeechSynthesisUtterance(fullText);
    utterance.lang = 'en-US';
    utterance.rate = currentSampleSpeechRate || 1.0;

    const voices = window.speechSynthesis.getVoices();
    const enVoice = voices.find(v => v.lang.startsWith('en') && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Samantha') || v.name.includes('Daniel') || v.name.includes('US') || v.name.includes('GB'))) || voices.find(v => v.lang.startsWith('en'));
    if (enVoice) utterance.voice = enVoice;

    const btnPlay = document.getElementById('btnPlaySampleAudio');
    const btnStop = document.getElementById('btnStopSampleAudio');
    const audioStatus = document.getElementById('sampleAudioStatus');

    utterance.onstart = () => {
        if (btnPlay) btnPlay.style.display = 'none';
        if (btnStop) btnStop.style.display = 'inline-flex';
        if (audioStatus) audioStatus.style.display = 'inline-flex';
    };

    utterance.onend = () => {
        if (btnPlay) btnPlay.style.display = 'inline-flex';
        if (btnStop) btnStop.style.display = 'none';
        if (audioStatus) audioStatus.style.display = 'none';
        currentSampleUtterance = null;
    };

    utterance.onerror = () => {
        if (btnPlay) btnPlay.style.display = 'inline-flex';
        if (btnStop) btnStop.style.display = 'none';
        if (audioStatus) audioStatus.style.display = 'none';
        currentSampleUtterance = null;
    };

    currentSampleUtterance = utterance;
    window.speechSynthesis.speak(utterance);
}

function stopSampleAudio() {
    if ('speechSynthesis' in window && window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
    }
    const btnPlay = document.getElementById('btnPlaySampleAudio');
    const btnStop = document.getElementById('btnStopSampleAudio');
    const audioStatus = document.getElementById('sampleAudioStatus');
    if (btnPlay) btnPlay.style.display = 'inline-flex';
    if (btnStop) btnStop.style.display = 'none';
    if (audioStatus) audioStatus.style.display = 'none';
    currentSampleUtterance = null;
}

function updateSampleAudioSpeed(speed) {
    currentSampleSpeechRate = parseFloat(speed) || 1.0;
    if (currentSampleUtterance && window.speechSynthesis.speaking) {
        playCurrentSampleLetter();
    }
}

// Expose globally for HTML onclick handlers
window.switchSampleView = switchSampleView;
window.toggleSampleHighlight = toggleSampleHighlight;
window.speakText = speakText;
window.playCurrentSampleLetter = playCurrentSampleLetter;
window.stopSampleAudio = stopSampleAudio;
window.updateSampleAudioSpeed = updateSampleAudioSpeed;
window.clearExtraPracticeDraft = clearExtraPracticeDraft;
window.clearFullPracticeDraft = clearFullPracticeDraft;
window.exportProgressBackup = exportProgressBackup;
window.importProgressBackup = importProgressBackup;
window.getRecitationResults = getRecitationResults;
window.getRecitationResult = getRecitationResult;
window.saveRecitationResult = saveRecitationResult;
window.displaySavedRecitationResult = displaySavedRecitationResult;

