```javascript
interface Service {
  id: number;
  name: string;
  duration: string;
  price: string;
  description: string;
}

interface Dentist {
  id: number;
  name: string;
  specialty: string;
}
const services = [
  { id: 1, name: 'Regular Checkup', duration: '30 min', price: '$50', description: 'Comprehensive oral examination and consultation' },
  { id: 2, name: 'Teeth Cleaning', duration: '45 min', price: '$80', description: 'Professional cleaning and polishing' },
  { id: 3, name: 'Root Canal', duration: '90 min', price: '$300', description: 'Complete root canal treatment with modern techniques' },
] as const;

const dentists = [
  { id: 1, name: 'Dr. Sarah Johnson', specialty: 'General Dentistry' },
  { id: 2, name: 'Dr. Michael Chen', specialty: 'Orthodontics' },
];

const referralSources = [
  { value: "google", label: "Google Search" },
  { value: "friend", label: "Friend or Family" },
  { value: "social", label: "Social Media" },
  { value: "insurance", label: "Insurance Provider" },
  { value: "other", label: "Other" },
] as const;


{step === 1 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold mb-4 text-indigo-900">Select Service</h2>
              {services.map((service) => (
                <motion.div
                  key={service.id}
                  className={`p-4 border rounded-lg cursor-pointer transition-all duration-200
                    ${selectedService?.id === service.id 
                      ? 'border-indigo-600 bg-indigo-50' 
                      : 'hover:border-indigo-300'}`}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setSelectedService(service)}
                >
                  <h3 className="font-semibold text-indigo-900">{service.name}</h3>
                  <p className="text-indigo-600">{service.duration} • {service.price}</p>
                  <p className="text-gray-600 text-sm mt-1">{service.description}</p>
                </motion.div>
              ))}
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold mb-4">Choose Date & Time</h2>
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                className="rounded-lg border"
              />
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold mb-4">Select Dentist</h2>
              {dentists.map((dentist) => (
                <motion.div
                  key={dentist.id}
                  className="p-4 border rounded-lg cursor-pointer hover:border-indigo-300"
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setSelectedDentist(dentist)}
                >
                  <h3 className="font-semibold">{dentist.name}</h3>
                  <p className="text-indigo-600">{dentist.specialty}</p>
                </motion.div>
              ))}
            </div>
          )}



```