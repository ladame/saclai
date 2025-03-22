import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import CourseCard from '@/components/courses/CourseCard';
import { COURSES } from '@/lib/constants';

const FeaturedCoursesSection = () => {
  // Display only the first 3 courses
  const featuredCourses = COURSES.slice(0, 3);

  return (
    <section id="courses" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-sans font-bold text-3xl text-gray-900 mb-4">Featured Courses</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Innovative curriculum designed to prepare business students for the future of work.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link href="/courses">
            <Button 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary/10 inline-flex items-center font-semibold"
            >
              View All Courses
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCoursesSection;
