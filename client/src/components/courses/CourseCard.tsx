import { Course } from '@/lib/constants';
import { useLanguage } from '@/context/LanguageContext';

interface CourseCardProps {
  course: Course;
}

const CourseCard = ({ course }: CourseCardProps) => {
  const { t } = useLanguage();
  
  const getCategoryColorClass = (category: string) => {
    switch (category) {
      case 'primary':
        return 'bg-primary/10 text-primary/90';
      case 'secondary':
        return 'bg-emerald-100 text-emerald-700';
      case 'accent':
        return 'bg-amber-100 text-amber-700';
      case 'marketing':
        return 'bg-rose-100 text-rose-700';
      case 'analytics':
        return 'bg-cyan-100 text-cyan-700';
      default:
        return 'bg-primary/10 text-primary/90';
    }
  };

  return (
    <div id={course.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className={`h-48 ${course.backgroundColor} relative`}>
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-30">
          <h3 className="font-sans font-bold text-white text-xl px-4 text-center">
            {t(`courses.${course.id}.title`) || course.title}
          </h3>
        </div>
        <img 
          src={course.imageUrl} 
          alt={`${t(`courses.${course.id}.title`) || course.title} course`} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-3">
          <span className={`px-3 py-1 ${getCategoryColorClass(course.categoryColor)} rounded-full text-xs font-semibold`}>
            {t(`courses.categories.${course.category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`) || course.category}
          </span>
        </div>
        <p className="text-gray-600 mb-4">{t(`courses.${course.id}.description`) || course.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">
            <span className="font-medium">{t('course.duration')}:</span> {t(`courses.${course.id}.duration`) || course.duration}
          </span>
          <a href="#" className="text-primary font-medium text-sm hover:text-primary/80">
            {t('course.details')} →
          </a>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
