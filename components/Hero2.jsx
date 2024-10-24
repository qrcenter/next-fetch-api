import Image from "next/image";
import Link from "next/link";
export default function Hero2() {
  return (
    <section id="hero2">
      <div className="container mx-auto px-6 space-x-6 flex flex-col-reverse md:flex-row">
      <div className="md:w-1/2 flex flex-col justify-center space-y-5 py-8 text-center md:text-right">
        <h1 className="font-bold text-3xl md:text-5xl">مركز القمر لللاعلام الرقمي</h1>
        <p>
          مركز اعلامي معرفي غير ربحي مختص بنشر الفكر في مجالات عدة وبناء رصيد
          معرفي هام عبر التثقيف الرقمي (موشن كرافيك) وما يتماشى مع الحركة
          الثقافية والعلمية الحديثة مستهدفا فئات مجتمعيّة مختلفة وبأسلوب يتوافق
          مع ما يحصل اليوم من تطوّرات هائلة. بما أن الثقافة الرقمية باتت اليوم
          ركنا أساسيا للحصول على المعرفة في مختلف المجالات، الى الأسلوب العصري
          الحديث ، انبثقت فكرة الحاجة في هذا الوقت الى هذا النوع من العمل لانه
          يعد من الاليات المهمة في تثقيف المجتمع إيمانا منا بأن المعرفة لا يجب
          أن تبقى حبيسة الأدراج ورفوف المكتبات بل يجب أن تصل إلى كل شخص يبحث
          عنها، خاصة مع التطورات التقنية والتكنولوجية التي فرضت اللجوء إلى مثل
          هذا النوع من النشر. يُعْنى المركز برد الاشكالات الفكرية والعقائدية ،
          وتسليط الضوء على المشاكل الاجتماعية الشخصية والمجتمعية وتشخيص العلاج
          لها، كما يسعى لتقديم المحتوى الطبي والقانوني الموثوق وذلك من خلال
          مقالات طبية وقانونية متنوعة وغنية.
        </p>
        <Link
          href="/"
          className="text-white py-2 px-6 rounded-full md:self-start bg-bermuda2"
        >
          اشترك
        </Link>
      </div>
      <div className="w-1/2 space-y-5 py-8 px-8">
        <Image src="/undraw_online_media.svg" alt="Hero Image" width={500} height={600} />
      </div>
      </div>
    </section>
  );
}
