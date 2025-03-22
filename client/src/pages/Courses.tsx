import { useState, useEffect } from 'react';
import CourseCard from '@/components/courses/CourseCard';
import { COURSES } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

// Group courses by category
const groupCoursesByCategory = () => {
  const grouped: Record<string, typeof COURSES> = {};
  
  COURSES.forEach((course) => {
    if (!grouped[course.category]) {
      grouped[course.category] = [];
    }
    grouped[course.category].push(course);
  });
  
  return grouped;
};

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCourses, setFilteredCourses] = useState(COURSES);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Group courses by category
  const groupedCourses = groupCoursesByCategory();
  const categories = Object.keys(groupedCourses);

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    // Update document title
    document.title = 'Courses | Saclai';
  }, []);

  useEffect(() => {
    // Filter courses based on search term and active category
    let result = COURSES;
    
    if (searchTerm) {
      result = result.filter(course => 
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        course.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (activeCategory) {
      result = result.filter(course => course.category === activeCategory);
    }
    
    setFilteredCourses(result);
  }, [searchTerm, activeCategory]);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(activeCategory === category ? null : category);
  };

  return (
    <main>
      {/* Courses Hero Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-sans font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-6">Our Courses</h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Discover our innovative curriculum designed to prepare business students for tomorrow's challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Course Filtering Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              <Button 
                variant={activeCategory === null ? "default" : "outline"} 
                onClick={() => setActiveCategory(null)}
                className={activeCategory === null ? "bg-primary text-white" : ""}
              >
                All Courses
              </Button>
              
              {categories.map((category) => (
                <Button 
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  onClick={() => handleCategoryChange(category)}
                  className={activeCategory === category ? "bg-primary text-white" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
            
            <div className="relative w-full md:w-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-full md:w-60"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Course Listings */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="font-sans font-semibold text-xl text-gray-700 mb-2">No courses found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Custom Courses Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-sans font-bold text-3xl text-gray-900 mb-6">Need a Custom Course for Your Institution?</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  We understand that every educational institution has unique needs and goals. Our team can work with you to develop custom courses that align with your curriculum and student requirements.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Whether you need to adapt one of our existing courses or create something entirely new, we're here to help your students succeed in the rapidly evolving business landscape.
                </p>
                <Button className="bg-primary hover:bg-primary/90 text-white">
                  Contact Us for Custom Solutions
                </Button>
              </div>
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary opacity-10 rounded-full"></div>
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Students collaborating" 
                  className="rounded-lg shadow-lg relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Courses;
