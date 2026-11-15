// ============================================================
// ============================================================
// FILE: CITARASA - MELESTARIKAN KULINER DAERAH
// VERSI: 4.0 (Dengan Penamaan AI Sejarah)
// ============================================================
// ============================================================
//
//  📌  FITUR UTAMA:
//  ------------------------------------------------------------
//  1.  AI SEJARAH - Sistem Rule-Based untuk edukasi budaya kuliner
//  2.  NUSAQUIZ - Gamifikasi edukasi kuliner interaktif
//  3.  EKSPLORASI - Rekomendasi kuliner berbasis lokasi
//  4.  PEMBELIAN - Integrasi pemesanan langsung ke UMKM
//
//  📌  SESUAI DENGAN SUBTEMA:
//  ------------------------------------------------------------
//  "Pelestarian Budaya melalui Inovasi Teknologi"
//  - SDG 8: Pekerjaan Layak & Pertumbuhan Ekonomi
//  - SDG 12: Konsumsi & Produksi Bertanggung Jawab
//  - Asta Cita: Penguatan Ekonomi Kerakyatan & Pelestarian Budaya
// ============================================================

(function() {
  "use strict";

  // ============================================================
  // BAGIAN 1: DATABASE KULINER DAERAH
  // ============================================================

  const kulinerDaerah = [
    {
      nama: "Rendang",
      daerah: "Sumatera Barat",
      umkm: "Mak Yun",
      harga: 45000,
      caraBeli: "Rendang Mak Yun bisa dibeli langsung di halaman Kuliner Daerah. Klik produk, tambah ke keranjang, lalu checkout."
    },
    {
      nama: "Gudeg",
      daerah: "Yogyakarta",
      umkm: "Bu Gandes",
      harga: 30000,
      caraBeli: "Gudeg Bu Gandes tersedia di marketplace. Cari di kategori 'Kuliner Jawa', tambahkan ke keranjang, dan selesaikan pembayaran."
    },
    {
      nama: "Sate Madura",
      daerah: "Jawa Timur",
      umkm: "Pak Samin",
      harga: 25000,
      caraBeli: "Sate Madura Pak Samin bisa dipesan via marketplace. Pastikan alamat pengiriman terisi dengan benar."
    },
    {
      nama: "Pempek",
      daerah: "Palembang",
      umkm: "Kapal Saga",
      harga: 35000,
      caraBeli: "Pempek Kapal Saga tersedia dengan kuah cuko asli. Beli di halaman produk dan pilih metode pengiriman."
    }
  ];

   // ============================================================
  // BAGIAN 2: NUSAQUIZ - GAMIFIKASI LITERASI HALAL
  // ============================================================

  const quizQuestions = [
    {
      question: "Apa yang dimaksud dengan sertifikasi halal pada produk UMKM?",
      options: [
        "Sertifikat izin usaha dari pemerintah daerah",
        "Jaminan bahwa produk bebas dari bahan haram dan diproses sesuai syariat Islam",
        "Label yang menunjukkan produk tersebut mahal",
        "Tanda bahwa produk tersebut diekspor ke luar negeri"
      ],
      correct: 1,
      explanation: "Sertifikasi halal adalah jaminan tertulis bahwa produk bebas dari bahan haram dan prosesnya sesuai syariat Islam.",
      points: 10
    },
    {
      question: "Bahan atau zat apa yang termasuk kategori haram dalam makanan?",
      options: [
        "Daging sapi dan sayuran segar",
        "Babi, alkohol, dan darah",
        "Beras, gandum, dan jagung",
        "Ikan, telur, dan susu"
      ],
      correct: 1,
      explanation: "Babi, alkohol, dan darah adalah bahan yang diharamkan dalam Islam dan dilarang ada dalam produk halal.",
      points: 10
    },
    {
      question: "Lembaga resmi di Indonesia yang mengeluarkan sertifikat halal adalah...",
      options: [
        "BPOM dan Kemenkes",
        "BPJPH (Badan Penyelenggara Jaminan Produk Halal)",
        "Kementerian Perdagangan",
        "Lembaga Swadaya Masyarakat (LSM)"
      ],
      correct: 1,
      explanation: "BPJPH adalah badan resmi yang dibentuk pemerintah untuk menyelenggarakan jaminan produk halal di Indonesia.",
      points: 10
    },
    {
      question: "Apa itu 'Halal Traceability' (Ketertelusuran Halal)?",
      options: [
        "Proses menghitung biaya produksi makanan",
        "Kemampuan melacak asal-usul bahan baku hingga produk akhir untuk memastikan kehalalannya",
        "Aplikasi untuk memesan makanan secara online",
        "Cara memasak makanan dengan suhu tinggi"
      ],
      correct: 1,
      explanation: "Traceability halal memastikan seluruh rantai pasok, dari bahan baku hingga produk jadi, bebas dari kontaminasi bahan haram.",
      points: 10
    },
    {
      question: "Kapan kewajiban sertifikasi halal bagi pelaku UMKM makanan dan minuman di Indonesia mulai berlaku?",
      options: [
        "1 Januari 2023",
        "17 Agustus 2024",
        "17 Oktober 2026",
        "1 Januari 2030"
      ],
      correct: 2,
      explanation: "Berdasarkan PP No. 42 Tahun 2024, Wajib Halal untuk makanan dan minuman akan diberlakukan pada Oktober 2026.",
      points: 10
    },
    {
      question: "Mengapa platform digital seperti JelajahRasa penting untuk UMKM Halal?",
      options: [
        "Agar UMKM bisa menjual lebih mahal",
        "Untuk membantu UMKM mempublikasikan status sertifikasi halal dan transparansi bahan",
        "Untuk menggantikan proses masak secara otomatis",
        "Supaya UMKM tidak perlu mengurus izin usaha"
      ],
      correct: 1,
      explanation: "Platform digital membantu UMKM menampilkan badge halal, ketertelusuran bahan, dan mengedukasi konsumen secara transparan.",
      points: 10
    },
    {
      question: "Dalam proses sertifikasi halal, apa yang dimaksud dengan 'bahan syubhat'?",
      options: [
        "Bahan yang harganya sangat murah",
        "Bahan yang meragukan status kehalalannya dan perlu diverifikasi lebih lanjut",
        "Bahan yang tidak memiliki label gizi",
        "Bahan yang diproduksi di luar negeri"
      ],
      correct: 1,
      explanation: "Syubhat artinya meragukan. Bahan seperti ini harus ditelusuri asalnya agar tidak masuk ke dalam produk halal.",
      points: 10
    },
    {
      question: "Apa manfaat fitur 'AI Asisten Halal' pada JelajahRasa bagi konsumen?",
      options: [
        "Menghitung total harga belanja",
        "Mengecek apakah makanan tertentu mengandung bahan yang diharamkan",
        "Mengirim pesan otomatis ke kurir",
        "Memberikan diskon otomatis pada produk"
      ],
      correct: 1,
      explanation: "AI Asisten Halal membantu konsumen mendapatkan informasi instan terkait bahan-bahan produk dan status kehalalannya.",
      points: 10
    },
    {
      question: "Selain mendapatkan poin, apa tujuan gamifikasi kuis di JelajahRasa?",
      options: [
        "Meningkatkan literasi halal generasi muda terhadap produk UMKM",
        "Menghabiskan kuota internet pengguna",
        "Menjual produk secara sembunyi-sembunyi",
        "Menguji kecepatan mengetik pengguna"
      ],
      correct: 0,
      explanation: "Gamifikasi digunakan untuk mengedukasi konsumen muda tentang pentingnya kehalalan produk dengan cara yang menyenangkan.",
      points: 10
    },
    {
      question: "Jika sebuah UMKM belum memiliki sertifikat halal, apa langkah awal yang bisa dibantu oleh platform digital?",
      options: [
        "Langsung menulis kata 'Halal' pada kemasan",
        "Menyembunyikan bahan baku dari konsumen",
        "Memberikan panduan kesiapan sertifikasi dan asesmen mandiri bahan baku",
        "Menghapus UMKM tersebut dari platform"
      ],
      correct: 2,
      explanation: "Platform membantu UMKM mempersiapkan proses sertifikasi dengan memberikan panduan dan checklist bahan halal (asesmen mandiri).",
      points: 10
    }
  ];

  // ============================================================
  // BAGIAN 3: NUSAQUIZ - STATE MANAGEMENT
  // ============================================================

  let currentQuizState = {
    currentIndex: 0,
    score: 0,
    streak: 0,
    answers: [],
    quizCompleted: false,
    timerInterval: null,
    timeLeft: 15
  };

  const quizElements = {
    question: document.getElementById('question-text'),
    options: document.getElementById('quiz-options'),
    currentQ: document.getElementById('current-question'),
    totalQ: document.getElementById('total-questions'),
    quizPoints: document.getElementById('quiz-points'),
    quizStreak: document.getElementById('quiz-streak'),
    timer: document.getElementById('quiz-timer'),
    feedback: document.getElementById('quiz-feedback'),
    nextBtn: document.getElementById('quiz-next'),
    restartBtn: document.getElementById('quiz-restart'),
    result: document.getElementById('quiz-result'),
    finalPoints: document.getElementById('final-points'),
    correctCount: document.getElementById('correct-count'),
    totalCount: document.getElementById('total-count'),
    playAgain: document.getElementById('quiz-play-again')
  };

  if (quizElements.totalQ) {
    quizElements.totalQ.textContent = quizQuestions.length;
  }

  // ============================================================
  // BAGIAN 3.1: NUSAQUIZ - TIMER
  // ============================================================

  function startTimer() {
    if (currentQuizState.timerInterval) {
      clearInterval(currentQuizState.timerInterval);
    }
    
    currentQuizState.timeLeft = 15;
    updateTimerBar();
    
    currentQuizState.timerInterval = setInterval(() => {
      currentQuizState.timeLeft--;
      updateTimerBar();
      
      if (currentQuizState.timeLeft <= 0) {
        clearInterval(currentQuizState.timerInterval);
        handleTimeout();
      }
    }, 1000);
  }

  function updateTimerBar() {
    if (quizElements.timer) {
      const percentage = (currentQuizState.timeLeft / 15) * 100;
      quizElements.timer.style.width = `${percentage}%`;
      
      if (percentage < 30) {
        quizElements.timer.style.background = '#ef4444';
      } else if (percentage < 60) {
        quizElements.timer.style.background = '#f59e0b';
      } else {
        quizElements.timer.style.background = '#0ea5e9';
      }
    }
  }

  function handleTimeout() {
    disableOptions();
    showFeedback('⏰ Waktu habis!', 'error');
    if (quizElements.nextBtn) {
      quizElements.nextBtn.disabled = false;
    }
    currentQuizState.streak = 0;
    updateStreak();
  }

  // ============================================================
  // BAGIAN 3.2: NUSAQUIZ - LOAD & HANDLE QUESTIONS
  // ============================================================

  function loadQuestion(index) {
    if (index >= quizQuestions.length) {
      finishQuiz();
      return;
    }

    const q = quizQuestions[index];
    if (quizElements.question) {
      quizElements.question.textContent = q.question;
    }
    if (quizElements.currentQ) {
      quizElements.currentQ.textContent = index + 1;
    }

    if (quizElements.options) {
      let optionsHtml = '';
      q.options.forEach((opt, i) => {
        const isSelected = currentQuizState.answers[index] === i;
        const isAnswered = currentQuizState.answers[index] !== undefined;
        const isCorrect = isAnswered && i === q.correct;
        const isWrong = isAnswered && i === currentQuizState.answers[index] && i !== q.correct;
        
        let optionClass = 'quiz-option';
        if (isAnswered) optionClass += ' disabled';
        if (isSelected) optionClass += ' selected';
        if (isCorrect) optionClass += ' correct';
        if (isWrong) optionClass += ' wrong';
        
        optionsHtml += `
          <button class="${optionClass}" data-option-index="${i}" ${isAnswered ? 'disabled' : ''}>
            <span class="font-bold mr-3">${String.fromCharCode(65 + i)}.</span> ${opt}
          </button>
        `;
      });
      quizElements.options.innerHTML = optionsHtml;

      if (!currentQuizState.answers[index]) {
        document.querySelectorAll('.quiz-option:not(.disabled)').forEach(btn => {
          btn.addEventListener('click', (e) => handleOptionClick(e, index));
        });
      }
    }

    if (quizElements.feedback) {
      quizElements.feedback.innerHTML = '';
    }

    if (quizElements.nextBtn) {
      quizElements.nextBtn.disabled = currentQuizState.answers[index] === undefined;
    }

    startTimer();
  }

  function handleOptionClick(event, questionIndex) {
    const optionIndex = parseInt(event.currentTarget.dataset.optionIndex);
    const isCorrect = optionIndex === quizQuestions[questionIndex].correct;
    
    if (currentQuizState.timerInterval) {
      clearInterval(currentQuizState.timerInterval);
    }

    currentQuizState.answers[questionIndex] = optionIndex;
    
    if (isCorrect) {
      currentQuizState.score += quizQuestions[questionIndex].points;
      currentQuizState.streak++;
      
      if (currentQuizState.streak >= 3) {
        currentQuizState.score += 5;
        showFeedback(`🔥 Streak ${currentQuizState.streak}! +5 bonus poin! 🎉`, 'success');
      } else {
        showFeedback('✅ Benar! +10 poin', 'success');
      }
    } else {
      currentQuizState.streak = 0;
      showFeedback(`❌ Salah. ${quizQuestions[questionIndex].explanation}`, 'error');
    }

    updateScore();
    updateStreak();
    disableOptions();
    
    if (quizElements.nextBtn) {
      quizElements.nextBtn.disabled = false;
    }

    highlightCorrectAnswer(questionIndex);
  }

  function highlightCorrectAnswer(questionIndex) {
    const correctIndex = quizQuestions[questionIndex].correct;
    document.querySelectorAll('.quiz-option').forEach((btn, idx) => {
      if (idx === correctIndex) {
        btn.classList.add('correct');
      }
    });
  }

  function disableOptions() {
    document.querySelectorAll('.quiz-option').forEach(btn => {
      btn.classList.add('disabled');
      btn.disabled = true;
    });
  }

  function showFeedback(message, type) {
    if (quizElements.feedback) {
      const color = type === 'success' ? 'text-green-600' : 'text-red-600';
      quizElements.feedback.innerHTML = `<span class="${color}">${message}</span>`;
    }
  }

  function updateScore() {
    if (quizElements.quizPoints) {
      quizElements.quizPoints.textContent = currentQuizState.score;
    }
  }

  function updateStreak() {
    if (quizElements.quizStreak) {
      quizElements.quizStreak.textContent = currentQuizState.streak;
    }
  }

  // ============================================================
  // BAGIAN 3.3: NUSAQUIZ - FINISH & RESET
  // ============================================================

  function finishQuiz() {
    if (currentQuizState.timerInterval) {
      clearInterval(currentQuizState.timerInterval);
    }

    if (quizElements.question) quizElements.question.style.display = 'none';
    if (quizElements.options) quizElements.options.style.display = 'none';
    if (quizElements.nextBtn) quizElements.nextBtn.style.display = 'none';
    if (quizElements.restartBtn) quizElements.restartBtn.style.display = 'none';
    if (quizElements.feedback) quizElements.feedback.style.display = 'none';
    
    if (quizElements.result) {
      quizElements.result.classList.remove('hidden');
      if (quizElements.finalPoints) {
        quizElements.finalPoints.textContent = currentQuizState.score;
      }
      if (quizElements.correctCount) {
        quizElements.correctCount.textContent = currentQuizState.answers.filter((ans, idx) => ans === quizQuestions[idx].correct).length;
      }
      if (quizElements.totalCount) {
        quizElements.totalCount.textContent = quizQuestions.length;
      }
    }

    localStorage.setItem('nusaquiz_last_score', currentQuizState.score);
    localStorage.setItem('nusaquiz_last_date', new Date().toISOString());
  }

  function resetQuiz() {
    currentQuizState = {
      currentIndex: 0,
      score: 0,
      streak: 0,
      answers: [],
      quizCompleted: false,
      timerInterval: null,
      timeLeft: 15
    };

    if (quizElements.question) quizElements.question.style.display = 'block';
    if (quizElements.options) quizElements.options.style.display = 'block';
    if (quizElements.nextBtn) quizElements.nextBtn.style.display = 'block';
    if (quizElements.restartBtn) quizElements.restartBtn.style.display = 'block';
    if (quizElements.feedback) quizElements.feedback.style.display = 'block';
    
    if (quizElements.result) {
      quizElements.result.classList.add('hidden');
    }

    updateScore();
    updateStreak();
    loadQuestion(0);
  }

  // ============================================================
  // BAGIAN 3.4: NUSAQUIZ - EVENT LISTENERS
  // ============================================================

  if (quizElements.nextBtn) {
    quizElements.nextBtn.addEventListener('click', () => {
      currentQuizState.currentIndex++;
      if (currentQuizState.currentIndex < quizQuestions.length) {
        loadQuestion(currentQuizState.currentIndex);
      } else {
        finishQuiz();
      }
    });
  }

  if (quizElements.restartBtn) {
    quizElements.restartBtn.addEventListener('click', resetQuiz);
  }

  if (quizElements.playAgain) {
    quizElements.playAgain.addEventListener('click', resetQuiz);
  }

  resetQuiz();


  // ============================================================
  // ============================================================
  // BAGIAN 4: AI SEJARAH (RULE-BASED SYSTEM)
  // ============================================================
  // ============================================================
  //
  //  📌  APA ITU AI SEJARAH?
  //  ============================================================
  //  AI Sejarah adalah sistem berbasis RULE-BASED yang berfungsi
  //  untuk memberikan edukasi tentang sejarah, filosofi, dan
  //  nilai budaya kuliner Nusantara.
  // ============================================================


   // ============================================================
  // BAGIAN 4.1: AI ASISTEN HALAL - KNOWLEDGE BASE
  // ============================================================

  const aiSejarahKnowledge = [
    // --- TOPIK 1: SEJARAH & KEHALALAN RENDANG ---
    {
      keywords: ['rendang', 'padang', 'minang', 'sejarah rendang', 'halal rendang', 'rendang halal'],
      jawaban: `🍛 **Rendang: Sejarah & Kehalalan**\n\n` +
               `Rendang adalah masakan khas Minangkabau dari Sumatera Barat.\n\n` +
               `📜 **Sejarah**: Melambangkan musyawarah (daging = pemimpin, santan = ulama, cabe = pemuda).\n\n` +
               `✅ **Status Halal**: Rendang umumnya halal karena berbahan dasar daging sapi, santan, dan rempah-rempah alami. \n` +
               `Namun, konsumen wajib memastikan daging berasal dari RPH bersertifikat halal dan tidak ada campuran bahan haram.`
    },
    // --- TOPIK 2: SEJARAH & KEHALALAN GUDEG ---
    {
      keywords: ['gudeg', 'jogja', 'yogyakarta', 'sejarah gudeg', 'halal gudeg'],
      jawaban: `🥘 **Gudeg: Sejarah & Kehalalan**\n\n` +
               `Gudeg adalah makanan khas Yogyakarta dari nangka muda.\n\n` +
               `📜 **Sejarah**: Berasal dari masa Kerajaan Mataram Islam, awalnya untuk keluarga kerajaan.\n\n` +
               `✅ **Status Halal**: Gudeg pada dasarnya halal (nangka, santan, gula aren). \n` +
               `Tapi, waspadai jika disajikan dengan lauk pendamping seperti *krecek* (kulit sapi) — pastikan kulit sapi tersebut bersumber dari hewan halal.`
    },
    // --- TOPIK 3: SEJARAH & KEHALALAN SATE ---
    {
      keywords: ['sate', 'madura', 'sejarah sate', 'halal sate', 'sate halal'],
      jawaban: `🍢 **Sate Madura: Sejarah & Kehalalan**\n\n` +
               `Sate Madura khas Jawa Timur dengan bumbu kacang kental.\n\n` +
               `📜 **Sejarah**: Awalnya makanan nelayan dan petani Madura.\n\n` +
               `✅ **Status Halal**: Daging kambing/ayam adalah halal. \n` +
               `Kuncinya ada pada proses penyembelihan hewan (harus sesuai syariat Islam) dan bumbu yang tidak mengandung alkohol atau bahan haram lainnya.`
    },
    // --- TOPIK 4: SEJARAH & KEHALALAN PEMPEK ---
    {
      keywords: ['pempek', 'palembang', 'sejarah pempek', 'halal pempek'],
      jawaban: `🍲 **Pempek: Sejarah & Kehalalan**\n\n` +
               `Pempek khas Palembang berbahan dasar ikan tenggiri.\n\n` +
               `📜 **Sejarah**: Berasal dari masa Kerajaan Sriwijaya, nama "pempek" dari kata "apek" (kakek).\n\n` +
               `✅ **Status Halal**: Ikan dan tepung sagu adalah bahan halal. \n` +
               `Pastikan kuah cuko tidak mengandung zat aditif haram dan proses produksinya tidak terkontaminasi.`
    },
    // --- TOPIK 5: PELESTARIAN BUDAYA & HALAL ---
    {
      keywords: ['budaya', 'warisan', 'tradisi', 'nilai budaya', 'filosofi', 'kearifan lokal', 'halal budaya'],
      jawaban: `🌏 **Warisan Budaya Kuliner Halal Nusantara**\n\n` +
               `Setiap makanan di Indonesia menyimpan filosofi dan nilai budaya:\n\n` +
               `🍛 **Rendang** - Melambangkan musyawarah (daging = pemimpin, santan = ulama).\n` +
               `🥘 **Gudeg** - Simbol kesederhanaan dan kehangatan masyarakat Jawa.\n\n` +
               `✅ **Mengapa Halal Penting?** \n` +
               `Sertifikasi halal bukan hanya soal agama, tapi juga jaminan kebersihan (thayyib) dan kualitas produk. \n` +
               `AI Asisten Halal hadir untuk menjaga warisan ini tetap aman dan terpercaya di era digital!`
    },
    // --- TOPIK 6: CARA CEK KEHALALAN ---
    {
      keywords: ['cek halal', 'sertifikat halal', 'badge halal', 'bagaimana cek halal', 'status halal'],
      jawaban: `🛡️ **Cara Cek Kehalalan Produk di JelajahRasa**\n\n` +
               `Kami memudahkan kamu untuk memastikan produk yang dibeli 100% halal:\n\n` +
               `1️⃣ **Lihat Badge Halal** - Pada kartu produk, cari label hijau "Halal Certified" (sudah sertifikasi) atau kuning "Proses Sertifikasi".\n` +
               `2️⃣ **Cek Traceability** - Klik profil UMKM untuk melihat asal-usul bahan baku (dari pemasok mana).\n` +
               `3️⃣ **Tanya AI** - Ketik nama makanan di kolom chat ini, saya akan bantu cek komposisinya.\n\n` +
               `💡 *Ingat: Selalu utamakan produk dengan sertifikasi resmi BPJPH!*`
    },
    // --- TOPIK 7: WAJIB HALAL 2026 ---
    {
      keywords: ['wajib halal', '2026', 'pp 42', 'regulasi', 'hukum halal'],
      jawaban: `📜 **Wajib Halal Oktober 2026**\n\n` +
               `Sesuai **PP No. 42 Tahun 2024**, seluruh produk makanan dan minuman di Indonesia wajib memiliki sertifikasi halal mulai Oktober 2026.\n\n` +
               `Mengapa ini penting untuk UMKM?\n` +
               `• **Kepercayaan Konsumen**: Konsumen muslim akan lebih yakin membeli.\n` +
               `• **Daya Saing**: Produk bersertifikat halal lebih mudah menembus pasar luas.\n` +
               `• **Kepatuhan Hukum**: Menghindari sanksi di masa depan.\n\n` +
               `JelajahRasa hadir untuk membantu UMKM bersiap dari sekarang!`
    },
    // --- TOPIK 8: CARA BELI ---
    {
      keywords: ['beli', 'cara beli', 'order', 'pesan', 'transaksi', 'checkout'],
      jawaban: `🛒 **Cara Membeli Kuliner Halal di JelajahRasa:**\n\n` +
               `1️⃣ **Pilih Produk** - Cari produk dengan label hijau "Halal Certified".\n` +
               `2️⃣ **Cek Traceability** - Pastikan bahan baku terverifikasi halal.\n` +
               `3️⃣ **Isi Data Pengiriman** - Alamat lengkap dan pilih kurir.\n` +
               `4️⃣ **Pilih Pembayaran** - Transfer Bank, E-Wallet, atau COD.\n` +
               `5️⃣ **Konfirmasi** - Pesanan diproses!\n\n` +
               `💡 Setiap pembelian juga mengumpulkan poin reward!`
    }
  ];


  // ============================================================
  // BAGIAN 4.2: AI SEJARAH - FUNGSI PENENTU OUTPUT
  // ============================================================

  function cariJawabanAI(pertanyaan) {
    if (!pertanyaan || pertanyaan.trim() === '') {
      return 'Silakan tulis pertanyaan terlebih dahulu.';
    }

    const lowerQ = pertanyaan.toLowerCase().trim();
    
    // --- ATURAN KHUSUS #1: DETEKSI SAPAAN ---
    if (lowerQ.match(/^(halo|hai|hey|hi|pagi|siang|sore|malam)/)) {
      return '🌾 Halo! Saya AI Sejarah CitaRasa. Ada yang bisa saya bantu tentang sejarah kuliner Nusantara?';
    }

    if (lowerQ.match(/^(makasih|terima kasih|thanks)/)) {
      return 'Sama-sama! Senang bisa membantu melestarikan sejarah kuliner Nusantara. Ada lagi yang ingin ditanyakan?';
    }

    let bestMatch = null;
    let highestScore = 0;

    for (let item of aiSejarahKnowledge) {
      let score = 0;
      
      for (let keyword of item.keywords) {
        if (lowerQ.includes(keyword)) {
          score += 15;
        }
        
        const words = lowerQ.split(/\s+/);
        for (let word of words) {
          if (word.length > 3 && keyword.includes(word)) {
            score += 5;
          }
        }
      }
      
      if (score > highestScore) {
        highestScore = score;
        bestMatch = item;
      }
    }

    if (highestScore > 10 && bestMatch) {
      return bestMatch.jawaban;
    }

    for (let makanan of kulinerDaerah) {
      if (lowerQ.includes(makanan.nama.toLowerCase())) {
        return `🍽️ **${makanan.nama}**\n` +
               `Daerah: ${makanan.daerah}\n` +
               `UMKM: ${makanan.umkm}\n` +
               `Harga: Rp${makanan.harga.toLocaleString()}\n\n` +
               `🛒 **Cara beli**: ${makanan.caraBeli}`;
      }
    }

    return 'Maaf, saya belum paham. Saya adalah AI Sejarah CitaRasa.\n\n' +
           'Coba tanyakan tentang:\n' +
           '• Sejarah rendang / gudeg / sate / pempek / rawon\n' +
           '• Filosofi dan nilai budaya kuliner Nusantara\n' +
           '• Ancaman kepunahan kuliner daerah\n' +
           '• Peran kuliner untuk Indonesia Emas 2045\n' +
           '• Cara beli kuliner di CitaRasa';
  }


  // ============================================================
  // BAGIAN 4.3: AI SEJARAH - UI (INTERFACE)
  // ============================================================

  const aiToggle = document.getElementById('ai-sejarah-toggle');
  const aiWindow = document.getElementById('ai-sejarah-window');
  const aiClose = document.getElementById('ai-sejarah-close');
  const aiMessages = document.getElementById('ai-sejarah-messages');
  const aiInput = document.getElementById('ai-sejarah-input');
  const aiSend = document.getElementById('ai-sejarah-send');

  function addAIMessage(text, sender) {
    const msgDiv = document.createElement('div');
    msgDiv.className = `ai-message ${sender}`;
    
    let formattedText = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    formattedText = formattedText.replace(/\n/g, '<br>');
    msgDiv.innerHTML = formattedText;
    
    aiMessages.appendChild(msgDiv);
    aiMessages.scrollTop = aiMessages.scrollHeight;
  }

  function sendAIMessage() {
    const userText = aiInput.value.trim();
    if (!userText) return;

    addAIMessage(userText, 'user');
    aiInput.value = '';

    setTimeout(() => {
      const jawaban = cariJawabanAI(userText);
      addAIMessage(jawaban, 'ai');
    }, 800);
  }

  if (aiSend) {
    aiSend.addEventListener('click', sendAIMessage);
  }
  
  if (aiInput) {
    aiInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') sendAIMessage();
    });
  }

  if (aiToggle) {
    aiToggle.addEventListener('click', () => {
      aiWindow.style.display = 'flex';
      aiInput.focus();
    });
  }

  if (aiClose) {
    aiClose.addEventListener('click', () => {
      aiWindow.style.display = 'none';
    });
  }

  document.addEventListener('click', (e) => {
    if (aiWindow && aiToggle) {
      if (!aiWindow.contains(e.target) && !aiToggle.contains(e.target) && aiWindow.style.display === 'flex') {
        aiWindow.style.display = 'none';
      }
    }
  });


  // ============================================================
  // BAGIAN 5: MOBILE MENU
  // ============================================================

  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      menuToggle.innerHTML = mobileMenu.classList.contains('hidden') 
        ? '<i class="fas fa-bars text-xl"></i>' 
        : '<i class="fas fa-times text-xl"></i>';
    });
  }

  window.closeMobileMenu = function() {
    if (mobileMenu && menuToggle) {
      mobileMenu.classList.add('hidden');
      menuToggle.innerHTML = '<i class="fas fa-bars text-xl"></i>';
    }
  };

  // ============================================================
  // BAGIAN 6: ADD TO CART
  // ============================================================

  document.querySelectorAll('.add-to-cart').forEach(btn => {
    btn.addEventListener('click', function() {
      const name = this.dataset.name;
      alert(`✅ "${name}" ditambahkan ke keranjang!\n\nLanjutkan ke halaman checkout untuk menyelesaikan pembelian.`);
    });
  });


  // ============================================================
  // ============================================================
  // BAGIAN 7: API PREDIKSI MINAT (RANDOM FOREST)
  // ============================================================
  // ============================================================
  // MENGHUBUNGKAN CITARASA DENGAN AI RANDOM FOREST
  // ENDPOINT: https://cita-rasa.onrender.com/predict
  // ============================================================

  const API_URL = 'https://cita-rasa.onrender.com/predict';

  /**
   * Fungsi untuk memprediksi minat pengguna terhadap kuliner UMKM
   * @param {Object} data - {usia, status, frekuensi, sumber_info, promosi}
   * @returns {Promise<Object|null>} {minat, kategori} atau null
   */
  async function prediksiMinat(data) {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log('✅ Hasil prediksi:', result);
      return result;
    } catch (error) {
      console.error('❌ Gagal memanggil API prediksi:', error);
      return null;
    }
  }

  /**
   * Fungsi untuk menampilkan prediksi di halaman
   * Panggil saat tombol "Cek Minat" diklik
   */
  async function tampilkanPrediksi() {
    // Ambil nilai dari input form (default jika tidak ada)
    const usia = parseInt(document.getElementById('input-usia')?.value) || 1;
    const status = parseInt(document.getElementById('input-status')?.value) || 1;
    const frekuensi = parseInt(document.getElementById('input-frekuensi')?.value) || 2;
    const sumberInfo = parseInt(document.getElementById('input-sumber')?.value) || 1;
    const promosi = parseInt(document.getElementById('input-promosi')?.value) || 1;

    const dataPengguna = { usia, status, frekuensi, sumber_info: sumberInfo, promosi };
    const result = await prediksiMinat(dataPengguna);
    
    const hasilElement = document.getElementById('hasil-prediksi');
    if (!hasilElement) {
      if (result) {
        alert(`🎯 Prediksi Minat: ${result.minat}/5 (${result.kategori})`);
      } else {
        alert('⚠️ Gagal mendapatkan prediksi. Coba lagi nanti.');
      }
      return;
    }

    if (result) {
      const warnaKategori = result.kategori === 'Tinggi' ? 'text-green-600' : 
                           result.kategori === 'Sedang' ? 'text-yellow-600' : 'text-red-500';
      
      hasilElement.innerHTML = `
        <div class="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-5 mt-4 shadow-sm">
          <p class="font-bold text-green-800 text-lg">🎯 Prediksi Minat Kuliner UMKM</p>
          <div class="flex items-center gap-4 mt-2">
            <div class="text-center">
              <p class="text-sm text-gray-600">Skor Minat</p>
              <p class="text-3xl font-bold text-indigo-600">${result.minat} <span class="text-base text-gray-400">/ 5</span></p>
            </div>
            <div class="h-12 w-px bg-gray-300"></div>
            <div class="text-center">
              <p class="text-sm text-gray-600">Kategori</p>
              <p class="text-xl font-bold ${warnaKategori}">${result.kategori}</p>
            </div>
          </div>
          <p class="text-sm text-gray-500 mt-3">✨ Rekomendasi kuliner akan disesuaikan berdasarkan hasil ini.</p>
        </div>
      `;
    } else {
      hasilElement.innerHTML = `
        <div class="bg-red-50 border border-red-200 rounded-xl p-4 mt-4">
          <p class="text-red-600">⚠️ Gagal mendapatkan prediksi. Silakan coba lagi.</p>
        </div>
      `;
    }
  }

  // ============================================================
  // Hubungkan ke tombol (jika ada di HTML)
  // ============================================================
  document.addEventListener('DOMContentLoaded', function() {
    const btnPrediksi = document.getElementById('btn-prediksi');
    if (btnPrediksi) {
      btnPrediksi.addEventListener('click', tampilkanPrediksi);
    }
  });

})();  // ← PENUTUP FUNGSI UTAMA (JANGAN DIHAPUS!)
